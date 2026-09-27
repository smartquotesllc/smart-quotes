import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { QuoteCtaLink } from "@/components/merchant/full-pos/QuoteCtaLink";
import { PaymentMarks } from "@/components/merchant/full-pos/PaymentMarks";
import {
  GreenCheckBadge,
  IconCamera,
  IconCard,
  IconChart,
  IconCustomers,
  IconDimensions,
  IconFans,
  IconGift,
  IconLightning,
  IconPayments,
  IconPower,
  IconPrinter,
  IconScreen,
  IconShield,
  IconStorefront,
  IconWifi,
} from "@/components/merchant/full-pos/FullPosIcons";
import { FULL_POS_IMAGES } from "@/lib/full-pos-images";

export const metadata: Metadata = {
  title: "Full POS System",
  description:
    "Explore the Full POS System from Smart Quotes LLC — register, cash drawer, receipt printer, customer display, and built-in payments. Request a personalized Smart Quote.",
};

const FEATURES: {
  title: string;
  copy: string;
  icon: ReactNode;
}[] = [
  {
    title: "Let Your Customers Drive",
    copy: "Comes with a smart terminal for your customers. That means they can confirm their orders and complete payment faster.",
    icon: <IconCustomers className="h-9 w-9 text-[#3b82f6]" />,
  },
  {
    title: "Move at the Speed of Light",
    copy: "Our fastest, most powerful POS system. From inventory and orders to managing your staff and running reports, it’s all at your fingertips.",
    icon: <IconLightning className="h-9 w-9 text-[#3b82f6]" />,
  },
  {
    title: "Next-Level Security",
    copy: "Protect your business and customer information with end-to-end encryption and data tokenization, integrated EMV chip sensors, and fingerprint logins.",
    icon: <IconShield className="h-9 w-9 text-[#3b82f6]" />,
  },
  {
    title: "Stay on Top of Your Numbers",
    copy: "Monitor your sales, refunds, and best-selling items from any computer or mobile device.",
    icon: <IconChart className="h-9 w-9 text-[#3b82f6]" />,
  },
  {
    title: "Get to Know Your Biggest Fans",
    copy: "Collect and manage customer contact information and marketing preferences, so you can engage with them on their terms.",
    icon: <IconFans className="h-9 w-9 text-[#3b82f6]" />,
  },
  {
    title: "Fully-Featured Payments",
    copy: "Tax discounts, loyalty rewards and gift cards are just a tap away.",
    icon: <IconGift className="h-9 w-9 text-[#3b82f6]" />,
  },
];

const SPECS: {
  title: string;
  copy: string;
  icon: ReactNode;
}[] = [
  {
    title: "Dimensions",
    copy: 'Base plate 11.0" × 7.5". Max height from countertop to display top: 9".',
    icon: <IconDimensions className="h-6 w-6 text-[#3b82f6]" />,
  },
  {
    title: "Power Source",
    copy: "One power cable and LAN cable, with everything powered from the system.",
    icon: <IconPower className="h-6 w-6 text-[#3b82f6]" />,
  },
  {
    title: "Printer",
    copy: "High-speed receipt printer.",
    icon: <IconPrinter className="h-6 w-6 text-[#3b82f6]" />,
  },
  {
    title: "Connectivity Options",
    copy: "Wi-Fi, 4G/LTE, and Ethernet.",
    icon: <IconWifi className="h-6 w-6 text-[#3b82f6]" />,
  },
  {
    title: "Security",
    copy: "Fingerprint logins, NFC employee cards, transaction tokenization and encryption, PCI PTS 5.0 PED w/ P2PE readiness.",
    icon: <IconShield className="h-6 w-6 text-[#3b82f6]" />,
  },
  {
    title: "Payments",
    copy: "Swipe, dip, or tap. Credit or debit. NFC payments including Apple Pay, Google Pay, WeChat Pay, Alipay and more.",
    icon: <IconPayments className="h-6 w-6 text-[#3b82f6]" />,
  },
  {
    title: "Options",
    copy: "Embedded high-resolution camera for barcode or QR code scanning. Proprietary pivot arm swivels smoothly between merchant and customer.",
    icon: <IconCamera className="h-6 w-6 text-[#3b82f6]" />,
  },
  {
    title: "Screen 1",
    copy: 'Merchant-Facing Display — 14.0" IPS FHD Display.',
    icon: <IconScreen className="h-6 w-6 text-[#3b82f6]" />,
  },
  {
    title: "Screen 2",
    copy: 'Customer-Facing Display — 7.0" IPS HD Display (Gorilla Glass 3 with Anti-Fingerprint and Anti-Microbial).',
    icon: <IconScreen className="h-6 w-6 text-[#3b82f6]" />,
  },
];

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#e8f1ff] px-3.5 py-1.5 font-heading text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#1e3a8a] sm:text-[11px]">
      {children}
    </span>
  );
}

export default function FullPosSystemPage() {
  const hero = FULL_POS_IMAGES.hero;
  const software = FULL_POS_IMAGES.softwareIcons;
  const dashboard = FULL_POS_IMAGES.dashboard;

  return (
    <div className="overflow-x-hidden bg-white text-[#1a1a40]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 55% 55% at 78% 42%, rgba(59,130,246,0.14), transparent 70%), linear-gradient(180deg, #ffffff 0%, #f7faff 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] lg:gap-8 lg:px-8 lg:py-14">
          <div className="animate-fade-up max-w-xl min-w-0">
            <Pill>Merchant Services</Pill>
            <h1 className="mt-4 font-heading text-[2.15rem] font-extrabold leading-[1.12] tracking-tight text-[#1a1a40] sm:text-5xl lg:text-[3.15rem]">
              Full POS
              <br />
              System
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-[#4b5568] sm:text-base">
              A complete solution to help your business run faster, easier, and
              more efficiently.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#6b7280] sm:text-[15px]">
              Everything you need in one system — register, cash drawer, receipt
              printer, customer display and powerful built-in payment options.
            </p>
            <div className="mt-7">
              <QuoteCtaLink />
            </div>
          </div>

          <div className="relative w-full min-w-0 overflow-hidden">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#e8f2ff] blur-[2px]"
              aria-hidden="true"
            />
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              quality={95}
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="relative z-[1] mx-auto object-contain"
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#f3f8ff] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-[#e4ecf7] bg-white p-5 shadow-[0_10px_28px_-22px_rgba(15,23,42,0.35)] sm:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <GreenCheckBadge />
                  <div className="flex h-10 w-10 items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h2 className="mt-4 font-heading text-base font-extrabold text-[#1a1a40] sm:text-[1.05rem]">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#5b6475]">
                  {feature.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Payment rainbow */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-[#eef5ff] px-5 py-7 sm:px-8 sm:py-8 lg:px-10">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-10">
              <div>
                <div className="mb-3 flex items-start gap-3">
                  <GreenCheckBadge className="mt-0.5 shrink-0" />
                  <IconCard className="h-9 w-9 shrink-0 text-[#1d4ed8]" />
                </div>
                <h2 className="font-heading text-xl font-extrabold text-[#1a1a40] sm:text-2xl">
                  All the Colors of the Payment Rainbow
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-[#5b6475] sm:text-[15px]">
                  Let your customers pay how they want to pay. Swipe, dip, or
                  tap. Credit or debit. NFC payments including Apple Pay, Google
                  Pay, WeChat Pay, Alipay and more.
                </p>
              </div>
              <PaymentMarks />
            </div>
          </div>
        </div>
      </section>

      {/* Software */}
      <section className="bg-[#f7faff] py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="min-w-0 overflow-hidden rounded-2xl border border-[#e4ecf7] bg-white p-5 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.4)] sm:p-7">
            <Image
              src={software.src}
              alt={software.alt}
              width={software.width}
              height={software.height}
              quality={92}
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-contain"
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />
          </div>
          <div className="max-w-lg min-w-0 lg:justify-self-start">
            <Pill>Built for Your Business</Pill>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-[#1a1a40] sm:text-[2.35rem]">
              Software Tailored
              <br />
              to Your Needs
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5b6475] sm:text-[15px]">
              A complete POS system with powerful built-in tools and access to
              hundreds of applications. Customize your system to fit your
              business, with everything you need to run operations, manage your
              team, and drive growth.
            </p>
            <div className="mt-7">
              <QuoteCtaLink />
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="bg-white py-12 sm:py-14">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8">
          <div className="order-2 max-w-lg min-w-0 lg:order-1">
            <Pill>Real Time Insights</Pill>
            <h2 className="mt-4 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-[#1a1a40] sm:text-[2.35rem]">
              Unlock Your
              <br />
              Dashboard
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5b6475] sm:text-[15px]">
              Track sales, view reports, manage employees, update inventory and
              more — all from a computer or mobile device. Your business,
              anytime, anywhere.
            </p>
            <div className="mt-7">
              <QuoteCtaLink />
            </div>
          </div>
          <div className="order-1 min-w-0 overflow-hidden rounded-2xl lg:order-2">
            <Image
              src={dashboard.src}
              alt={dashboard.alt}
              width={dashboard.width}
              height={dashboard.height}
              quality={92}
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-contain"
              style={{ width: "100%", height: "auto", maxWidth: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-[#f3f8ff] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-extrabold text-[#1a1a40] sm:text-3xl">
              System Specifications
            </h2>
            <p className="mt-2 text-sm text-[#5b6475] sm:text-base">
              Built for performance, reliability, and security.
            </p>
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {SPECS.slice(0, 4).map((spec) => (
              <SpecCard key={spec.title} {...spec} />
            ))}
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {SPECS.slice(4).map((spec) => (
              <SpecCard key={spec.title} {...spec} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col items-start gap-6 rounded-2xl px-6 py-7 sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-8 lg:px-10"
            style={{
              background: "linear-gradient(90deg, #3730a3 0%, #4f46e5 45%, #3b82f6 100%)",
            }}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/15 text-white">
              <IconStorefront className="h-8 w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-heading text-xl font-extrabold text-white sm:text-2xl">
                Ready to Upgrade Your Business?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
                Get a personalized quote on the Full POS System today and see
                how Smart Quotes LLC can help you save.
              </p>
            </div>
            <QuoteCtaLink tone="onGradient" className="w-full sm:w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}

function SpecCard({
  title,
  copy,
  icon,
}: {
  title: string;
  copy: string;
  icon: ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-[#e4ecf7] bg-white p-4 shadow-[0_8px_22px_-20px_rgba(15,23,42,0.3)] sm:p-5">
      <div className="mb-3">{icon}</div>
      <h3 className="font-heading text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#1a1a40]">
        {title}
      </h3>
      <p className="mt-2 text-xs leading-relaxed text-[#5b6475] sm:text-[13px]">
        {copy}
      </p>
    </article>
  );
}
