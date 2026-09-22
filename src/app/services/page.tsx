import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { CheckList } from "@/components/CheckList";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Merchant Services, Xfinity Residential, and Comcast Business solutions with Smart Quotes LLC.",
};

const CARDS = [
  {
    slug: "merchant-services",
    title: "Merchant Services",
    tagline: "Accept payments. Save money. Grow your business.",
    checks: [
      "0% Processing Options",
      "Next Day Funding",
      "No Long-Term Contracts",
    ],
    // IMAGE REPLACE: /public/images/services/merchant-pos-card.png
    image: "/images/services/merchant-pos-card.png",
    imageAlt: "Modern point-of-sale payment terminal",
    href: "/quote/merchant-services",
    detailsHref: "/services/merchant-services",
  },
  {
    slug: "xfinity-residential",
    title: "Xfinity Residential",
    tagline: "Internet. Mobile. Streaming. Connected solutions for your home.",
    checks: ["Internet", "Mobile", "Streaming"],
    // Modem-forward residential category image (Internet + Mobile + Streaming)
    image: "/images/quote/xfinity-modem.png",
    imageAlt: "Xfinity residential Internet gateway",
    href: "/quote/xfinity-residential",
    detailsHref: "/services/xfinity-residential",
  },
  {
    slug: "comcast-business",
    title: "Comcast Business",
    tagline: "Power your business with smart solutions.",
    checks: ["Internet", "Voice", "Cybersecurity"],
    // IMAGE REPLACE: /public/images/services/comcast-office.png
    image: "/images/services/comcast-office.png",
    imageAlt: "Modern glass office building",
    href: "/quote/comcast-business",
    detailsHref: "/services/comcast-business",
  },
] as const;

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pb-4 pt-14 sm:px-6 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <h1 className="font-heading text-3xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:text-4xl">
            Our Services
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-base text-sq-gray sm:text-lg">
            Solutions designed to fit your life and your business.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:gap-10">
          {CARDS.map((card) => (
            <article
              key={card.slug}
              className="overflow-hidden rounded-2xl border border-sq-border bg-white shadow-[0_8px_30px_-18px_rgba(10,10,18,0.28)]"
            >
              <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)]">
                <Link
                  href={card.detailsHref}
                  className="relative min-h-[220px] bg-sq-gray-light sm:min-h-[260px] lg:min-h-full"
                >
                  <Image
                    src={card.image}
                    alt={card.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    quality={95}
                    className="object-cover"
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
                    <Button href={card.href}>Get a Quote</Button>
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
