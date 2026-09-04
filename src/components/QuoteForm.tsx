"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/Button";
import { FormField, fieldControlClass } from "@/components/FormField";
import { SERVICES } from "@/lib/services";
import type { ServiceSlug } from "@/lib/types";
import { cn } from "@/lib/utils";

type QuoteFormProps = { defaultService?: ServiceSlug; className?: string };

export function QuoteForm({ defaultService, className }: QuoteFormProps) {
  const router = useRouter();
  const [serviceSlug, setServiceSlug] = useState<ServiceSlug | "">(defaultService ?? "");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [additionalInformation, setAdditionalInformation] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const selected = useMemo(() => SERVICES.find((s) => s.slug === serviceSlug), [serviceSlug]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    setErrors({});
    try {
      const res = await fetch("/api/rfq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          serviceSlug, firstName, lastName, phone, email,
          businessName: businessName || undefined,
          additionalInformation: additionalInformation || undefined,
          consent, leadSource: "website",
          landingPage: typeof window !== "undefined" ? window.location.pathname : "/quote",
        }),
      });
      const data = (await res.json()) as { ok?: boolean; errors?: Record<string, string>; message?: string; leadId?: string; serviceType?: string };
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setFormError(data.message ?? "Unable to submit your request.");
        setSubmitting(false);
        return;
      }
      const params = new URLSearchParams({ lead: data.leadId ?? "", service: selected?.label ?? "", type: data.serviceType ?? "" });
      router.push(`/confirmation?${params.toString()}`);
    } catch {
      setFormError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className={cn("rounded-2xl border border-sq-border bg-white p-6 shadow-[0_30px_60px_-40px_rgba(13,9,13,0.35)] sm:p-8", className)} noValidate>
      <div className="mb-6 space-y-2">
        <h2 className="text-2xl font-bold text-sq-ink sm:text-3xl">What are you looking for?</h2>
        <p className="text-sm text-sq-gray sm:text-base">Choose a service and we&apos;ll route your request to the right Smart Quotes process.</p>
      </div>
      <div className="grid gap-5">
        <FormField id="service" label="Service" error={errors.serviceSlug}>
          <select id="service" name="serviceSlug" className={fieldControlClass} value={serviceSlug} onChange={(e) => setServiceSlug(e.target.value as ServiceSlug | "")} required>
            <option value="">Select a service</option>
            {SERVICES.map((s) => <option key={s.slug} value={s.slug}>{s.label}</option>)}
          </select>
        </FormField>
        {selected ? (
          <p className="rounded-md bg-sq-purple-soft px-3 py-2 text-xs text-sq-purple">
            Routing classification: <strong>SERVICE TYPE = {selected.serviceType}</strong> · Specific service: {selected.label}
          </p>
        ) : null}
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="firstName" label="First Name" error={errors.firstName}>
            <input id="firstName" name="firstName" autoComplete="given-name" className={fieldControlClass} value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </FormField>
          <FormField id="lastName" label="Last Name" error={errors.lastName}>
            <input id="lastName" name="lastName" autoComplete="family-name" className={fieldControlClass} value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </FormField>
        </div>
        {(serviceSlug === "merchant-services" || serviceSlug === "comcast-business") && (
          <FormField id="businessName" label="Business Name" hint="Optional — helps route business consultations.">
            <input id="businessName" name="businessName" className={fieldControlClass} value={businessName} onChange={(e) => setBusinessName(e.target.value)} />
          </FormField>
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          <FormField id="phone" label="Phone" error={errors.phone}>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={fieldControlClass} value={phone} onChange={(e) => setPhone(e.target.value)} required />
          </FormField>
          <FormField id="email" label="Email" error={errors.email}>
            <input id="email" name="email" type="email" autoComplete="email" className={fieldControlClass} value={email} onChange={(e) => setEmail(e.target.value)} required />
          </FormField>
        </div>
        <FormField id="additionalInformation" label="Additional Information">
          <textarea id="additionalInformation" name="additionalInformation" rows={4} className={cn(fieldControlClass, "min-h-[110px] resize-y")} value={additionalInformation} onChange={(e) => setAdditionalInformation(e.target.value)} placeholder="Tell us anything that helps personalize your quote." />
        </FormField>
        <FormField id="consent" label="Consent" error={errors.consent}>
          <label htmlFor="consent" className="flex cursor-pointer items-start gap-3 text-sm text-sq-gray">
            <input id="consent" name="consent" type="checkbox" className="mt-1 h-4 w-4 rounded border-sq-border text-sq-purple focus:ring-sq-purple" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />
            <span>I agree to be contacted regarding my request.</span>
          </label>
        </FormField>
        {formError ? <p className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">{formError}</p> : null}
        <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={submitting}>
          {submitting ? "Submitting…" : "Submit Request for Quote"}
        </Button>
      </div>
    </form>
  );
}
