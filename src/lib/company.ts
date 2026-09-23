/**
 * Authoritative Smart Quotes LLC company information.
 * Import from here for all customer-facing contact details.
 */
export const COMPANY = {
  legalName: "Smart Quotes LLC",
  shortName: "Smart Quotes",
  website: "https://smartquotesllc.com",
  phoneDisplay: "(434) 226-5327",
  phoneHref: "tel:+14342265327",
  email: "info@smartquotesllc.com",
  emailHref: "mailto:info@smartquotesllc.com",
  addressLine: "8401 Mayland Dr., Richmond, VA 23298",
  cityStateZip: "Richmond, VA 23298",
  hours: "Monday–Friday, 9:00 AM–6:00 PM",
  copyright: "© 2026 Smart Quotes LLC. All rights reserved.",
  tagline: "We Connect You to Better Solutions",
} as const;

export type CompanyInfo = typeof COMPANY;
