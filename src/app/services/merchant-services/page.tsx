import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";
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
];

const SOLUTIONS = [
  {
    title: "Full POS System",
    copy: "Complete solution with register, cash drawer, receipt printer and more.",
  },
  {
    title: "Tablet POS",
    copy: "A flexible, modern solution for restaurants, retail and more.",
  },
  {
    title: "Smart Terminal",
    copy: "Wireless, all-in-one payments anywhere in your business.",
  },
  {
    title: "Countertop Terminal",
    copy: "Reliable and secure for high-volume transactions.",
  },
  {
    title: "Mobile Payments",
    copy: "Turn your smartphone into a payment solution on the go.",
  },
  {
    title: "Self-Service Kiosk",
    copy: "Customer-led ordering and checkout for restaurants, retail, and service locations.",
  },
] as const;

function SolutionIcon({ title }: { title: string }) {
  const common = "h-10 w-10 text-sq-purple";
  switch (title) {
    case "Full POS System":
      return (
        <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true">
          <rect x="10" y="10" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <rect x="12" y="28" width="18" height="8" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <rect x="34" y="18" width="8" height="14" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      );
    case "Tablet POS":
      return (
        <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true">
          <rect x="14" y="8" width="20" height="28" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M20 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Smart Terminal":
      return (
        <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true">
          <rect x="16" y="8" width="16" height="28" rx="3" stroke="currentColor" strokeWidth="2.2" />
          <path d="M20 14h8M20 20h8M20 26h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "Countertop Terminal":
      return (
        <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true">
          <rect x="12" y="12" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <path d="M16 32h16M20 36h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Mobile Payments":
      return (
        <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true">
          <rect x="16" y="8" width="14" height="26" rx="3" stroke="currentColor" strokeWidth="2.2" />
          <path d="M34 18c2 2 2 8 0 10M37 15c4 3.5 4 12.5 0 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 48 48" className={common} fill="none" aria-hidden="true">
          <rect x="15" y="6" width="18" height="30" rx="2.5" stroke="currentColor" strokeWidth="2.2" />
          <path d="M19 34h10M21 12h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
  }
}

export default function MerchantServicesPage() {
  return (
    <div className="bg-white">
      {/* Photo 3 hero — light/white with POS collage */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 75% 35%, rgba(37,99,235,0.12), transparent 45%), linear-gradient(180deg, #f8fbff 0%, #ffffff 55%, #ffffff 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">
              Merchant Services
            </p>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-sq-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Find the Right POS System for Your Business
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sq-gray sm:text-lg">
              Get a personalized quote on payment solutions built for your
              business. Simple, secure, and ready to help you grow.
            </p>
            <CheckList items={HERO_CHECKS} className="mt-8 max-w-md" />
            <div className="mt-9">
              <Button href="#request-quote" size="lg">
                Get a Smart Quote →
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-[#eef4ff] shadow-[0_24px_48px_-28px_rgba(37,99,235,0.35)]">
              <Image
                src="/images/services/merchant-pos-collage.jpg"
                alt="Point-of-sale terminals, tablet POS, mobile payments and self-service kiosk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={95}
                priority
                className="object-contain object-center p-2 sm:p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions grid */}
      <section className="border-t border-sq-border/60 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold text-sq-ink sm:text-3xl">
            Solutions for Every Way You Accept Payments
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-sq-gray sm:text-base">
            From full countertop systems to mobile readers, we have the right
            solution for your business.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {SOLUTIONS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-2xl border border-sq-border/80 bg-white px-5 py-7 shadow-[0_12px_32px_-22px_rgba(10,10,18,0.28)]"
              >
                <div className="mb-4">
                  <SolutionIcon title={item.title} />
                </div>
                <h3 className="font-heading text-base font-extrabold text-sq-ink">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-sq-gray">
                  {item.copy}
                </p>
                <Link
                  href="#request-quote"
                  className="mt-4 font-heading text-xs font-bold uppercase tracking-[0.08em] text-[#2563eb] hover:text-sq-purple"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form — Photo 3 */}
      <section
        id="request-quote"
        className="scroll-mt-28 bg-sq-gray-light py-14 sm:py-20"
        aria-labelledby="merchant-quote-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-2xl border border-sq-border bg-white p-6 shadow-[0_16px_40px_-24px_rgba(10,10,18,0.35)] sm:p-8 lg:p-10">
            <header className="mb-8 max-w-3xl">
              <h2
                id="merchant-quote-heading"
                className="font-heading text-2xl font-extrabold text-sq-ink sm:text-3xl"
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
