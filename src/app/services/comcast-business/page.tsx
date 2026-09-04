import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { getServiceBySlug } from "@/lib/services";
import type { ServiceSlug } from "@/lib/types";

const SLUG: ServiceSlug = "comcast-business";

export const metadata: Metadata = {
  title: "Comcast Business",
  description: "Explore Comcast Business connectivity solutions with Smart Quotes LLC.",
};

export default function ComcastBusinessPage() {
  const service = getServiceBySlug(SLUG)!;
  const items = [
    { title: "Business Internet", copy: "Discuss connectivity built for how your team works." },
    { title: "Voice", copy: "Explore business voice options during your consultation." },
    { title: "Cybersecurity", copy: "Ask about security-related conversations for your organization." },
    { title: "Managed Solutions", copy: "Learn which managed offerings may fit your operation." },
  ];
  return (
    <div>
      <section className="relative overflow-hidden bg-sq-black text-white">
        <div className="absolute inset-0 opacity-35" style={{ backgroundImage: "url('/brand/hero-lights.svg')", backgroundSize: "cover" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white/70">{service.kicker}</p>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Comcast Business</h1>
            <p className="mt-5 max-w-xl text-white/80">{service.description}</p>
            <div className="mt-8"><Button href={`/quote?service=${SLUG}`} size="lg">Get a Free Quote</Button></div>
          </div>
          <div className="min-h-[240px] rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-transparent p-8">
            <p className="text-sm uppercase tracking-[0.16em] text-white/50">Business connectivity</p>
            <p className="mt-4 text-2xl font-bold">Stay connected. Stay productive.</p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item) => (
              <article key={item.title} className="rounded-xl border border-sq-purple/25 bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-sq-purple text-sq-purple">●</div>
                <h2 className="text-lg font-bold text-sq-ink">{item.title}</h2>
                <p className="mt-2 text-sm text-sq-gray">{item.copy}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-sq-gray">
            Coverage, service levels, and promotions are confirmed through your Comcast Business quote — not published as generic guarantees here.
          </p>
        </div>
      </section>
    </div>
  );
}
