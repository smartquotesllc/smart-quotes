import { SERVICES } from "./services";
import type { QuoteFormPayload, ServiceSlug } from "./types";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[\d\s()+.-]{7,20}$/;
const VALID_SLUGS = new Set(SERVICES.map((s) => s.slug));

export interface ValidationResult {
  ok: boolean;
  errors: Record<string, string>;
  data?: QuoteFormPayload;
}

function clean(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/** Sanitize plain text — strip control chars and limit length */
export function sanitizeText(value: string, max = 2000): string {
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

export function validateQuotePayload(body: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const raw = (body ?? {}) as Record<string, unknown>;

  const serviceSlug = clean(raw.serviceSlug) as ServiceSlug;
  const firstName = sanitizeText(clean(raw.firstName), 80);
  const lastName = sanitizeText(clean(raw.lastName), 80);
  const phone = sanitizeText(clean(raw.phone), 30);
  const email = sanitizeText(clean(raw.email), 120).toLowerCase();
  const additionalInformation = sanitizeText(
    clean(raw.additionalInformation),
    2000,
  );
  const address = sanitizeText(clean(raw.address), 200);
  const businessName = sanitizeText(clean(raw.businessName), 120);
  const consent = Boolean(raw.consent);

  if (!VALID_SLUGS.has(serviceSlug)) {
    errors.serviceSlug = "Please select a service.";
  }
  if (!firstName) errors.firstName = "First name is required.";
  if (!lastName) errors.lastName = "Last name is required.";
  if (!phone || !PHONE_RE.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!email || !EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!consent) {
    errors.consent = "Consent is required to submit your request.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    errors: {},
    data: {
      serviceSlug,
      firstName,
      lastName,
      phone,
      email,
      additionalInformation: additionalInformation || undefined,
      consent,
      address: address || undefined,
      businessName: businessName || undefined,
      leadSource: sanitizeText(clean(raw.leadSource) || "website", 80),
      campaign: sanitizeText(clean(raw.campaign), 120) || undefined,
      landingPage: sanitizeText(clean(raw.landingPage) || "/", 200),
    },
  };
}
