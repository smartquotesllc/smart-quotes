import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { QuoteCtaLink } from "@/components/merchant/smart-terminal/QuoteCtaLink";
import {
  IconBag,
  IconBriefcase,
  IconCheckOutline,
  IconChevron,
  IconContactless,
  IconEbt,
  IconEmv,
  IconHandshake,
  IconMagstripe,
  IconPinDebit,
  IconRestaurant,
  IconSpecialty,
} from "@/components/merchant/smart-terminal/SmartTerminalIcons";
import { SMART_TERMINAL_IMAGES } from "@/lib/smart-terminal-images";

export const metadata: Metadata = {
  title: "Smart Flex",
  description:
    "Smart Flex — a powerful, all-in-one smart terminal from Smart Quotes LLC. Request a personalized Smart Quote.",
};

const CHECKLIST_LEFT = [
  '7" touchscreen with\nAndroid software',
  "4G and WiFi connectivity\nor ethernet connectivity\n(with dock)",
] as const;

const CHECKLIST_RIGHT = [
  "Customer-facing\ndisplay",
  "Built-in receipt printer\nand barcode scanner",
] as const;

const CAPABILITIES: { label: string; icon: ReactNode }[] = [
  {
    label: "Contactless",
    icon: <IconContactless className="h-7 w-7 text-[#2457FF]" />,
  },
  { label: "EMV", icon: <IconEmv className="h-7 w-7 text-[#2457FF]" /> },
  { label: "EBT", icon: <IconEbt className="h-7 w-7 text-[#2457FF]" /> },
  {
    label: "PIN Debit",
    icon: <IconPinDebit className="h-7 w-7 text-[#2457FF]" />,
  },
  {
    label: "Magstripe",
    icon: <IconMagstripe className="h-7 w-7 text-[#2457FF]" />,
  },
];

const BUSINESSES: { label: string; icon: ReactNode }[] = [
  { label: "Retail", icon: <IconBag className="h-6 w-6 text-white" /> },
  {
    label: "Restaurant",
    icon: <IconRestaurant className="h-6 w-6 text-white" />,
  },
  {
    label: "Specialty",
    icon: <IconSpecialty className="h-6 w-6 text-white" />,
  },
  {
    label: "Big Business",
    icon: <IconBriefcase className="h-6 w-6 text-white" />,
  },
  {
    label: "Services",
    icon: <IconHandshake className="h-6 w-6 text-white" />,
  },
];

function GradientFlexText({ children }: { children: ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage: "linear-gradient(90deg, #7138FF 0%, #2457FF 100%)",
      }}
    >
      {children}
    </span>
  );
}

function GradientPanel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] ${className ?? ""}`}
      style={{
        background:
          "linear-gradient(105deg, #7138FF 0%, #315FFF 42%, #7C3DFF 78%, #965CFF 100%)",
      }}
    >
      <div
        className="pointer-events-none absolute -left-16 top-[-30%] h-[120%] w-[55%] rounded-full bg-white/10 blur-2xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-10 bottom-[-40%] h-[110%] w-[50%] rounded-full bg-[#EDE8FF]/25 blur-2xl"
        aria-hidden="true"
      />
      <div className="relative z-[1]">{children}</div>
    </div>
  );
}

export default function SmartFlexPage() {
  const hero = SMART_TERMINAL_IMAGES.hero;
  const feature = SMART_TERMINAL_IMAGES.feature;

  return (
    <div className="overflow-x-hidden bg-white text-[#0B1033]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background: `
              radial-gradient(ellipse 42% 70% at 82% 42%, rgba(150,92,255,0.38), transparent 68%),
              radial-gradient(ellipse 36% 55% at 70% 55%, rgba(36,87,255,0.18), transparent 70%),
              radial-gradient(ellipse 28% 45% at 92% 70%, rgba(237,232,255,0.9), transparent 65%),
              linear-gradient(180deg, #ffffff 0%, #faf9ff 100%)
            `,
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-12 lg:grid-cols-[minmax(0,0.52fr)_minmax(0,0.48fr)] lg:gap-8 lg:px-8 lg:pb-4 lg:pt-14">
          <div className="relative z-[1] max-w-xl min-w-0">
            <span className="inline-flex rounded-full bg-[#EDE8FF] px-3.5 py-1.5 font-heading text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#0B1033] sm:text-[11px]">
              Merchant Services
            </span>
            <h1 className="mt-4 font-heading text-[2.6rem] font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-[3.5rem]">
              <span className="text-[#0B1033]">Smart </span>
              <GradientFlexText>Flex</GradientFlexText>
            </h1>
            <p className="mt-4 text-base font-bold leading-snug text-[#0B1033] sm:text-lg">
              A powerful, all-in-one smart terminal
              <br className="hidden sm:block" /> designed to keep your business
              moving.
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#606579] sm:text-[15px]">
              It&apos;s a smart terminal and a POS terminal in one. Get the
              flexibility you need to accept credit card payments anywhere in or
              around your store.
            </p>
            <div className="mt-7">
              <QuoteCtaLink />
            </div>
          </div>

          <div className="relative mx-auto w-full min-w-0 max-w-[300px] sm:max-w-[340px] lg:max-w-[380px] lg:translate-y-4">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              quality={92}
              sizes="(max-width: 768px) 300px, 380px"
              className="relative mx-auto block h-auto w-full max-w-full object-contain object-center drop-shadow-[0_24px_40px_rgba(17,21,47,0.18)]"
            />
          </div>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav
        aria-label="Breadcrumb"
        className="border-t border-[#eef0f8] bg-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-2 font-heading text-[12px] text-[#9aa3bd] sm:text-[13px]">
            <li>
              <Link href="/services" className="transition hover:text-[#7138FF]">
                Services
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li>
              <Link
                href="/services/merchant-services"
                className="transition hover:text-[#7138FF]"
              >
                Merchant Services
              </Link>
            </li>
            <li aria-hidden="true">&gt;</li>
            <li className="font-semibold text-[#7a84a3]">Smart Flex</li>
          </ol>
        </div>
      </nav>

      {/* Payment processing headline */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-[1.65rem] font-extrabold leading-[1.2] tracking-tight text-[#0B1033] sm:text-3xl lg:text-[2.35rem]">
            Payment processing doesn&apos;t
            <br />
            get any more <GradientFlexText>flexible</GradientFlexText> than this.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#606579] sm:text-[15px]">
            Can&apos;t decide between a handheld smart terminal and a full POS
            terminal? With the Smart Flex from Smart Quotes LLC, you don&apos;t
            have to. It&apos;s the hybrid terminal you need to accept payments at
            the counter, at the table, and on the go. Best of all, it comes
            preloaded with the Smart Flex app.
          </p>
        </div>
      </section>

      {/* Large Smart Flex feature panel */}
      <section className="bg-white px-4 pb-12 sm:px-6 sm:pb-14 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GradientPanel className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.58fr)_minmax(0,0.42fr)] lg:gap-6">
              <div className="min-w-0 text-white">
                <h2 className="font-heading text-2xl font-extrabold leading-tight sm:text-3xl lg:text-[2.2rem]">
                  A POS flexible enough
                  <br />
                  to do it all.
                </h2>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/95 sm:text-[15px]">
                  The Smart Flex is the smart credit card terminal for virtually
                  every checkout scenario. Compact yet powerful and boasting
                  ports for printers and more, it&apos;s the portable POS
                  terminal that adapts to any payment situation.
                </p>
                <div className="mt-7 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                  <ul className="space-y-4">
                    {CHECKLIST_LEFT.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <IconCheckOutline className="mt-0.5" />
                        <span className="whitespace-pre-line text-sm font-semibold leading-snug text-white sm:text-[15px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {CHECKLIST_RIGHT.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <IconCheckOutline className="mt-0.5" />
                        <span className="whitespace-pre-line text-sm font-semibold leading-snug text-white sm:text-[15px]">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative mx-auto w-full min-w-0 max-w-[260px] sm:max-w-[280px] lg:max-w-[300px] lg:justify-self-end">
                <Image
                  src={feature.src}
                  alt={feature.alt}
                  width={feature.width}
                  height={feature.height}
                  quality={92}
                  sizes="280px"
                  className="relative mx-auto block h-auto w-full max-w-full object-contain object-center drop-shadow-[0_20px_36px_rgba(11,16,51,0.28)]"
                />
              </div>
            </div>
          </GradientPanel>
        </div>
      </section>

      {/* Powerful meets portable */}
      <section className="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-2xl font-extrabold text-[#0B1033] sm:text-3xl">
            Powerful meets portable.
          </h2>
          <p className="mx-auto mt-4 text-sm leading-relaxed text-[#606579] sm:text-[15px]">
            The Smart Flex is ideal for any small business that wants a smart
            credit card terminal that delivers maximum flexibility. Newly
            upgraded, it offers increased performance and battery life,
            higher-quality displays, and a more compact design. It also
            integrates seamlessly with Smart Quotes LLC&apos;s back-office
            management. Get ready to accept all payment types, including mobile
            payments, on a single device.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap items-start justify-center gap-6 sm:gap-8 lg:gap-12">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.label}
              className="flex w-[4.75rem] flex-col items-center gap-2.5 sm:w-24"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDE8FF] sm:h-16 sm:w-16">
                {cap.icon}
              </div>
              <span className="text-center font-heading text-[11px] font-bold text-[#0B1033] sm:text-xs">
                {cap.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom business panel */}
      <section className="bg-white px-4 pb-12 pt-4 sm:px-6 sm:pb-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <GradientPanel className="px-6 py-8 sm:px-10 sm:py-10 lg:px-12 lg:py-12">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)] lg:gap-12">
              <div className="min-w-0 text-white">
                <h2 className="font-heading text-2xl font-extrabold leading-[1.15] sm:text-3xl lg:text-[2.25rem]">
                  A smart credit
                  <br />
                  card terminal for
                  <br />
                  smarter business.
                </h2>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/95 sm:text-[15px]">
                  Smart Quotes LLC&apos;s Smart Flex terminal comes
                  pre-programmed for your small business, delivering a
                  frictionless payment experience. Process payments confidently
                  with a partner you can trust.
                </p>
              </div>

              <ul className="min-w-0">
                {BUSINESSES.map((biz) => (
                  <li key={biz.label}>
                    <div className="flex items-center gap-4 border-b border-white/25 py-3.5 first:pt-0 last:border-b-0 last:pb-0">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                        {biz.icon}
                      </span>
                      <span className="flex-1 font-heading text-[15px] font-bold text-white sm:text-base">
                        {biz.label}
                      </span>
                      <IconChevron className="h-4 w-4 shrink-0 text-white" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </GradientPanel>
        </div>
      </section>
    </div>
  );
}
