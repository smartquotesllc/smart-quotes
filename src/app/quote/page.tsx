import type { Metadata } from "next";
import Link from "next/link";
import { QuoteForm } from "@/components/QuoteForm";
import { SERVICES } from "@/lib/services";
import type { ServiceSlug } from "@/lib/types";

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Choose Merchant Services, Xfinity Residential, or Comcast Business and submit your Smart Quotes request.",
};

type QuotePageProps = { searchParams: Promise<{ service?: string }> };

export default async function QuotePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  const slug = params.service;
  const valid = SERVICES.some((s) => s.slug === slug) ? (slug as ServiceSlug) : undefined;

  return (
    <div className="bg-sq-gray-light">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-sq-purple">Request a Quote</p>
          <h1 className="text-3xl font-bold tracking-tight text-sq-ink sm:text-5xl">Get a free quote</h1>
          <p className="mt-4 text-sq-gray">
            Prefer to browse first?{" "}
            <Link href="/services" className="font-semibold text-sq-purple underline-offset-2 hover:underline">Explore services</Link>
            {" "}or call <a href="tel:+18881234567" className="font-semibold text-sq-ink">(888) 123-4567</a>.
          </p>
        </div>
        {!valid ? (
          <div className="mb-10 grid gap-5 md:grid-cols-3">
            {SERVICES.map((service) => (
              <Link key={service.slug} href={`/quote?service=${service.slug}`} className="rounded-xl border border-sq-border bg-white p-6 transition hover:-translate-y-0.5 hover:border-sq-purple/40 hover:shadow-lg">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-sq-purple">{service.kicker}</p>
                <h2 className="mt-2 text-xl font-bold text-sq-ink">{service.label}</h2>
                <p className="mt-3 text-sm text-sq-gray">{service.description}</p>
                <p className="mt-5 text-sm font-bold uppercase tracking-wide text-sq-purple">Get a Quote →</p>
              </Link>
            ))}
          </div>
        ) : null}
        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-2xl bg-sq-black p-8 text-white">
            <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(circle at 70% 30%, rgba(38,61,255,0.55), transparent 50%), url('/brand/hero-lights.svg') center/cover" }} aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">What happens next</p>
              <ul className="mt-6 space-y-4 text-sm text-white/85">
                <li>1. Your RFQ is captured and classified by service type.</li>
                <li>2. You see an on-site confirmation.</li>
                <li>3. A specialist follow-up is prepared for your category.</li>
                <li>4. A vacation-stay offer link may be sent separately when applicable (subject to official terms).</li>
              </ul>
            </div>
          </div>
          <QuoteForm defaultService={valid} />
        </div>
      </section>
    </div>
  );
}
