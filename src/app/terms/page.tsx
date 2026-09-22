import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms & Conditions for ${COMPANY.legalName}.`,
};

export default function TermsPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-sq-ink">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-sq-gray">
          Last updated: September 22, 2026
        </p>
        <div className="mt-8 space-y-4 text-sq-gray leading-relaxed">
          <p>
            By using {COMPANY.website} and related Smart Quotes quote experiences,
            you agree to these Terms &amp; Conditions. If you do not agree, please
            do not use the site.
          </p>
          <p>
            Website content is informational and does not constitute an offer,
            guarantee of service availability, pricing, coverage, appointment,
            employment, income, or partner program terms unless expressly stated
            in an official agreement. Quotes and follow-up communications are
            provided to help evaluate options; final terms are confirmed through
            authorized processes.
          </p>
          <p>
            Partner brands such as Xfinity and Comcast Business are referenced for
            service categorization only. Official claims, promotions, and coverage
            details are provided through authorized quote processes.
          </p>
          <p>
            Complimentary vacation incentives, when offered, are limited to the
            benefits described in the{" "}
            <Link
              href="/vacation-terms"
              className="font-semibold text-sq-purple underline underline-offset-2"
            >
              Vacation Redemption Terms
            </Link>
            . Hotel accommodation incentives do not include airfare unless a
            specific offer expressly states otherwise.
          </p>
          <p>
            Contractor / agent opportunities described on this website are
            independent-contractor pathways and are not offers of W-2 employment
            unless expressly stated in a separate written agreement.
          </p>
          <p>
            Questions about these terms may be directed to{" "}
            <a
              href={COMPANY.emailHref}
              className="font-semibold text-sq-purple hover:text-sq-purple-hover"
            >
              {COMPANY.email}
            </a>{" "}
            or {COMPANY.phoneDisplay}.
          </p>
        </div>
      </div>
    </section>
  );
}
