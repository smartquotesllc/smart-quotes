import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";
import { ByodPromoCard } from "@/components/xfinity/ByodPromoCard";
import { XfinityMobileSection } from "@/components/xfinity/XfinityMobileSection";

const SLUG = "xfinity-residential";

export const metadata: Metadata = {
  title: "Xfinity Residential",
  description:
    "Explore Xfinity Internet, Mobile, and Streaming options. Request a free Smart Quote with Smart Quotes LLC.",
};

const HERO_CHECKS = [
  "Fast & Reliable Internet",
  "Mobile options for eligible households",
  "Entertainment & streaming with Xfinity",
  "No Annual Contracts",
];

const SELECTOR_CARDS = [
  {
    title: "Xfinity Internet",
    description: "Explore residential Internet options available at your address.",
    cta: "Get an Internet Quote",
    href: "/quote/internet",
    image: "/images/quote/xfinity-modem.png",
    imageAlt: "Xfinity residential Internet gateway",
    notice: null as string | null,
  },
  {
    title: "Xfinity Mobile",
    description:
      "Explore mobile service options for eligible Xfinity Internet customers.",
    cta: "Get a Mobile Quote",
    href: "/quote/mobile",
    image: "/images/xfinity/byod-phone.png",
    imageAlt: "Smartphone representing Xfinity Mobile options",
    notice: "Xfinity Internet service is required.",
  },
  {
    title: "Xfinity Streaming",
    description:
      "Explore entertainment and streaming options available with Xfinity Internet.",
    cta: "Get a Streaming Quote",
    href: "/quote/streaming",
    // Best available streaming hardware visual in-repo (TV / set-top).
    // Dedicated Xumo streaming box + remote asset still needed for exact screenshot match.
    image: "/images/quote/xfinity-tv.png",
    imageAlt: "Xfinity entertainment and streaming setup",
    notice: "Xfinity Internet service is required.",
  },
] as const;

export default function XfinityResidentialPage() {
  return (
    <div className="bg-white">
      {/* Hero — Internet + Mobile + Streaming category (modem-forward, not streaming-only) */}
      <section className="relative overflow-hidden bg-[#12141c] text-white">
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-[0.04em] sm:text-5xl lg:text-[3.25rem]">
              Xfinity Residential
            </h1>
            <p className="mt-4 max-w-lg text-base text-white/90 sm:text-lg">
              Internet. Mobile. Streaming. Connected solutions for your home.
            </p>
            <CheckList
              items={HERO_CHECKS}
              variant="white"
              className="mt-8 max-w-md"
            />
            <div className="mt-9">
              <Button href="#quote-selector" size="lg">
                Choose a Service
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#1a1d28] sm:rounded-2xl">
              <Image
                src="/images/quote/xfinity-modem.png"
                alt="Xfinity Internet gateway representing residential connectivity"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                priority
                className="object-contain object-center p-6 sm:p-8"
              />
            </div>
            <p className="mt-3 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55 sm:text-xs">
              Internet • Mobile • Streaming
            </p>
          </div>
        </div>
      </section>

      {/* Three-card quote selector */}
      <section
        id="quote-selector"
        className="bg-sq-gray-light py-14 sm:py-20"
        aria-labelledby="xfinity-selector-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="xfinity-selector-heading"
            className="text-center font-heading text-2xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:text-3xl"
          >
            Choose Your Xfinity Service
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-sq-gray sm:text-base">
            Select Internet, Mobile, or Streaming to start a Smart Quote request.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:gap-8">
            {SELECTOR_CARDS.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-sq-border/80 bg-white shadow-[0_14px_40px_-24px_rgba(10,10,18,0.4)]"
              >
                <div className="relative aspect-[16/11] bg-sq-gray-light">
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={92}
                    className="object-contain object-center p-6 sm:p-8"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-7 text-center sm:px-8 sm:py-8">
                  <h3 className="font-heading text-xl font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-2xl">
                    {card.title}
                  </h3>
                  <p className="mx-auto mt-4 max-w-md flex-1 text-sm leading-relaxed text-sq-gray sm:text-base">
                    {card.description}
                  </p>
                  {card.notice ? (
                    <p className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.08em] text-sq-purple sm:text-sm">
                      {card.notice}
                    </p>
                  ) : (
                    <span className="mt-4 block h-5" aria-hidden="true" />
                  )}
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md px-6 font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:brightness-110 sm:h-14 sm:text-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, #3d1abc 0%, #5a2cff 50%, #6b3aff 100%)",
                      boxShadow: "0 14px 30px -16px rgba(90,44,255,0.75)",
                    }}
                  >
                    {card.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-center text-xs text-sq-gray">
            Prefer a general residential quote?{" "}
            <Link
              href={`/quote/${SLUG}`}
              className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
            >
              Start here
            </Link>
            .
          </p>
        </div>
      </section>

      <ByodPromoCard />
      <XfinityMobileSection />
    </div>
  );
}
