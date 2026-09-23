import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Smart Quotes LLC — one trusted starting point for Merchant Services, Xfinity Residential, and Comcast Business.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="px-4 pb-6 pt-10 sm:px-6 sm:pb-8 sm:pt-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          {/* ASSET NEEDED: dedicated Smart Quotes team/neighborhood photo from
              the user's About reference screenshot is not in the repository yet.
              Using approved city hero photography as interim photographic stand-in. */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-sq-border/70 bg-sq-gray-light shadow-[0_18px_48px_-28px_rgba(15,23,42,0.45)] sm:aspect-[21/9] lg:aspect-[2.4/1]">
            <Image
              src="/images/home/hero-city-highway.jpg"
              alt="Smart Quotes — connecting communities with better solutions"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 1152px"
              quality={92}
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="pb-16 pt-4 sm:pb-24 sm:pt-6">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sq-purple">
            About Smart Quotes
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-sq-ink sm:text-5xl">
            One trusted starting point for multiple solutions.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-sq-gray">
            Smart Quotes is built around a simple idea: make it easier for
            customers and businesses to discover solutions, request information,
            and connect with the right people.
          </p>
          <p className="mt-4 text-base leading-relaxed text-sq-gray">
            Whether you need Merchant Services, Xfinity Residential, or Comcast
            Business, we help you take the first step with a clear quote request
            and a professional follow-up path.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/quote" size="lg">
              Get a Smart Quote
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Services
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
