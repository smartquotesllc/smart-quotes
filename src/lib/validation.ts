import { SERVICES } from "./services";
import type { QuoteFormExtras, QuoteFormPayload, ServiceSlug } from "./types";

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

function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return { firstName: "", lastName: "" };
  if (parts.length === 1) return { firstName: parts[0], lastName: parts[0] };
  return { firstName: parts[0], lastName: parts.slice(1).join(" ") };
}

function buildExtras(raw: Record<string, unknown>): QuoteFormExtras {
  const pick = (key: string, max = 200) => {
    const v = sanitizeText(clean(raw[key]), max);
    return v || undefined;
  };
  return {
    fullName: pick("fullName", 120),
    businessType: pick("businessType", 80),
    monthlyCardVolume: pick("monthlyCardVolume", 80),
    hearAboutUs: pick("hearAboutUs", 80),
    serviceInterestedIn: pick("serviceInterestedIn", 120),
    bestTimeToContact: pick("bestTimeToContact", 80),
    numberOfEmployees: pick("numberOfEmployees", 40),
    streetAddress: pick("streetAddress", 200),
    aptSuite: pick("aptSuite", 40),
    city: pick("city", 80),
    state: pick("state", 40),
    zipCode: pick("zipCode", 20),
    message: pick("message", 2000),
  };
}

function composeAdditionalInformation(
  message: string | undefined,
  extras: QuoteFormExtras,
  explicit?: string,
): string | undefined {
  const lines: string[] = [];
  if (explicit) lines.push(explicit);
  if (message && message !== explicit) lines.push(message);

  const meta: Array<[string, string | undefined]> = [
    ["Business Type", extras.businessType],
    ["Monthly Card Volume", extras.monthlyCardVolume],
    ["How did you hear about us", extras.hearAboutUs],
    ["Service Interested In", extras.serviceInterestedIn],
    ["Best Time to Contact", extras.bestTimeToContact],
    ["Number of Employees", extras.numberOfEmployees],
    ["Apt / Suite", extras.aptSuite],
    ["City", extras.city],
    ["State", extras.state],
    ["Zip Code", extras.zipCode],
  ];
  for (const [label, value] of meta) {
    if (value) lines.push(`${label}: ${value}`);
  }

  const joined = lines.filter(Boolean).join("\n");
  return joined || undefined;
}

export function validateQuotePayload(body: unknown): ValidationResult {
  const errors: Record<string, string> = {};
  const raw = (body ?? {}) as Record<string, unknown>;

  const serviceSlug = clean(raw.serviceSlug) as ServiceSlug;
  const extras = buildExtras(raw);

  let firstName = sanitizeText(clean(raw.firstName), 80);
  let lastName = sanitizeText(clean(raw.lastName), 80);
  const fullName = extras.fullName ?? sanitizeText(clean(raw.fullName), 120);

  if ((!firstName || !lastName) && fullName) {
    const split = splitFullName(fullName);
    if (!firstName) firstName = split.firstName;
    if (!lastName) lastName = split.lastName;
  }

  const phone = sanitizeText(clean(raw.phone), 30);
  const email = sanitizeText(clean(raw.email), 120).toLowerCase();
  const message = extras.message ?? sanitizeText(clean(raw.message), 2000);
  const additionalInformation = sanitizeText(
    clean(raw.additionalInformation),
    2000,
  );
  const streetAddress =
    extras.streetAddress ?? sanitizeText(clean(raw.streetAddress), 200);
  const address =
    streetAddress ||
    sanitizeText(clean(raw.address), 200) ||
    undefined;
  const businessName = sanitizeText(clean(raw.businessName), 120);
  const consent = Boolean(raw.consent);

  if (!VALID_SLUGS.has(serviceSlug)) {
    errors.serviceSlug = "Please select a service.";
  }
  if (!firstName) {
    errors.fullName = "Full name is required.";
    errors.firstName = "First name is required.";
  }
  if (!lastName) {
    errors.fullName = errors.fullName || "Full name is required.";
    errors.lastName = "Last name is required.";
  }
  if (!phone || !PHONE_RE.test(phone)) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!email || !EMAIL_RE.test(email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!consent) {
    errors.consent = "Consent is required to submit your request.";
  }

  // Service-specific required fields (soft — UI enforces; API keeps CRM flexible)
  if (serviceSlug === "merchant-services") {
    if (!businessName) errors.businessName = "Business name is required.";
    if (!extras.businessType) errors.businessType = "Please select a business type.";
    if (!extras.monthlyCardVolume) {
      errors.monthlyCardVolume = "Please select monthly card volume.";
    }
  }
  if (serviceSlug === "xfinity-residential") {
    if (!address) errors.streetAddress = "Street address is required.";
    if (!extras.city) errors.city = "City is required.";
    if (!extras.state) errors.state = "State is required.";
    if (!extras.zipCode) errors.zipCode = "Zip code is required.";
    if (!extras.serviceInterestedIn) {
      errors.serviceInterestedIn = "Please select a service.";
    }
    if (!extras.bestTimeToContact) {
      errors.bestTimeToContact = "Please select a best time to contact.";
    }
  }
  if (serviceSlug === "comcast-business") {
    if (!businessName) errors.businessName = "Business name is required.";
    if (!extras.serviceInterestedIn) {
      errors.serviceInterestedIn = "Please select a service.";
    }
    if (!extras.bestTimeToContact) {
      errors.bestTimeToContact = "Please select a best time to contact.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  const composed = composeAdditionalInformation(
    message,
    { ...extras, streetAddress: address },
    additionalInformation || undefined,
  );

  return {
    ok: true,
    errors: {},
    data: {
      serviceSlug,
      firstName,
      lastName,
      phone,
      email,
      additionalInformation: composed,
      consent,
      address: address || undefined,
      businessName: businessName || undefined,
      leadSource: sanitizeText(clean(raw.leadSource) || "website", 80),
      campaign: sanitizeText(clean(raw.campaign), 120) || undefined,
      landingPage: sanitizeText(clean(raw.landingPage) || "/", 200),
      extras: {
        ...extras,
        fullName: fullName || `${firstName} ${lastName}`.trim(),
        message: message || undefined,
        streetAddress: address,
      },
    },
  };
}
