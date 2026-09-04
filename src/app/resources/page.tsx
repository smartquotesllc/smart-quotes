import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resources",
  description: "Guides and next-step resources from Smart Quotes LLC.",
};

const RESOURCES = [
  { title: "How the quote process works", href: "/#how-it-works", copy: "See the four steps from service selection to specialist follow-up." },
  { title: "Vacation-stay offer terms", href: "/vacation-terms", copy: "Read the placeholder terms for the vacation-stay communication." },
  { title: "Privacy & data handling", href: "/privacy", copy: "Learn how Smart Quotes intends to handle lead information." },
];

export default function ResourcesPage() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-sq-ink sm:text-5xl">Resources</h1>
        <p className="mt-4 max-w-2xl text-sq-gray">Helpful starting points while official partner content and program details are finalized.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {RESOURCES.map((item) => (
            <Link key={item.href} href={item.href} className="rounded-xl border border-sq-border bg-white p-6 transition hover:border-sq-purple/40 hover:shadow-lg">
              <h2 className="text-xl font-bold text-sq-ink">{item.title}</h2>
              <p className="mt-3 text-sm text-sq-gray">{item.copy}</p>
              <p className="mt-5 text-sm font-bold uppercase tracking-wide text-sq-purple">Open →</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
