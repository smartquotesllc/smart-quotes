import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";

const SLUG = "merchant-services";

export const metadata: Metadata = {
  title: "Merchant Services",
  description:
    "0% processing options, next-day funding, and payment solutions for your business. Request a free quote with Smart Quotes LLC.",
};

const HERO_CHECKS = [
  "0% Credit Card Processing Options",
  "Next Day Funding Available",
  "No Long-Term Contracts",
  "24/7 U.S. Based Support",
];

const SOLUTIONS = [
  {
    title: "Payment Processing",
    copy: "In-Person, Online & Mobile",
    icon: (
      <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" aria-hidden="true">
        <rect x="12" y="10" width="18" height="28" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
        <rect x="15" y="14" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.8" />
        <path d="M28 28h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H28" stroke="currentColor" strokeWidth="2.2" />
        <path d="M17 28h8M17 32h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "POS Systems",
    copy: "Smart Terminals & More",
    icon: (
      <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" aria-hidden="true">
        <rect x="10" y="12" width="28" height="18" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
        <path d="M18 36h12M24 30v6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M14 18h20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "E-Commerce",
    copy: "Secure Online Payments",
    icon: (
      <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" aria-hidden="true">
        <rect x="9" y="12" width="30" height="20" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
        <path d="M9 18h30" stroke="currentColor" strokeWidth="2" />
        <circle cx="14" cy="15.5" r="1" fill="currentColor" />
        <circle cx="18" cy="15.5" r="1" fill="currentColor" />
        <path
          d="M20 28h3l1.2-4h7.6l1.5 4H36"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="32.5" r="1.3" fill="currentColor" />
        <circle cx="32" cy="32.5" r="1.3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Business Funding",
    copy: "Fast & Flexible Capital",
    icon: (
      <svg viewBox="0 0 48 48" className="h-11 w-11" fill="none" aria-hidden="true">
        <rect x="14" y="12" width="20" height="12" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
        <rect x="12" y="18" width="20" height="12" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
        <rect x="10" y="24" width="20" height="12" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
        <circle cx="20" cy="30" r="2.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export default function MerchantServicesPage() {
  return (
    <div className="bg-white">
      {/* Dark purple gradient hero */}
      <section className="relative overflow-hidden text-white">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(165deg, #5a2cff 0%, #4a20e0 35%, #2a1458 72%, #12081f 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-[0.04em] sm:text-5xl lg:text-[3.25rem]">
              Merchant Services
            </h1>
            <p className="mt-5 text-lg text-white/95 sm:text-xl">
              0% Processing Options
            </p>
            <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">
              Lower Rates. Better Service.
            </p>
            <CheckList
              items={HERO_CHECKS}
              variant="white"
              className="mt-8 max-w-md"
            />
            <div className="mt-9">
              <Button href={`/quote/${SLUG}`} size="lg" className="shadow-[0_12px_28px_-10px_rgba(0,0,0,0.45)]">
                Get a Quote
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            {/* IMAGE REPLACE: /public/images/services/merchant-pos-hero.png */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/images/services/merchant-pos-hero.png"
                alt="POS terminal and handheld card reader"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                priority
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solutions */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-heading text-2xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:mb-12 sm:text-3xl">
            Our Solutions
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {SOLUTIONS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-sq-border/80 bg-white px-5 py-8 text-center shadow-[0_12px_32px_-20px_rgba(10,10,18,0.28)]"
              >
                <div className="mb-4 text-sq-purple">{item.icon}</div>
                <h3 className="font-heading text-base font-extrabold uppercase tracking-[0.06em] text-sq-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-sq-gray">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Promo banner — free quote / vacation */}
      <section className="relative overflow-hidden" aria-labelledby="merchant-vacation-heading">
        <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-[300px]">
          {/* IMAGE REPLACE: /public/images/services/vacation-beach.png */}
          <Image
            src="/images/services/vacation-beach.png"
            alt="Tropical beach vacation destination"
            fill
            sizes="100vw"
            quality={92}
            className="object-cover object-[72%_center]"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, #3d1abc 0%, #4a20e0 30%, #5a2cff 48%, rgba(90,44,255,0.55) 68%, rgba(90,44,255,0.15) 88%, transparent 100%)",
            }}
            aria-hidden="true"
          />
          <div className="relative mx-auto flex min-h-[240px] max-w-7xl flex-col justify-center px-4 py-12 sm:min-h-[280px] sm:px-6 lg:min-h-[300px] lg:px-8">
            <div className="max-w-md">
              <h2
                id="merchant-vacation-heading"
                className="font-heading text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl"
              >
                Get a Free Quote
              </h2>
              <p className="mt-2 text-base text-white/90">and get a chance to</p>
              <p className="mt-1 font-heading text-2xl font-extrabold uppercase tracking-tight text-white sm:text-3xl">
                Win a Free Vacation!
              </p>
              <div className="mt-7">
                <Link
                  href={`/quote/${SLUG}`}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 font-heading text-xs font-bold uppercase tracking-[0.12em] text-sq-purple transition hover:bg-white/90"
                >
                  Get Started
                </Link>
              </div>
              <p className="mt-4 text-xs text-white/70">
                Offer subject to{" "}
                <Link href="/vacation-terms" className="underline hover:text-white">
                  Vacation Terms
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
