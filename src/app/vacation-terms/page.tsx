import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vacation Offer Terms",
  description: "Official terms placeholder for the Smart Quotes LLC vacation-stay offer.",
};

export default function VacationTermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">Legal</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Vacation Offer Terms</h1>
      <p className="mt-3 text-sm text-muted">Last updated: September 4, 2026</p>
      <div className="mt-10 space-y-8 text-base leading-relaxed text-muted">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Important notice</h2>
          <p>
            After a successful quote request, a separate vacation-stay offer communication may be sent by email or text. Official offer materials control eligibility, destinations, hotels, stay length, fees, and redemption steps.
          </p>
          <p className="rounded-2xl border border-purple/15 bg-lavender px-4 py-3 text-sm text-ink">
            This page does not invent or guarantee destinations, hotel names, dollar values, or qualification outcomes.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Relationship to your quote</h2>
          <p>
            The vacation-stay offer is a separate side-channel communication. It does not replace the on-site quote confirmation screen.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Questions</h2>
          <p>
            Return to the{" "}
            <Link href="/" className="text-purple-deep underline-offset-2 hover:underline">homepage</Link>{" "}
            to review how quote requests work.
          </p>
        </section>
      </div>
    </article>
  );
}
