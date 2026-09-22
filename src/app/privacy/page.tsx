import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy & data handling practices for ${COMPANY.legalName}.`,
};

export default function PrivacyPage() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="text-4xl font-bold text-sq-ink">Privacy &amp; Data Handling</h1>
        <p className="mt-3 text-sm text-sq-gray">
          Last updated: September 22, 2026
        </p>

        <div className="mt-8 space-y-6 text-sq-gray leading-relaxed">
          <p>
            {COMPANY.legalName} (&quot;Smart Quotes,&quot; &quot;we,&quot; &quot;us,&quot; or
            &quot;our&quot;) operates {COMPANY.website} and related quote-request experiences.
            This page explains how we handle information submitted through our
            website forms and related customer communications. It is informational
            and is not a certification of compliance with any specific privacy
            framework.
          </p>

          <div>
            <h2 className="mb-2 text-xl font-bold text-sq-ink">
              Information we collect
            </h2>
            <p>
              When you submit a quote request, contact request, or related form,
              we may collect:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>
                Contact details such as name, phone number, email address, and
                mailing or service address
              </li>
              <li>
                Business details when relevant (for example business name,
                business type, employee count, or card volume ranges)
              </li>
              <li>
                Service-interest information (for example Merchant Services,
                Xfinity Residential, Comcast Business, internet, mobile, or TV /
                streaming preferences)
              </li>
              <li>
                Optional messages or notes you choose to provide
              </li>
              <li>
                Basic submission metadata such as date/time submitted, landing
                page, and lead source indicators needed to operate the quote
                workflow
              </li>
            </ul>
            <p className="mt-3">
              Do not submit sensitive information that is not required for a quote
              (for example government ID numbers, payment card numbers, or login
              credentials). API keys and secrets are never embedded in frontend
              code.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-sq-ink">
              How we use information
            </h2>
            <p>We use submitted information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5">
              <li>Respond to your quote or contact request</li>
              <li>
                Route leads to the appropriate Smart Quotes representative or
                fulfillment workflow
              </li>
              <li>
                Provide communications related to the solutions or services you
                requested
              </li>
              <li>
                Where applicable, send or queue optional vacation-stay offer
                communications subject to official offer terms
              </li>
              <li>
                Improve site reliability, prevent abuse, and maintain records of
                requests we receive
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-sq-ink">
              CRM processing and storage
            </h2>
            <p>
              Quote submissions are processed through our website intake endpoint
              and may be stored in our customer relationship management (CRM) /
              lead systems used by Smart Quotes to manage follow-up. Lead records
              can include the contact and service-interest fields described above,
              along with workflow status fields needed for appointment or
              consultation follow-up.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-sq-ink">
              Communications
            </h2>
            <p>
              By submitting a quote or contact form, you agree that Smart Quotes
              may contact you about your request by phone, text, email, or other
              reasonable channels using the details you provide. Message and data
              rates may apply for phone or SMS communications depending on your
              carrier.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-sq-ink">
              Third-party service providers
            </h2>
            <p>
              We use service providers to host the website, process form
              submissions, store lead data, deliver email or related
              communications, and (when applicable) fulfill vacation-incentive
              redemption through partners such as RedeemVacations.com. Those
              providers process information only as needed to perform services for
              Smart Quotes or to complete a request you initiated. Partner brands
              referenced on this site (including Xfinity and Comcast Business) are
              used to categorize solutions; official product terms, availability,
              and claims are provided through authorized quote processes.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-sq-ink">
              Security safeguards
            </h2>
            <p>
              We apply reasonable administrative, technical, and organizational
              safeguards appropriate to the nature of lead and contact data we
              handle — including restricting access to operational systems,
              transmitting form submissions over HTTPS, and keeping server-side
              credentials out of public frontend code. No method of transmission
              or storage is completely secure, and we cannot guarantee absolute
              security.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-sq-ink">
              Retention
            </h2>
            <p>
              We retain quote and contact records for as long as needed to fulfill
              the purpose of the request, support follow-up, meet operational
              needs, and comply with legal or recordkeeping obligations, after
              which records may be deleted or de-identified according to our
              internal practices.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-sq-ink">
              Your choices and inquiries
            </h2>
            <p>
              If you have questions about this privacy notice, want to update
              contact details associated with a recent quote request, or wish to
              discuss how Smart Quotes handles your information, contact us at:
            </p>
            <ul className="mt-3 list-none space-y-1 pl-0">
              <li>
                Email:{" "}
                <a
                  href={COMPANY.emailHref}
                  className="font-semibold text-sq-purple hover:text-sq-purple-hover"
                >
                  {COMPANY.email}
                </a>
              </li>
              <li>
                Phone:{" "}
                <a
                  href={COMPANY.phoneHref}
                  className="font-semibold text-sq-purple hover:text-sq-purple-hover"
                >
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>Mail: {COMPANY.addressLine}</li>
            </ul>
            <p className="mt-3">
              Depending on your location, you may have additional rights under
              applicable law. We will review privacy-related requests in good
              faith and respond through reasonable channels.
            </p>
          </div>

          <div>
            <h2 className="mb-2 text-xl font-bold text-sq-ink">
              Related pages
            </h2>
            <p>
              Vacation incentive eligibility and redemption rules are described in
              the{" "}
              <Link
                href="/vacation-terms"
                className="font-semibold text-sq-purple underline underline-offset-2"
              >
                Vacation Redemption Terms
              </Link>
              . Website use is also subject to our{" "}
              <Link
                href="/terms"
                className="font-semibold text-sq-purple underline underline-offset-2"
              >
                Terms &amp; Conditions
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
