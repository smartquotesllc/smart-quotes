"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  QuoteField,
  quoteControlClass,
  quoteSelectClass,
  selectChevronStyle,
} from "@/components/quote/QuoteField";
import {
  HEAR_ABOUT_OPTIONS,
  MONTHLY_CARD_VOLUMES,
} from "@/lib/quote-options";
import { cn } from "@/lib/utils";

const INTEREST_OPTIONS = [
  "Full POS System (Register, Drawer, Printer)",
  "Tablet POS",
  "Smart Terminal (Wireless)",
  "Countertop Terminal",
  "Mobile Card Reader",
  "Self-Service Kiosk",
  "Receipt Printer",
  "Cash Drawer",
  "Other",
] as const;

export function MerchantLandingForm() {
  const router = useRouter();
  const [values, setValues] = useState<Record<string, string>>({});
  const [interested, setInterested] = useState<string[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  function set(key: string, value: string) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  function get(key: string) {
    return values[key] ?? "";
  }

  function toggleInterest(option: string) {
    setInterested((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option],
    );
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    setErrors({});

    const payload: Record<string, unknown> = {
      serviceSlug: "merchant-services",
      fullName: get("fullName"),
      phone: get("phone"),
      email: get("email"),
      businessName: get("businessName") || undefined,
      monthlyCardVolume: get("monthlyCardVolume") || undefined,
      hearAboutUs: get("hearAboutUs") || undefined,
      message: get("message") || undefined,
      serviceInterestedIn: interested.length
        ? interested.join(", ")
        : undefined,
      consent: true,
      leadSource: "website",
      landingPage:
        typeof window !== "undefined"
          ? window.location.pathname
          : "/services/merchant-services",
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
        service: "Merchant Services",
        type: data.serviceType ?? "MERCHANT",
      });
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setFormError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)_minmax(240px,0.75fr)]"
    >
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-x-5">
        <QuoteField id="fullName" label="Full Name" required error={errors.fullName || errors.firstName}>
          <input
            id="fullName"
            name="fullName"
            autoComplete="name"
            placeholder="John Smith"
            className={quoteControlClass}
            value={get("fullName")}
            onChange={(e) => set("fullName", e.target.value)}
            required
          />
        </QuoteField>
        <QuoteField id="businessName" label="Business Name" required error={errors.businessName}>
          <input
            id="businessName"
            name="businessName"
            autoComplete="organization"
            placeholder="Business Name"
            className={quoteControlClass}
            value={get("businessName")}
            onChange={(e) => set("businessName", e.target.value)}
            required
          />
        </QuoteField>
        <QuoteField id="email" label="Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            className={quoteControlClass}
            value={get("email")}
            onChange={(e) => set("email", e.target.value)}
            required
          />
        </QuoteField>
        <QuoteField id="phone" label="Phone Number" required error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 123-4567"
            className={quoteControlClass}
            value={get("phone")}
            onChange={(e) => set("phone", e.target.value)}
            required
          />
        </QuoteField>
        <QuoteField id="monthlyCardVolume" label="Monthly Card Volume" required error={errors.monthlyCardVolume}>
          <select
            id="monthlyCardVolume"
            name="monthlyCardVolume"
            className={quoteSelectClass}
            style={selectChevronStyle}
            value={get("monthlyCardVolume")}
            onChange={(e) => set("monthlyCardVolume", e.target.value)}
            required
          >
            <option value="">Select One</option>
            {MONTHLY_CARD_VOLUMES.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </QuoteField>
        <QuoteField id="hearAboutUs" label="How did you hear about us?" required>
          <select
            id="hearAboutUs"
            name="hearAboutUs"
            className={quoteSelectClass}
            style={selectChevronStyle}
            value={get("hearAboutUs")}
            onChange={(e) => set("hearAboutUs", e.target.value)}
            required
          >
            <option value="">Select One</option>
            {HEAR_ABOUT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </QuoteField>
        <div className="sm:col-span-2">
          <QuoteField id="message" label="Message" optional>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us more about your business..."
              className={cn(quoteControlClass, "resize-y")}
              value={get("message")}
              onChange={(e) => set("message", e.target.value)}
            />
          </QuoteField>
        </div>
      </div>

      <fieldset>
        <legend className="mb-4 font-heading text-sm font-bold text-[#000033]">
          Interested In{" "}
          <span className="font-medium text-sq-gray">(Select all that apply)</span>
        </legend>
        <ul className="space-y-3">
          {INTEREST_OPTIONS.map((option) => {
            const checked = interested.includes(option);
            return (
              <li key={option}>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-sq-ink">
                  <input
                    type="checkbox"
                    className="mt-0.5 h-4 w-4 rounded border-sq-border text-[#2563eb] focus:ring-[#2563eb]/30"
                    checked={checked}
                    onChange={() => toggleInterest(option)}
                  />
                  <span>{option}</span>
                </label>
              </li>
            );
          })}
        </ul>
      </fieldset>

      <aside className="flex flex-col gap-4">
        <div className="rounded-xl bg-[#2563eb] px-5 py-5 text-white shadow-[0_16px_32px_-18px_rgba(37,99,235,0.55)]">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
              <path
                d="M12 7v13M8 10h8M7 7h10l1 3H6l1-3ZM9 7c0-1.5.8-3 3-3s3 1.5 3 3"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className="text-sm leading-relaxed">
            Receive a complimentary vacation-stay incentive with a qualifying
            quote.{" "}
            <Link
              href="/vacation-terms"
              className="font-semibold underline underline-offset-2 hover:text-white"
            >
              Vacation Redemption Terms
            </Link>
          </p>
        </div>

        {formError ? (
          <p
            className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
            role="alert"
          >
            {formError}
          </p>
        ) : null}

        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-14 w-full items-center justify-center rounded-md bg-[#0055FF] px-6 font-heading text-sm font-extrabold uppercase tracking-[0.1em] text-white transition hover:brightness-110 disabled:opacity-60"
          style={{
            boxShadow: "0 14px 28px -14px rgba(0,85,255,0.65)",
          }}
        >
          {submitting ? "Submitting…" : "Get My Smart Quote →"}
        </button>

        <p className="flex items-center justify-center gap-2 text-center text-xs text-sq-gray">
          <svg viewBox="0 0 24 24" className="h-4 w-4 text-[#2563eb]" fill="none" aria-hidden="true">
            <path
              d="M12 3 5 6.5V11c0 4.5 2.9 7.8 7 9 4.1-1.2 7-4.5 7-9V6.5L12 3Z"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 11.5 11 13l3.5-3.5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Your information is secure and never shared.
        </p>
      </aside>
    </form>
  );
}
