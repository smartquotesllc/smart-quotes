import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { ByodPromoCard } from "@/components/xfinity/ByodPromoCard";
import { XfinityMobileSection } from "@/components/xfinity/XfinityMobileSection";
import { SERVICE_IMAGES } from "@/lib/service-images";

export const metadata: Metadata = {
  title: "Xfinity Residential",
  description:
    "Internet. Mobile. Streaming. All in one place. Explore Xfinity options and request a Smart Quote with Smart Quotes LLC.",
};

const HERO_CHECKS = [
  "Reliable, high-speed internet",
  "Stay connected with Xfinity Mobile",
  "Stream the shows you love",
  "Check availability at your address",
] as const;

const SELECTOR_CARDS = [
  {
    title: "Xfinity Internet",
    description: "Explore residential Internet options available at your address.",
    bullets: [
      "Fast, reliable, nationwide internet",
      "Multiple speed options",
      "Connect all your devices",
      "Check availability at your address",
    ],
    cta: "Get an Internet Quote",
    href: "/quote/internet",
    src: "/images/quote/xfinity-modem.png",
    alt: "White Xfinity internet gateway on a desk",
    width: 1536,
    height: 1024,
    notice: null as string | null,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M5 10.5c3.8-3.8 10.2-3.8 14 0M7.8 13.5a6.2 6.2 0 0 1 8.4 0M10.5 16.4a2.2 2.2 0 0 1 3 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="19" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Xfinity Mobile",
    description:
      "Explore mobile service options for eligible Xfinity Internet customers.",
    bullets: [
      "Stay connected everywhere",
      "Nationwide 5G coverage",
      "Multiple plan options",
      "Xfinity Internet service is required.",
    ],
    cta: "Get a Mobile Quote",
    href: "/quote/mobile",
    src: "/images/xfinity/byod-phone.png",
    alt: "Smartphone representing Xfinity Mobile options",
    width: 720,
    height: 980,
    notice: "Xfinity Internet service is required.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect
          x="7.5"
          y="3.5"
          width="9"
          height="17"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Xfinity Streaming",
    description:
      "Explore entertainment and streaming options available with Xfinity Internet.",
    bullets: [
      "All your favorites in one place",
      "Popular streaming apps",
      "Simple, easy setup",
      "Xfinity Internet service is required.",
    ],
    cta: "Get a Streaming Quote",
    href: "/quote/streaming",
    src: "/images/quote/xfinity-tv.png",
    alt: "Television, streaming box, and remote for home entertainment",
    width: 1536,
    height: 1024,
    notice: "Xfinity Internet service is required.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="5.5"
          width="17"
          height="11"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M11 9.2v4.6l3.6-2.3L11 9.2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

function PurpleCheck() {
  return (
    <span
      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sq-purple text-white"
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
        <path
          d="M4.5 10.5 8 14l7.5-8"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function XfinityResidentialPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#12141c] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-50"
          style={{
            background:
              "radial-gradient(ellipse at 80% 30%, rgba(90,44,255,0.28), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/70">
              Xfinity Residential
            </p>
            <h1 className="mt-3 font-heading text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Internet. Mobile.
              <br />
              Streaming.
              <br />
              <span className="bg-gradient-to-r from-[#7b5cff] via-[#5a2cff] to-[#c44dff] bg-clip-text text-transparent">
                All In One Place.
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/90 sm:text-lg">
              Fast, reliable internet, nationwide mobile coverage, and your
              favorite entertainment — all with Xfinity.
            </p>
            <ul className="mt-8 max-w-md space-y-3">
              {HERO_CHECKS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-white/95">
                  <PurpleCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="#quote-selector" size="lg">
                Choose a Service →
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="rounded-xl bg-[#1a1d28] p-3 sm:rounded-2xl sm:p-4">
              <Image
                src={SERVICE_IMAGES.xfinityPrimary.src}
                alt={SERVICE_IMAGES.xfinityPrimary.alt}
                width={SERVICE_IMAGES.xfinityPrimary.width}
                height={SERVICE_IMAGES.xfinityPrimary.height}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Xfinity Service */}
      <section
        id="quote-selector"
        className="bg-sq-gray-light py-14 sm:py-20"
        aria-labelledby="xfinity-selector-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center font-heading text-xs font-bold uppercase tracking-[0.2em] text-sq-purple">
            Xfinity Residential
          </p>
          <h2
            id="xfinity-selector-heading"
            className="mt-3 text-center font-heading text-2xl font-extrabold tracking-tight text-sq-ink sm:text-3xl lg:text-[2.25rem]"
          >
            Choose Your{" "}
            <span className="bg-gradient-to-r from-[#5a2cff] to-[#8b5cf6] bg-clip-text text-transparent">
              Xfinity Service
            </span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-sq-gray sm:text-base">
            Fast. Reliable. Connected. Explore Xfinity Internet, Mobile, and
            Streaming options available at your address.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {SELECTOR_CARDS.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col overflow-hidden rounded-2xl border border-sq-border/80 bg-white shadow-[0_14px_40px_-24px_rgba(10,10,18,0.4)]"
              >
                <div className="flex items-center justify-center bg-sq-gray-light p-4 sm:p-5">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    quality={95}
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 py-7 sm:px-7 sm:py-8">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sq-purple text-white">
                    {card.icon}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-xl">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sq-gray">
                    {card.description}
                  </p>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {card.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className={`flex items-start gap-2.5 text-sm ${
                          bullet.includes("required")
                            ? "font-semibold text-sq-purple"
                            : "text-sq-ink"
                        }`}
                      >
                        <PurpleCheck />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={card.href}
                    className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md px-6 font-heading text-xs font-extrabold uppercase tracking-[0.12em] text-white transition hover:brightness-110 sm:h-14 sm:text-sm"
                    style={{
                      background:
                        "linear-gradient(90deg, #3d1abc 0%, #5a2cff 50%, #6b3aff 100%)",
                      boxShadow: "0 14px 30px -16px rgba(90,44,255,0.75)",
                    }}
                  >
                    {card.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ByodPromoCard />
      <XfinityMobileSection />
    </div>
  );
}
