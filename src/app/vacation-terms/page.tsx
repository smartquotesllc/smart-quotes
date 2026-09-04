import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vacation Terms",
  description: "Official vacation-stay offer terms placeholder for Smart Quotes LLC.",
};

export default function VacationTermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-sq-ink">Vacation Terms</h1>
        <div className="mt-8 space-y-4 text-sq-gray">
          <p>After a qualifying request for quote (RFQ) is submitted, customers may receive a <strong>separate</strong> communication with information about the Smart Quotes vacation-stay offer.</p>
          <p>This page is a placeholder for official offer terms. Until finalized, Smart Quotes does <strong>not</strong> claim that every customer automatically receives a guaranteed vacation.</p>
          <p>Placeholders pending official program details:</p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Eligibility requirements — TBD</li>
            <li>Hotels / destinations — TBD</li>
            <li>Dollar values / inclusions — TBD</li>
            <li>Expiration dates — TBD</li>
            <li>Redemption rules — TBD</li>
          </ul>
          <p>The vacation link does not replace RFQ confirmation or appointment follow-up.</p>
        </div>
      </div>
    </section>
  );
}
