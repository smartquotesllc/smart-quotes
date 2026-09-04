import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore Merchant Services, Xfinity Residential, and Comcast Business with Smart Quotes LLC.",
};

const VISUALS: Record<string, { bg: string; label: string }> = {
  "merchant-services": { bg: "from-[#5A2CFF] to-[#2a1458]", label: "Payment technology" },
  "xfinity-residential": { bg: "from-[#1a161c] to-[#3b1d7a]", label: "Home connectivity" },
  "comcast-business": { bg: "from-[#0D090D] to-[#2a1458]", label: "Business connectivity" },
};

export default function ServicesPage() {
  return (
    <div>
      <section className="bg-sq-gray-light py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading label="Our Services" title="Solutions for home and business." description="Select a category to learn more, then request a personalized quote. Official plan details and pricing are provided during the quote process — not invented on this page." />
        </div>
      </section>
      <section className="py-10 sm:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 sm:px-6 lg:px-8">
          {SERVICES.map((service, index) => {
            const visual = VISUALS[service.slug];
            const reverse = index % 2 === 1;
            return (
              <article key={service.slug} className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                <div className={`relative flex min-h-[280px] items-end overflow-hidden rounded-2xl bg-gradient-to-br ${visual.bg} p-8 text-white`}>
                  <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('/brand/hero-lights.svg')", backgroundSize: "cover" }} />
                  <div className="relative">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/70">{visual.label}</p>
                    <p className="mt-2 text-2xl font-bold">{service.label}</p>
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-sq-purple">{service.kicker}</p>
                  <h2 className="text-3xl font-bold text-sq-ink">{service.label}</h2>
                  <p className="mt-4 text-sq-gray">{service.description}</p>
                  <ul className="mt-6 space-y-3 text-sm text-sq-gray">
                    <li className="flex gap-2"><span className="text-sq-purple">✓</span> Guided quote request routed to the right specialist</li>
                    <li className="flex gap-2"><span className="text-sq-purple">✓</span> Clear next steps after you submit</li>
                    <li className="flex gap-2"><span className="text-sq-purple">✓</span> No invented speeds, pricing, or partner guarantees on-site</li>
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Button href={`/quote?service=${service.slug}`}>Get a Quote</Button>
                    <Button href={`/services/${service.slug}`} variant="outline">View Details</Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
