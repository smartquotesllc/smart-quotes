import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your Smart Quotes LLC quote request was submitted successfully.",
  robots: { index: false, follow: false },
};

type Props = {
  searchParams: Promise<{
    lead?: string;
    ref?: string;
    service?: string;
    type?: string;
  }>;
};

export default async function ThankYouPage({ searchParams }: Props) {
  // searchParams retained for CRM analytics / reference links
  await searchParams;

  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col justify-center bg-sq-gray-light">
      <section className="mx-auto flex w-full max-w-3xl flex-col items-center px-4 py-16 sm:px-6 sm:py-20">
        <div className="w-full rounded-2xl border border-[#c8ccd4] bg-white px-6 py-14 text-center shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:px-12 sm:py-16">
          <div className="mx-auto mb-6 flex justify-center">
            <Logo size="md" href={null} />
          </div>
          <div
            className="mx-auto mb-8 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-sq-purple text-white"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" className="h-9 w-9" fill="none" stroke="currentColor" strokeWidth="2.8">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="font-heading text-4xl font-extrabold uppercase tracking-[0.02em] text-sq-ink sm:text-5xl">
            Thank You!
          </h1>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-sq-ink sm:text-lg">
            We&apos;ve received your request.
            <br />
            A Smart Quotes specialist will be in touch with you soon!
          </p>
          <div className="mx-auto mt-8 max-w-lg rounded-xl bg-sq-soft px-5 py-5 text-left sm:px-6">
            <p className="font-heading text-sm font-bold uppercase tracking-[0.08em] text-sq-purple">
              Complimentary Vacation Incentive
            </p>
            <p className="mt-2 text-sm leading-relaxed text-sq-ink sm:text-base">
              Because you submitted your quote through Smart Quotes, you may
              receive a complimentary hotel accommodation incentive. Watch for a
              separate follow-up with redemption details.
            </p>
            <p className="mt-3 text-xs text-sq-gray">
              Offer subject to{" "}
              <Link
                href="/vacation-terms"
                className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
              >
                Vacation Redemption Terms
              </Link>
              .
            </p>
          </div>
          <Link
            href="/"
            className="mt-10 inline-flex h-12 min-w-[240px] items-center justify-center rounded-md bg-sq-purple px-8 font-heading text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-sq-purple-hover"
          >
            Return to Home Page
          </Link>
        </div>
      </section>
    </div>
  );
}
