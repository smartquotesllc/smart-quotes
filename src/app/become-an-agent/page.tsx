import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Become an Agent",
  description:
    "Explore contractor opportunities with Smart Quotes LLC. Apply through our partner onboarding portal.",
};

const AGENT_APPLY_URL =
  "https://turfquest.io/onboard/572f48e516057659d89cc4b6a569ab99e9b4e601d0c804f4";

const HIGHLIGHTS = [
  {
    title: "Independent contractor (1099)",
    copy: "Work as an independent contractor. You set how you engage the opportunity within program guidelines — this is not a W-2 employment offer.",
  },
  {
    title: "Customer-focused quoting",
    copy: "Help individuals and businesses explore Merchant Services, Xfinity Residential, and Comcast Business through a clear quote-first process.",
  },
  {
    title: "Guided onboarding",
    copy: "Start your application through our secure TurfQuest onboarding portal. Program details and requirements are confirmed during that process.",
  },
];

export default function BecomeAnAgentPage() {
  return (
    <div className="bg-white">
      <section className="relative overflow-hidden bg-sq-navy text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse at 85% 20%, rgba(65,105,255,0.35), transparent 55%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/60">
            Careers &amp; contractors
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Become an Agent with {COMPANY.legalName}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
            Join Smart Quotes as an independent contractor and help customers
            request quotes for solutions that fit their home or business. Apply
            through our official onboarding partner — we do not guarantee income,
            hours, or employment status.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={AGENT_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-sq-purple px-8 font-heading text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-sq-purple-hover"
            >
              Apply on TurfQuest
            </a>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us First
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-sq-gray-light py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-heading text-2xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:text-3xl">
            What to expect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-sq-gray sm:text-base">
            This page describes a contractor recruitment path. Compensation,
            territories, and eligibility are determined by the program — not by
            marketing claims on this website.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {HIGHLIGHTS.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-sq-border/80 bg-white p-6 shadow-[0_10px_30px_-18px_rgba(10,10,18,0.35)]"
              >
                <h3 className="font-heading text-base font-bold text-sq-ink">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sq-gray">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-extrabold text-sq-ink sm:text-3xl">
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
              href={AGENT_APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center rounded-md bg-sq-purple px-8 font-heading text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-sq-purple-hover"
            >
              Start Contractor Application
            </a>
          </div>
          <p className="mt-6 text-xs text-sq-gray">
            Looking for customer solutions instead?{" "}
            <Link
              href="/quote"
              className="font-semibold text-sq-purple underline underline-offset-2"
            >
              Request a free quote
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
