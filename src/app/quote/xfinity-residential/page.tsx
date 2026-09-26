import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceQuoteForm } from "@/components/quote/ServiceQuoteForm";
import { RESIDENTIAL_SERVICES } from "@/lib/quote-options";
import styles from "./xfinity-quote.module.css";

export const metadata: Metadata = {
  title: "Xfinity Residential Quote",
  description:
    "Request an Xfinity Residential quote from Smart Quotes LLC. Tell us where to connect you.",
};

type PageProps = {
  searchParams: Promise<{ interest?: string; byod?: string }>;
};

const SERVICE_PANELS = [
  {
    title: "Xfinity Internet",
    caption: "Fast. Reliable. Connected.",
    src: "/images/xfinity/service-internet-ref.jpg",
    alt: "Slim white Xfinity internet gateway in a warm living-room setting",
    icon: "wifi" as const,
  },
  {
    title: "Xfinity Mobile",
    caption: "Stay Connected Everywhere.",
    src: "/images/xfinity/service-mobile.jpg",
    alt: "Smartphone with Xfinity branding next to an Xfinity coffee mug",
    icon: "phone" as const,
  },
  {
    title: "Streaming",
    caption: "All Your Favorites. All in One Place.",
    src: "/images/xfinity/service-streaming.jpg",
    alt: "Television with streaming apps, streaming box, and remote fully visible",
    icon: "tv" as const,
  },
] as const;

function PanelIcon({ kind }: { kind: "wifi" | "phone" | "tv" }) {
  if (kind === "wifi") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M5 10.5c3.8-3.8 10.2-3.8 14 0M7.8 13.5a6.2 6.2 0 0 1 8.4 0M10.5 16.4a2.2 2.2 0 0 1 3 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="19" r="1.1" fill="currentColor" />
      </svg>
    );
  }
  if (kind === "phone") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect x="7.5" y="3.5" width="9" height="17" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M11 9.2v4.6l3.6-2.3L11 9.2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function resolveResidentialDefaults(params: {
  interest?: string;
  byod?: string;
}): Record<string, string> | undefined {
  const interest = params.interest?.trim();
  const normalized = interest?.toLowerCase();

  const aliasMap: Record<string, (typeof RESIDENTIAL_SERVICES)[number]> = {
    internet: "Internet",
    mobile: "Mobile",
    streaming: "Streaming",
    tv: "Streaming",
    "tv / entertainment": "Streaming",
    entertainment: "Streaming",
  };

  const matched =
    (normalized && aliasMap[normalized]) ||
    (interest &&
      RESIDENTIAL_SERVICES.find(
        (opt) => opt.toLowerCase() === interest.toLowerCase(),
      ));

  if (!matched && params.byod !== "1") return undefined;

  const defaults: Record<string, string> = {};
  defaults.serviceInterestedIn = matched ?? "Mobile";
  if (params.byod === "1") {
    defaults.message =
      "Interested in Xfinity Mobile — Bring Your Own Device (compatible device).";
  }
  return defaults;
}

export default async function XfinityQuotePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const formDefaults = resolveResidentialDefaults(params);

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <header className="mb-8 text-center">
          <h1 className="font-heading text-2xl font-extrabold uppercase tracking-[0.04em] text-sq-purple sm:text-3xl lg:text-[2rem]">
            Xfinity Residential Quote
          </h1>
          <p className="mt-2 text-base text-sq-ink sm:text-lg">
            Tell us where to connect you.
          </p>
          <p className="mx-auto mt-5 max-w-3xl rounded-xl border border-sq-purple/15 bg-sq-soft px-4 py-3.5 text-sm text-sq-ink sm:px-6">
            Submit your quote through Smart Quotes and receive a complimentary
            vacation incentive.{" "}
            <Link
              href="/vacation-terms"
              className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
            >
              Vacation Redemption Terms
            </Link>
          </p>
        </header>

        {/* Compact three-panel lifestyle images — matches approved Photo 2 */}
        <div className={`${styles.residentialQuoteServiceGrid} mb-8 sm:mb-10`}>
          {SERVICE_PANELS.map((panel) => (
            <article
              key={panel.title}
              className={styles.residentialQuoteServicePanel}
            >
              <div className={styles.residentialQuoteServiceImage}>
                <Image
                  src={panel.src}
                  alt={panel.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  quality={95}
                  priority={panel.title === "Xfinity Internet"}
                  className={styles.residentialQuoteServiceImageElement}
                />
              </div>
              <div className={styles.residentialQuoteServiceLabel}>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sq-purple text-white">
                  <PanelIcon kind={panel.icon} />
                </span>
                <div className="min-w-0">
                  <h2 className="font-heading text-[13px] font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-sm">
                    {panel.title}
                  </h2>
                  <p className="mt-0.5 text-[13px] leading-snug text-sq-ink/80 sm:text-sm">
                    {panel.caption}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Form — unchanged */}
        <div className="rounded-2xl border border-[#d0d4dc] bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:p-8 lg:p-10">
          <ServiceQuoteForm
            serviceSlug="xfinity-residential"
            defaultValues={formDefaults}
          />
        </div>
      </section>
    </div>
  );
}
