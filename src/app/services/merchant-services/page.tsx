import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MerchantLandingForm } from "@/components/merchant/MerchantLandingForm";
import { SERVICE_IMAGES } from "@/lib/service-images";

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

function SolutionGlyph({ title }: { title: string }) {
  const common = "h-14 w-14 text-[#2563eb]";
  switch (title) {
    case "Full POS System":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" aria-hidden="true">
          <rect x="10" y="12" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <rect x="12" y="34" width="24" height="12" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
          <rect x="42" y="22" width="12" height="20" rx="2" stroke="currentColor" strokeWidth="2.2" />
        </svg>
      );
    case "Tablet POS":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" aria-hidden="true">
          <rect x="18" y="8" width="28" height="40" rx="3" stroke="currentColor" strokeWidth="2.2" />
          <path d="M28 42h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 52h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "Smart Terminal":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" aria-hidden="true">
          <rect x="20" y="8" width="24" height="42" rx="4" stroke="currentColor" strokeWidth="2.2" />
          <path d="M26 18h12M26 26h12M26 34h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Countertop Terminal":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" aria-hidden="true">
          <rect x="14" y="14" width="36" height="24" rx="3" stroke="currentColor" strokeWidth="2.2" />
          <path d="M20 44h24M26 50h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
        </svg>
      );
    case "Mobile Payments":
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" aria-hidden="true">
          <rect x="16" y="10" width="20" height="36" rx="3" stroke="currentColor" strokeWidth="2.2" />
          <rect x="40" y="28" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="2.2" />
          <path d="M44 34h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 64 64" className={common} fill="none" aria-hidden="true">
          <rect x="22" y="6" width="20" height="46" rx="3" stroke="currentColor" strokeWidth="2.2" />
          <path d="M28 46h8M30 12h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

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
  const hero = SERVICE_IMAGES.merchantHero;

  return (
    <div className="bg-white">
      {/* Hero — match IMAGE A proportions; full wide POS composition, never cropped */}
      <section className="relative">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 78% 30%, rgba(37,99,235,0.12), transparent 50%), linear-gradient(180deg, #f5f8fc 0%, #ffffff 55%, #ffffff 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,0.44fr)_minmax(0,0.56fr)] lg:gap-10 lg:px-8 lg:py-20">
          <div className="animate-fade-up">
            <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-[#2563eb]">
              Merchant Services
            </p>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-[#000033] sm:text-4xl lg:text-[2.7rem] lg:leading-[1.15]">
              Find the Right POS System{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #0055FF 0%, #3b82f6 45%, #93c5fd 100%)",
                }}
              >
                for Your Business
              </span>
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
          </div>

          <div className="w-full">
            <div className="rounded-2xl bg-[#eef4ff] p-3 sm:p-5">
              <Image
                src={hero.src}
                alt={hero.alt}
                width={hero.width}
                height={hero.height}
                sizes="(max-width: 1024px) 100vw, 56vw"
                quality={95}
                priority
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solutions — six cards; glyph visuals (no cropped product derivatives) */}
      <section className="border-t border-sq-border/60 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold text-[#000033] sm:text-3xl">
            Solutions for Every Way You Accept Payments
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-sq-gray sm:text-base">
            From full countertop systems to mobile readers, we have the right
            solution for your business.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {SOLUTIONS.map((item) => (
              <article
                key={item.title}
                className="flex h-full flex-col rounded-2xl border border-sq-border/80 bg-white px-4 py-6 shadow-[0_12px_32px_-22px_rgba(10,10,18,0.22)]"
              >
                <div className="mb-4 flex h-20 items-center justify-center rounded-xl bg-[#f5f9ff]">
                  <SolutionGlyph title={item.title} />
                </div>
                <h3 className="font-heading text-sm font-extrabold text-[#000033] sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed text-sq-gray sm:text-sm">
                  {item.copy}
                </p>
                <Link
                  href="#request-quote"
                  className="mt-4 font-heading text-[11px] font-bold uppercase tracking-[0.08em] text-[#2563eb] hover:text-[#1d4ed8]"
                >
                  Learn More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote form — IMAGE A structure; CRM logic preserved in MerchantLandingForm */}
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
