import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { COMPANY } from "@/lib/company";
import { TURFQUEST_ONBOARD_URL } from "@/lib/turfquest";

export const metadata: Metadata = {
  title: "Become an Agent",
  description:
    "Build your future as an independent sales agent with Smart Quotes LLC. Apply through our official TurfQuest onboarding portal.",
};

const HERO_BULLETS = [
  "Performance-based earning opportunities",
  "Professional onboarding and sales support",
  "Access to approved sales systems and resources",
  "Residential and business sales opportunities",
  "Team contests, recognition, and advancement opportunities",
] as const;

const EXPECTATIONS = [
  {
    title: "Independent contractor (1099)",
    copy: "Work as an independent contractor. You set how you engage the opportunity within program guidelines — this is not a W-2 employment offer.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M7 3.5h7.5L19 8v12.5H7V3.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M14.5 3.5V8H19" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path
          d="M10 12h4M10 15.5h4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Customer-focused quoting",
    copy: "Help individuals and businesses explore Merchant Services, Xfinity Residential, and Comcast Business through a clear quote-first process.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M4.5 18.5c.8-2.6 2.6-4 4.5-4s3.7 1.4 4.5 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M13.2 14.2c.7-.4 1.6-.6 2.8-.6 2 0 3.6 1.2 4.3 3.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Guided onboarding",
    copy: "Start your application through our secure TurfQuest onboarding portal. Program details and requirements are confirmed during that process.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M12 8v4.2l2.8 1.6"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
] as const;

function ExternalIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" aria-hidden="true">
      <path
        d="M8 5H5.5A1.5 1.5 0 0 0 4 6.5v8A1.5 1.5 0 0 0 5.5 16h8a1.5 1.5 0 0 0 1.5-1.5V12"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M11 4h5v5M16 4l-7 7"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PurpleCheck() {
  return (
    <span
      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sq-purple text-white"
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
        <path
          d="M4.5 10.5 8 14l7.5-8"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function BecomeAnAgentPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-20">
          <div className="animate-fade-up order-2 min-w-0 lg:order-1">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-sq-purple">
              Join the Smart Quotes Team
            </p>
            <h1 className="mt-3 font-heading text-3xl font-extrabold leading-tight tracking-tight text-sq-ink sm:text-4xl lg:text-[2.75rem]">
              Build Your Future as an
              <br className="hidden sm:block" /> Independent Sales Agent
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-sq-gray sm:text-[1.05rem]">
              Smart Quotes LLC is expanding its field sales team. We are seeking
              motivated, professional independent contractors who are ready to
              represent leading residential and business connectivity solutions,
              develop valuable sales experience, and earn performance-based
              compensation.
            </p>
            <ul className="mt-7 space-y-3">
              {HERO_BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-sq-ink">
                  <PurpleCheck />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <a
                href={TURFQUEST_ONBOARD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-sq-purple px-8 font-heading text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-sq-purple-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-purple"
              >
                Become an Agent
                <ExternalIcon />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
              <p className="mt-4 flex items-start gap-2 text-sm text-sq-gray">
                <svg
                  viewBox="0 0 20 20"
                  className="mt-0.5 h-4 w-4 shrink-0 text-sq-gray"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M10 3.5 3.5 6.5V10c0 3.8 2.5 6.7 6.5 7.8 4-1.1 6.5-4 6.5-7.8V6.5L10 3.5Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 10.2 9.5 11.7 12.5 8.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>
                  You will be securely redirected to our official TurfQuest
                  onboarding portal.
                </span>
              </p>
            </div>
          </div>

          <div className="animate-fade-scale order-1 w-full lg:order-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/careers/sq-team.jpg"
                alt="Smart Quotes independent sales agents in branded polos holding tablets outdoors"
                width={894}
                height={740}
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Compliance disclosure */}
      <section className="border-y border-sq-border/60 bg-white py-8 sm:py-10" aria-label="Contractor disclosure">
        <div className="mx-auto max-w-3xl space-y-4 px-4 text-center text-sm leading-relaxed text-sq-gray sm:px-6">
          <p>
            Smart Quotes LLC operates as an authorized contractor for eligible
            Comcast residential sales activities and an authorized connector for
            Comcast Business opportunities.
          </p>
          <p>
            Independent sales agents contract with Smart Quotes LLC and are not
            employees of Comcast or Xfinity. Brand names and trademarks belong to
            their respective owners.
          </p>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-sq-gray-light py-14 sm:py-20" aria-labelledby="what-to-expect-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="what-to-expect-heading"
            className="text-center font-heading text-2xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:text-3xl"
          >
            What to Expect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-sq-gray sm:text-base">
            This page describes a contractor recruitment path. Compensation,
            territories, and eligibility are determined by the program — not by
            marketing claims on this website.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {EXPECTATIONS.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-sq-border/80 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(10,10,18,0.35)] sm:p-7"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sq-purple text-white">
                  {item.icon}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-sq-ink sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sq-gray">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to apply */}
      <section className="bg-white py-14 sm:py-16" aria-labelledby="ready-to-apply-heading">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2
            id="ready-to-apply-heading"
            className="font-heading text-2xl font-extrabold text-sq-ink sm:text-3xl"
          >
            Ready to apply?
          </h2>
          <p className="mt-4 text-base text-sq-gray">
            Continue to the TurfQuest onboarding form to submit your contractor
            application. For general questions, email{" "}
            <a
              href={COMPANY.emailHref}
              className="font-semibold text-sq-purple hover:text-sq-purple-hover"
            >
              {COMPANY.email}
            </a>{" "}
            or call{" "}
            <a
              href={COMPANY.phoneHref}
              className="font-semibold text-sq-purple hover:text-sq-purple-hover"
            >
              {COMPANY.phoneDisplay}
            </a>
            .
          </p>
          <div className="mt-8">
            <a
              href={TURFQUEST_ONBOARD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-md bg-sq-purple px-8 font-heading text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-sq-purple-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-purple"
            >
              Start Contractor Application
              <ExternalIcon />
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </div>
          <p className="mt-6 text-sm text-sq-gray">
            Looking for customer solutions instead?{" "}
            <Link
              href="/quote"
              className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
            >
              Request a Smart Quote
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
