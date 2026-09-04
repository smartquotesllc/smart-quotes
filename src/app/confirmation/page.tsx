import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Quote request received",
  description: "Your Smart Quotes LLC quote request was submitted successfully.",
  robots: { index: false, follow: false },
};

interface ConfirmationPageProps {
  searchParams: Promise<{ ref?: string; service?: string; offer?: string }>;
}

export default async function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const params = await searchParams;
  const ref = params.ref;
  const service = params.service;
  const offerQueued = params.offer === "1";

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(243,239,255),transparent_55%)]" />
      <div className="relative mx-auto max-w-2xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">Confirmation</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Thanks — your quote request is in.</h1>
        <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
          Smart Quotes LLC received your request
          {service ? <> for <span className="font-medium text-ink">{service}</span></> : null}
          . A team member will follow up about next steps toward an appointment.
        </p>
        {ref ? (
          <p className="mt-4 rounded-xl border border-ink/8 bg-white px-4 py-3 text-sm text-muted">
            Reference: <span className="font-mono font-medium text-ink">{ref}</span>
          </p>
        ) : null}
        {offerQueued ? (
          <div className="mt-6 rounded-2xl border border-purple/15 bg-lavender p-5">
            <p className="text-sm font-medium text-purple-deep">Separate vacation-stay offer</p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">
              A vacation-stay offer link may be sent separately by email or text. Eligibility and redemption details are defined only in the{" "}
              <Link href="/vacation-terms" className="font-medium text-purple-deep underline-offset-2 hover:underline">
                official vacation offer terms
              </Link>.
            </p>
          </div>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/">Back to home</Button>
          <Button href="/#services" variant="outline">Browse services</Button>
        </div>
      </div>
    </section>
  );
}
