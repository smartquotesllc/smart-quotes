import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Smart Quotes LLC.",
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-purple">Legal</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight text-ink">Privacy Policy</h1>
      <p className="mt-3 text-sm text-muted">Last updated: September 4, 2026</p>
      <div className="mt-10 space-y-8 text-base leading-relaxed text-muted">
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Overview</h2>
          <p>
            Smart Quotes LLC (“we,” “us,” or “our”) operates this website to help visitors explore Merchant Services, Xfinity Residential, and Comcast Business options and submit quote requests.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Information we collect</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Name, phone number, and email address</li>
            <li>Optional address and business name</li>
            <li>Service interest and additional notes you provide</li>
            <li>Technical data such as IP address, browser type, and page URL</li>
            <li>Consent status and submission timestamps</li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">How we use information</h2>
          <ul className="list-disc space-y-1 pl-5">
            <li>Process quote requests and appointment-oriented follow-up</li>
            <li>Route leads to our CRM or authorized partners</li>
            <li>
              Send a separate vacation-stay offer communication when applicable (subject to{" "}
              <Link href="/vacation-terms" className="text-purple-deep underline-offset-2 hover:underline">Vacation Offer Terms</Link>)
            </li>
            <li>Improve site performance, security, and user experience</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Sharing</h2>
          <p>
            We may share information with service providers that help us operate the website, CRM systems, communications channels, and appointment workflows.
          </p>
        </section>
        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-ink">Contact</h2>
          <p>For privacy questions, contact Smart Quotes LLC through the channels provided on this website.</p>
        </section>
      </div>
    </article>
  );
}
