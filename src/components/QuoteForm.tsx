"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { Button } from "@/components/Button";
import { FormField, inputClassName } from "@/components/FormField";
import { SERVICES } from "@/lib/services";
import type { ServiceSlug } from "@/lib/types";
import { cn } from "@/lib/utils";

interface QuoteFormProps {
  defaultService?: ServiceSlug;
  className?: string;
}

export function QuoteForm({
  defaultService = "merchant-services",
  className,
}: QuoteFormProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [serviceSlug, setServiceSlug] = useState<ServiceSlug>(defaultService);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState<string | null>(null);

  const selected = SERVICES.find((s) => s.slug === serviceSlug);
  const showBusinessName =
    serviceSlug === "merchant-services" || serviceSlug === "comcast-business";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError(null);
    setErrors({});
    const fd = new FormData(e.currentTarget);
    const payload = {
      serviceSlug,
      firstName: String(fd.get("firstName") ?? ""),
      lastName: String(fd.get("lastName") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      additionalInformation: String(fd.get("additionalInformation") ?? ""),
      address: String(fd.get("address") ?? ""),
      businessName: String(fd.get("businessName") ?? ""),
      consent: fd.get("consent") === "on",
      leadSource: "website",
      landingPage: typeof window !== "undefined" ? window.location.pathname : "/",
    };

    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        errors?: Record<string, string>;
        message?: string;
        leadId?: string;
        vacationOfferQueued?: boolean;
        next?: { vacationOfferCommunication?: string };
      };
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setFormError(data.message ?? "Unable to submit. Please try again.");
        return;
      }
      const params = new URLSearchParams();
      if (data.leadId) params.set("ref", data.leadId.slice(0, 8));
      if (selected) params.set("service", selected.label);
      const offerQueued =
        data.vacationOfferQueued === true ||
        data.next?.vacationOfferCommunication === "queued_separately";
      if (offerQueued) params.set("offer", "1");
      startTransition(() => {
        router.push(`/confirmation?${params.toString()}`);
      });
    } catch {
      setFormError("Network error. Please check your connection and try again.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn(
        "rounded-[1.75rem] border border-ink/8 bg-white p-6 shadow-[0_24px_60px_-36px_rgba(23,19,34,0.45)] sm:p-8",
        className,
      )}
      noValidate
    >
      <div className="mb-6">
        <h3 className="text-xl font-semibold tracking-tight text-ink">Request a quote</h3>
        <p className="mt-1.5 text-sm text-muted">
          Share a few details and we&apos;ll follow up about next steps toward an appointment.
        </p>
      </div>
      <fieldset className="mb-6">
        <legend className="mb-2.5 text-sm font-medium text-ink">Service interest</legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {SERVICES.map((service) => {
            const active = service.slug === serviceSlug;
            return (
              <button
                key={service.slug}
                type="button"
                onClick={() => setServiceSlug(service.slug)}
                className={cn(
                  "rounded-xl border px-3 py-3 text-left text-sm transition-colors",
                  active
                    ? "border-purple/30 bg-lavender text-purple-deep"
                    : "border-ink/10 bg-white text-ink hover:bg-mist",
                )}
                aria-pressed={active}
              >
                <span className="block font-medium">{service.label}</span>
              </button>
            );
          })}
        </div>
        {errors.serviceSlug ? (
          <p className="mt-1.5 text-sm text-red-600" role="alert">{errors.serviceSlug}</p>
        ) : null}
      </fieldset>
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField label="First name" htmlFor="firstName" error={errors.firstName}>
          <input id="firstName" name="firstName" autoComplete="given-name" required className={inputClassName} />
        </FormField>
        <FormField label="Last name" htmlFor="lastName" error={errors.lastName}>
          <input id="lastName" name="lastName" autoComplete="family-name" required className={inputClassName} />
        </FormField>
        <FormField label="Phone" htmlFor="phone" error={errors.phone}>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required className={inputClassName} />
        </FormField>
        <FormField label="Email" htmlFor="email" error={errors.email}>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClassName} />
        </FormField>
        <FormField label="Address" htmlFor="address" optional error={errors.address} className="sm:col-span-2">
          <input id="address" name="address" autoComplete="street-address" className={inputClassName} />
        </FormField>
        {showBusinessName ? (
          <FormField label="Business name" htmlFor="businessName" optional error={errors.businessName} className="sm:col-span-2">
            <input id="businessName" name="businessName" autoComplete="organization" className={inputClassName} />
          </FormField>
        ) : null}
        <FormField label="Additional information" htmlFor="additionalInformation" optional error={errors.additionalInformation} className="sm:col-span-2">
          <textarea id="additionalInformation" name="additionalInformation" rows={3} className={cn(inputClassName, "resize-y")} />
        </FormField>
      </div>
      <div className="mt-5 space-y-3">
        <label className="flex items-start gap-3 text-sm text-muted">
          <input type="checkbox" name="consent" className="mt-1 h-4 w-4 rounded border-ink/20 text-purple-deep focus:ring-purple/30" required />
          <span>
            I agree to be contacted by Smart Quotes LLC about my quote request and related appointment follow-up. See our{" "}
            <a href="/privacy" className="font-medium text-purple-deep underline-offset-2 hover:underline">Privacy Policy</a>.
          </span>
        </label>
        {errors.consent ? <p className="text-sm text-red-600" role="alert">{errors.consent}</p> : null}
      </div>
      {formError ? (
        <p className="mt-4 rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{formError}</p>
      ) : null}
      <div className="mt-6">
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={pending}>
          {pending ? "Submitting…" : "Submit quote request"}
        </Button>
      </div>
    </form>
  );
}
