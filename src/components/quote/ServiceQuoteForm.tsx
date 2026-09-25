"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  QuoteField,
  quoteControlClass,
  quoteSelectClass,
  selectChevronStyle,
} from "@/components/quote/QuoteField";
import {
  BEST_TIMES,
  BUSINESS_SERVICES,
  BUSINESS_TYPES,
  EMPLOYEE_COUNTS,
  HEAR_ABOUT_OPTIONS,
  MONTHLY_CARD_VOLUMES,
  RESIDENTIAL_SERVICES,
  US_STATES,
} from "@/lib/quote-options";
import { getServiceBySlug } from "@/lib/services";
import type { ServiceSlug } from "@/lib/types";
import { cn } from "@/lib/utils";

type FormState = Record<string, string>;

function initFormState(defaults?: FormState): FormState {
  if (!defaults) return {};
  return Object.fromEntries(
    Object.entries(defaults).map(([key, value]) => [key, value ?? ""]),
  );
}

type ServiceQuoteFormProps = {
  serviceSlug: ServiceSlug;
  /** Optional defaults from URL search params (e.g. BYOD → Mobile). */
  defaultValues?: FormState;
};

function SelectOne({
  id,
  name,
  value,
  onChange,
  options,
  required,
}: {
  id: string;
  name: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
  required?: boolean;
}) {
  return (
    <select
      id={id}
      name={name}
      className={quoteSelectClass}
      style={selectChevronStyle}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      required={required}
    >
      <option value="">Select One</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}

export function ServiceQuoteForm({
  serviceSlug,
  defaultValues,
}: ServiceQuoteFormProps) {
  const router = useRouter();
  const service = getServiceBySlug(serviceSlug);
  const [values, setValues] = useState<FormState>(() =>
    initFormState(defaultValues),
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function set(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function get(key: string) {
    return values[key] ?? "";
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    setErrors({});

    const payload: Record<string, unknown> = {
      serviceSlug,
      fullName: get("fullName"),
      phone: get("phone"),
      email: get("email"),
      businessName: get("businessName") || undefined,
      streetAddress: get("streetAddress") || undefined,
      aptSuite: get("aptSuite") || undefined,
      city: get("city") || undefined,
      state: get("state") || undefined,
      zipCode: get("zipCode") || undefined,
      businessType: get("businessType") || undefined,
      monthlyCardVolume: get("monthlyCardVolume") || undefined,
      hearAboutUs: get("hearAboutUs") || undefined,
      serviceInterestedIn: get("serviceInterestedIn") || undefined,
      bestTimeToContact: get("bestTimeToContact") || undefined,
      numberOfEmployees: get("numberOfEmployees") || undefined,
      message: get("message") || undefined,
      // Disclaimer + submit implies consent (matches mockup — no checkbox)
      consent: true,
      leadSource: "website",
      landingPage:
        typeof window !== "undefined" ? window.location.pathname : `/quote/${serviceSlug}`,
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
        serviceType?: string;
      };
      if (!res.ok || !data.ok) {
        if (data.errors) setErrors(data.errors);
        setFormError(data.message ?? "Unable to submit your request.");
        setSubmitting(false);
        return;
      }
      const params = new URLSearchParams({
        lead: data.leadId ?? "",
        service: service?.label ?? "",
        type: data.serviceType ?? "",
      });
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setFormError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  const submitBlock = (
    <div className="mt-6 flex flex-col items-stretch sm:items-end">
      {formError ? (
        <p className="mb-3 w-full rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
          {formError}
        </p>
      ) : null}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-md bg-sq-purple px-8 font-heading text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-sq-purple-hover disabled:opacity-60"
      >
        {submitting ? "Submitting…" : "Get My Smart Quote"}
      </button>
      <p className="mt-3 text-center text-xs text-sq-gray sm:text-right">
        By submitting, you agree to be contacted by Smart Quotes LLC.
      </p>
      {errors.consent ? (
        <p className="mt-1 text-xs text-red-600" role="alert">
          {errors.consent}
        </p>
      ) : null}
    </div>
  );

  if (serviceSlug === "merchant-services") {
    return (
      <form onSubmit={onSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-6">
          <div className="space-y-4">
            <QuoteField id="fullName" label="Full Name" required error={errors.fullName || errors.firstName}>
              <input id="fullName" name="fullName" autoComplete="name" className={quoteControlClass} value={get("fullName")} onChange={(e) => set("fullName", e.target.value)} required />
            </QuoteField>
            <QuoteField id="businessName" label="Business Name" required error={errors.businessName}>
              <input id="businessName" name="businessName" autoComplete="organization" className={quoteControlClass} value={get("businessName")} onChange={(e) => set("businessName", e.target.value)} required />
            </QuoteField>
            <QuoteField id="email" label="Email" required error={errors.email}>
              <input id="email" name="email" type="email" autoComplete="email" className={quoteControlClass} value={get("email")} onChange={(e) => set("email", e.target.value)} required />
            </QuoteField>
            <QuoteField id="phone" label="Phone Number" required error={errors.phone}>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={quoteControlClass} value={get("phone")} onChange={(e) => set("phone", e.target.value)} required />
            </QuoteField>
            <QuoteField id="businessType" label="Business Type" required error={errors.businessType}>
              <SelectOne id="businessType" name="businessType" value={get("businessType")} onChange={(v) => set("businessType", v)} options={BUSINESS_TYPES} required />
            </QuoteField>
          </div>
          <div className="space-y-4">
            <QuoteField id="monthlyCardVolume" label="Monthly Card Volume" required error={errors.monthlyCardVolume}>
              <SelectOne id="monthlyCardVolume" name="monthlyCardVolume" value={get("monthlyCardVolume")} onChange={(v) => set("monthlyCardVolume", v)} options={MONTHLY_CARD_VOLUMES} required />
            </QuoteField>
            <QuoteField id="hearAboutUs" label="How did you hear about us?">
              <SelectOne id="hearAboutUs" name="hearAboutUs" value={get("hearAboutUs")} onChange={(v) => set("hearAboutUs", v)} options={HEAR_ABOUT_OPTIONS} />
            </QuoteField>
            <QuoteField id="message" label="Message" optional className="flex h-full flex-col">
              <textarea id="message" name="message" rows={7} className={cn(quoteControlClass, "min-h-[140px] flex-1 resize-y")} value={get("message")} onChange={(e) => set("message", e.target.value)} />
            </QuoteField>
          </div>
        </div>
        {submitBlock}
      </form>
    );
  }

  if (serviceSlug === "xfinity-residential") {
    return (
      <form onSubmit={onSubmit} noValidate>
        <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
          <div className="space-y-4">
            <QuoteField id="fullName" label="Full Name" required error={errors.fullName || errors.firstName}>
              <input id="fullName" name="fullName" autoComplete="name" className={quoteControlClass} value={get("fullName")} onChange={(e) => set("fullName", e.target.value)} required />
            </QuoteField>
            <QuoteField id="streetAddress" label="Street Address" required error={errors.streetAddress}>
              <input id="streetAddress" name="streetAddress" autoComplete="street-address" className={quoteControlClass} value={get("streetAddress")} onChange={(e) => set("streetAddress", e.target.value)} required />
            </QuoteField>
            <QuoteField id="aptSuite" label="Apt / Suite">
              <input id="aptSuite" name="aptSuite" autoComplete="address-line2" className={quoteControlClass} value={get("aptSuite")} onChange={(e) => set("aptSuite", e.target.value)} />
            </QuoteField>
            <QuoteField id="city" label="City" required error={errors.city}>
              <input id="city" name="city" autoComplete="address-level2" className={quoteControlClass} value={get("city")} onChange={(e) => set("city", e.target.value)} required />
            </QuoteField>
            <QuoteField id="state" label="State" required error={errors.state}>
              <SelectOne id="state" name="state" value={get("state")} onChange={(v) => set("state", v)} options={US_STATES} required />
            </QuoteField>
            <QuoteField id="zipCode" label="Zip Code" required error={errors.zipCode}>
              <input id="zipCode" name="zipCode" autoComplete="postal-code" className={quoteControlClass} value={get("zipCode")} onChange={(e) => set("zipCode", e.target.value)} required />
            </QuoteField>
          </div>
          <div className="space-y-4">
            <QuoteField id="email" label="Email" required error={errors.email}>
              <input id="email" name="email" type="email" autoComplete="email" className={quoteControlClass} value={get("email")} onChange={(e) => set("email", e.target.value)} required />
            </QuoteField>
            <QuoteField id="phone" label="Phone Number" required error={errors.phone}>
              <input id="phone" name="phone" type="tel" autoComplete="tel" className={quoteControlClass} value={get("phone")} onChange={(e) => set("phone", e.target.value)} required />
            </QuoteField>
            <QuoteField id="serviceInterestedIn" label="Service Interested In" required error={errors.serviceInterestedIn}>
              <SelectOne id="serviceInterestedIn" name="serviceInterestedIn" value={get("serviceInterestedIn")} onChange={(v) => set("serviceInterestedIn", v)} options={RESIDENTIAL_SERVICES} required />
            </QuoteField>
            <QuoteField id="bestTimeToContact" label="Best Time to Contact" required error={errors.bestTimeToContact}>
              <SelectOne id="bestTimeToContact" name="bestTimeToContact" value={get("bestTimeToContact")} onChange={(v) => set("bestTimeToContact", v)} options={BEST_TIMES} required />
            </QuoteField>
            <QuoteField id="message" label="Message" optional className="flex h-full flex-col">
              <textarea id="message" name="message" rows={6} className={cn(quoteControlClass, "min-h-[140px] flex-1 resize-y")} value={get("message")} onChange={(e) => set("message", e.target.value)} />
            </QuoteField>
          </div>
        </div>
        <div className="mt-6 flex flex-col items-stretch sm:items-end">
          {formError ? (
            <p className="mb-3 w-full rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700" role="alert">
              {formError}
            </p>
          ) : null}
          <button
            type="submit"
            disabled={submitting}
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-md bg-sq-purple px-8 font-heading text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-sq-purple-hover disabled:opacity-60"
          >
            {submitting ? "Submitting…" : "Get My Smart Quote"}
          </button>
        </div>
        <p className="mt-4 text-center text-xs text-sq-gray">
          By submitting, you agree to be contacted by Smart Quotes LLC.
        </p>
        {errors.consent ? (
          <p className="mt-1 text-center text-xs text-red-600" role="alert">
            {errors.consent}
          </p>
        ) : null}
      </form>
    );
  }

  // comcast-business
  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="grid gap-5 sm:grid-cols-2 sm:gap-x-6">
        <div className="space-y-4">
          <QuoteField id="fullName" label="Full Name" required error={errors.fullName || errors.firstName}>
            <input id="fullName" name="fullName" autoComplete="name" className={quoteControlClass} value={get("fullName")} onChange={(e) => set("fullName", e.target.value)} required />
          </QuoteField>
          <QuoteField id="businessName" label="Business Name" required error={errors.businessName}>
            <input id="businessName" name="businessName" autoComplete="organization" className={quoteControlClass} value={get("businessName")} onChange={(e) => set("businessName", e.target.value)} required />
          </QuoteField>
          <QuoteField id="email" label="Email" required error={errors.email}>
            <input id="email" name="email" type="email" autoComplete="email" className={quoteControlClass} value={get("email")} onChange={(e) => set("email", e.target.value)} required />
          </QuoteField>
          <QuoteField id="phone" label="Phone Number" required error={errors.phone}>
            <input id="phone" name="phone" type="tel" autoComplete="tel" className={quoteControlClass} value={get("phone")} onChange={(e) => set("phone", e.target.value)} required />
          </QuoteField>
          <QuoteField id="numberOfEmployees" label="Number of Employees">
            <SelectOne id="numberOfEmployees" name="numberOfEmployees" value={get("numberOfEmployees")} onChange={(v) => set("numberOfEmployees", v)} options={EMPLOYEE_COUNTS} />
          </QuoteField>
        </div>
        <div className="space-y-4">
          <QuoteField id="serviceInterestedIn" label="Service Interested In" required error={errors.serviceInterestedIn}>
            <SelectOne id="serviceInterestedIn" name="serviceInterestedIn" value={get("serviceInterestedIn")} onChange={(v) => set("serviceInterestedIn", v)} options={BUSINESS_SERVICES} required />
          </QuoteField>
          <QuoteField id="bestTimeToContact" label="Best Time to Contact" required error={errors.bestTimeToContact}>
            <SelectOne id="bestTimeToContact" name="bestTimeToContact" value={get("bestTimeToContact")} onChange={(v) => set("bestTimeToContact", v)} options={BEST_TIMES} required />
          </QuoteField>
          <QuoteField id="message" label="Message" optional className="flex h-full flex-col">
            <textarea id="message" name="message" rows={8} className={cn(quoteControlClass, "min-h-[160px] flex-1 resize-y")} value={get("message")} onChange={(e) => set("message", e.target.value)} />
          </QuoteField>
        </div>
      </div>
      {submitBlock}
    </form>
  );
}
