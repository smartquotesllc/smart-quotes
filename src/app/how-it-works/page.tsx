import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { HowItWorksFaq } from "@/components/how-it-works/HowItWorksFaq";
import { HowItWorksHeroCollage } from "@/components/how-it-works/HowItWorksHeroCollage";

import { SERVICE_IMAGES } from "@/lib/service-images";

export const metadata: Metadata = {
  title: "How the Process Works",
  description:
    "See how getting a Smart Quote works — choose a service, tell us what you need, review options with a specialist, and learn about qualifying vacation-stay incentives.",
};

const STEPS = [
  {
    step: "01",
    title: "Choose Your Service",
    description:
      "Select Xfinity Residential, Comcast Business, or Merchant Services to get started.",
    href: "/services",
    cta: "Explore Services →",
  },
  {
    step: "02",
    title: "Tell Us What You Need",
    description:
      "Complete a short Smart Quote form so we can understand your goals. Your information is handled according to our Privacy & Data Handling policy.",
    href: "/privacy",
    cta: "Privacy & Data Handling →",
  },
  {
    step: "03",
    title: "A Specialist Reviews Your Request",
    description:
      "A Smart Quotes specialist reviews your submission and follows up with next steps — no pressure.",
  },
  {
    step: "04",
    title: "Review Your Available Options",
    description:
      "Compare the options presented for your request. Eligible customers may also receive vacation-incentive instructions.",
    callout:
      "You’re in control — requesting a quote does not obligate you to purchase service.",
  },
] as const;

const SERVICE_CARDS = [
  {
    title: "Xfinity Residential",
    description: "Internet. Mobile. Streaming. Connected solutions for your home.",
    href: "/services/xfinity-residential",
    cta: "Start Residential Quote →",
    ...SERVICE_IMAGES.xfinityPrimary,
  },
  {
    title: "Comcast Business",
    description: "Reliable solutions to keep your business moving forward.",
    href: "/quote/comcast-business",
    cta: "Start Business Quote →",
    ...SERVICE_IMAGES.comcast,
  },
  {
    title: "Merchant Services",
    description: "Modern payment solutions for businesses of every size.",
    href: "/services/merchant-services",
    cta: "Start Merchant Quote →",
    ...SERVICE_IMAGES.merchantCard,
  },
] as const;

const AFTER_SUBMIT = [
  "Request Submitted",
  "Smart Quotes Review",
  "Specialist Follow-Up",
  "Quote / Options Presented",
  "Incentive Instructions Sent (If Eligible)",
] as const;

const WHY = [
  {
    title: "No Obligation to Purchase",
    detail: "Explore options with a clear, pressure-free quote process.",
    icon: "check" as const,
  },
  {
    title: "Real Specialist Support",
    detail: "Talk with people who understand the services you requested.",
    icon: "people" as const,
  },
  {
    title: "Your Information Is Protected",
    detail: "We handle quote details carefully under our Privacy & Data Handling policy.",
    icon: "lock" as const,
  },
] as const;

const INCENTIVE_STEPS = [
  { title: "Qualify", detail: "Submit a qualifying Smart Quote request." },
  { title: "Receive", detail: "Eligible customers get incentive instructions." },
  { title: "Activate", detail: "Follow program terms to redeem your stay." },
] as const;

function WhyIcon({ icon }: { icon: "check" | "people" | "lock" }) {
  const common = "h-7 w-7 text-sq-purple";
  if (icon === "check") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="m8 12 2.8 2.8L16.5 9"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
  if (icon === "people") {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M3.5 18.5c.8-2.8 2.9-4.2 5.5-4.2s4.7 1.4 5.5 4.2M14 14.5c1.7 0 3.2.7 4 2.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" aria-hidden="true">
      <rect x="6" y="10" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M8.5 10V7.5a3.5 3.5 0 0 1 7 0V10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-sq-border bg-gradient-to-br from-[#f7f8fc] via-white to-[#eef2ff]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20">
          <div>
            <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple">
              Smart Quotes LLC
            </p>
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-sq-ink sm:text-5xl lg:text-[3.25rem]">
              Getting a Smart Quote Is{" "}
              <span className="text-sq-purple">Simple.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sq-gray sm:text-lg">
              Tell us what you&apos;re looking for, connect with a Smart Quotes
              specialist, review your available options, and — if eligible —
              receive vacation-stay incentive instructions.
            </p>
            <div className="mt-8">
              <Button href="/quote" size="lg">
                Get a Smart Quote →
              </Button>
            </div>
            <p className="mt-4 text-sm text-sq-gray">
              Requesting a quote does not obligate you to purchase service.
            </p>
          </div>

          <HowItWorksHeroCollage />
        </div>
      </section>

      {/* Process steps */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-3xl">
            How the Smart Quotes Process Works
          </h2>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step) => (
              <li
                key={step.step}
                className="rounded-2xl border border-sq-border/80 bg-white p-6 shadow-[0_12px_32px_-22px_rgba(10,10,18,0.35)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#3d1abc] to-[#5a2cff] font-heading text-sm font-bold text-white">
                  {step.step}
                </div>
                <h3 className="font-heading text-base font-extrabold text-sq-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sq-gray">
                  {step.description}
                </p>
                {"callout" in step && step.callout ? (
                  <p className="mt-4 rounded-lg bg-sq-soft px-3 py-3 text-xs font-semibold leading-relaxed text-sq-purple">
                    {step.callout}
                  </p>
                ) : null}
                {"href" in step && step.href ? (
                  <Link
                    href={step.href}
                    className="mt-4 inline-flex font-heading text-xs font-bold uppercase tracking-[0.08em] text-sq-purple hover:text-sq-purple-hover"
                  >
                    {step.cta}
                  </Link>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Service cards — full approved images, contain */}
      <section className="bg-sq-gray-light py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold text-sq-ink sm:text-3xl">
            One Process. Different Solutions.
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {SERVICE_CARDS.map((card) => (
              <article
                key={card.title}
                className="flex h-full flex-col rounded-2xl border border-sq-border/80 bg-white shadow-[0_14px_36px_-24px_rgba(10,10,18,0.4)]"
              >
                <div className="flex items-center justify-center rounded-t-2xl bg-[#f3f6fb] p-4">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="h-auto w-full object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 text-center">
                  <h3 className="font-heading text-lg font-extrabold uppercase tracking-[0.04em] text-sq-ink">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm text-sq-gray">{card.description}</p>
                  <Link
                    href={card.href}
                    className="mt-5 inline-flex h-11 items-center justify-center rounded-md px-5 font-heading text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:brightness-110"
                    style={{
                      background:
                        "linear-gradient(135deg, #12081f 0%, #2a1458 42%, #5a2cff 100%)",
                    }}
                  >
                    {card.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* After submit */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-3xl">
            What Happens After You Submit?
          </h2>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {AFTER_SUBMIT.map((title, index) => (
              <li
                key={title}
                className="rounded-xl border border-sq-border/70 bg-white px-4 py-5 text-center shadow-[0_10px_28px_-22px_rgba(10,10,18,0.3)]"
              >
                <span className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#3d1abc] to-[#5a2cff] font-heading text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="font-heading text-sm font-bold text-sq-ink">{title}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Why */}
      <section className="bg-sq-gray-light py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-3xl">
            Why Use Smart Quotes?
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {WHY.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-sq-border/80 bg-white px-6 py-7 text-center"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-sq-soft">
                  <WhyIcon icon={item.icon} />
                </div>
                <h3 className="font-heading text-base font-extrabold text-sq-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sq-gray">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Vacation incentive — resort image fully visible */}
      <section aria-labelledby="process-vacation-heading">
        <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-4 py-14 sm:px-6 sm:py-16 lg:grid-cols-2 lg:px-8">
          <div className="rounded-2xl bg-[#0b1a2a] p-2 sm:rounded-l-2xl sm:rounded-r-none lg:rounded-l-2xl lg:rounded-r-none">
            <Image
              src="/images/services/vacation-beach.png"
              alt="Tropical resort pool and palm trees at dusk"
              width={1536}
              height={1024}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>
          <div className="flex flex-col justify-center rounded-2xl border border-sq-border bg-white p-6 shadow-sm sm:p-8 lg:rounded-l-none lg:rounded-r-2xl">
            <p className="mb-2 font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple">
              Smart Quote Incentive
            </p>
            <h2
              id="process-vacation-heading"
              className="font-heading text-2xl font-extrabold text-sq-ink sm:text-3xl"
            >
              Your Quote May Come With a Vacation-Stay Incentive
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-sq-gray sm:text-base">
              Qualifying quote requests may receive a complimentary vacation-stay
              incentive at participating hotels and resorts. Airfare is not
              included.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {INCENTIVE_STEPS.map((step) => (
                <div key={step.title} className="rounded-lg bg-sq-soft px-3 py-3">
                  <p className="font-heading text-xs font-extrabold uppercase tracking-[0.08em] text-sq-purple">
                    {step.title}
                  </p>
                  <p className="mt-1 text-xs text-sq-gray">{step.detail}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button href="/quote">Get a Smart Quote →</Button>
              <Button href="/vacation-terms" variant="outline">
                Vacation Redemption Terms →
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12 lg:px-8">
          <div>
            <h2 className="font-heading text-2xl font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-3xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-sq-gray sm:text-base">
              Quick answers about the Smart Quote process, follow-up, and vacation
              incentives.
            </p>
          </div>
          <HowItWorksFaq />
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-20">
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, #080B22 0%, #11184A 45%, #5a2cff 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Ready when you are
          </p>
          <h2 className="font-heading text-3xl font-extrabold text-white sm:text-4xl">
            Let&apos;s Find the Right Option for You.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/quote" size="lg" variant="white">
              Get a Smart Quote →
            </Button>
            <Button href="/services" size="lg" variant="secondary">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
