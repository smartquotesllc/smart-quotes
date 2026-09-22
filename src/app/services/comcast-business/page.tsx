import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";

const SLUG = "comcast-business";

export const metadata: Metadata = {
  title: "Comcast Business",
  description:
    "Reliable, secure, scalable business connectivity solutions. Request a free quote with Smart Quotes LLC.",
};

const HERO_CHECKS = [
  "Internet",
  "Voice",
  "Cybersecurity",
  "24/7 Business Support",
];

const SOLUTIONS = [
  {
    title: "Internet",
    copy: "Fast & Reliable",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
        <path
          d="M12 30c6.5-6.5 17.5-6.5 24 0"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M16.5 25c4.5-4.5 10.5-4.5 15 0"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M21 20c2.2-2.2 3.8-2.2 6 0"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <circle cx="24" cy="34.5" r="2.2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Voice",
    copy: "Advanced Phone Solutions",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
        <path
          d="M16.5 14.5c1-1 2.6-1 3.5 0l2.2 2.2c.9.9.9 2.4 0 3.3l-1.4 1.4c.8 1.8 2.4 3.8 4.3 5.6 1.8 1.9 3.8 3.5 5.6 4.3l1.4-1.4c.9-.9 2.4-.9 3.3 0l2.2 2.2c1 1 1 2.5 0 3.5l-1.6 1.6c-.9.9-2.2 1.3-3.5 1.1-3.3-.5-8-2.9-12.5-7.4S13.1 22.4 12.6 19.1c-.2-1.3.2-2.6 1.1-3.5l1.6-1.6Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Cybersecurity",
    copy: "Protect Your Business",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
        <path
          d="M24 10 12 15.5V24c0 8 5.2 13.8 12 16 6.8-2.2 12-8 12-16v-8.5L24 10Z"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />
        <path
          d="M24 20v8M20 24h8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Managed Solutions",
    copy: "Support You Can Count On",
    icon: (
      <svg viewBox="0 0 48 48" className="h-12 w-12" fill="none" aria-hidden="true">
        <circle cx="22" cy="22" r="9" stroke="currentColor" strokeWidth="2.2" />
        <path
          d="M28.5 28.5 36 36"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <rect x="18" y="18" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
];

export default function ComcastBusinessPage() {
  return (
    <div className="bg-white">
      {/* Hero with office building background */}
      <section className="relative min-h-[480px] overflow-hidden text-white sm:min-h-[560px]">
        {/* IMAGE REPLACE: /public/images/services/comcast-office.png */}
        <Image
          src="/images/services/comcast-office.png"
          alt="Modern glass office building at dusk"
          fill
          priority
          sizes="100vw"
          quality={95}
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,10,18,0.88) 0%, rgba(8,10,18,0.72) 42%, rgba(8,10,18,0.35) 70%, rgba(8,10,18,0.15) 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[480px] max-w-7xl items-center px-4 py-16 sm:min-h-[560px] sm:px-6 lg:px-8">
          <div className="max-w-xl animate-fade-up">
            <h1 className="font-heading text-4xl font-extrabold uppercase tracking-[0.04em] sm:text-5xl lg:text-[3.25rem]">
              Comcast Business
            </h1>
            <p className="mt-4 text-base text-white/90 sm:text-lg">
              Power your business with smart solutions.
            </p>
            <CheckList
              items={HERO_CHECKS}
              variant="white"
              className="mt-8"
            />
            <div className="mt-9">
              <Button href={`/quote/${SLUG}`} size="lg">
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-10 text-center font-heading text-2xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:mb-12 sm:text-3xl">
            Solutions That Work For You
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {SOLUTIONS.map((item) => (
              <article
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-sq-border/80 bg-white px-5 py-8 text-center shadow-[0_12px_32px_-20px_rgba(10,10,18,0.28)]"
              >
                <div className="mb-4 text-sq-purple">{item.icon}</div>
                <h3 className="font-heading text-base font-extrabold uppercase tracking-[0.06em] text-sq-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-sq-gray">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
