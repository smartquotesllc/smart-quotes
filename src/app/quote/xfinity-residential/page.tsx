import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ServiceQuoteForm } from "@/components/quote/ServiceQuoteForm";
import { RESIDENTIAL_SERVICES } from "@/lib/quote-options";

export const metadata: Metadata = {
  title: "Xfinity Residential Quote",
  description:
    "Request an Xfinity Residential quote from Smart Quotes LLC. Tell us where to connect you.",
};

type PageProps = {
  searchParams: Promise<{ interest?: string; byod?: string }>;
};

const SERVICE_TILES = [
  {
    title: "Xfinity Internet",
    caption: "Fast. Reliable. Connected.",
    src: "/images/quote/xfinity-modem.png",
    alt: "White Xfinity internet gateway on a desk next to a laptop",
    width: 1536,
    height: 1024,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M5 10.5c3.8-3.8 10.2-3.8 14 0M7.8 13.5a6.2 6.2 0 0 1 8.4 0M10.5 16.4a2.2 2.2 0 0 1 3 0"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <circle cx="12" cy="19" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Xfinity Mobile",
    caption: "Stay Connected Everywhere.",
    src: "/images/xfinity/byod-phone.png",
    alt: "Smartphone displaying Xfinity Mobile branding next to an Xfinity mug",
    width: 720,
    height: 980,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect
          x="7.5"
          y="3.5"
          width="9"
          height="17"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Streaming",
    caption: "All Your Favorites. All in One Place.",
    src: "/images/quote/xfinity-tv.png",
    alt: "Television with streaming apps, set-top box, remote, and popcorn",
    width: 1536,
    height: 1024,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="5.5"
          width="17"
          height="11"
          rx="1.5"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path d="M8 19.5h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
] as const;

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

        {/* Service tiles */}
        <div className="mb-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {SERVICE_TILES.map((tile) => (
            <article
              key={tile.title}
              className="overflow-hidden rounded-2xl border border-sq-border/70 bg-white shadow-[0_10px_28px_-20px_rgba(10,10,18,0.3)]"
            >
              <div className="flex items-center justify-center bg-sq-gray-light p-3 sm:p-4">
                <Image
                  src={tile.src}
                  alt={tile.alt}
                  width={tile.width}
                  height={tile.height}
                  sizes="(max-width: 640px) 100vw, 33vw"
                  quality={95}
                  className="h-auto w-full object-contain"
                  priority={tile.title === "Xfinity Internet"}
                />
              </div>
              <div className="flex items-start gap-3 px-4 py-4 sm:px-5">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sq-purple text-white">
                  {tile.icon}
                </span>
                <div className="min-w-0">
                  <h2 className="font-heading text-sm font-extrabold uppercase tracking-[0.06em] text-sq-ink">
                    {tile.title}
                  </h2>
                  <p className="mt-1 text-sm text-sq-gray">{tile.caption}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Form */}
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
