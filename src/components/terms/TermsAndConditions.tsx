import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/components/Button";
import { COMPANY } from "@/lib/company";
import { cn } from "@/lib/utils";

const LAST_UPDATED = "September 22, 2026";

const SECTIONS = [
  { id: "acceptance", number: "01", title: "Acceptance of Terms" },
  { id: "about", number: "02", title: "About Smart Quotes" },
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

function Callout({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-xl border border-sq-royal/20 bg-[#eef2ff] px-5 py-4 text-sm leading-relaxed text-sq-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}

function LegalVisual({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative mx-auto aspect-square w-full max-w-[280px] lg:max-w-none",
        className,
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-sq-soft via-white to-[#eef2ff] shadow-[0_24px_60px_-28px_rgba(61,26,188,0.45)]" />
      <div className="absolute inset-[12%] rounded-2xl border border-sq-purple/15 bg-white shadow-[0_12px_32px_-18px_rgba(15,23,42,0.25)]" />
      <svg
        viewBox="0 0 240 240"
        className="absolute inset-0 h-full w-full p-8"
        fill="none"
      >
        <defs>
          <linearGradient id="termsDocGrad" x1="40" y1="30" x2="200" y2="210">
            <stop stopColor="#5a2cff" stopOpacity="0.95" />
            <stop offset="1" stopColor="#3d1abc" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect
          x="58"
          y="42"
          width="124"
          height="156"
          rx="14"
          fill="url(#termsDocGrad)"
          opacity="0.12"
        />
        <rect
          x="68"
          y="52"
          width="104"
          height="136"
          rx="12"
          fill="#ffffff"
          stroke="#5a2cff"
          strokeOpacity="0.28"
          strokeWidth="2"
        />
        <path
          d="M88 82h64M88 100h64M88 118h48M88 136h56"
          stroke="#5a2cff"
          strokeOpacity="0.45"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle cx="168" cy="168" r="28" fill="#5a2cff" />
        <path
          d="M156 168.5 164.5 177 182 159.5"
          stroke="#ffffff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

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

function SectionNavLink({
  href,
  number,
  title,
  compact = false,
}: {
  href: string;
  number: string;
  title: string;
  compact?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "rounded-md text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-purple",
        compact
          ? "inline-flex shrink-0 items-center gap-2 whitespace-nowrap border border-sq-border bg-white px-3 py-2 text-sq-ink hover:border-sq-purple/40 hover:bg-sq-soft hover:text-sq-purple"
          : "flex items-start gap-2 px-2 py-2 text-sq-ink/80 hover:bg-sq-soft hover:text-sq-purple",
      )}
    >
      <span className="font-heading text-xs font-bold text-sq-purple">
        {number}
      </span>
      <span>{title}</span>
    </a>
  );
}

export function TermsAndConditions() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="border-b border-sq-border bg-gradient-to-br from-[#eef2ff] via-white to-[#f7f8fc] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(220px,0.7fr)] lg:gap-14">
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
              Last updated: {LAST_UPDATED}
            </p>
          </div>
          <LegalVisual className="hidden sm:block" />
        </div>
      </section>

      {/* Horizontal On This Page */}
      <section
        aria-label="On this page"
        className="border-b border-sq-border bg-white/95 px-4 py-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-sq-gray">
            On This Page
          </p>
          <nav
            aria-label="Terms section shortcuts"
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:thin]"
          >
            {SECTIONS.map((section) => (
              <SectionNavLink
                key={`h-${section.id}`}
                href={`#${section.id}`}
                number={section.number}
                title={section.title}
                compact
              />
            ))}
          </nav>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          {/* Desktop left navigator */}
          <aside className="hidden lg:sticky lg:top-28 lg:block lg:self-start">
            <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.14em] text-sq-gray">
              On this page
            </p>
            <nav aria-label="Terms sections" className="space-y-1">
              {SECTIONS.map((section) => (
                <SectionNavLink
                  key={`s-${section.id}`}
                  href={`#${section.id}`}
                  number={section.number}
                  title={section.title}
                />
              ))}
            </nav>
          </aside>

          {/* Mobile collapsible navigator */}
          <div className="lg:hidden">
            <details className="rounded-xl border border-sq-border bg-sq-gray-light/50 open:bg-white">
              <summary className="cursor-pointer list-none px-4 py-3 font-heading text-sm font-bold text-sq-ink marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-3">
                  <span>
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-sq-purple">
                      On this page
                    </span>
                    <span className="mt-0.5 block text-sq-gray">
                      Jump to a Terms section
                    </span>
                  </span>
                  <span
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-sq-border text-sq-purple"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none">
                      <path
                        d="M5 7.5 10 12.5 15 7.5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </summary>
              <nav
                aria-label="Terms sections (mobile)"
                className="space-y-1 border-t border-sq-border px-2 py-3"
              >
                {SECTIONS.map((section) => (
                  <SectionNavLink
                    key={`m-${section.id}`}
                    href={`#${section.id}`}
                    number={section.number}
                    title={section.title}
                  />
                ))}
              </nav>
            </details>
          </div>

          <div className="min-w-0 space-y-12 text-sq-gray leading-relaxed">
            {/* 01 Acceptance */}
            <div id="acceptance" className="scroll-mt-28">
              <SectionHeading number="01" title="Acceptance of Terms" />
              <div className="space-y-4">
                <p>
                  By accessing or using the {COMPANY.legalName} website,
                  submitting a quote request, contacting Smart Quotes through the
                  website, or using other website features, you agree to these
                  Terms &amp; Conditions.
                </p>
                <p>
                  If you do not agree with these Terms, you should not use the
                  website or submit information through its forms.
                </p>
                <p>
                  These Terms apply to the Smart Quotes website and services made
                  available directly through Smart Quotes. Separate provider terms
                  may apply when you elect to purchase or activate a third-party
                  product or service.
                </p>
              </div>
            </div>

            {/* 02 About */}
            <div id="about" className="scroll-mt-28">
              <SectionHeading number="02" title="About Smart Quotes LLC" />
              <div className="space-y-4">
                <p>
                  {COMPANY.legalName} helps consumers and businesses request
                  information and quotes for available products and services.
                </p>
                <p>Smart Quotes may assist with service categories including:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>Xfinity Residential</li>
                  <li>Comcast Business</li>
                  <li>Merchant Services / payment-processing solutions</li>
                  <li>
                    Other services that may be made available through the website
                    in the future
                  </li>
                </ul>
                <p>
                  Smart Quotes may act as an authorized contractor, connector,
                  referral source, intermediary, or independent service provider
                  depending on the applicable product or service relationship.
                  Smart Quotes does not own or operate third-party providers such
                  as Xfinity, Comcast, or merchant-services companies.
                </p>
              </div>
            </div>

            {/* 03 Quote Requests */}
            <div id="quote-requests" className="scroll-mt-28">
              <SectionHeading number="03" title="Smart Quote Requests" />
              <div className="space-y-4">
                <p>Submitting a Smart Quote request:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>does not obligate the customer to make a purchase</li>
                  <li>does not guarantee approval</li>
                  <li>does not guarantee service availability</li>
                  <li>does not guarantee a specific price</li>
                  <li>does not guarantee specific equipment</li>
                  <li>does not guarantee promotional eligibility</li>
                  <li>does not create a binding service contract</li>
                </ul>
                <p>
                  Information submitted through a Smart Quote form is used to
                  understand the request and help connect the customer with
                  relevant service options or representatives.
                </p>
                <p>
                  Final availability, pricing, eligibility, installation
                  requirements, taxes, fees, equipment, contract terms, and
                  promotional conditions may be determined by the applicable
                  service provider.
                </p>
                <Callout className="font-heading text-base font-bold text-sq-purple">
                  Requesting a Smart Quote does not obligate you to purchase
                  service.
                </Callout>
              </div>
            </div>

            {/* 04 Third-party services */}
            <div id="third-party-services" className="scroll-mt-28">
              <SectionHeading
                number="04"
                title="Third-Party Products and Services"
              />
              <div className="space-y-4">
                <p>
                  Many products and services available through Smart Quotes are
                  provided by independent third-party companies.
                </p>
                <p>Those companies may maintain their own:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>service agreements</li>
                  <li>privacy policies</li>
                  <li>pricing</li>
                  <li>installation requirements</li>
                  <li>equipment policies</li>
                  <li>cancellation policies</li>
                  <li>warranties</li>
                  <li>eligibility requirements</li>
                  <li>promotional terms</li>
                </ul>
                <p>
                  If the customer chooses to purchase a third-party service, the
                  applicable provider&apos;s terms may govern that service
                  relationship.
                </p>
                <p>
                  Smart Quotes does not control every term, price, policy, product
                  feature, or availability decision made by a third-party
                  provider.
                </p>
              </div>
            </div>

            {/* 05 Xfinity / Comcast */}
            <div id="xfinity-comcast" className="scroll-mt-28">
              <SectionHeading
                number="05"
                title="Xfinity and Comcast Service Requests"
              />
              <div className="space-y-4">
                <p>
                  {COMPANY.legalName} may assist customers with requests involving
                  Xfinity Residential and Comcast Business services through
                  authorized or applicable service channels.
                </p>
                <p>
                  Availability, pricing, promotions, equipment, installation,
                  eligibility, service areas, and final account terms are subject
                  to the applicable Comcast/Xfinity systems, policies, and service
                  requirements.
                </p>
                <Callout>
                  <strong className="font-heading text-sq-ink">
                    Important disclosure:
                  </strong>{" "}
                  {COMPANY.legalName} is a separate business and is not the owner
                  or operator of Xfinity or Comcast. Third-party names and marks
                  belong to their respective owners and are referenced for service
                  categorization and request routing only.
                </Callout>
              </div>
            </div>

            {/* 06 Merchant */}
            <div id="merchant-services" className="scroll-mt-28">
              <SectionHeading number="06" title="Merchant Services" />
              <div className="space-y-4">
                <p>
                  Smart Quotes may assist businesses seeking information about:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>payment processing</li>
                  <li>POS systems</li>
                  <li>smart terminals</li>
                  <li>countertop terminals</li>
                  <li>mobile payment equipment</li>
                  <li>kiosks</li>
                  <li>related merchant-service solutions</li>
                </ul>
                <p>
                  Final pricing, underwriting, approval, equipment eligibility,
                  processing terms, settlement terms, fees, agreements, and account
                  activation may be determined by the applicable merchant-services
                  provider.
                </p>
                <p>
                  Submitting a merchant quote request does not guarantee approval
                  or specific pricing.
                </p>
              </div>
            </div>

            {/* 07 Vacation */}
            <div id="vacation-incentives" className="scroll-mt-28">
              <SectionHeading number="07" title="Vacation-Stay Incentives" />
              <div className="space-y-4">
                <p>
                  Smart Quotes may offer a complimentary vacation-stay incentive
                  in connection with certain qualifying quote requests. Eligibility
                  and redemption are subject to separate terms.
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>not every quote request necessarily qualifies</li>
                  <li>activation deadlines may apply</li>
                  <li>redemption deadlines may apply</li>
                  <li>participating properties are subject to availability</li>
                  <li>taxes and/or applicable fees may apply</li>
                  <li>occupancy restrictions may apply</li>
                  <li>household or promotional restrictions may apply</li>
                  <li>airfare is not included unless expressly stated</li>
                  <li>
                    incentive terms may change according to the applicable program
                    rules
                  </li>
                </ul>
                <Callout>
                  <p className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-sq-purple">
                    Vacation Redemption Terms
                  </p>
                  <p className="mt-2">
                    Full eligibility, deadlines, fees, occupancy rules, and
                    redemption requirements are set out in the separate Vacation
                    Redemption Terms page — not in these general Terms.
                  </p>
                  <Link
                    href="/vacation-terms"
                    className="mt-3 inline-flex font-heading text-xs font-bold uppercase tracking-[0.12em] text-sq-purple underline underline-offset-4 hover:text-sq-purple-hover"
                  >
                    Vacation Redemption Terms →
                  </Link>
                </Callout>
              </div>
            </div>

            {/* 08 Communications */}
            <div id="communications" className="scroll-mt-28">
              <SectionHeading number="08" title="Communications" />
              <div className="space-y-4">
                <p>
                  When users submit a quote request, contact form, agent inquiry,
                  or other request, Smart Quotes may contact them regarding that
                  request.
                </p>
                <p>Communications may include:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>phone calls</li>
                  <li>email</li>
                  <li>text messages where permitted</li>
                  <li>service-related follow-up</li>
                  <li>quote information</li>
                  <li>appointment or application information</li>
                </ul>
                <p>
                  Contact preferences and any consent collected through Smart
                  Quotes forms apply as disclosed on those forms. This page does
                  not expand SMS or marketing consent beyond what a form actually
                  collects.
                </p>
                <p>
                  For information about how Smart Quotes handles personal data,
                  see{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
                  >
                    Privacy &amp; Data Handling
                  </Link>
                  .
                </p>
              </div>
            </div>

            {/* 09 Website use */}
            <div id="website-use" className="scroll-mt-28">
              <SectionHeading number="09" title="Permitted Website Use" />
              <div className="space-y-4">
                <p>Users agree not to:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>interfere with website operation</li>
                  <li>attempt unauthorized system access</li>
                  <li>submit intentionally false or fraudulent information</li>
                  <li>misuse forms or automated submission systems</li>
                  <li>impersonate another person or business</li>
                  <li>distribute malware</li>
                  <li>
                    scrape or exploit website systems in a harmful manner
                  </li>
                  <li>use the website for unlawful activity</li>
                </ul>
                <p>
                  Smart Quotes may restrict access when necessary to protect users,
                  systems, or business operations.
                </p>
              </div>
            </div>

            {/* 10 IP */}
            <div id="intellectual-property" className="scroll-mt-28">
              <SectionHeading number="10" title="Intellectual Property" />
              <div className="space-y-4">
                <p>
                  Smart Quotes branding, website design, original written content,
                  graphics, logos, software elements, and other proprietary
                  materials may be protected by applicable intellectual-property
                  laws.
                </p>
                <p>
                  Users may view and use the website for normal personal or
                  business inquiry purposes. They may not reproduce, distribute,
                  modify, falsely represent, or commercially exploit proprietary
                  Smart Quotes materials without permission.
                </p>
                <p>
                  Smart Quotes does not claim ownership of third-party trademarks,
                  provider logos, product images, or other third-party intellectual
                  property. Third-party names and marks belong to their respective
                  owners.
                </p>
              </div>
            </div>

            {/* 11 Third-party links */}
            <div id="third-party-links" className="scroll-mt-28">
              <SectionHeading
                number="11"
                title="Third-Party Websites and Links"
              />
              <div className="space-y-4">
                <p>
                  The website may link to third-party websites, portals, provider
                  systems, onboarding tools, or external services.
                </p>
                <p>Examples may include:</p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>service-provider systems</li>
                  <li>Turfquest onboarding</li>
                  <li>vacation redemption systems</li>
                  <li>payment/service provider websites</li>
                </ul>
                <p>
                  Smart Quotes is not responsible for the content, security,
                  privacy practices, availability, or terms of third-party
                  websites. Users should review the applicable third-party terms
                  before using those services.
                </p>
              </div>
            </div>

            {/* 12 Disclaimers */}
            <div id="disclaimers" className="scroll-mt-28">
              <SectionHeading
                number="12"
                title="Website and Service Disclaimers"
              />
              <div className="space-y-4">
                <p>
                  The website and its content are provided for informational and
                  quote-request purposes.
                </p>
                <p>
                  Smart Quotes works to keep information accurate and current, but:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>service availability may change</li>
                  <li>promotions may change</li>
                  <li>third-party prices may change</li>
                  <li>provider requirements may change</li>
                  <li>equipment availability may change</li>
                  <li>errors or temporary interruptions may occur</li>
                </ul>
                <p>
                  Nothing on this page is intended to disclaim responsibilities that
                  cannot legally be disclaimed under applicable law.
                </p>
              </div>
            </div>

            {/* 13 Limitation */}
            <div id="limitation-of-liability" className="scroll-mt-28">
              <SectionHeading number="13" title="Limitation of Liability" />
              <div className="space-y-4">
                <p>
                  To the extent permitted by applicable law, Smart Quotes is not
                  responsible for indirect or consequential losses arising solely
                  from:
                </p>
                <ul className="list-disc space-y-2 pl-5">
                  <li>third-party service-provider decisions</li>
                  <li>third-party outages</li>
                  <li>third-party pricing changes</li>
                  <li>external website issues</li>
                  <li>unavailable promotions</li>
                  <li>
                    circumstances outside Smart Quotes&apos; reasonable control
                  </li>
                </ul>
                <p>
                  This limitation does not attempt to waive liability for
                  intentional misconduct or obligations that cannot legally be
                  waived.
                </p>
              </div>
            </div>

            {/* 14 Indemnification */}
            <div id="indemnification" className="scroll-mt-28">
              <SectionHeading
                number="14"
                title="Your Responsibility for Misuse"
              />
              <div className="space-y-4">
                <p>
                  To the extent permitted by law, users may be responsible for
                  losses or claims resulting from their unlawful, fraudulent, or
                  materially abusive misuse of the website or violation of these
                  Terms.
                </p>
              </div>
            </div>

            {/* 15 Changes */}
            <div id="changes" className="scroll-mt-28">
              <SectionHeading number="15" title="Changes to These Terms" />
              <div className="space-y-4">
                <p>
                  Smart Quotes may update these Terms periodically to reflect
                  changes in website functionality, business practices, services,
                  or applicable requirements.
                </p>
                <p>
                  When material revisions are made, the “Last Updated” date should
                  be revised.
                </p>
                <p>
                  Continued use of the website after updated Terms are posted is
                  subject to applicable law and the updated Terms.
                </p>
              </div>
            </div>

            {/* 16 Governing law */}
            <div id="governing-law" className="scroll-mt-28">
              <SectionHeading number="16" title="Governing Law" />
              <div className="space-y-4">
                <p>
                  These Terms are generally governed by the laws applicable to{" "}
                  {COMPANY.legalName}&apos;s operations in the Commonwealth of
                  Virginia, without attempting to override consumer protections or
                  other laws that may apply based on a customer&apos;s location.
                </p>
              </div>
            </div>

            {/* 17 Contact */}
            <div id="contact" className="scroll-mt-28">
              <SectionHeading number="17" title="Questions About These Terms?" />
              <div className="rounded-2xl border border-sq-border bg-gradient-to-br from-sq-soft/70 via-white to-[#eef2ff] p-6 sm:p-8">
                <p className="font-heading text-lg font-extrabold text-sq-ink">
                  {COMPANY.legalName}
                </p>
                <address className="mt-3 not-italic text-sq-gray">
                  <p>{COMPANY.addressStreet}</p>
                  <p>{COMPANY.cityStateZip}</p>
                </address>
                <ul className="mt-4 space-y-2">
                  <li>
                    <a
                      href={COMPANY.phoneHref}
                      className="font-semibold text-sq-purple hover:text-sq-purple-hover"
                    >
                      {COMPANY.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={COMPANY.emailHref}
                      className="font-semibold text-sq-purple hover:text-sq-purple-hover"
                    >
                      {COMPANY.email}
                    </a>
                  </li>
                  <li>
                    <span className="text-sq-ink">{COMPANY.hoursDays}</span>
                    <br />
                    <span>{COMPANY.hoursTime}</span>
                  </li>
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href="/contact">Contact Us</Button>
                  <Button href="/quote" variant="outline">
                    Get a Smart Quote
                  </Button>
                </div>
                <p className="mt-6 text-sm">
                  Related legal pages:{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
                  >
                    Privacy &amp; Data Handling
                  </Link>{" "}
                  ·{" "}
                  <Link
                    href="/vacation-terms"
                    className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
                  >
                    Vacation Redemption Terms
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
