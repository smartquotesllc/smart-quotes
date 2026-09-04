import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "About Us",
  description: "Smart Quotes LLC — one trusted starting point for multiple solutions.",
};

export default function AboutPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div className="flex min-h-[320px] items-center justify-center rounded-2xl border border-sq-border bg-white p-10 shadow-[0_12px_32px_-24px_rgba(15,23,42,0.35)]">
          <Logo size="lg" href={null} />
        </div>
        <div>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sq-purple">About Smart Quotes</p>
          <h1 className="text-4xl font-bold tracking-tight text-sq-ink sm:text-5xl">One trusted starting point for multiple solutions.</h1>
          <p className="mt-6 text-lg leading-relaxed text-sq-gray">
            Smart Quotes is built around a simple idea: make it easier for customers and businesses to discover solutions, request information, and connect with the right people.
          </p>
          <p className="mt-4 text-base leading-relaxed text-sq-gray">
            Whether you need Merchant Services, Xfinity Residential, or Comcast Business, we help you take the first step with a clear quote request and a professional follow-up path.
          </p>
          <div className="mt-8"><Button href="/quote" size="lg">Get a Free Quote</Button></div>
        </div>
      </div>
    </section>
  );
}
