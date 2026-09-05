import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";
import { ByodPromoCard } from "@/components/xfinity/ByodPromoCard";
import { XfinityMobileSection } from "@/components/xfinity/XfinityMobileSection";

const SLUG = "xfinity-residential";

export const metadata: Metadata = {
  title: "Xfinity Residential",
  description:
    "Fast internet, TV & streaming, and mobile options. Request a free quote with Smart Quotes LLC.",
};

const HERO_CHECKS = [
  "Fast & Reliable Internet",
  "Top-Rated TV & Streaming",
  "Xfinity Mobile + BYOD Options",
  "No Annual Contracts",
];

const PLANS = [
  {
    title: "Internet",
    price: "35",
    details: ["Up to 300 Mbps"],
  },
  {
    title: "Internet + TV",
    price: "65",
    details: ["Up to 600 Mbps", "125+ Channels"],
  },
  {
    title: "Xfinity Mobile",
    price: "30",
    details: ["5G Nationwide", "Save with Internet"],
  },
];

export default function XfinityResidentialPage() {
  return (
    <div className="bg-white">
      {/* Hero — dark charcoal with entertainment collage */}
      <section className="relative overflow-hidden bg-[#12141c] text-white">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-[0.04em] sm:text-5xl lg:text-[3.25rem]">
              Xfinity Residential
            </h1>
            <p className="mt-4 max-w-lg text-base text-white/90 sm:text-lg">
              Fast internet. Amazing TV. Mobile that keeps you connected.
            </p>
            <CheckList
              items={HERO_CHECKS}
              variant="white"
              className="mt-8 max-w-md"
            />
            <div className="mt-9">
              <Button href={`/quote/${SLUG}`} size="lg">
                Get a Quote
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* IMAGE REPLACE: /public/images/services/xfinity-entertainment.png */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/images/services/xfinity-entertainment.png"
                alt="TV, tablet, and streaming box entertainment setup"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                priority
                className="object-cover object-center"
              />
            </div>
            {/* Subtle product strip under TV visual — secondary to entertainment image */}
            <p className="mt-3 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55 sm:text-xs">
              Internet • TV • Mobile
            </p>
          </div>
        </div>
      </section>

      {/* BYOD promo — immediately after TV/streaming image */}
      <ByodPromoCard />

      {/* Xfinity Mobile mini section */}
      <XfinityMobileSection />

      {/* Popular Plans */}
      <section className="bg-sq-gray-light py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:text-3xl">
            Popular Plans
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-xs text-sq-gray sm:text-sm">
            Rates shown are illustrative and subject to quote, location, and
            availability.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3 md:gap-7">
            {PLANS.map((plan) => (
              <article
                key={plan.title}
                className="flex h-full flex-col rounded-2xl border border-sq-border/80 bg-white px-7 py-8 text-center shadow-[0_12px_32px_-20px_rgba(10,10,18,0.35)]"
              >
                <h3 className="font-heading text-lg font-extrabold uppercase tracking-[0.06em] text-sq-purple">
                  {plan.title}
                </h3>
                <p className="mt-5 text-sm text-sq-gray">Starting at</p>
                <p className="mt-1 font-heading text-4xl font-extrabold tracking-tight text-sq-ink">
                  ${plan.price}
                  <span className="text-lg font-bold text-sq-gray">/mo</span>
                </p>
                <ul className="mt-5 flex-1 space-y-1.5 text-sm text-sq-ink/80">
                  {plan.details.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
                <Button href={`/quote/${SLUG}`} className="mt-8 w-full">
                  Get a Quote
                </Button>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
