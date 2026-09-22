import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${COMPANY.legalName} or request a Smart Quote.`,
};

export default function ContactPage() {
  return (
    <section className="bg-sq-gray-light py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sq-purple">
          Contact
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-sq-ink sm:text-5xl">
          Let&apos;s connect.
        </h1>
        <p className="mt-5 text-lg text-sq-gray">
          The fastest way to get started is a Smart Quote request. Prefer to talk
          first? Call or email us — we&apos;re here to help.
        </p>

        <p className="mt-6 font-heading text-lg font-bold text-sq-ink">
          {COMPANY.legalName}
        </p>

        <a
          href={COMPANY.phoneHref}
          className="mt-4 inline-block font-heading text-3xl font-bold text-sq-ink hover:text-sq-purple"
        >
          {COMPANY.phoneDisplay}
        </a>

        <div className="mx-auto mt-8 max-w-md space-y-2 text-sm text-sq-gray sm:text-base">
          <p>
            <a
              href={COMPANY.emailHref}
              className="font-semibold text-sq-ink hover:text-sq-purple"
            >
              {COMPANY.email}
            </a>
          </p>
          <p>{COMPANY.addressLine}</p>
          <p>{COMPANY.hours}</p>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Get a Smart Quote
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore Services
          </Button>
        </div>
      </div>
    </section>
  );
}
