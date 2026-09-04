import {
  buildLeadFromPayload,
  checkRateLimit,
  getCrmAdapter,
  triggerVacationOfferCommunication,
} from "@/lib/crm";
import { validateQuotePayload } from "@/lib/validation";

export const runtime = "nodejs";

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") || "unknown";
}

export async function POST(request: Request) {
  try {
    if (!checkRateLimit(`rfq:${clientKey(request)}`)) {
      return Response.json(
        { ok: false, message: "Too many requests. Please wait a moment and try again." },
        { status: 429 },
      );
    }

    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return Response.json({ ok: false, message: "Invalid JSON body." }, { status: 400 });
    }

    const result = validateQuotePayload(body);
    if (!result.ok || !result.data) {
      return Response.json(
        { ok: false, errors: result.errors, message: "Please correct the highlighted fields." },
        { status: 400 },
      );
    }

    const lead = buildLeadFromPayload(result.data);
    const crm = getCrmAdapter();
    const saved = await crm.createLead(lead);
    const vacation = await triggerVacationOfferCommunication(saved);

    return Response.json(
      {
        ok: true,
        leadId: saved.id,
        serviceType: saved.serviceType,
        specificServiceRequested: saved.specificServiceRequested,
        vacationOfferQueued: vacation.queued,
        message: "Quote request received.",
        next: {
          confirmation: true,
          vacationOfferCommunication: vacation.queued ? "queued_separately" : "skipped",
          appointmentWorkflow: "ready_for_integration",
        },
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("[api/rfq]", error);
    return Response.json(
      { ok: false, message: "Something went wrong while saving your request." },
      { status: 500 },
    );
  }
}
