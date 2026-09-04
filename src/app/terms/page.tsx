import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Smart Quotes LLC.",
};

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">Legal</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Terms of Use</h1>
      <p className="mt-3 text-sm text-muted">Last updated: September 4, 2026</p>
      <div className="mt-10 space-y-8 text-base leading-relaxed text-muted">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Agreement</h2>
          <p>By accessing this website operated by Smart Quotes LLC, you agree to these Terms of Use.</p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Services described</h2>
          <p>
            This website provides information about Merchant Services, Xfinity Residential, and Comcast Business pathways and a request-for-quote form. Specific pricing, speeds, availability, and product details are not guaranteed on this site.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Vacation offer</h2>
          <p>
            Any vacation-stay offer is separate from the confirmation experience and is governed by the{" "}
            <Link href="/vacation-terms" className="text-purple-deep underline-offset-2 hover:underline">Vacation Offer Terms</Link>.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Disclaimer</h2>
          <p>The site is provided “as is.” Smart Quotes LLC does not warrant uninterrupted availability.</p>
        </section>
      </div>
    </article>
  );
}
