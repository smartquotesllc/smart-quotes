/** Service classification used for CRM routing */
export type ServiceType = "MERCHANT" | "RESIDENTIAL" | "BUSINESS";

export type ServiceSlug =
  | "merchant-services"
  | "xfinity-residential"
  | "comcast-business";

export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "appointment_scheduled"
  | "closed_won"
  | "closed_lost";

export type AppointmentStatus =
  | "not_scheduled"
  | "pending"
  | "confirmed"
  | "completed"
  | "cancelled"
  | "no_show";

export type VacationOfferStatus =
  | "not_sent"
  | "sent"
  | "clicked"
  | "redeemed"
  | "expired"
  | "ineligible";

export interface ServiceOption {
  slug: ServiceSlug;
  label: string;
  serviceType: ServiceType;
  kicker: string;
  description: string;
  appointmentWorkflow:
    | "merchant_consultation"
    | "residential_appointment"
    | "business_consultation";
}

/** CRM-ready lead record shape — CRM provider is pluggable */
export interface LeadRecord {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address?: string;
  businessName?: string;
  serviceType: ServiceType;
  specificServiceRequested: string;
  serviceSlug: ServiceSlug;
  dateSubmitted: string;
  timeSubmitted: string;
  leadSource: string;
  campaign?: string;
  landingPage: string;
  appointmentDate?: string;
  appointmentStatus: AppointmentStatus;
  leadStatus: LeadStatus;
  vacationOfferSent: boolean;
  vacationLinkClicked: boolean;
  vacationRedemptionStatus: VacationOfferStatus;
  notes?: string;
  consentStatus: boolean;
  additionalInformation?: string;
}

/** Optional service-specific fields collected on quote forms */
export interface QuoteFormExtras {
  fullName?: string;
  businessType?: string;
  monthlyCardVolume?: string;
  hearAboutUs?: string;
  serviceInterestedIn?: string;
  bestTimeToContact?: string;
  numberOfEmployees?: string;
  streetAddress?: string;
  aptSuite?: string;
  city?: string;
  state?: string;
  zipCode?: string;
  message?: string;
}

export interface QuoteFormPayload {
  serviceSlug: ServiceSlug;
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  additionalInformation?: string;
  consent: boolean;
  address?: string;
  businessName?: string;
  leadSource?: string;
  campaign?: string;
  landingPage?: string;
  extras?: QuoteFormExtras;
}
