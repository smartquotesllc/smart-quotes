/**
 * Appointment scheduling architecture (provider-agnostic).
 * Wire Calendly / custom booking / partner schedulers later without redesigning UI.
 */
import type { ServiceSlug, ServiceType } from "./types";
import { getServiceBySlug } from "./services";

export type AppointmentWorkflow =
  | "merchant_consultation"
  | "residential_appointment"
  | "business_consultation";

export interface AppointmentRequest {
  leadId: string;
  serviceSlug: ServiceSlug;
  serviceType: ServiceType;
  workflow: AppointmentWorkflow;
  preferredTimes?: string[];
  notes?: string;
}

export interface AppointmentProvider {
  /** Returns a booking URL or session id for the lead */
  createBookingSession(
    request: AppointmentRequest,
  ): Promise<{ bookingUrl?: string; sessionId?: string }>;
}

/** Stub provider — replace with real scheduling integration */
export class PlaceholderAppointmentProvider implements AppointmentProvider {
  async createBookingSession(request: AppointmentRequest) {
    return {
      sessionId: `appt_placeholder_${request.leadId}`,
      bookingUrl: undefined,
    };
  }
}

export function workflowForService(slug: ServiceSlug): AppointmentWorkflow {
  return getServiceBySlug(slug)!.appointmentWorkflow;
}
