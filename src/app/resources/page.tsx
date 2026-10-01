import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Helpful information for customers and contractors — quote process, privacy, terms, vacation incentive, and opportunities to join the Smart Quotes team.",
};

const RESOURCE_CARDS = [
  {
    title: "How the quote process works",
    href: "/how-it-works",
    copy: "See the four simple steps from service selection through follow-up and vacation incentive eligibility.",
    src: "/images/resources/quote-process.jpg",
    alt: "Clipboard checklist outlining the Smart Quotes process for Xfinity services",
    width: 608,
    height: 236,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M8 4h8v2.5H8V4Zm-1.5 2.5H6A1.5 1.5 0 0 0 4.5 8v11A1.5 1.5 0 0 0 6 20.5h12a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 18 6.5h-.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M9 11.5h6M9 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Privacy & Data Handling",
    href: "/privacy",
    copy: "Learn how Smart Quotes handles quote-form and customer contact information.",
    src: "/images/resources/privacy-security.jpg",
    alt: "Laptop screen showing a digital shield and padlock representing data privacy",
    width: 608,
    height: 236,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 3.5 5 6.5V11c0 4.6 2.9 8 7 9.3 4.1-1.3 7-4.7 7-9.3V6.5L12 3.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M12 11.2v.01M10.2 11.2a1.8 1.8 0 1 1 3.6 0c0 .7-.4 1.2-.9 1.6L12 14"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
    copy: "Review the general terms governing use of the Smart Quotes website and quote-request features.",
    src: "/images/resources/terms-document.jpg",
    alt: "Printed Terms and Conditions document with a pen resting on the page",
    width: 608,
    height: 230,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M7 3.5h7.5L19 8v12.5H7V3.5Z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path d="M14.5 3.5V8H19" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M10 12h4M10 15.5h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Vacation Redemption Terms & Conditions",
    href: "/vacation-terms",
    copy: "Review activation deadlines, fees, occupancy rules, and RedeemVacations.com redemption requirements.",
    src: "/images/resources/vacation-beach-umbrellas.jpg",
    alt: "Tropical beach with white umbrellas and lounge chairs facing the ocean",
    width: 608,
    height: 230,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 14.5c0-4.5 2.2-8.5 5.5-10.5-3.8.4-7 3.2-8.2 7.2C8 7.2 5.5 5 2.5 4.5 6 6.8 8 10.5 8 14.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M12 14.5V20" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M8.5 20h7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

export default function ResourcesPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="overflow-hidden bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-16">
          <div className="animate-fade-up order-2 min-w-0 lg:order-1">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.2em] text-sq-purple">
              Resources
            </p>
            <h1 className="mt-3 font-heading text-3xl font-extrabold leading-[1.15] tracking-tight text-sq-ink sm:text-4xl lg:text-[2.75rem]">
              Helpful Information
              <br />
              for{" "}
              <span className="text-sq-purple">Customers</span>
              <br />
              and{" "}
              <span className="text-sq-purple">Contractors</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-sq-gray sm:text-lg">
              Everything you need to know about our services, quote process,
              vacation incentive, and opportunities to join our team.
            </p>
          </div>
          <div className="animate-fade-scale order-1 w-full lg:order-2">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/resources/tropical-resort.jpg"
                alt="Luxury tropical patio overlooking palm trees and bright blue ocean"
                width={780}
                height={456}
                priority
                quality={95}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Resource cards */}
      <section className="bg-sq-gray-light py-12 sm:py-16" aria-label="Resource links">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {RESOURCE_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-sq-border/70 bg-white shadow-[0_12px_32px_-22px_rgba(10,10,18,0.35)] transition hover:border-sq-purple/35 hover:shadow-[0_16px_40px_-20px_rgba(90,44,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-purple"
              >
                <div className="relative bg-sq-gray-light px-3 pt-3 sm:px-4 sm:pt-4">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    quality={90}
                    className="h-auto w-full rounded-xl object-contain"
                  />
                  <span className="absolute bottom-0 left-6 inline-flex h-11 w-11 translate-y-1/2 items-center justify-center rounded-full bg-sq-purple text-white shadow-md sm:left-8">
                    {card.icon}
                  </span>
                </div>
                <div className="flex flex-1 flex-col px-6 pb-6 pt-9 sm:px-8 sm:pb-7">
                  <h2 className="font-heading text-lg font-bold text-sq-ink sm:text-xl">
                    {card.title}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-sq-gray">{card.copy}</p>
                  <p className="mt-5 font-heading text-sm font-bold uppercase tracking-[0.12em] text-sq-purple group-hover:underline">
                    Open →
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Become an Agent — full width */}
          <Link
            href="/become-an-agent"
            className="group mt-6 flex flex-col overflow-hidden rounded-2xl border border-sq-border/70 bg-white shadow-[0_12px_32px_-22px_rgba(10,10,18,0.35)] transition hover:border-sq-purple/35 hover:shadow-[0_16px_40px_-20px_rgba(90,44,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-purple sm:flex-row sm:items-stretch"
          >
            <div className="flex flex-1 flex-col justify-center px-6 py-8 sm:px-10 sm:py-10">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sq-purple text-white">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
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
              </span>
              <h2 className="mt-4 font-heading text-xl font-bold text-sq-ink sm:text-2xl">
                Become an Agent
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-sq-gray sm:text-base">
                Explore independent contractor opportunities and apply through
                our TurfQuest onboarding portal.
              </p>
              <p className="mt-5 font-heading text-sm font-bold uppercase tracking-[0.12em] text-sq-purple group-hover:underline">
                Open →
              </p>
            </div>
            <div className="relative flex w-full items-center justify-center bg-sq-gray-light sm:w-[42%] sm:max-w-md">
              <Image
                src="/images/resources/agent-hat.jpg"
                alt="Black Smart Quotes baseball cap with embroidered SQ logo"
                width={620}
                height={270}
                sizes="(max-width: 640px) 100vw, 40vw"
                quality={90}
                className="h-auto w-full object-contain p-4 sm:p-6"
              />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
