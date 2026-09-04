import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { getServiceBySlug } from "@/lib/services";
import type { ServiceSlug } from "@/lib/types";

const SLUG: ServiceSlug = "xfinity-residential";

export const metadata: Metadata = {
  title: "Xfinity Residential",
  description: "Explore residential internet and connectivity options with Smart Quotes — Xfinity Residential.",
};

export default function XfinityResidentialPage() {
  const service = getServiceBySlug(SLUG)!;
  const plans = [
    { name: "Internet", blurb: "Explore internet options for your household." },
    { name: "Internet + TV", blurb: "Discuss bundled connectivity and entertainment options." },
    { name: "Mobile Add-On", blurb: "Ask about mobile options that may pair with your home service." },
  ];
  return (
    <div>
      <section className="relative overflow-hidden bg-sq-black text-white">
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "url('/brand/hero-lights.svg')", backgroundSize: "cover" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">{service.kicker}</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">Xfinity Residential</h1>
          <p className="mt-5 max-w-2xl text-white/80">{service.description}</p>
          <div className="mt-8"><Button href={`/quote?service=${SLUG}`} size="lg">Get a Free Quote</Button></div>
        </div>
      </section>
      <section className="bg-sq-gray-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-center text-3xl font-bold text-sq-ink">Popular plan conversations</h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-sq-gray">
            Official speeds, promotions, and monthly rates are not listed here. Request a quote for current, location-specific options.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className="flex h-full flex-col rounded-xl border border-sq-border bg-white p-7">
                <h3 className="text-xl font-bold text-sq-ink">{plan.name}</h3>
                <p className="mt-4 flex-1 text-sm text-sq-gray">{plan.blurb}</p>
                <p className="mt-6 font-heading text-2xl font-bold text-sq-purple">Custom quote</p>
                <p className="mt-1 text-xs text-sq-gray">Pricing confirmed after RFQ — no invented rates.</p>
                <Button href={`/quote?service=${SLUG}`} className="mt-6 w-full">Get a Quote</Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
