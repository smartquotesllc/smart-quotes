import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";
import { SERVICE_IMAGES } from "@/lib/service-images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Merchant Services, Xfinity Residential, and Comcast Business solutions with Smart Quotes LLC.",
};

const CARDS = [
  {
    slug: "merchant-services",
    title: "Merchant Services",
    tagline: "Modern payment solutions for businesses of every size.",
    checks: [
      "0% Processing Options",
      "Next Day Funding",
      "No Long-Term Contracts",
    ],
    ...SERVICE_IMAGES.merchantCard,
    imageAlt: SERVICE_IMAGES.merchantCard.alt,
    href: "/quote/merchant-services",
    detailsHref: "/services/merchant-services",
  },
  {
    slug: "xfinity-residential",
    title: "Xfinity Residential",
    tagline: "Internet. Mobile. Streaming. All in one place.",
    checks: ["Internet", "Mobile", "Streaming"],
    ...SERVICE_IMAGES.xfinityPrimary,
    imageAlt: SERVICE_IMAGES.xfinityPrimary.alt,
    href: "/services/xfinity-residential",
    detailsHref: "/services/xfinity-residential",
  },
  {
    slug: "comcast-business",
    title: "Comcast Business",
    tagline: "Reliable solutions to keep your business moving forward.",
    checks: ["Internet", "Voice", "Cybersecurity"],
    ...SERVICE_IMAGES.comcast,
    imageAlt: SERVICE_IMAGES.comcast.alt,
    href: "/quote/comcast-business",
    detailsHref: "/services/comcast-business",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pb-4 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple sm:text-sm">
            Same Great Services. A Smarter Way to Connect.
          </p>
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:text-4xl">
            Let&apos;s Get Started
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-sq-gray sm:text-lg">
            Choose the service you&apos;re interested in.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10">
          {CARDS.map((card) => (
            <article
              key={card.slug}
              className="rounded-2xl border border-sq-border bg-white shadow-[0_8px_30px_-18px_rgba(10,10,18,0.28)]"
            >
              <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
                <Link
                  href={card.detailsHref}
                  className="flex items-center justify-center bg-sq-gray-light p-4 sm:p-6"
                >
                  <Image
                    src={card.src}
                    alt={card.imageAlt}
                    width={card.width}
                    height={card.height}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    quality={95}
                    className="h-auto w-full object-contain"
                    priority={card.slug === "merchant-services"}
                  />
                </Link>

                <div className="flex flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:px-12">
                  <h2 className="font-heading text-xl font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-2xl">
                    <Link href={card.detailsHref} className="hover:text-sq-purple">
                      {card.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-[15px] text-sq-gray sm:text-base">
                    {card.tagline}
                  </p>
                  <CheckList items={[...card.checks]} className="mt-6" />
                  <div className="mt-8 flex justify-start sm:justify-end">
                    <Button href={card.href}>Get a Smart Quote</Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
