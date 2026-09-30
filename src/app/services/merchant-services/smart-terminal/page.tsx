import type { Metadata } from "next";
import Image from "next/image";
import type { ReactNode } from "react";
import { QuoteCtaLink } from "@/components/merchant/smart-terminal/QuoteCtaLink";
import { PaymentMarks } from "@/components/merchant/smart-terminal/PaymentMarks";
import {
  IconBattery,
  IconCard,
  IconChart,
  IconCheckBox,
  IconContactless,
  IconDisplay,
  IconEbt,
  IconEmv,
  IconLightning,
  IconMagstripe,
  IconPinDebit,
  IconPortable,
  IconPrinter,
  IconShield,
  IconStorefront,
  IconTapPay,
  IconTouchscreen,
  IconWifi,
} from "@/components/merchant/smart-terminal/SmartTerminalIcons";
import { SMART_TERMINAL_IMAGES } from "@/lib/smart-terminal-images";

export const metadata: Metadata = {
  title: "Smart Terminal",
  description:
    "Smart Terminal — a powerful, all-in-one portable payment solution from Smart Quotes LLC. Request a personalized Smart Quote.",
};

const HIGHLIGHTS: { title: string; copy: string; icon: ReactNode }[] = [
  {
    title: "Portable & Powerful",
    copy: "Take payments anywhere in your store, at the table, curbside, or on the go.",
    icon: <IconTapPay className="h-9 w-9 text-[#2563eb]" />,
  },
  {
    title: "Fast & Easy to Use",
    copy: "Simple checkout process for you and your customers.",
    icon: <IconLightning className="h-9 w-9 text-[#2563eb]" />,
  },
  {
    title: "Secure & Reliable",
    copy: "Advanced security features to keep your business and customer data protected.",
    icon: <IconShield className="h-9 w-9 text-[#2563eb]" />,
  },
  {
    title: "Real-Time Insights",
    copy: "Track sales, inventory and more — right from your device or dashboard.",
    icon: <IconChart className="h-9 w-9 text-[#2563eb]" />,
  },
];

const CHECKLIST = [
  '7" Touchscreen with\nAndroid Software',
  "Customer-Facing Display",
  "4G and Wi-Fi Connectivity\nor Ethernet (with dock)",
  "Built-in Receipt Printer\nand Barcode Scanner",
] as const;

const CAPABILITIES: { label: string; icon: ReactNode }[] = [
  { label: "Contactless", icon: <IconContactless className="h-7 w-7 text-[#2563eb]" /> },
  { label: "EMV", icon: <IconEmv className="h-7 w-7 text-[#2563eb]" /> },
  { label: "EBT", icon: <IconEbt className="h-7 w-7 text-[#2563eb]" /> },
  { label: "PIN Debit", icon: <IconPinDebit className="h-7 w-7 text-[#2563eb]" /> },
  { label: "Magstripe", icon: <IconMagstripe className="h-7 w-7 text-[#2563eb]" /> },
];

const KEY_FEATURES: { title: string; copy: string; icon: ReactNode }[] = [
  {
    title: '7" Touchscreen',
    copy: '7" touchscreen with Android software',
    icon: <IconTouchscreen className="h-6 w-6 text-[#2563eb]" />,
  },
  {
    title: "Display",
    copy: "Customer-facing display",
    icon: <IconDisplay className="h-6 w-6 text-[#2563eb]" />,
  },
  {
    title: "Connectivity",
    copy: "4G and Wi-Fi connectivity or Ethernet (with dock)",
    icon: <IconWifi className="h-6 w-6 text-[#2563eb]" />,
  },
  {
    title: "Printer",
    copy: "Built-in receipt printer and barcode scanner",
    icon: <IconPrinter className="h-6 w-6 text-[#2563eb]" />,
  },
  {
    title: "Security",
    copy: "Advanced encryption, EMV chip support and secure logins",
    icon: <IconShield className="h-6 w-6 text-[#2563eb]" />,
  },
  {
    title: "Payments",
    copy: "Swipe, dip, or tap. Credit or debit. NFC payments including Apple Pay, Google Pay, WeChat Pay, Alipay and more.",
    icon: <IconCard className="h-6 w-6 text-[#2563eb]" />,
  },
  {
    title: "Battery Life",
    copy: "Long-lasting battery for all-day use",
    icon: <IconBattery className="h-6 w-6 text-[#2563eb]" />,
  },
  {
    title: "Portable Design",
    copy: "Lightweight and compact for maximum flexibility",
    icon: <IconPortable className="h-6 w-6 text-[#2563eb]" />,
  },
];

function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex rounded-full bg-[#eee6ff] px-3.5 py-1.5 font-heading text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#3730a3] sm:text-[11px]">
      {children}
    </span>
  );
}

export default function SmartTerminalPage() {
  const hero = SMART_TERMINAL_IMAGES.hero;
  const feature = SMART_TERMINAL_IMAGES.feature;

  return (
    <div className="overflow-x-hidden bg-white text-[#1a1a40]">
      {/* Hero */}
      <section className="relative">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 48% 62% at 78% 45%, rgba(167,139,250,0.22), transparent 68%), linear-gradient(180deg, #ffffff 0%, #f5f7ff 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-12 lg:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)] lg:gap-10 lg:px-8 lg:py-14">
          <div className="max-w-xl min-w-0">
            <Pill>Merchant Services</Pill>
            <h1 className="mt-4 font-heading text-[2.4rem] font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.4rem]">
              <span className="text-[#0f172a]">Smart</span>
              <br />
              <span className="text-[#2563eb]">Terminal</span>
            </h1>
            <p className="mt-4 text-base font-bold leading-snug text-[#1a1a40] sm:text-lg">
              A powerful, all-in-one payment solution
              <br className="hidden sm:block" /> designed to keep your business
              moving.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#475569] sm:text-[15px]">
              It&apos;s a smart terminal and a POS terminal in one. Get the
              flexibility you need to accept credit card payments anywhere in or
              around your store.
            </p>
            <div className="mt-7">
              <QuoteCtaLink />
            </div>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-[420px] lg:max-w-none">
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(196,181,253,0.45) 0%, rgba(219,234,254,0.35) 45%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              quality={92}
              sizes="(max-width: 768px) 320px, (max-width: 1024px) 420px, 48vw"
              className="relative mx-auto block h-auto w-full max-w-full object-contain object-center"
            />
          </div>
        </div>
      </section>

      {/* Four feature cards */}
      <section className="bg-white py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {HIGHLIGHTS.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#e8eef7] bg-white p-5 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.28)] sm:p-6"
              >
                <div className="mb-4">{item.icon}</div>
                <h2 className="font-heading text-[15px] font-extrabold text-[#0f172a] sm:text-base">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Payment methods */}
      <section className="bg-white pb-10 sm:pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[#e8eef7] bg-white px-5 py-6 shadow-[0_8px_24px_-18px_rgba(15,23,42,0.25)] sm:px-8 sm:py-7">
            <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-10">
              <div className="flex gap-4">
                <IconCard className="mt-0.5 h-10 w-10 shrink-0 text-[#2563eb]" />
                <div>
                  <h2 className="font-heading text-lg font-extrabold text-[#1e3a8a] sm:text-xl">
                    All the Ways Your Customers Want to Pay
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b] sm:text-[15px]">
                    Accept every type of payment. Swipe, dip, or tap. Credit or
                    debit, NFC payments including Apple Pay, Google Pay, WeChat
                    Pay, Alipay and more.
                  </p>
                </div>
              </div>
              <PaymentMarks />
            </div>
          </div>
        </div>
      </section>

      {/* A Smart Terminal for Every Business */}
      <section className="bg-white pb-12 sm:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="relative overflow-hidden rounded-[1.75rem] px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12"
            style={{
              background:
                "linear-gradient(115deg, #2563eb 0%, #4f46e5 48%, #7c3aed 100%)",
            }}
          >
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-6">
              <div className="relative z-[1] min-w-0 text-white">
                <h2 className="font-heading text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[2.15rem]">
                  A Smart Terminal
                  <br />
                  for Every Business
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/95 sm:text-[15px]">
                  Compact yet powerful, the Smart Terminal is built to handle
                  virtually every checkout scenario. From in-store to mobile
                  payments, it&apos;s the portable solution that adapts to your
                  business.
                </p>
                <ul className="mt-6 space-y-3">
                  {CHECKLIST.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <IconCheckBox className="mt-0.5" />
                      <span className="whitespace-pre-line text-sm font-semibold leading-snug text-white sm:text-[15px]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <QuoteCtaLink tone="onGradient" />
                </div>
              </div>

              <div className="relative mx-auto w-full min-w-0 max-w-[340px] lg:max-w-none lg:justify-self-end">
                <div
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20"
                  aria-hidden="true"
                />
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  quality={92}
                  sizes="(max-width: 1024px) 320px, 40vw"
                  className="relative mx-auto block h-auto w-full max-w-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Powerful Meets Portable */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-extrabold text-[#0f172a] sm:text-3xl">
            Powerful Meets Portable
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#64748b] sm:text-[15px]">
            Ideal for any business that wants a smart credit card terminal that
            delivers maximum flexibility. With an upgraded design, longer battery
            life, and a more compact form, it&apos;s everything you need to
            accept all payment types on a single device.
          </p>
        </div>
        <div className="mx-auto mt-9 flex max-w-4xl flex-wrap items-start justify-center gap-6 px-4 sm:gap-8 sm:px-6 lg:gap-10">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.label}
              className="flex w-[4.75rem] flex-col items-center gap-2.5 sm:w-24"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef2ff] sm:h-16 sm:w-16">
                {cap.icon}
              </div>
              <span className="text-center font-heading text-[11px] font-bold text-[#1a1a40] sm:text-xs">
                {cap.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#f3f6fc] py-12 sm:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-2xl font-extrabold text-[#0f172a] sm:text-3xl">
              Key Features
            </h2>
            <p className="mt-2 text-sm text-[#64748b] sm:text-base">
              Built for performance, reliability, and security.
            </p>
          </div>
          <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {KEY_FEATURES.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-[#e4ecf7] bg-white p-5 shadow-[0_8px_22px_-20px_rgba(15,23,42,0.3)]"
              >
                <div className="mb-3">{item.icon}</div>
                <h3 className="font-heading text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#0f172a]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b] sm:text-[13px]">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div
            className="flex flex-col items-start gap-6 rounded-2xl px-6 py-7 sm:flex-row sm:items-center sm:gap-8 sm:px-8 sm:py-8 lg:px-10"
            style={{
              background:
                "linear-gradient(90deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)",
            }}
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-white/40 text-white">
              <IconStorefront className="h-8 w-8" />
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="font-heading text-xl font-extrabold text-white sm:text-2xl">
                Ready to Take Payments Anywhere?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
                Get a personalized quote on the Smart Terminal today and see how
                Smart Quotes LLC can help you grow.
              </p>
            </div>
            <QuoteCtaLink tone="onGradient" className="w-full sm:w-auto" />
          </div>
        </div>
      </section>
    </div>
  );
}
