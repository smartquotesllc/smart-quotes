import type { Metadata } from "next";
import { Button } from "@/components/Button";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Smart Quotes LLC or request a free quote.",
};

export default function ContactPage() {
  return (
    <section className="bg-sq-gray-light py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-sq-purple">Contact</p>
        <h1 className="text-4xl font-bold tracking-tight text-sq-ink sm:text-5xl">Let&apos;s connect.</h1>
        <p className="mt-5 text-lg text-sq-gray">
          The fastest way to get started is a free quote request. Prefer to talk first? Call our placeholder line and replace it with the official Smart Quotes number when ready.
        </p>
        <a href="tel:+18881234567" className="mt-8 inline-block font-heading text-3xl font-bold text-sq-ink hover:text-sq-purple">(888) 123-4567</a>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/quote" size="lg">Get a Free Quote</Button>
          <Button href="/services" variant="outline" size="lg">Explore Services</Button>
        </div>
      </div>
    </section>
  );
}
