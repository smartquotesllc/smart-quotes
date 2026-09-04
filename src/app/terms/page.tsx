import type { Metadata } from "next";

export const metadata: Metadata = { title: "Terms & Conditions", description: "Terms & Conditions for Smart Quotes LLC." };

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-sq-ink">Terms &amp; Conditions</h1>
        <div className="mt-8 space-y-4 text-sq-gray">
          <p>This page is a placeholder for Smart Quotes LLC Terms &amp; Conditions. Replace with counsel-approved language before launch.</p>
          <p>Website content is informational and does not constitute an offer, guarantee of service availability, pricing, or partner program terms unless expressly stated in an official agreement.</p>
          <p>Partner brands such as Xfinity and Comcast Business are referenced for service categorization only. Official claims, promotions, and coverage details are provided through authorized quote processes.</p>
        </div>
      </div>
    </section>
  );
}
