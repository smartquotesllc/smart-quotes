import type { Metadata } from "next";
import Link from "next/link";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy & Data Handling",
  description: `Privacy & data handling practices for ${COMPANY.legalName}.`,
};

const SECTIONS = [
  { id: "information-we-collect", number: "01", title: "Information We Collect" },
  { id: "how-we-use", number: "02", title: "How We Use Information" },
  { id: "service-providers", number: "03", title: "Service Providers" },
  { id: "xfinity-comcast", number: "04", title: "Xfinity & Comcast Service Requests" },
  { id: "vacation-incentives", number: "05", title: "Vacation Incentives" },
  { id: "communications", number: "06", title: "Communications" },
  { id: "cookies-analytics", number: "07", title: "Cookies & Analytics" },
  { id: "data-security", number: "08", title: "Data Security" },
  { id: "data-retention", number: "09", title: "Data Retention" },
  { id: "privacy-choices", number: "10", title: "Privacy Choices" },
  { id: "childrens-privacy", number: "11", title: "Children’s Privacy" },
  { id: "third-party-websites", number: "12", title: "Third-Party Websites" },
  { id: "policy-updates", number: "13", title: "Policy Updates" },
  { id: "contact", number: "14", title: "Contact" },
] as const;

const INFO_CATEGORIES = [
  {
    title: "Personal Information",
    items: ["Name", "Phone number", "Email address", "Mailing / service address"],
  },
  {
    title: "Service Request Information",
    items: [
      "Services you are interested in",
      "Residential or business details",
      "Quote form submissions",
      "Optional notes you provide",
    ],
  },
  {
    title: "Business Information",
    items: [
      "Business name",
      "Business address",
      "Business contact details",
      "Merchant-processing or business-service information",
    ],
  },
  {
    title: "Technical Information",
    items: [
      "IP address",
      "Browser / device type",
      "Pages visited",
      "Referrer and general site interaction data",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-sq-border bg-gradient-to-br from-[#eef2ff] via-white to-[#f7f8fc] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple">
            Legal
          </p>
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-sq-ink sm:text-4xl lg:text-5xl">
            Privacy &amp; Data Handling
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sq-gray sm:text-lg">
            How {COMPANY.legalName} collects, uses, and shares information when
            you request a Smart Quote or use {COMPANY.website}. This page is
            informational and is not a certification of compliance with any
            specific privacy framework.
          </p>
          <p className="mt-3 text-sm text-sq-gray">Last updated: September 22, 2026</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-sq-gray">
              On this page
            </p>
            <nav aria-label="Privacy sections" className="space-y-1">
              {SECTIONS.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-start gap-2 rounded-md px-2 py-2 text-sm text-sq-ink/80 transition hover:bg-sq-soft hover:text-sq-purple"
                >
                  <span className="font-heading text-xs font-bold text-sq-purple">
                    {section.number}
                  </span>
                  <span>{section.title}</span>
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-12 text-sq-gray leading-relaxed">
            <div id="information-we-collect" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">01</span>
                Information We Collect
              </h2>
              <p>
                When you submit a quote request, contact request, or related form,
                we may collect information in the categories below. Do not submit
                sensitive information that is not required for a quote (for example
                government ID numbers, payment card numbers, or login credentials).
                API keys and secrets are never embedded in frontend code.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {INFO_CATEGORIES.map((category) => (
                  <article
                    key={category.title}
                    className="rounded-xl border border-sq-border/80 bg-sq-gray-light/60 p-5"
                  >
                    <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.06em] text-sq-ink">
                      {category.title}
                    </h3>
                    <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">
                      {category.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>

            <div id="how-we-use" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">02</span>
                How We Use Information
              </h2>
              <ul className="list-disc space-y-2 pl-5">
                <li>Respond to your quote or contact request</li>
                <li>
                  Route leads to the appropriate Smart Quotes specialist or
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

            <div id="service-providers" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">03</span>
                Service Providers
              </h2>
              <p>
                We use service providers to host the website, process form
                submissions, store lead data in our CRM / operational systems, and
                deliver related communications. Those providers process information
                only as needed to perform services for Smart Quotes or to complete a
                request you initiated. Information may be shared with authorized
                partners when required to process the services you requested.
              </p>
              <div className="mt-4 rounded-xl border border-sq-royal/20 bg-[#eef2ff] px-5 py-4 text-sm text-sq-ink">
                We do not claim that information is “never shared.” Authorized
                providers and partners may receive information needed to fulfill
                quote requests, appointments, or incentive fulfillment.
              </div>
            </div>

            <div id="xfinity-comcast" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">04</span>
                Xfinity &amp; Comcast Service Requests
              </h2>
              <p>
                Partner brands referenced on this site (including Xfinity and
                Comcast Business) are used to categorize solutions. Official
                product terms, availability, pricing, and claims are provided
                through authorized quote processes. Information you submit may be
                used to connect you with specialists and fulfillment workflows for
                those requested services.
              </p>
            </div>

            <div id="vacation-incentives" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">05</span>
                Vacation Incentives
              </h2>
              <p>
                Qualifying quote requests may be associated with a complimentary
                vacation-stay incentive at participating hotels and resorts.
                Eligibility, activation deadlines, taxes/fees, travel restrictions,
                and redemption rules are governed by the{" "}
                <Link
                  href="/vacation-terms"
                  className="font-semibold text-sq-purple underline underline-offset-2"
                >
                  Vacation Redemption Terms
                </Link>
                . Incentive fulfillment may involve third-party redemption partners.
                Airfare is not included.
              </p>
            </div>

            <div id="communications" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">06</span>
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

            <div id="cookies-analytics" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">07</span>
                Cookies &amp; Analytics
              </h2>
              <p>
                We may use cookies, similar technologies, and analytics tools to
                understand how visitors use the site, improve performance, and
                support security. You can control cookies through your browser
                settings. Disabling cookies may affect some site functionality.
              </p>
            </div>

            <div id="data-security" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">08</span>
                Data Security
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

            <div id="data-retention" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">09</span>
                Data Retention
              </h2>
              <p>
                We retain quote and contact records for as long as needed to fulfill
                the purpose of the request, support follow-up, meet operational
                needs, and comply with legal or recordkeeping obligations, after
                which records may be deleted or de-identified according to our
                internal practices.
              </p>
            </div>

            <div id="privacy-choices" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">10</span>
                Privacy Choices
              </h2>
              <p>
                If you have questions about this notice, want to update contact
                details associated with a recent quote request, or wish to discuss
                how Smart Quotes handles your information, contact us using the
                details below. Depending on your location, you may have additional
                rights under applicable law. We will review privacy-related requests
                in good faith and respond through reasonable channels.
              </p>
            </div>

            <div id="childrens-privacy" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">11</span>
                Children&apos;s Privacy
              </h2>
              <p>
                The Smart Quotes website is intended for adults exploring business
                or household service solutions. We do not knowingly collect personal
                information from children under 13. If you believe a child has
                submitted information to us, contact us and we will take reasonable
                steps to delete it.
              </p>
            </div>

            <div id="third-party-websites" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">12</span>
                Third-Party Websites
              </h2>
              <p>
                Our site may link to third-party websites or tools (for example
                partner applications or vacation redemption pages). Those sites are
                governed by their own privacy practices. Smart Quotes is not
                responsible for the content or privacy controls of external sites.
              </p>
            </div>

            <div id="policy-updates" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">13</span>
                Policy Updates
              </h2>
              <p>
                We may update this Privacy &amp; Data Handling page from time to
                time. The “Last updated” date at the top of this page reflects the
                most recent revision. Continued use of the website after an update
                constitutes notice of the revised practices described here.
              </p>
            </div>

            <div id="contact" className="scroll-mt-28">
              <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
                <span className="mr-2 text-sq-purple">14</span>
                Contact
              </h2>
              <ul className="list-none space-y-1 pl-0">
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
              <p className="mt-4 text-sm">
                Related pages:{" "}
                <Link
                  href="/vacation-terms"
                  className="font-semibold text-sq-purple underline underline-offset-2"
                >
                  Vacation Redemption Terms
                </Link>{" "}
                ·{" "}
                <Link
                  href="/terms"
                  className="font-semibold text-sq-purple underline underline-offset-2"
                >
                  Terms &amp; Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
