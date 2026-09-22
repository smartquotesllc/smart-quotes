import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";

const SLUG = "merchant-services";

export const metadata: Metadata = {
  title: "Merchant Services",
  description:
    "0% processing options, next-day funding, and payment solutions for your business. Request a Smart Quote with Smart Quotes LLC.",
};

const HERO_CHECKS = [
  "0% Credit Card Processing Options",
  "Next Day Funding Available",
  "No Long-Term Contracts",
  "24/7 U.S. Based Support",
];

const SOLUTIONS = [
  { title: "Full POS System", copy: "Complete countertop checkout hardware" },
  { title: "Tablet POS", copy: "Flexible tablet-based payment setups" },
  { title: "Smart Terminal", copy: "Modern all-in-one smart readers" },
  { title: "Countertop Terminal", copy: "Reliable in-store card terminals" },
  { title: "Mobile Payments", copy: "Handheld and on-the-go acceptance" },
  { title: "Self-Service Kiosk", copy: "Unattended checkout options" },
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
                Get a Smart Quote
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl sm:rounded-2xl">
              <Image
                src="/images/services/merchant-services-pos.jpg"
                alt="Point-of-sale and payment terminal equipment"
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

      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-3 text-center font-heading text-2xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:text-3xl">
            Solutions for Every Way You Accept Payments
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-sq-gray sm:mb-12 sm:text-base">
            From full POS systems to mobile readers and kiosks — find the setup
            that fits your business.
          </p>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SOLUTIONS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-sq-border/80 bg-white px-5 py-8 text-center shadow-[0_12px_32px_-20px_rgba(10,10,18,0.28)]"
              >
                <h3 className="font-heading text-base font-extrabold uppercase tracking-[0.06em] text-sq-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-sq-gray">{item.copy}</p>
                <Link
                  href={`/quote/${SLUG}`}
                  className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.08em] text-sq-purple hover:text-sq-purple-hover"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden" aria-labelledby="merchant-vacation-heading">
        <div className="relative min-h-[240px] sm:min-h-[280px] lg:min-h-[300px]">
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
            <div className="max-w-lg">
              <h2
                id="merchant-vacation-heading"
                className="font-heading text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl"
              >
                Complimentary Vacation Incentive
              </h2>
              <p className="mt-3 text-base text-white/95 sm:text-lg">
                Request a qualifying quote through Smart Quotes and you may
                receive a complimentary hotel accommodation incentive at
                participating properties.
              </p>
              <div className="mt-7">
                <Link
                  href={`/quote/${SLUG}`}
                  className="inline-flex h-12 items-center justify-center rounded-md bg-white px-8 font-heading text-xs font-bold uppercase tracking-[0.12em] text-sq-purple transition hover:bg-white/90"
                >
                  Get a Smart Quote
                </Link>
              </div>
              <p className="mt-4 text-xs text-white/70">
                Offer subject to{" "}
                <Link href="/vacation-terms" className="underline hover:text-white">
                  Vacation Redemption Terms
                </Link>
                . Airfare is not included.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
