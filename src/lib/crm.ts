import { randomUUID } from "crypto";
import { getServiceBySlug } from "./services";
import type { LeadRecord, QuoteFormPayload } from "./types";

/**
 * Pluggable CRM adapter interface.
 * Production uses HttpCrmAdapter → Smart Quotes OS ingest.
 * Local/dev falls back to MemoryCrmAdapter when CRM env is unset.
 */
export interface CrmAdapter {
  createLead(lead: LeadRecord): Promise<LeadRecord>;
  updateLead(
    id: string,
    patch: Partial<LeadRecord>,
  ): Promise<LeadRecord | null>;
}

/** In-memory store for local development / until CRM is connected */
const memoryStore = new Map<string, LeadRecord>();

export class MemoryCrmAdapter implements CrmAdapter {
  async createLead(lead: LeadRecord): Promise<LeadRecord> {
    memoryStore.set(lead.id, lead);
    return lead;
  }

  async updateLead(
    id: string,
    patch: Partial<LeadRecord>,
  ): Promise<LeadRecord | null> {
    const existing = memoryStore.get(id);
    if (!existing) return null;
    const updated = { ...existing, ...patch };
    memoryStore.set(id, updated);
    return updated;
  }
}

/**
 * Server-side HTTP adapter for Smart Quotes OS.
 * Browser → /api/rfq → CRM_INGEST_URL (app.smartquotesllc.com/api/ingest/lead)
 *
 * Auth: x-sq-ingest-key (CRM_INGEST_API_KEY). Never expose via NEXT_PUBLIC_*.
 */
export class HttpCrmAdapter implements CrmAdapter {
  constructor(
    private readonly ingestUrl: string,
    private readonly apiKey: string,
    private readonly fetchImpl: typeof fetch = fetch,
  ) {}

  async createLead(lead: LeadRecord): Promise<LeadRecord> {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);

    try {
      const res = await this.fetchImpl(this.ingestUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-sq-ingest-key": this.apiKey,
        },
        body: JSON.stringify(lead),
        signal: controller.signal,
      });

      let body: unknown = null;
      const contentType = res.headers.get("content-type") ?? "";
      if (contentType.includes("application/json")) {
        try {
          body = await res.json();
        } catch {
          body = null;
        }
      }

      if (!res.ok) {
        const message =
          body &&
          typeof body === "object" &&
          "error" in body &&
          typeof (body as { error: unknown }).error === "string"
            ? (body as { error: string }).error
            : `CRM ingest failed (${res.status})`;
        throw new Error(message);
      }

      // Prefer OS-assigned id when returned; keep website lead fields otherwise.
      let saved = lead;
      if (body && typeof body === "object") {
        const record = body as Record<string, unknown>;
        const nested =
          record.lead && typeof record.lead === "object"
            ? (record.lead as Record<string, unknown>)
            : record;
        const remoteId =
          (typeof nested.id === "string" && nested.id) ||
          (typeof nested.leadId === "string" && nested.leadId) ||
          (typeof record.leadId === "string" && record.leadId) ||
          undefined;
        if (remoteId) {
          saved = { ...lead, id: remoteId };
        }
      }

      memoryStore.set(saved.id, saved);
      return saved;
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error("CRM ingest timed out");
      }
      throw error;
    } finally {
      clearTimeout(timeout);
    }
  }

  /**
   * OS ingest is create-only. Keep a local mirror for vacation-offer side effects
   * so RFQ success is not blocked by missing CRM update endpoints.
   */
  async updateLead(
    id: string,
    patch: Partial<LeadRecord>,
  ): Promise<LeadRecord | null> {
    const existing = memoryStore.get(id);
    if (!existing) {
      const stub = { id, ...patch } as LeadRecord;
      memoryStore.set(id, stub);
      return stub;
    }
    const updated = { ...existing, ...patch };
    memoryStore.set(id, updated);
    return updated;
  }
}

type CrmEnv = {
  CRM_INGEST_URL?: string;
  CRM_INGEST_API_KEY?: string;
  [key: string]: string | undefined;
};

export function isCrmIngestConfigured(env: CrmEnv = process.env): boolean {
  return Boolean(env.CRM_INGEST_URL?.trim() && env.CRM_INGEST_API_KEY?.trim());
}

let adapter: CrmAdapter | null = null;

/** Test helper — clears the cached adapter singleton */
export function resetCrmAdapter(): void {
  adapter = null;
}

export function getCrmAdapter(
  env: CrmEnv = process.env,
  fetchImpl: typeof fetch = fetch,
): CrmAdapter {
  if (!adapter) {
    const url = env.CRM_INGEST_URL?.trim();
    const key = env.CRM_INGEST_API_KEY?.trim();
    if (url && key) {
      adapter = new HttpCrmAdapter(url, key, fetchImpl);
    } else {
      adapter = new MemoryCrmAdapter();
    }
  }
  return adapter;
}

export function buildLeadFromPayload(payload: QuoteFormPayload): LeadRecord {
  const service = getServiceBySlug(payload.serviceSlug);
  if (!service) {
    throw new Error("Invalid service");
  }

  const now = new Date();
  const dateSubmitted = now.toISOString().slice(0, 10);
  const timeSubmitted = now.toISOString().slice(11, 19);

  const specific = payload.extras?.serviceInterestedIn
    ? `${service.label} — ${payload.extras.serviceInterestedIn}`
    : service.label;

  return {
    id: randomUUID(),
    firstName: payload.firstName,
    lastName: payload.lastName,
    phone: payload.phone,
    email: payload.email,
    address: payload.address,
    businessName: payload.businessName,
    serviceType: service.serviceType,
    specificServiceRequested: specific,
    serviceSlug: payload.serviceSlug,
    dateSubmitted,
    timeSubmitted,
    leadSource: payload.leadSource ?? "website",
    campaign: payload.campaign,
    landingPage: payload.landingPage ?? "/",
    appointmentStatus: "not_scheduled",
    leadStatus: "new",
    vacationOfferSent: false,
    vacationLinkClicked: false,
    vacationRedemptionStatus: "not_sent",
    notes: payload.additionalInformation,
    consentStatus: payload.consent,
    additionalInformation: payload.additionalInformation,
  };
}

/**
 * After RFQ success, queue a separate vacation-stay offer communication.
 * Does NOT replace the confirmation screen — fires as a side channel.
 * Official eligibility / destinations / values are placeholders until
 * vacation program terms are provided.
 */
export async function triggerVacationOfferCommunication(
  lead: LeadRecord,
): Promise<{ queued: boolean; reason?: string }> {
  const enabled = process.env.VACATION_OFFER_ENABLED !== "false";
  if (!enabled) {
    return { queued: false, reason: "Vacation offer channel disabled" };
  }

  // Placeholder: integrate email/SMS provider via env credentials.
  // Never invent eligibility, hotels, destinations, or dollar values.
  const crm = getCrmAdapter();
  await crm.updateLead(lead.id, {
    vacationOfferSent: true,
    vacationRedemptionStatus: "sent",
    notes: [
      lead.notes,
      "[System] Vacation-stay offer link communication queued (subject to official offer terms).",
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (process.env.NODE_ENV !== "production") {
    console.info(
      `[vacation-offer] Queued separate vacation-stay link for lead ${lead.id} (${lead.email}). Terms: see /vacation-terms`,
    );
  }

  return { queued: true };
}

/** Simple in-memory rate limiter keyed by IP */
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(
  key: string,
  limit = 8,
  windowMs = 60_000,
): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    rateBuckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}
