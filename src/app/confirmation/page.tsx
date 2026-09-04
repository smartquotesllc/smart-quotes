import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Quote request received",
  description: "Your Smart Quotes LLC quote request was submitted successfully.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{
    lead?: string;
    ref?: string;
    service?: string;
    type?: string;
    offer?: string;
  }>;
};

export default async function ConfirmationPage({ searchParams }: Props) {
  const params = await searchParams;
  const service = params.service;
  const type = params.type;
  const ref = params.ref ?? params.lead?.slice(0, 8);

  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-xl px-4 text-center sm:px-6">
        <div
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-sq-purple text-white"
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h1 className="text-4xl font-bold uppercase tracking-tight text-sq-ink sm:text-5xl">
          Request received!
        </h1>
        <p className="mt-4 text-lg text-sq-gray">
          Thank you for requesting a quote from Smart Quotes LLC.
        </p>
        <p className="mt-3 text-base text-sq-gray">
          A specialist will follow up about next steps toward an appointment.
        </p>
        {(service || type || ref) && (
          <p className="mt-6 rounded-lg bg-sq-purple-soft px-4 py-3 text-sm text-sq-purple">
            {ref ? <span>Reference: <strong className="font-mono">{ref}</strong></span> : null}
            {ref && (service || type) ? " · " : null}
            {service ? <span>Service: <strong>{service}</strong></span> : null}
            {service && type ? " · " : null}
            {type ? <span>Classification: <strong>{type}</strong></span> : null}
          </p>
        )}
        <p className="mt-6 text-sm leading-relaxed text-sq-gray">
          If applicable, a separate vacation-stay offer communication may be sent
          — it does not replace this confirmation. See{" "}
          <Link href="/vacation-terms" className="text-sq-purple underline underline-offset-2">
            Vacation Terms
          </Link>
          .
        </p>
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button href="/" size="lg">
            Return to Home Page
          </Button>
          <Button href="/#services" variant="outline" size="lg">
            Browse Services
          </Button>
        </div>
      </div>
    </section>
  );
}
