import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { getServiceBySlug } from "@/lib/services";
import type { ServiceSlug } from "@/lib/types";

const SLUG: ServiceSlug = "merchant-services";

export const metadata: Metadata = {
  title: "Merchant Services",
  description: "Explore payment-processing and business technology solutions with Smart Quotes Merchant Services.",
};

export default function MerchantServicesPage() {
  const service = getServiceBySlug(SLUG)!;
  const solutions = [
    { title: "Payment Processing", copy: "Explore processing options designed around how your business accepts payments." },
    { title: "POS Systems", copy: "Discuss point-of-sale technology that can fit your workflow — details during quote." },
    { title: "E-Commerce", copy: "Connect online payment needs with the right conversation for your storefront." },
    { title: "Business Funding", copy: "Ask about funding-related conversations available through the Merchant pathway." },
  ];
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-sq-purple to-[#2a1458] text-white">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "url('/brand/hero-lights.svg')", backgroundSize: "cover" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">{service.kicker}</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Merchant Services</h1>
            <p className="mt-5 max-w-xl text-white/85">{service.description}</p>
            <div className="mt-8"><Button href={`/quote?service=${SLUG}`} variant="white" size="lg">Get a Free Quote</Button></div>
          </div>
          <div className="flex min-h-[260px] items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur-sm">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-24 w-16 items-center justify-center rounded-lg bg-white text-sq-purple shadow-xl">
                <span className="font-[family-name:var(--font-montserrat)] text-2xl font-bold">POS</span>
              </div>
              <p className="text-sm text-white/70">Premium payment technology visual</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center text-3xl font-bold text-sq-ink">Our Solutions</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((item) => (
              <article key={item.title} className="rounded-xl border border-sq-border bg-white p-6">
                <div className="mb-4 h-10 w-10 rounded-lg bg-sq-purple-soft text-center leading-10 text-sq-purple">◆</div>
                <h3 className="text-lg font-bold text-sq-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-sq-gray">{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-sq-gray">
            Product availability, rates, and equipment options are confirmed during your personalized quote — placeholders only until official partner copy is supplied.
          </p>
        </div>
      </section>
    </div>
  );
}
