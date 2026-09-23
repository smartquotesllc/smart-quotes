import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides and next-step resources from Smart Quotes LLC.",
};

const RESOURCES = [
  {
    title: "How the quote process works",
    href: "/#how-it-works",
    copy: "See the four steps from service selection through follow-up and vacation incentive eligibility.",
  },
  {
    title: "Privacy & Data Handling",
    href: "/privacy",
    copy: "Learn how Smart Quotes handles quote-form and customer contact information.",
  },
  {
    title: "Terms & Conditions",
    href: "/terms",
    copy: "Review the general terms governing use of the Smart Quotes website and quote-request features.",
  },
  {
    title: "Vacation Redemption Terms & Conditions",
    href: "/vacation-terms",
    copy: "Review activation deadlines, fees, occupancy rules, and RedeemVacations.com redemption requirements.",
  },
  {
    title: "Become an Agent",
    href: "/become-an-agent",
    copy: "Explore independent contractor opportunities and apply through our TurfQuest onboarding portal.",
  },
];

export default function ResourcesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-sq-ink sm:text-5xl">
          Resources
        </h1>
        <p className="mt-4 max-w-2xl text-sq-gray">
          Helpful starting points for customers and contractors.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl border border-sq-border bg-white p-6 transition hover:border-sq-purple/40 hover:shadow-lg"
            >
              <h2 className="text-xl font-bold text-sq-ink">{item.title}</h2>
              <p className="mt-3 text-sm text-sq-gray">{item.copy}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-wide text-sq-purple">
                Open →
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
