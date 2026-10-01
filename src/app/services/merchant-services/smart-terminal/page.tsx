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

const FEATURES: ReactNode[] = [
  <>
    7” touchscreen with
    <br />
    Android software
  </>,
  <>
    Customer-facing
    <br />
    display
  </>,
  <>
    4G and WiFi connectivity
    <br />
    or ethernet connectivity
    <br />
    (with dock)
  </>,
  <>
    Built-in receipt printer
    <br />
    and barcode scanner
  </>,
];

const CAPABILITIES: { label: string; icon: ReactNode }[] = [
  {
    label: "Contactless",
    icon: <IconContactless className="h-7 w-7 text-[#254cff]" />,
  },
  { label: "EMV", icon: <IconEmv className="h-7 w-7 text-[#254cff]" /> },
  { label: "EBT", icon: <IconEbt className="h-7 w-7 text-[#254cff]" /> },
  {
    label: "PIN Debit",
    icon: <IconPinDebit className="h-7 w-7 text-[#254cff]" />,
  },
  {
    label: "Magstripe",
    icon: <IconMagstripe className="h-7 w-7 text-[#254cff]" />,
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

function FeatureItem({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-start gap-4">
      <IconCheckOutline className="mt-[2px]" />
      <span className="text-[14px] font-semibold leading-[1.4] text-white">
        {children}
      </span>
    </div>
  );
}

function PaymentCapability({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="flex min-w-0 flex-col items-center text-center">
      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#f0edff] text-[#254cff] md:h-[68px] md:w-[68px]">
        {children}
      </div>
      <span className="mt-3 text-[11px] font-bold text-[#151a32] sm:text-[12px] md:text-[13px]">
        {label}
      </span>
    </div>
  );
}

export default function SmartFlexPage() {
  const hero = SMART_TERMINAL_IMAGES.hero;
  const feature = SMART_TERMINAL_IMAGES.feature;

  return (
    <div className="w-full overflow-x-hidden bg-white text-[#0d1233]">
      {/* =====================================================
          HERO — two columns from md (768px)
      ====================================================== */}
      <section className="relative overflow-hidden bg-[linear-gradient(115deg,#ffffff_0%,#faf9ff_35%,#eee9ff_68%,#d9d8ff_100%)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-8%] top-[-18%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,#9a72ff_0%,#9184ff_34%,#91adff_56%,rgba(255,255,255,0)_72%)] opacity-55"
        />

        <div className="relative z-10 mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-8 px-6 py-10 md:grid-cols-[0.94fr_1.06fr] md:gap-6 md:px-8 md:py-8 lg:px-10 lg:py-10">
          {/* LEFT */}
          <div className="relative z-20 max-w-[520px]">
            <div className="mb-4 inline-flex rounded-full bg-[#e9e5ff] px-4 py-2 text-[11px] font-extrabold tracking-[0.08em] text-[#20264c]">
              MERCHANT SERVICES
            </div>

            <h1 className="font-heading text-[46px] font-extrabold leading-[0.98] tracking-[-0.04em] md:text-[50px] lg:text-[58px]">
              <span className="text-[#0c102e]">Smart </span>
              <span className="bg-gradient-to-r from-[#7838ff] via-[#593fff] to-[#246aff] bg-clip-text text-transparent">
                Flex
              </span>
            </h1>

            <h2 className="mt-6 max-w-[500px] text-[19px] font-extrabold leading-[1.35] text-[#131833] md:text-[18px] lg:text-[20px]">
              A powerful, all-in-one smart terminal
              <br className="hidden md:block" /> designed to keep your business
              moving.
            </h2>

            <p className="mt-5 max-w-[510px] text-[15px] leading-[1.55] text-[#52586d] md:text-[14px] lg:text-[15px]">
              It&apos;s a smart terminal and a POS terminal in one. Get the
              flexibility you need to accept credit card payments anywhere in or
              around your store.
            </p>

            <QuoteCtaLink className="mt-7 min-h-[52px] px-8 text-[13px] tracking-[0.04em] shadow-[0_12px_28px_rgba(84,56,255,0.24)]">
              GET A SMART QUOTE
              <span className="ml-3">→</span>
            </QuoteCtaLink>
          </div>

          {/* RIGHT PRODUCT */}
          <div className="relative z-20 flex min-h-[350px] items-end justify-center md:min-h-[360px] md:justify-end lg:min-h-[390px]">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              priority
              unoptimized
              className="block h-[360px] w-auto max-h-[390px] max-w-[78%] object-contain md:h-[380px] md:max-w-[82%] lg:h-[410px] lg:max-h-[430px] lg:max-w-[88%]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          BREADCRUMB
      ====================================================== */}
      <section className="border-b border-[#f0f1f7] bg-white">
        <nav
          aria-label="Breadcrumb"
          className="mx-auto flex max-w-[1180px] items-center gap-3 px-6 py-5 text-[12px] text-[#8b92ab] md:px-8 lg:px-10"
        >
          <Link href="/services" className="transition hover:text-[#663cff]">
            Services
          </Link>
          <span aria-hidden="true">›</span>
          <Link
            href="/services/merchant-services"
            className="transition hover:text-[#663cff]"
          >
            Merchant Services
          </Link>
          <span aria-hidden="true">›</span>
          <span className="text-[#454d6a]">Smart Flex</span>
        </nav>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[980px] px-6 py-12 text-center md:py-10 lg:py-12">
          <h2 className="font-heading text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#111630] md:text-[34px] lg:text-[38px]">
            Payment processing doesn&apos;t
            <br className="hidden sm:block" />
            get any more{" "}
            <span className="bg-gradient-to-r from-[#7838ff] via-[#593fff] to-[#246aff] bg-clip-text text-transparent">
              flexible
            </span>{" "}
            than this.
          </h2>

          <p className="mx-auto mt-5 max-w-[880px] text-[14px] leading-[1.65] text-[#656b7f] md:text-[13px] lg:text-[14px]">
            Can&apos;t decide between a handheld smart terminal and a full POS
            terminal? With the Smart Flex from Smart Quotes LLC, you don&apos;t
            have to. It&apos;s the hybrid terminal you need to accept payments
            at the counter, at the table, and on the go. Best of all, it comes
            preloaded with the Smart Flex app.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN FEATURE CARD — two columns from md
      ====================================================== */}
      <section className="bg-white px-5 pb-12 md:px-8 lg:px-10">
        <div className="relative mx-auto grid max-w-[1110px] grid-cols-1 overflow-hidden rounded-[22px] bg-[linear-gradient(120deg,#7439ff_0%,#3157ff_47%,#8b54ff_100%)] md:min-h-[445px] md:grid-cols-[1.12fr_0.88fr] lg:min-h-[470px]">
          <div
            aria-hidden="true"
            className="absolute right-[-120px] top-[-160px] h-[460px] w-[460px] rounded-full bg-white/10"
          />

          {/* CONTENT */}
          <div className="relative z-10 px-7 py-8 text-white md:px-8 md:py-8 lg:px-10 lg:py-10">
            <h2 className="font-heading text-[31px] font-extrabold leading-[1.08] tracking-[-0.03em] md:text-[34px] lg:text-[40px]">
              A POS flexible enough
              <br />
              to do it all.
            </h2>

            <p className="mt-5 max-w-[570px] text-[14px] leading-[1.55] text-white/95 md:text-[13px] lg:text-[14px]">
              The Smart Flex is the smart credit card terminal for virtually
              every checkout scenario. Compact yet powerful and boasting ports
              for printers and more, it&apos;s the portable POS terminal that
              adapts to any payment situation.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              {FEATURES.map((item, index) => (
                <FeatureItem key={index}>{item}</FeatureItem>
              ))}
            </div>
          </div>

          {/* PRODUCT */}
          <div className="relative z-10 flex min-h-[350px] items-end justify-center md:min-h-0 md:justify-end">
            <Image
              src={feature.src}
              alt={feature.alt}
              width={feature.width}
              height={feature.height}
              unoptimized
              className="block h-[360px] w-auto max-h-[390px] max-w-[78%] object-contain md:absolute md:bottom-[-8px] md:right-[10px] md:h-[390px] md:max-h-[390px] md:max-w-[95%] lg:right-[15px] lg:h-[420px] lg:max-h-[430px]"
            />
          </div>
        </div>
      </section>

      {/* =====================================================
          POWERFUL MEETS PORTABLE — 5 icons in one row
      ====================================================== */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1080px] px-6 pb-12 text-center md:px-8">
          <h2 className="font-heading text-[29px] font-extrabold tracking-[-0.03em] text-[#111630] md:text-[32px] lg:text-[36px]">
            Powerful meets portable.
          </h2>

          <p className="mx-auto mt-4 max-w-[940px] text-[13px] leading-[1.55] text-[#666c7e]">
            The Smart Flex is ideal for any small business that wants a smart
            credit card terminal that delivers maximum flexibility. Newly
            upgraded, it offers increased performance and battery life,
            higher-quality displays, and a more compact design. It also
            integrates seamlessly with Smart Quotes LLC&apos;s back-office
            management. Get ready to accept all payment types, including mobile
            payments, on a single device.
          </p>

          <div className="mt-8 grid grid-cols-5 gap-2 md:gap-6">
            {CAPABILITIES.map((cap) => (
              <PaymentCapability key={cap.label} label={cap.label}>
                {cap.icon}
              </PaymentCapability>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          BUSINESS TYPES — two columns from md
      ====================================================== */}
      <section className="bg-white px-5 pb-12 md:px-8 lg:px-10">
        <div className="mx-auto grid max-w-[1110px] grid-cols-1 overflow-hidden rounded-[22px] bg-[linear-gradient(120deg,#8245ff_0%,#3157ff_48%,#7a50ff_100%)] px-7 py-9 text-white md:grid-cols-[1.15fr_0.85fr] md:px-10 md:py-9 lg:px-11 lg:py-10">
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-[34px] font-extrabold leading-[1.08] tracking-[-0.03em] md:text-[36px] lg:text-[43px]">
              A smart credit
              <br />
              card terminal for
              <br />
              smarter business.
            </h2>

            <p className="mt-5 max-w-[520px] text-[13px] leading-[1.55] text-white/95">
              Smart Quotes LLC&apos;s Smart Flex terminal comes pre-programmed
              for your small business, delivering a frictionless payment
              experience. Process payments confidently with a partner you can
              trust.
            </p>
          </div>

          <ul className="mt-8 md:mt-0 md:pl-10">
            {BUSINESSES.map((biz, index) => {
              const last = index === BUSINESSES.length - 1;
              return (
                <li
                  key={biz.label}
                  className={`flex min-h-[58px] items-center gap-4 ${last ? "" : "border-b border-white/45"}`}
                >
                  <div className="flex h-8 w-8 items-center justify-center text-white">
                    {biz.icon}
                  </div>
                  <span className="flex-1 text-[15px] font-semibold">
                    {biz.label}
                  </span>
                  <IconChevron className="h-4 w-4 shrink-0 text-white" />
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
}
