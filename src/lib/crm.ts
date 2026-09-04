import { randomUUID } from "crypto";
import { getServiceBySlug } from "./services";
import type { LeadRecord, QuoteFormPayload } from "./types";

/**
 * Pluggable CRM adapter interface.
 * Connect a real CRM later by implementing CrmAdapter and
 * setting CRM_ADAPTER / credentials via environment variables.
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

let adapter: CrmAdapter | null = null;

export function getCrmAdapter(): CrmAdapter {
  if (!adapter) {
    // Future: switch on process.env.CRM_PROVIDER (HubSpot, Salesforce, etc.)
    adapter = new MemoryCrmAdapter();
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

  return {
    id: randomUUID(),
    firstName: payload.firstName,
    lastName: payload.lastName,
    phone: payload.phone,
    email: payload.email,
    address: payload.address,
    businessName: payload.businessName,
    serviceType: service.serviceType,
    specificServiceRequested: service.label,
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
