import assert from "node:assert/strict";
import { afterEach, describe, it, mock } from "node:test";
import {
  HttpCrmAdapter,
  MemoryCrmAdapter,
  buildLeadFromPayload,
  getCrmAdapter,
  isCrmIngestConfigured,
  resetCrmAdapter,
} from "./crm";
import type { LeadRecord } from "./types";

function sampleLead(overrides: Partial<LeadRecord> = {}): LeadRecord {
  return {
    id: "lead-local-1",
    firstName: "Ada",
    lastName: "Lovelace",
    phone: "555-0100",
    email: "ada@example.com",
    serviceType: "MERCHANT",
    specificServiceRequested: "Merchant Services",
    serviceSlug: "merchant-services",
    dateSubmitted: "2026-09-21",
    timeSubmitted: "22:00:00",
    leadSource: "website",
    landingPage: "/quote/merchant-services",
    appointmentStatus: "not_scheduled",
    leadStatus: "new",
    vacationOfferSent: false,
    vacationLinkClicked: false,
    vacationRedemptionStatus: "not_sent",
    consentStatus: true,
    businessName: "Analytical Engines",
    ...overrides,
  };
}

afterEach(() => {
  resetCrmAdapter();
  mock.restoreAll();
});

describe("isCrmIngestConfigured", () => {
  it("requires both URL and API key", () => {
    assert.equal(isCrmIngestConfigured({}), false);
    assert.equal(
      isCrmIngestConfigured({
        CRM_INGEST_URL: "https://app.smartquotesllc.com/api/ingest/lead",
      }),
      false,
    );
    assert.equal(
      isCrmIngestConfigured({
        CRM_INGEST_URL: "https://app.smartquotesllc.com/api/ingest/lead",
        CRM_INGEST_API_KEY: "secret",
      }),
      true,
    );
  });
});

describe("getCrmAdapter", () => {
  it("uses MemoryCrmAdapter when CRM env is unset", () => {
    const adapter = getCrmAdapter({});
    assert.ok(adapter instanceof MemoryCrmAdapter);
  });

  it("uses HttpCrmAdapter when CRM env is set", () => {
    const adapter = getCrmAdapter({
      CRM_INGEST_URL: "https://app.smartquotesllc.com/api/ingest/lead",
      CRM_INGEST_API_KEY: "secret",
    });
    assert.ok(adapter instanceof HttpCrmAdapter);
  });
});

describe("HttpCrmAdapter", () => {
  it("POSTs LeadRecord with x-sq-ingest-key and never NEXT_PUBLIC_ headers", async () => {
    const calls: Array<{ url: string; init: RequestInit }> = [];
    const fetchImpl: typeof fetch = async (input, init) => {
      calls.push({ url: String(input), init: init ?? {} });
      return new Response(JSON.stringify({ ok: true, leadId: "os-lead-9" }), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    };

    const adapter = new HttpCrmAdapter(
      "https://app.smartquotesllc.com/api/ingest/lead",
      "test-ingest-key",
      fetchImpl,
    );
    const lead = sampleLead();
    const saved = await adapter.createLead(lead);

    assert.equal(calls.length, 1);
    assert.equal(calls[0].url, "https://app.smartquotesllc.com/api/ingest/lead");
    assert.equal(calls[0].init.method, "POST");

    const headers = new Headers(calls[0].init.headers);
    assert.equal(headers.get("content-type"), "application/json");
    assert.equal(headers.get("x-sq-ingest-key"), "test-ingest-key");
    assert.equal(headers.get("authorization"), null);

    const body = JSON.parse(String(calls[0].init.body)) as LeadRecord;
    assert.equal(body.email, "ada@example.com");
    assert.equal(body.serviceType, "MERCHANT");
    assert.equal(body.consentStatus, true);
    assert.equal(saved.id, "os-lead-9");
  });

  it("throws a clear error when ingest returns Unauthorized", async () => {
    const fetchImpl: typeof fetch = async () =>
      new Response(JSON.stringify({ ok: false, error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });

    const adapter = new HttpCrmAdapter(
      "https://app.smartquotesllc.com/api/ingest/lead",
      "bad-key",
      fetchImpl,
    );

    await assert.rejects(() => adapter.createLead(sampleLead()), /Unauthorized/);
  });
});

describe("buildLeadFromPayload", () => {
  it("maps merchant quote payload into CRM LeadRecord", () => {
    const lead = buildLeadFromPayload({
      serviceSlug: "merchant-services",
      firstName: "Ada",
      lastName: "Lovelace",
      phone: "555-0100",
      email: "ada@example.com",
      consent: true,
      businessName: "Analytical Engines",
      leadSource: "website",
      landingPage: "/quote/merchant-services",
      additionalInformation: "Business Type: Retail",
    });

    assert.equal(lead.serviceType, "MERCHANT");
    assert.equal(lead.serviceSlug, "merchant-services");
    assert.equal(lead.consentStatus, true);
    assert.equal(lead.leadStatus, "new");
    assert.equal(lead.appointmentStatus, "not_scheduled");
    assert.match(lead.id, /^[0-9a-f-]{36}$/i);
  });
});

describe("MemoryCrmAdapter", () => {
  it("stores and updates leads locally", async () => {
    const adapter = new MemoryCrmAdapter();
    const lead = sampleLead({ id: "mem-1" });
    await adapter.createLead(lead);
    const updated = await adapter.updateLead("mem-1", {
      vacationOfferSent: true,
      vacationRedemptionStatus: "sent",
    });
    assert.equal(updated?.vacationOfferSent, true);
    assert.equal(updated?.email, "ada@example.com");
  });
});
