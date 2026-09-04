import type { ServiceOption, ServiceSlug, ServiceType } from "./types";

export const SERVICES: ServiceOption[] = [
  {
    slug: "merchant-services",
    label: "Merchant Services",
    serviceType: "MERCHANT",
    kicker: "FOR BUSINESS OWNERS",
    description:
      "Explore payment-processing solutions and business technology designed around your operation.",
    appointmentWorkflow: "merchant_consultation",
  },
  {
    slug: "xfinity-residential",
    label: "Xfinity Residential",
    serviceType: "RESIDENTIAL",
    kicker: "FOR YOUR HOME",
    description:
      "Explore residential internet and connectivity options and find the service that fits your household.",
    appointmentWorkflow: "residential_appointment",
  },
  {
    slug: "comcast-business",
    label: "Comcast Business",
    serviceType: "BUSINESS",
    kicker: "FOR YOUR BUSINESS",
    description:
      "Explore business connectivity solutions designed to help your company stay connected and productive.",
    appointmentWorkflow: "business_consultation",
  },
];

export function getServiceBySlug(slug: ServiceSlug): ServiceOption | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function serviceTypeFromSlug(slug: ServiceSlug): ServiceType {
  const service = getServiceBySlug(slug);
  if (!service) {
    throw new Error(`Unknown service slug: ${slug}`);
  }
  return service.serviceType;
}
