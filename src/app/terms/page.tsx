import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/Button";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the terms governing use of the Smart Quotes LLC website, quote requests, third-party services, merchant solutions, and related website features.",
  alternates: {
    canonical: `${COMPANY.website}/terms`,
  },
};

const SECTIONS = [
  { id: "acceptance", number: "01", title: "Acceptance of Terms" },
  { id: "about-smart-quotes", number: "02", title: "About Smart Quotes" },
  { id: "quote-requests", number: "03", title: "Quote Requests" },
  { id: "third-party-services", number: "04", title: "Third-Party Services" },
  { id: "xfinity-comcast", number: "05", title: "Xfinity & Comcast Requests" },
  { id: "merchant-services", number: "06", title: "Merchant Services" },
  { id: "vacation-incentives", number: "07", title: "Vacation Incentives" },
  { id: "communications", number: "08", title: "Communications" },
  { id: "website-use", number: "09", title: "Website Use" },
  { id: "intellectual-property", number: "10", title: "Intellectual Property" },
  { id: "third-party-links", number: "11", title: "Third-Party Links" },
  { id: "disclaimers", number: "12", title: "Disclaimers" },
  { id: "limitation-of-liability", number: "13", title: "Limitation of Liability" },
  { id: "indemnification", number: "14", title: "Indemnification" },
  { id: "changes", number: "15", title: "Changes to These Terms" },
  { id: "governing-law", number: "16", title: "Governing Law" },
  { id: "contact", number: "17", title: "Contact" },
] as const;

const SERVICE_CATEGORIES = [
  "Xfinity Residential",
  "Comcast Business",
  "Merchant Services / payment-processing solutions",
  "Other services that may be made available through the website in the future",
];

const QUOTE_LIMITS = [
  "does not obligate you to make a purchase",
  "does not guarantee approval",
  "does not guarantee service availability",
  "does not guarantee a specific price",
  "does not guarantee specific equipment",
  "does not guarantee promotional eligibility",
  "does not create a binding service contract",
];

const PROVIDER_OWN_TERMS = [
  "service agreements",
  "privacy policies",
  "pricing",
  "installation requirements",
  "equipment policies",
  "cancellation policies",
  "warranties",
  "eligibility requirements",
  "promotional terms",
];

const MERCHANT_TOPICS = [
  "payment processing",
  "POS systems",
  "smart terminals",
  "countertop terminals",
  "mobile payment equipment",
  "kiosks",
  "related merchant-service solutions",
];

const VACATION_POINTS = [
  "Not every quote request necessarily qualifies",
  "Activation deadlines may apply",
  "Redemption deadlines may apply",
  "Participating properties are subject to availability",
  "Taxes and/or applicable fees may apply",
  "Occupancy restrictions may apply",
  "Household or promotional restrictions may apply",
  "Airfare is not included unless expressly stated",
  "Incentive terms may change according to the applicable program rules",
];

const COMMUNICATION_TYPES = [
  "phone calls",
  "email",
  "text messages where permitted",
  "service-related follow-up",
  "quote information",
  "appointment or application information",
];

const PROHIBITED_USES = [
  "interfere with website operation",
  "attempt unauthorized system access",
  "submit intentionally false or fraudulent information",
  "misuse forms or automated submission systems",
  "impersonate another person or business",
  "distribute malware",
  "scrape or exploit website systems in a harmful manner",
  "use the website for unlawful activity",
];

function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <h2 className="mb-4 font-heading text-2xl font-extrabold text-sq-ink">
      <span className="mr-2 text-sq-purple">{number}</span>
      {title}
    </h2>
  );
}

function SectionNav({ className }: { className?: string }) {
  return (
    <nav aria-label="Terms sections" className={className}>
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
  );
}

export default function TermsPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-sq-border bg-gradient-to-br from-[#eef2ff] via-white to-[#f7f8fc] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
          <div>
            <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple">
              Smart Quotes LLC
            </p>
            <h1 className="font-heading text-3xl font-extrabold tracking-tight text-sq-ink sm:text-4xl lg:text-5xl">
              Terms &amp; Conditions
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-sq-gray sm:text-lg">
              Please review these Terms &amp; Conditions carefully. They govern
              your use of the Smart Quotes website, quote-request services, and
              related website features.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-sq-gray sm:text-base">
              Additional terms may apply to specific providers, products,
              promotions, and vacation incentives.
            </p>
            <p className="mt-4 text-sm text-sq-gray">
              Last updated: September 22, 2026
            </p>
          </div>

          <div
            className="relative mx-auto flex h-44 w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl border border-sq-border/70 bg-white shadow-[0_18px_40px_-28px_rgba(26,16,72,0.45)] sm:h-52"
            aria-hidden="true"
          >
            <div
              className="absolute inset-0 opacity-90"
              style={{
                background:
                  "radial-gradient(circle at 20% 20%, rgba(90,44,255,0.16), transparent 45%), radial-gradient(circle at 85% 75%, rgba(38,61,255,0.14), transparent 40%), linear-gradient(160deg, #f8f9ff 0%, #eef2ff 100%)",
              }}
            />
            <div className="relative flex items-center gap-4 px-6">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3d1abc] to-[#5a2cff] text-white shadow-[0_14px_28px_-16px_rgba(90,44,255,0.8)]">
                <svg viewBox="0 0 48 48" className="h-9 w-9" fill="none">
                  <path
                    d="M14 10h16l8 8v20a2 2 0 0 1-2 2H14a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M30 10v8h8M18 26h12M18 32h8"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M19 21.5 21.5 24 27 18.5"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <p className="font-heading text-sm font-extrabold uppercase tracking-[0.08em] text-sq-ink">
                  Website Terms
                </p>
                <p className="mt-1 text-sm text-sq-gray">
                  Clear rules for quotes, providers, and site use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <details className="rounded-xl border border-sq-border/80 bg-sq-gray-light/50 p-3 lg:hidden">
              <summary className="cursor-pointer list-none font-heading text-xs font-bold uppercase tracking-[0.14em] text-sq-ink">
                On this page
                <span className="mt-1 block font-sans text-[11px] font-medium normal-case tracking-normal text-sq-gray">
                  Tap to jump to a section
                </span>
              </summary>
              <SectionNav className="mt-3 space-y-1" />
            </details>

            <div className="hidden lg:block">
              <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-sq-gray">
                On this page
              </p>
              <SectionNav className="space-y-1" />
            </div>
          </aside>

          <div className="space-y-12 text-sq-gray leading-relaxed">
            <div id="acceptance" className="scroll-mt-28">
              <SectionHeading number="01" title="Acceptance of Terms" />
              <p>
                By accessing or using the {COMPANY.legalName} website, submitting
                a quote request, contacting Smart Quotes through the website, or
                using other website features, you agree to these Terms &amp;
                Conditions.
              </p>
              <p className="mt-4">
                If you do not agree with these Terms, you should not use the
                website or submit information through its forms.
              </p>
              <p className="mt-4">
                These Terms apply to the Smart Quotes website and services made
                available directly through Smart Quotes. Separate provider terms
                may apply when you elect to purchase or activate a third-party
                product or service.
              </p>
            </div>

            <div id="about-smart-quotes" className="scroll-mt-28">
              <SectionHeading number="02" title="About Smart Quotes LLC" />
              <p>
                {COMPANY.legalName} helps consumers and businesses request
                information and quotes for available products and services.
              </p>
              <p className="mt-4">
                Smart Quotes may assist with service categories including:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {SERVICE_CATEGORIES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                Smart Quotes may act as an authorized contractor, connector,
                referral source, intermediary, or independent service provider
                depending on the applicable product or service relationship.
                Smart Quotes does not own or operate third-party providers such
                as Xfinity or Comcast.
              </p>
            </div>

            <div id="quote-requests" className="scroll-mt-28">
              <SectionHeading number="03" title="Smart Quote Requests" />
              <p>Submitting a Smart Quote request:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {QUOTE_LIMITS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                Information submitted through a Smart Quote form is used to
                understand the request and help connect you with relevant service
                options or representatives.
              </p>
              <p className="mt-4">
                Final availability, pricing, eligibility, installation
                requirements, taxes, fees, equipment, contract terms, and
                promotional conditions may be determined by the applicable service
                provider.
              </p>
              <div className="mt-5 rounded-xl border border-sq-royal/20 bg-[#eef2ff] px-5 py-4 text-sm text-sq-ink">
                Requesting a Smart Quote does not obligate you to purchase
                service.
              </div>
            </div>

            <div id="third-party-services" className="scroll-mt-28">
              <SectionHeading number="04" title="Third-Party Products and Services" />
              <p>
                Many products and services available through Smart Quotes are
                provided by independent third-party companies.
              </p>
              <p className="mt-4">
                Those companies may maintain their own:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {PROVIDER_OWN_TERMS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                If you choose to purchase a third-party service, the applicable
                provider&apos;s terms may govern that service relationship. Smart
                Quotes does not control every term, price, policy, product
                feature, or availability decision made by a third-party provider.
              </p>
            </div>

            <div id="xfinity-comcast" className="scroll-mt-28">
              <SectionHeading
                number="05"
                title="Xfinity and Comcast Service Requests"
              />
              <p>
                {COMPANY.legalName} may assist customers with requests involving
                Xfinity Residential and Comcast Business services through
                authorized or applicable service channels.
              </p>
              <p className="mt-4">
                Availability, pricing, promotions, equipment, installation,
                eligibility, service areas, and final account terms are subject to
                the applicable Comcast/Xfinity systems, policies, and service
                requirements.
              </p>
              <div className="mt-5 rounded-xl border border-sq-border/80 bg-sq-gray-light/70 px-5 py-4 text-sm text-sq-ink">
                {COMPANY.legalName} is a separate business and is not the owner
                or operator of Xfinity or Comcast.
              </div>
            </div>

            <div id="merchant-services" className="scroll-mt-28">
              <SectionHeading number="06" title="Merchant Services" />
              <p>
                Smart Quotes may assist businesses seeking information about:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {MERCHANT_TOPICS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                Final pricing, underwriting, approval, equipment eligibility,
                processing terms, settlement terms, fees, agreements, and account
                activation may be determined by the applicable merchant-services
                provider. Submitting a merchant quote request does not guarantee
                approval or specific pricing.
              </p>
            </div>

            <div id="vacation-incentives" className="scroll-mt-28">
              <SectionHeading number="07" title="Vacation-Stay Incentives" />
              <p>
                Smart Quotes may offer a complimentary vacation-stay incentive in
                connection with certain qualifying quote requests. Eligibility and
                redemption are subject to separate terms.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {VACATION_POINTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5">
                <Link
                  href="/vacation-terms"
                  className="inline-flex items-center rounded-md bg-sq-purple px-4 py-2.5 font-heading text-xs font-extrabold uppercase tracking-[0.1em] text-white transition hover:bg-sq-purple-hover"
                >
                  Vacation Redemption Terms →
                </Link>
              </p>
            </div>

            <div id="communications" className="scroll-mt-28">
              <SectionHeading number="08" title="Communications" />
              <p>
                When you submit a quote request, contact form, agent inquiry, or
                other request, Smart Quotes may contact you regarding that
                request.
              </p>
              <p className="mt-4">Communications may include:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {COMMUNICATION_TYPES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                How we handle personal information is described in our{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
                >
                  Privacy &amp; Data Handling
                </Link>{" "}
                page. Message and data rates may apply for phone or SMS
                communications depending on your carrier.
              </p>
            </div>

            <div id="website-use" className="scroll-mt-28">
              <SectionHeading number="09" title="Permitted Website Use" />
              <p>Users agree not to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {PROHIBITED_USES.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4">
                Smart Quotes may restrict access when necessary to protect users,
                systems, or business operations.
              </p>
            </div>

            <div id="intellectual-property" className="scroll-mt-28">
              <SectionHeading number="10" title="Intellectual Property" />
              <p>
                Smart Quotes branding, website design, original written content,
                graphics, logos, software elements, and other proprietary
                materials may be protected by applicable intellectual-property
                laws.
              </p>
              <p className="mt-4">
                You may view and use the website for normal personal or business
                inquiry purposes. You may not reproduce, distribute, modify,
                falsely represent, or commercially exploit proprietary Smart
                Quotes materials without permission.
              </p>
              <p className="mt-4">
                Third-party names, marks, product images, and logos that appear on
                this website belong to their respective owners. Smart Quotes does
                not claim ownership of those third-party intellectual-property
                rights.
              </p>
            </div>

            <div id="third-party-links" className="scroll-mt-28">
              <SectionHeading number="11" title="Third-Party Websites and Links" />
              <p>
                The website may link to third-party websites, portals, provider
                systems, onboarding tools, or external services. Examples may
                include service-provider systems, TurfQuest onboarding, vacation
                redemption systems, and payment/service provider websites.
              </p>
              <p className="mt-4">
                Smart Quotes is not responsible for the content, security,
                privacy practices, availability, or terms of third-party websites.
                Review the applicable third-party terms before using those
                services.
              </p>
            </div>

            <div id="disclaimers" className="scroll-mt-28">
              <SectionHeading number="12" title="Website and Service Disclaimers" />
              <p>
                The website and its content are provided for informational and
                quote-request purposes. Smart Quotes works to keep information
                accurate and current, but:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>service availability may change</li>
                <li>promotions may change</li>
                <li>third-party prices may change</li>
                <li>provider requirements may change</li>
                <li>equipment availability may change</li>
                <li>errors or temporary interruptions may occur</li>
              </ul>
              <p className="mt-4">
                Nothing on this website is an offer of employment, income
                guarantee, or a warranty that a particular product, price, or
                promotion will be available at the time of your request.
              </p>
            </div>

            <div id="limitation-of-liability" className="scroll-mt-28">
              <SectionHeading number="13" title="Limitation of Liability" />
              <p>
                To the extent permitted by applicable law, Smart Quotes is not
                responsible for indirect or consequential losses arising solely
                from:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>third-party service-provider decisions</li>
                <li>third-party outages</li>
                <li>third-party pricing changes</li>
                <li>external website issues</li>
                <li>unavailable promotions</li>
                <li>circumstances outside Smart Quotes&apos; reasonable control</li>
              </ul>
              <p className="mt-4">
                This section does not attempt to waive liability for intentional
                misconduct or for obligations that cannot legally be waived.
              </p>
            </div>

            <div id="indemnification" className="scroll-mt-28">
              <SectionHeading number="14" title="Your Responsibility for Misuse" />
              <p>
                To the extent permitted by law, you may be responsible for losses
                or claims resulting from your unlawful, fraudulent, or materially
                abusive misuse of the website or from your violation of these
                Terms.
              </p>
            </div>

            <div id="changes" className="scroll-mt-28">
              <SectionHeading number="15" title="Changes to These Terms" />
              <p>
                Smart Quotes may update these Terms periodically to reflect
                changes in website functionality, business practices, services, or
                applicable requirements.
              </p>
              <p className="mt-4">
                When material revisions are made, the “Last Updated” date on this
                page should be revised. Continued use of the website after updated
                Terms are posted is subject to applicable law and the updated
                Terms.
              </p>
            </div>

            <div id="governing-law" className="scroll-mt-28">
              <SectionHeading number="16" title="Governing Law" />
              <p>
                These Terms are generally governed by the laws applicable to{" "}
                {COMPANY.legalName}&apos;s operations in the Commonwealth of
                Virginia, without attempting to override consumer protections or
                other laws that may apply based on a customer&apos;s location.
              </p>
            </div>

            <div id="contact" className="scroll-mt-28">
              <SectionHeading number="17" title="Questions About These Terms?" />
              <div className="rounded-2xl border border-sq-border/80 bg-sq-gray-light/60 px-6 py-7 sm:px-8">
                <p className="font-heading text-lg font-extrabold text-sq-ink">
                  {COMPANY.legalName}
                </p>
                <p className="mt-3">{COMPANY.addressLine}</p>
                <p className="mt-2">
                  <a
                    href={COMPANY.phoneHref}
                    className="font-semibold text-sq-ink hover:text-sq-purple"
                  >
                    {COMPANY.phoneDisplay}
                  </a>
                </p>
                <p className="mt-1">
                  <a
                    href={COMPANY.emailHref}
                    className="font-semibold text-sq-ink hover:text-sq-purple"
                  >
                    {COMPANY.email}
                  </a>
                </p>
                <p className="mt-3 text-sm">
                  Monday–Friday
                  <br />
                  9:00 AM–6:00 PM
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href="/contact">Contact Us</Button>
                  <Button href="/quote" variant="outline">
                    Get a Smart Quote
                  </Button>
                </div>
              </div>

              <p className="mt-6 text-sm">
                Related pages:{" "}
                <Link
                  href="/privacy"
                  className="font-semibold text-sq-purple underline underline-offset-2"
                >
                  Privacy &amp; Data Handling
                </Link>{" "}
                ·{" "}
                <Link
                  href="/vacation-terms"
                  className="font-semibold text-sq-purple underline underline-offset-2"
                >
                  Vacation Redemption Terms
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
