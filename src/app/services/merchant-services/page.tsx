import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { MerchantLandingForm } from "@/components/merchant/MerchantLandingForm";

export const metadata: Metadata = {
  title: "Merchant Services",
  description:
    "Find the right POS system for your business. Request a personalized Smart Quote on payment solutions with Smart Quotes LLC.",
};

const HERO_CHECKS = [
  "Competitive Rates",
  "Latest Equipment Options",
  "Fast, No-Obligation Quotes",
] as const;

const SOLUTIONS = [
  {
    title: "Full POS System",
    copy: "Complete solution with register, cash drawer, receipt printer and more.",
    image: "/images/services/merchant-solution-full-pos.jpg",
    alt: "Full POS register with cash drawer, customer display and receipt printer",
    width: 800,
    height: 600,
  },
  {
    title: "Tablet POS",
    copy: "A flexible, modern solution for restaurants, retail and more.",
    image: "/images/services/merchant-solution-tablet.jpg",
    alt: "Tablet point-of-sale terminal on stand",
    width: 800,
    height: 600,
  },
  {
    title: "Smart Terminal",
    copy: "Wireless, all-in-one payments anywhere in your business.",
    image: "/images/services/merchant-solution-smart-terminal.jpg",
    alt: "Handheld smart payment terminal",
    width: 800,
    height: 600,
  },
  {
    title: "Countertop Terminal",
    copy: "Reliable and secure for high-volume transactions.",
    image: "/images/services/merchant-solution-countertop.jpg",
    alt: "Countertop payment terminal",
    width: 800,
    height: 600,
  },
  {
    title: "Mobile Payments",
    copy: "Turn your smartphone into a payment solution on the go.",
    image: "/images/services/merchant-solution-mobile.jpg",
    alt: "Smartphone with mobile card reader",
    width: 800,
    height: 600,
  },
  {
    title: "Self-Service Kiosk",
    copy: "Customer-led ordering and checkout for restaurants, retail, and service locations.",
    image: "/images/services/merchant-solution-kiosk.jpg",
    alt: "Self-service ordering kiosk with payment hardware",
    width: 800,
    height: 600,
  },
] as const;

function BlueCheckIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 text-[#2563eb]"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.5 8 14l7.5-8"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MerchantServicesPage() {
  return (
    <div className="bg-white">
      {/* Hero — full POS equipment group, never cropped */}
      <section className="relative">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 35%, rgba(37,99,235,0.14), transparent 48%), linear-gradient(180deg, #f5f9ff 0%, #ffffff 58%, #ffffff 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">
              Merchant Services
            </p>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-[#000033] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Find the Right POS System for Your Business
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sq-gray sm:text-lg">
              Get a personalized quote on payment solutions built for your
              business. Simple, secure, and ready to help you grow.
            </p>
            <ul className="mt-8 max-w-md space-y-3">
              {HERO_CHECKS.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-snug text-sq-ink"
                >
                  <BlueCheckIcon />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button href="#request-quote" size="lg">
                Get a Smart Quote →
              </Button>
            </div>
          </div>

          <div className="w-full">
            <div className="rounded-2xl bg-[#eef4ff] p-3 shadow-[0_24px_48px_-28px_rgba(37,99,235,0.35)] sm:p-5">
              <Image
                src="/images/services/merchant-pos-collage.jpg"
                alt="Full POS hardware group: register, tablet POS, smart terminal, mobile payments and self-service kiosk"
                width={1672}
                height={678}
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions — 6 cards in one row on wide screens; images contained */}
      <section className="border-t border-sq-border/60 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold text-[#000033] sm:text-3xl">
            Solutions for Every Way You Accept Payments
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-sq-gray sm:text-base">
            From full countertop systems to mobile readers, we have the right
            solution for your business.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-3">
            {SOLUTIONS.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-sq-border/80 bg-white shadow-[0_12px_32px_-22px_rgba(10,10,18,0.28)]"
              >
                <div className="flex flex-1 items-center justify-center rounded-t-2xl bg-[#f5f9ff] p-3">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 33vw, 16vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="flex flex-col px-3 pb-5 pt-3 sm:px-4">
                  <h3 className="font-heading text-sm font-extrabold text-[#000033] sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-xs leading-relaxed text-sq-gray sm:text-sm">
                    {item.copy}
                  </p>
                  <Link
                    href="#request-quote"
                    className="mt-3 font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-[#2563eb] hover:text-[#1d4ed8]"
                  >
                    Learn More →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form */}
      <section
        id="request-quote"
        className="scroll-mt-28 bg-[#f4f6f8] py-14 sm:py-20"
        aria-labelledby="merchant-quote-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-sq-border bg-white p-6 shadow-[0_16px_40px_-24px_rgba(10,10,18,0.35)] sm:p-8 lg:p-10">
            <header className="mb-8 max-w-3xl">
              <h2
                id="merchant-quote-heading"
                className="font-heading text-2xl font-extrabold text-[#000033] sm:text-3xl"
              >
                Request Your Personalized Merchant Services Quote
              </h2>
              <p className="mt-3 text-sm text-sq-gray sm:text-base">
                Tell us about your business and we&apos;ll recommend the best
                solution for your needs.
              </p>
            </header>
            <MerchantLandingForm />
          </div>
        </div>
      </section>
    </div>
  );
}
