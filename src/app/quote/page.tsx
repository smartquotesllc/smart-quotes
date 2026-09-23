import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { COMPANY } from "@/lib/company";
import type { ServiceSlug } from "@/lib/types";

export const metadata: Metadata = {
  title: "Get a Smart Quote",
  description:
    "Choose Merchant Services, Xfinity Residential, or Comcast Business and submit your Smart Quotes request.",
};

const CARDS: Array<{
  slug: ServiceSlug;
  label: string;
  description: string;
  href: string;
  image: string;
  alt: string;
  width: number;
  height: number;
}> = [
  {
    slug: "merchant-services",
    label: "Merchant Services",
    description: "Modern payment solutions for businesses of every size.",
    href: "/quote/merchant-services",
    image: "/images/services/merchant-pos-collage.jpg",
    alt: "Full Merchant Services POS hardware group",
    width: 1672,
    height: 678,
  },
  {
    slug: "xfinity-residential",
    label: "Xfinity Residential",
    description: "Internet. Mobile. Streaming. All in one place.",
    // Route to residential selector — do not skip to Internet-only form
    href: "/services/xfinity-residential",
    image: "/images/services/xfinity-residential-entertainment.jpg",
    alt: "Home internet gateway, mobile phone and streaming equipment",
    width: 1110,
    height: 840,
  },
  {
    slug: "comcast-business",
    label: "Comcast Business",
    description: "Reliable solutions to keep your business moving forward.",
    href: "/quote/comcast-business",
    image: "/images/services/comcast-business-solutions.jpg",
    alt: "Business connectivity, phone and cybersecurity equipment",
    width: 1580,
    height: 840,
  },
];

const LEGACY: Record<string, string> = {
  "merchant-services": "/quote/merchant-services",
  "xfinity-residential": "/services/xfinity-residential",
  "comcast-business": "/quote/comcast-business",
};

type QuotePageProps = { searchParams: Promise<{ service?: string }> };

export default async function QuoteChoosePage({ searchParams }: QuotePageProps) {
  const params = await searchParams;
  if (params.service && LEGACY[params.service]) {
    redirect(LEGACY[params.service]);
  }

  return (
    <div className="bg-sq-gray-light">
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <header className="mb-10 text-center sm:mb-12">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple sm:text-sm">
            Same Great Services. A Smarter Way to Connect.
          </p>
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-[0.02em] text-sq-ink sm:text-4xl lg:text-[2.75rem]">
            Let&apos;s Get Started
          </h1>
          <p className="mt-3 text-base text-sq-ink sm:text-lg">
            Choose the service you&apos;re interested in.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {CARDS.map((card) => (
            <article
              key={card.slug}
              className="flex flex-col rounded-2xl border border-[#e2e5eb] bg-white shadow-[0_12px_32px_-20px_rgba(15,23,42,0.25)]"
            >
              <div className="flex w-full items-center justify-center rounded-t-2xl bg-sq-gray-light p-3 sm:p-4">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={card.width}
                  height={card.height}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  priority={card.slug === "merchant-services"}
                  quality={92}
                />
              </div>
              <div className="flex flex-1 flex-col px-6 pb-7 pt-5 text-center">
                <h2 className="font-heading text-lg font-extrabold uppercase tracking-[0.04em] text-sq-ink">
                  {card.label}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-sq-gray">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="mt-5 inline-flex h-11 items-center justify-center rounded-md px-5 font-heading text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:brightness-110"
                  style={{
                    background:
                      "linear-gradient(135deg, #12081f 0%, #2a1458 42%, #5a2cff 100%)",
                    boxShadow: "0 12px 28px -14px rgba(90,44,255,0.7)",
                  }}
                >
                  Get a Smart Quote
                </Link>
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-10 overflow-hidden rounded-2xl bg-sq-purple px-6 py-6 text-white sm:mt-12 sm:px-8 sm:py-7">
          <h2 className="font-heading text-xl font-extrabold uppercase tracking-tight sm:text-2xl">
            Complimentary Vacation Incentive
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-white/95 sm:text-base">
            When you submit a qualifying quote request through Smart Quotes, you
            may receive a complimentary hotel accommodation incentive at
            participating properties. Choose a service above to get started.
          </p>
          <p className="mt-3 text-xs text-white/75">
            Offer subject to{" "}
            <Link
              href="/vacation-terms"
              className="underline underline-offset-2 hover:text-white"
            >
              Vacation Redemption Terms
            </Link>
            . Airfare is not included.
          </p>
        </aside>

        <aside className="mt-6 flex flex-col items-center gap-4 rounded-2xl bg-[#ebe4ff] px-6 py-5 sm:flex-row sm:gap-5 sm:px-8">
          <span
            className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sq-purple text-white"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path
                d="M8.5 4.8c.4-1 1.2-1.3 2-.8l1.4.9c.7.4.9 1.2.5 1.9l-.7 1.2a1.4 1.4 0 0 0 .2 1.7l2.4 2.4c.5.5 1.2.6 1.7.2l1.2-.7c.7-.4 1.5-.2 1.9.5l.9 1.4c.5.8.2 1.6-.8 2-.9.4-2 .7-3.1.4-2.5-.6-4.8-2.3-6.7-4.2-1.9-1.9-3.6-4.2-4.2-6.7-.3-1.1 0-2.2.4-3.1Z"
                strokeLinejoin="round"
              />
              <path d="M16.2 4.5c1.6.4 2.9 1.5 3.5 3.1M15 6.8c.8.2 1.4.8 1.7 1.6" strokeLinecap="round" />
            </svg>
          </span>
          <p className="text-center text-base text-sq-ink sm:text-left sm:text-lg">
            Not sure which service is right for you? Call or text us and we&apos;ll help!{" "}
            <a href={COMPANY.phoneHref} className="font-bold text-sq-ink hover:text-sq-purple">
              {COMPANY.phoneDisplay}
            </a>
          </p>
        </aside>
      </section>
    </div>
  );
}
