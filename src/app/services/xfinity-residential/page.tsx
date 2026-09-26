import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

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

const BYOD_CHECKS = [
  "Bring your own phone (BYOP)",
  "Keep your current number",
  "Great unlimited plans",
  "Save with Xfinity Mobile + Internet",
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
    src: "/images/xfinity/service-internet-ref.jpg",
    alt: "Slim white Xfinity internet gateway on a living-room table next to a laptop",
    width: 696,
    height: 826,
    icon: "wifi" as const,
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
    src: "/images/xfinity/service-mobile.jpg",
    alt: "Smartphone with Xfinity branding next to an Xfinity coffee mug",
    width: 896,
    height: 856,
    icon: "phone" as const,
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
    src: "/images/xfinity/service-streaming.jpg",
    alt: "Television with streaming apps, streaming box, and remote fully visible",
    width: 1536,
    height: 1024,
    icon: "tv" as const,
  },
] as const;

const WHY_FEATURES = [
  {
    title: "BYOD",
    copy: "Use your compatible device and keep your number.",
    icon: "phone" as const,
  },
  {
    title: "5G Nationwide",
    copy: "Reliable coverage on America's most reliable 5G network.",
    icon: "signal" as const,
  },
  {
    title: "Great Plan Options",
    copy: "Flexible plans to fit your lifestyle and save with Xfinity Internet.",
    icon: "people" as const,
  },
] as const;

function PurpleCheck({ className = "" }: { className?: string }) {
  return (
    <span
      className={`mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sq-purple text-white ${className}`}
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

function CardIcon({ kind }: { kind: "wifi" | "phone" | "tv" | "signal" | "people" }) {
  if (kind === "wifi") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M5 10.5c3.8-3.8 10.2-3.8 14 0M7.8 13.5a6.2 6.2 0 0 1 8.4 0M10.5 16.4a2.2 2.2 0 0 1 3 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="19" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="7.5" y="3.5" width="9" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  if (kind === "tv") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="3.5" y="5.5" width="17" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M11 9.2v4.6l3.6-2.3L11 9.2Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (kind === "signal") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M6 16.5V18M10 13v5M14 9.5v8.5M18 6v12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
      <path
        d="M4.5 18.5c.8-2.6 2.6-4 4.5-4s3.7 1.4 4.5 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M13.2 14.2c.7-.4 1.6-.6 2.8-.6 2 0 3.6 1.2 4.3 3.4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

const primaryCtaClass =
  "inline-flex h-11 items-center justify-center rounded-md px-5 font-heading text-[11px] font-extrabold uppercase tracking-[0.1em] text-white transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-purple sm:h-12 sm:px-6 sm:text-xs";

const primaryCtaStyle = {
  background: "linear-gradient(135deg, #12081f 0%, #2a1458 42%, #5a2cff 100%)",
  boxShadow: "0 12px 28px -14px rgba(90,44,255,0.7)",
} as const;

const outlineCtaClass =
  "inline-flex h-11 items-center justify-center rounded-md border border-sq-purple bg-white px-5 font-heading text-[11px] font-extrabold uppercase tracking-[0.1em] text-sq-purple transition hover:bg-sq-soft focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-purple sm:h-12 sm:px-6 sm:text-xs";

export default function XfinityResidentialPage() {
  return (
    <div className="bg-white">
      {/* Hero — compact dark composition matching approved reference */}
      <section className="relative overflow-hidden bg-[#0e1016] text-white">
        <div className="relative mx-auto grid max-w-7xl items-center lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          <div className="relative z-10 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
            <div
              className="pointer-events-none absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(14,16,22,0.92) 0%, rgba(14,16,22,0.78) 55%, rgba(14,16,22,0.96) 100%)",
              }}
              aria-hidden="true"
            />
            <div className="relative">
              <p className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-white/75 sm:text-xs">
                Xfinity Residential
              </p>
              <h1 className="mt-3 max-w-xl font-heading text-[2rem] font-extrabold leading-[1.08] tracking-tight sm:text-4xl lg:text-[2.85rem]">
                Internet. Mobile.
                <br />
                Streaming.
                <br />
                <span className="text-[#7b5cff]">All In One Place.</span>
              </h1>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-white/90 sm:text-base">
                Fast, reliable internet, nationwide mobile coverage, and your
                favorite entertainment — all with Xfinity.
              </p>
              <ul className="mt-6 max-w-md space-y-2.5">
                {HERO_CHECKS.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-white/95 sm:text-[15px]">
                    <PurpleCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <a href="#quote-selector" className={primaryCtaClass} style={primaryCtaStyle}>
                  Choose a Service →
                </a>
              </div>
            </div>
          </div>

          {/* Right visual — slim white gateway must stay narrow via contain */}
          <div className="relative px-4 pb-10 sm:px-6 lg:px-8 lg:py-10">
            <div className="mx-auto w-full max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-xl bg-[#161822] sm:rounded-2xl">
                <Image
                  src="/images/xfinity/residential-hero.jpg"
                  alt="Slim white Xfinity gateway, smartphone, streaming box, remote, and TV with entertainment apps"
                  width={1254}
                  height={1254}
                  sizes="(max-width: 1024px) 100vw, 52vw"
                  quality={95}
                  priority
                  className="mx-auto h-auto w-full max-w-[560px] object-contain object-center lg:max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Xfinity Service */}
      <section
        id="quote-selector"
        className="bg-white py-12 sm:py-16"
        aria-labelledby="xfinity-selector-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-sq-purple sm:text-xs">
            Xfinity Residential
          </p>
          <h2
            id="xfinity-selector-heading"
            className="mt-2 text-center font-heading text-2xl font-extrabold tracking-tight text-sq-ink sm:text-3xl lg:text-[2.15rem]"
          >
            Choose Your{" "}
            <span className="text-sq-purple">Xfinity Service</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-sq-gray sm:text-[15px]">
            Fast. Reliable. Connected. Explore Xfinity Internet, Mobile, and
            Streaming options available at your address.
          </p>

          {/* Exactly 3 equal cards in one row from md up */}
          <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6 lg:gap-7">
            {SELECTOR_CARDS.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-2xl border border-[#e6e8ee] bg-white shadow-[0_10px_28px_-20px_rgba(10,10,18,0.35)]"
              >
                {/* Equal-height image wells: contain only — never crop products */}
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-t-2xl bg-[#f6f7f9] p-3 sm:p-4">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    quality={95}
                    className="h-full max-h-full w-full object-contain object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col px-5 pb-6 pt-5 sm:px-6 sm:pb-7">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sq-purple text-white">
                    <CardIcon kind={card.icon} />
                  </span>
                  <h3 className="mt-3 font-heading text-base font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-lg">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sq-gray">
                    {card.description}
                  </p>
                  <ul className="mt-4 flex-1 space-y-2">
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
                    className={`${primaryCtaClass} mt-5 w-full`}
                    style={primaryCtaStyle}
                  >
                    {card.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BYOD feature — page-scoped */}
      <section aria-labelledby="byod-promo-heading" className="bg-white pb-10 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-sq-purple/20 bg-white shadow-[0_14px_36px_-22px_rgba(10,10,18,0.35)]">
            <div className="grid items-center gap-8 p-6 sm:gap-10 sm:p-9 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-12 lg:p-11">
              <div className="order-1 min-w-0 md:order-none">
                <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-sq-purple sm:text-xs">
                  Xfinity Mobile
                </p>
                <h2
                  id="byod-promo-heading"
                  className="mt-3 font-heading text-xl font-extrabold uppercase leading-tight tracking-[0.03em] text-sq-ink sm:text-2xl lg:text-[1.85rem]"
                >
                  Keep your phone. Keep your
                  <br className="hidden sm:block" /> number. Make the switch.
                </h2>
                <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-sq-gray">
                  Bring your own phone and keep your number with Xfinity Mobile.
                  Get reliable nationwide coverage on America&apos;s most
                  reliable 5G network.
                </p>
                <ul className="mt-5 space-y-2.5">
                  {BYOD_CHECKS.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-sq-ink">
                      <PurpleCheck />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 hidden flex-wrap gap-3 md:flex">
                  <Link href="/quote/mobile" className={primaryCtaClass} style={primaryCtaStyle}>
                    Check BYOD Options →
                  </Link>
                  <Link href="/quote/mobile" className={outlineCtaClass}>
                    Get a Mobile Quote →
                  </Link>
                </div>
              </div>

              <div className="order-2 mx-auto flex w-full max-w-[260px] justify-center sm:max-w-[300px] md:order-none md:max-w-none">
                <Image
                  src="/images/xfinity/byod-phone-approved.jpg"
                  alt="Smartphone representing Bring Your Own Device options with Xfinity Mobile"
                  width={585}
                  height={570}
                  className="h-auto w-full max-w-[280px] object-contain"
                  sizes="(max-width: 768px) 260px, 300px"
                  quality={90}
                />
              </div>

              <div className="order-3 flex flex-col gap-3 md:hidden">
                <Link href="/quote/mobile" className={`${primaryCtaClass} w-full`} style={primaryCtaStyle}>
                  Check BYOD Options →
                </Link>
                <Link href="/quote/mobile" className={`${outlineCtaClass} w-full`}>
                  Get a Mobile Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Xfinity — page-scoped */}
      <section
        aria-labelledby="xfinity-mobile-heading"
        className="border-t border-sq-border/60 bg-white py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-sq-purple sm:text-xs">
              Why Xfinity
            </p>
            <h2
              id="xfinity-mobile-heading"
              className="mt-3 font-heading text-xl font-extrabold uppercase tracking-[0.04em] text-sq-ink sm:text-2xl lg:text-[1.85rem]"
            >
              Your phone. Your number. Your choice.
            </h2>
            <p className="mt-3 text-[15px] text-sq-gray sm:text-base">
              Bring your own phone, keep your number, and take advantage of
              reliable nationwide 5G coverage with Xfinity Mobile.
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {WHY_FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="flex items-start gap-4 rounded-2xl border border-[#e6e8ee] bg-white px-5 py-5 shadow-[0_8px_24px_-20px_rgba(10,10,18,0.3)] sm:px-6"
              >
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sq-purple text-white">
                  <CardIcon kind={feature.icon} />
                </span>
                <div>
                  <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.1em] text-sq-ink">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-sq-ink/80">
                    {feature.copy}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-9 flex justify-center">
            <Link href="/quote/mobile" className={primaryCtaClass} style={primaryCtaStyle}>
              Explore Mobile Options →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
