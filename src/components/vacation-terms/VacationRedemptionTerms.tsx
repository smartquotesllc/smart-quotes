"use client";

import { useId, useState, type ReactNode } from "react";
import { CheckList } from "@/components/CheckList";
import { cn } from "@/lib/utils";

const REDEEM_URL = "https://redeemvacations.com/";

const NAV_ITEMS = [
  { href: "#activation", label: "Activation & Travel" },
  { href: "#group-travel", label: "Household & Group" },
  { href: "#occupancy", label: "Occupancy" },
  { href: "#fees", label: "Taxes & Fees" },
  { href: "#booking", label: "Booking & Availability" },
  { href: "#cancellation", label: "Non-Refundable" },
  { href: "#distance", label: "Distance" },
  { href: "#multiple-incentives", label: "Multiple Incentives" },
  { href: "#redeem", label: "How to Redeem" },
] as const;

const AT_A_GLANCE = [
  "Activate within 7 days of receiving your incentive",
  "Travel within 18 months after activation",
  "No timeshare presentation required",
  "Complimentary hotel room rate; taxes, recovery fees, and other expenses are your responsibility",
  "One incentive per household; group travel is not permitted",
  "Standard occupancy: up to 2 adults (one occupant must be 21+)",
  "Book at least 30 days in advance — subject to availability",
  "Must reside 100+ miles (160 km) from the destination resort",
  "After activation: final, non-refundable, and non-transferable",
  "Redemption fulfilled through RedeemVacations.com",
];

const CRITICAL_ALWAYS_VISIBLE = [
  {
    title: "7 days to activate",
    body: "You must activate your incentive within 7 days of receiving it.",
  },
  {
    title: "18 months to travel",
    body: "After activation, you have 18 months to complete travel. These are two separate deadlines.",
  },
  {
    title: "Subject to availability",
    body: "Hotels, resorts, rooms, destinations, and dates are not guaranteed.",
  },
  {
    title: "Final & non-refundable",
    body: "After activation, the incentive is final, non-refundable, and non-transferable.",
  },
];

type SectionDef = {
  id: string;
  number: string;
  title: string;
  summary?: string;
  defaultOpen?: boolean;
  content: ReactNode;
};

function Callout({
  children,
  variant = "purple",
  className,
}: {
  children: ReactNode;
  variant?: "purple" | "amber" | "rose" | "sky";
  className?: string;
}) {
  const styles = {
    purple: "border-sq-purple/25 bg-sq-soft text-sq-ink",
    amber: "border-amber-300/80 bg-amber-50 text-amber-950",
    rose: "border-rose-300/80 bg-rose-50 text-rose-950",
    sky: "border-sky-300/70 bg-sky-50 text-sky-950",
  } as const;
  return (
    <div
      className={cn(
        "rounded-xl border px-4 py-3 text-sm leading-relaxed sm:px-5 sm:py-4",
        styles[variant],
        className,
      )}
    >
      {children}
    </div>
  );
}

function DeadlineBadges() {
  return (
    <div className="mt-4 grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl border-2 border-sq-purple bg-sq-purple px-4 py-4 text-center text-white shadow-[0_12px_28px_-16px_rgba(90,44,255,0.7)]">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/80">
          Deadline 1
        </p>
        <p className="mt-1 font-heading text-lg font-extrabold tracking-tight sm:text-xl">
          7 DAYS TO ACTIVATE
        </p>
      </div>
      <div className="rounded-xl border-2 border-sq-purple-deep bg-sq-purple-deep px-4 py-4 text-center text-white">
        <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-white/80">
          Deadline 2
        </p>
        <p className="mt-1 font-heading text-lg font-extrabold tracking-tight sm:text-xl">
          18 MONTHS TO TRAVEL AFTER ACTIVATION
        </p>
      </div>
    </div>
  );
}

function RedeemButton({ className }: { className?: string }) {
  return (
    <a
      href={REDEEM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-md bg-sq-purple px-6 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white shadow-[0_12px_28px_-14px_rgba(90,44,255,0.65)] transition hover:bg-sq-purple-hover",
        className,
      )}
    >
      Redeem Your Vacation
    </a>
  );
}

function ExternalLink({
  href = REDEEM_URL,
  children,
}: {
  href?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
    >
      {children}
    </a>
  );
}

function AccordionItem({
  section,
  open,
  onToggle,
}: {
  section: SectionDef;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `${section.id}-panel`;
  const buttonId = `${section.id}-button`;

  return (
    <div className="overflow-hidden rounded-xl border border-sq-border bg-white">
      <h3>
        <button
          type="button"
          id={buttonId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-start gap-3 px-4 py-4 text-left transition hover:bg-sq-soft/40 sm:px-5"
        >
          <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-sq-soft font-heading text-xs font-bold text-sq-purple">
            {section.number}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-heading text-base font-bold text-sq-ink sm:text-lg">
              {section.title}
            </span>
            {section.summary ? (
              <span className="mt-1 block text-sm text-sq-gray">{section.summary}</span>
            ) : null}
          </span>
          <span
            className={cn(
              "mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sq-border text-sq-purple transition",
              open && "rotate-180 bg-sq-soft",
            )}
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
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="border-t border-sq-border px-4 py-4 sm:px-5 sm:py-5"
      >
        {section.content}
      </div>
    </div>
  );
}

function DesktopSection({ section }: { section: SectionDef }) {
  return (
    <article
      id={section.id}
      className="scroll-mt-28 rounded-2xl border border-sq-border bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03)] sm:p-7"
    >
      <div className="mb-4 flex items-start gap-3">
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-sq-soft font-heading text-sm font-bold text-sq-purple">
          {section.number}
        </span>
        <h2 className="font-heading text-xl font-extrabold tracking-tight text-sq-ink sm:text-2xl">
          {section.title}
        </h2>
      </div>
      <div className="space-y-4 text-[15px] leading-relaxed text-sq-gray">
        {section.content}
      </div>
    </article>
  );
}

function buildSections(): SectionDef[] {
  return [
    {
      id: "no-timeshare",
      number: "01",
      title: "No Timeshare Presentation Required",
      summary: "No sales meeting or timeshare presentation is required to redeem.",
      defaultOpen: true,
      content: (
        <>
          <p>
            No timeshare presentation, sales meeting, or ownership commitment is
            required to activate or redeem your Smart Quotes complimentary
            vacation incentive. Redemption is handled through{" "}
            <ExternalLink>RedeemVacations.com</ExternalLink> under that
            provider&apos;s program terms.
          </p>
          <Callout>
            You will not be required to attend a timeshare presentation in order
            to use this complimentary hotel accommodation incentive.
          </Callout>
        </>
      ),
    },
    {
      id: "activation",
      number: "02",
      title: "Activation & Travel Period",
      summary: "Two separate deadlines: 7 days to activate, then 18 months to travel.",
      defaultOpen: true,
      content: (
        <>
          <p>
            Activation and travel are governed by{" "}
            <strong className="text-sq-ink">two different deadlines</strong>. You
            must activate your incentive within{" "}
            <strong className="text-sq-ink">7 days</strong> of receiving it.
            After successful activation, you have{" "}
            <strong className="text-sq-ink">18 months</strong> to select and
            complete travel.
          </p>
          <DeadlineBadges />
          <p>
            This incentive cannot be combined with other hotel offers, promotional
            rates, or discount packages. Failure to activate within 7 days may
            result in forfeiture of the incentive under program rules.
          </p>
        </>
      ),
    },
    {
      id: "group-travel",
      number: "03",
      title: "Household & Group Travel Restrictions",
      summary: "No group travel. One incentive honored per household.",
      content: (
        <>
          <p>
            Group travel is not permitted under this program. Only{" "}
            <strong className="text-sq-ink">one incentive per household</strong>{" "}
            will be honored.
          </p>
          <p>
            RedeemVacations will honor only one complimentary hotel accommodation
            incentive for family members, friends, acquaintances, or any known
            traveling group requesting stays on the same, similar, or adjoining
            dates. Additional costs may apply where permitted under provider
            rules.
          </p>
          <Callout variant="amber">
            Smart Quotes and RedeemVacations cannot facilitate group travel under
            this complimentary vacation incentive.
          </Callout>
        </>
      ),
    },
    {
      id: "occupancy",
      number: "04",
      title: "Room Occupancy Requirements",
      summary: "Standard occupancy: up to 2 adults; one occupant must be 21+.",
      content: (
        <>
          <Callout className="font-heading text-center text-base font-bold uppercase tracking-[0.06em] text-sq-purple">
            Standard occupancy: Up to 2 adults.
          </Callout>
          <p>
            Standard room occupancy is a maximum of{" "}
            <strong className="text-sq-ink">2 adults</strong>. At least one
            occupant must be <strong className="text-sq-ink">21 years of age
            or older</strong>.
          </p>
          <p>
            Some participating properties may allow up to{" "}
            <strong className="text-sq-ink">2 children ages 12 and under</strong>
            , depending on the property. Occupancy rules vary by hotel.
          </p>
          <p>
            Searching with children may return fewer available hotels. Always
            review the occupancy limits shown for each property during booking on{" "}
            <ExternalLink>RedeemVacations.com</ExternalLink>.
          </p>
        </>
      ),
    },
    {
      id: "fees",
      number: "05",
      title: "Taxes, Fees & Additional Expenses",
      summary: "Room rate is complimentary; taxes, fees, and extras are your responsibility.",
      content: (
        <>
          <p>
            The <strong className="text-sq-ink">hotel room rate</strong> is
            complimentary under this incentive. The recipient is responsible for
            activation costs, recovery fees, local taxes, tourism fees, and other
            applicable charges disclosed at booking.
          </p>
          <p>
            The recipient is also responsible for airfare, ground transportation,
            food and beverages, gratuities, personal expenses, resort fees, and
            any other costs not expressly included as complimentary hotel room
            rate.
          </p>
          <Callout variant="sky">
            <p className="font-heading text-xs font-bold uppercase tracking-[0.1em]">
              Informational examples only — not guaranteed current prices
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Orlando-area tourism / recovery-style fees may be approximately{" "}
                <strong>$5–$13 per night</strong>
              </li>
              <li>
                Las Vegas-area tourism / recovery-style fees may be approximately{" "}
                <strong>$16–$38 per night</strong>
              </li>
            </ul>
            <p className="mt-2">
              Actual fees vary by property, destination, and date, and are
              disclosed at the time of booking. These figures are examples only
              and are not guaranteed current prices.
            </p>
          </Callout>
        </>
      ),
    },
    {
      id: "accommodation-value",
      number: "06",
      title: "Complimentary Hotel Accommodation",
      summary: "Complimentary room rate; retail value may be up to $350 USD/night depending on property.",
      content: (
        <>
          <p>
            This incentive provides a{" "}
            <strong className="text-sq-ink">
              complimentary hotel accommodation
            </strong>{" "}
            — specifically, the hotel room rate at no charge at participating
            properties, subject to availability and these terms.
          </p>
          <p>
            Depending on the property, the retail value of the complimentary room
            rate may be up to{" "}
            <strong className="text-sq-ink">$350 USD per night</strong>. This
            does <strong className="text-sq-ink">not</strong> mean every hotel
            offers that value, and it does not represent cash, credit, or
            transferable store credit.
          </p>
        </>
      ),
    },
    {
      id: "check-in",
      number: "07",
      title: "Check-In Requirements",
      summary: "Valid government ID plus Visa, Mastercard, or American Express card required.",
      content: (
        <>
          <p>
            At check-in, the primary reservation holder must present a valid
            government-issued photo ID and a major credit card or bank debit card
            from Visa, Mastercard, or American Express.
          </p>
          <p>
            A card may be required for incidental charges and/or security
            deposits. Hotel check-in and deposit policies may vary by property.
          </p>
        </>
      ),
    },
    {
      id: "booking",
      number: "08",
      title: "Booking Requirements & Availability",
      summary: "Book 30+ days in advance. Subject to availability — destinations and dates are not guaranteed.",
      defaultOpen: true,
      content: (
        <>
          <Callout
            variant="rose"
            className="text-center font-heading text-base font-extrabold uppercase tracking-[0.12em]"
          >
            Subject to availability
          </Callout>
          <p>
            Reservations must be booked at least{" "}
            <strong className="text-sq-ink">30 days in advance</strong>. All
            bookings are subject to availability. Holidays and special-event
            periods may be excluded.
          </p>
          <p>
            Check-in may be available 7 days a week, subject to availability.
            Weekend stays may include a small surcharge where applicable under
            provider rules.
          </p>
          <p>
            Specific hotels, resorts, rooms, destinations, and travel dates are{" "}
            <strong className="text-sq-ink">not guaranteed</strong>. Inventory
            may change. When necessary, RedeemVacations may substitute a hotel of
            equal or similar value, subject to program terms and recipient
            approval where required.
          </p>
        </>
      ),
    },
    {
      id: "cancellation",
      number: "09",
      title: "Final, Non-Refundable & Non-Transferable",
      summary: "After activation, the incentive is final. Confirmed dates cannot be changed.",
      defaultOpen: true,
      content: (
        <>
          <Callout
            variant="rose"
            className="font-heading text-center text-base font-extrabold uppercase tracking-[0.08em]"
          >
            After activation: final · non-refundable · non-transferable
          </Callout>
          <p>
            Once activated, this complimentary vacation incentive is{" "}
            <strong className="text-sq-ink">final, non-refundable, and
            non-transferable</strong>. You have 18 months after activation to
            select and book travel under program rules.
          </p>
          <p>
            Confirmed travel dates cannot be changed. Canceling after confirmation
            may result in forfeiture of activation fees. No-shows and
            cancellations may also result in forfeiture of fees already paid.
          </p>
          <p>
            Some inventory may be subject to stricter cancellation or change
            policies set by the hotel or RedeemVacations.
          </p>
        </>
      ),
    },
    {
      id: "distance",
      number: "10",
      title: "Distance Requirement",
      summary: "You must reside 100+ miles (160 km) from the destination resort.",
      content: (
        <>
          <p>
            Recipients must reside at least{" "}
            <strong className="text-sq-ink">100 miles (160 km)</strong> from the
            destination resort. If you live closer than this distance, you must
            select a different participating property that meets the requirement.
          </p>
          <p>
            RedeemVacations and/or the booking provider make the final
            determination regarding distance eligibility. Smart Quotes does not
            independently decide distance exceptions.
          </p>
        </>
      ),
    },
    {
      id: "no-cash-value",
      number: "11",
      title: "No Cash Value & Program Changes",
      summary: "No cash surrender value. Terms may change; substitutions may apply.",
      content: (
        <>
          <p>
            This incentive has{" "}
            <strong className="text-sq-ink">no cash surrender value</strong>. It
            is void if discontinued and void where prohibited by law.
          </p>
          <p>
            Terms may change without notice by the program provider. When
            necessary, RedeemVacations may offer an equal or similar-value hotel,
            subject to approval where required under program rules.
          </p>
          <p>
            Bed configuration and room type are subject to availability at
            check-in unless a paid upgrade is arranged directly with the hotel
            under that property&apos;s policies.
          </p>
        </>
      ),
    },
    {
      id: "multiple-incentives",
      number: "12",
      title: "Multiple Incentives",
      summary: "Two separate limits: once every 12 months, and once per destination lifetime.",
      content: (
        <>
          <p>
            <strong className="text-sq-ink">Restriction A:</strong> Only one
            complimentary vacation incentive may be redeemed every{" "}
            <strong className="text-sq-ink">12 months</strong> per household.
          </p>
          <p>
            <strong className="text-sq-ink">Restriction B:</strong> A travel
            incentive destination may only be redeemed{" "}
            <strong className="text-sq-ink">once per household lifetime</strong>.
          </p>
          <Callout variant="amber">
            These are two distinct restrictions. Both apply. Meeting one limit
            does not waive the other.
          </Callout>
        </>
      ),
    },
    {
      id: "redeem",
      number: "13",
      title: "How to Redeem",
      summary: "Receive → Activate within 7 days → Search → Complete reservation.",
      defaultOpen: true,
      content: (
        <>
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "1", title: "Receive", copy: "Receive your Smart Quotes complimentary vacation incentive." },
              { step: "2", title: "Activate Within 7 Days", copy: "Activate promptly — activation is time-sensitive." },
              { step: "3", title: "Search Hotels & Dates", copy: "Use RedeemVacations.com to search participating properties." },
              { step: "4", title: "Complete Reservation", copy: "Finish booking and pay any disclosed taxes and fees." },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-xl border border-sq-border bg-gradient-to-b from-sq-soft/80 to-white p-4"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sq-purple font-heading text-sm font-bold text-white">
                  {item.step}
                </span>
                <p className="mt-3 font-heading text-sm font-bold uppercase tracking-[0.06em] text-sq-ink">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-sq-gray">{item.copy}</p>
              </li>
            ))}
          </ol>
          <p>
            After you activate your incentive, complete redemption and booking
            through <ExternalLink>RedeemVacations.com</ExternalLink>. Smart Quotes
            provides the marketing incentive; RedeemVacations handles hotel
            inventory, activation, booking, fees, and fulfillment.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <RedeemButton />
            <p className="text-xs text-sq-gray">
              Opens RedeemVacations.com in a new tab
            </p>
          </div>
        </>
      ),
    },
    {
      id: "important-notice",
      number: "14",
      title: "Important Notice",
      summary: "Rely only on printed incentive terms and official RedeemVacations information.",
      content: (
        <>
          <p>
            Do not rely on representations other than the printed incentive terms
            and official information provided by RedeemVacations. Smart Quotes
            provides this complimentary vacation incentive as a promotional
            marketing offer.
          </p>
          <p>
            Availability, fees, participating properties, and redemption
            procedures are subject to the program and RedeemVacations. Smart
            Quotes does <strong className="text-sq-ink">not</strong> control
            hotel inventory.
          </p>
        </>
      ),
    },
    {
      id: "external-provider",
      number: "15",
      title: "External Provider Notice",
      summary: "Fulfillment is through RedeemVacations.com — Smart Quotes does not control inventory.",
      content: (
        <>
          <Callout>
            <p className="font-heading text-sm font-bold uppercase tracking-[0.08em] text-sq-purple">
              External provider disclosure
            </p>
            <p className="mt-2">
              Redemption of this complimentary hotel accommodation incentive is
              fulfilled through <ExternalLink>RedeemVacations.com</ExternalLink>.
              Smart Quotes LLC does not control inventory, availability, room
              availability, resort policies, taxes, resort fees, travel dates, or
              reservation availability.
            </p>
            <p className="mt-2">
              By activating or redeeming this incentive, you acknowledge that
              additional RedeemVacations provider terms may apply. Review those
              terms at <ExternalLink>RedeemVacations.com</ExternalLink> before
              activating.
            </p>
          </Callout>
        </>
      ),
    },
  ];
}

export function VacationRedemptionTerms() {
  const sections = buildSections();
  const baseId = useId();
  const [openMap, setOpenMap] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const section of sections) {
      initial[section.id] = Boolean(section.defaultOpen);
    }
    return initial;
  });

  return (
    <div id="vacation-terms" className="relative overflow-hidden">
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,_rgba(90,44,255,0.14),_transparent_60%),linear-gradient(180deg,#f7f5ff_0%,#ffffff_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {/* Hero */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.16em] text-sq-purple">
            Smart Quotes LLC
          </p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-sq-ink sm:text-4xl lg:text-5xl">
            Vacation Redemption Terms &amp; Conditions
          </h1>
          <p className="mt-5 text-base leading-relaxed text-sq-gray sm:text-lg">
            Your Smart Quotes vacation incentive provides complimentary hotel
            accommodation at participating properties, subject to availability and
            the redemption terms below. Please review these terms carefully before
            activating your incentive.
          </p>
          <Callout variant="amber" className="mt-6 text-left sm:text-center">
            <strong className="font-heading uppercase tracking-[0.06em]">
              Important:
            </strong>{" "}
            Activation is time-sensitive. You must activate your incentive within{" "}
            <strong>7 days</strong> of receiving it.
          </Callout>
        </header>

        {/* At a glance */}
        <section
          aria-labelledby={`${baseId}-glance`}
          className="mx-auto mt-10 max-w-4xl rounded-2xl border border-sq-purple/20 bg-white/90 p-5 shadow-[0_20px_50px_-30px_rgba(61,26,188,0.45)] backdrop-blur sm:p-8"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-sq-purple">
                Vacation Incentive at a Glance
              </p>
              <h2
                id={`${baseId}-glance`}
                className="mt-1 font-heading text-xl font-extrabold text-sq-ink sm:text-2xl"
              >
                Key restrictions before you activate
              </h2>
            </div>
            <RedeemButton className="shrink-0 self-start sm:self-auto" />
          </div>
          <div className="mt-6">
            <CheckList items={AT_A_GLANCE} />
          </div>
          <p className="mt-6 border-t border-sq-border pt-4 text-sm font-medium text-sq-ink">
            Please read the complete Terms &amp; Conditions below before
            activating your incentive.
          </p>
        </section>

        {/* Critical strip — always visible on mobile */}
        <section
          aria-label="Critical redemption restrictions"
          className="mt-8 grid gap-3 sm:grid-cols-2 lg:hidden"
        >
          {CRITICAL_ALWAYS_VISIBLE.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3"
            >
              <p className="font-heading text-xs font-bold uppercase tracking-[0.1em] text-rose-800">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-rose-950/90">{item.body}</p>
            </div>
          ))}
        </section>

        {/* Main layout */}
        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(240px,300px)_minmax(0,1fr)] lg:items-start lg:gap-10">
          {/* Desktop sticky summary */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-4">
              <div className="rounded-2xl border border-sq-border bg-white p-5 shadow-[0_1px_0_rgba(15,23,42,0.03)]">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.14em] text-sq-purple">
                  Vacation Redemption Summary
                </p>
                <nav className="mt-4" aria-label="Terms section navigation">
                  <ul className="space-y-1">
                    {NAV_ITEMS.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="block rounded-md px-3 py-2 text-sm font-medium text-sq-gray transition hover:bg-sq-soft hover:text-sq-purple"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="mt-5 border-t border-sq-border pt-5">
                  <RedeemButton className="w-full" />
                  <p className="mt-3 text-xs leading-relaxed text-sq-gray">
                    Fulfilled by RedeemVacations.com. Smart Quotes does not
                    control hotel inventory or availability.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
                <p className="font-heading text-xs font-bold uppercase tracking-[0.12em] text-rose-800">
                  Keep in mind
                </p>
                <ul className="mt-3 space-y-2 text-sm text-rose-950/90">
                  {CRITICAL_ALWAYS_VISIBLE.map((item) => (
                    <li key={item.title}>
                      <strong className="font-semibold">{item.title}:</strong>{" "}
                      {item.body}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Terms content */}
          <div className="min-w-0">
            <p className="mb-4 text-sm text-sq-gray lg:hidden">
              Tap a section to expand official terms. Critical restrictions stay
              visible above.
            </p>

            {/* Mobile accordions */}
            <div className="space-y-3 lg:hidden">
              {sections.map((section) => (
                <div key={section.id} id={section.id} className="scroll-mt-24">
                  <AccordionItem
                    section={section}
                    open={Boolean(openMap[section.id])}
                    onToggle={() =>
                      setOpenMap((prev) => ({
                        ...prev,
                        [section.id]: !prev[section.id],
                      }))
                    }
                  />
                </div>
              ))}
            </div>

            {/* Desktop full sections */}
            <div className="hidden space-y-5 lg:block">
              {sections.map((section) => (
                <DesktopSection key={section.id} section={section} />
              ))}
            </div>

            {/* Closing CTA */}
            <div className="mt-8 rounded-2xl bg-gradient-to-br from-sq-purple to-sq-purple-deep px-6 py-8 text-center text-white sm:px-8">
              <h2 className="font-heading text-2xl font-extrabold tracking-tight">
                Ready to activate?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm text-white/90 sm:text-base">
                Activate within 7 days, then complete your reservation through
                RedeemVacations.com. Review all terms above before you begin.
              </p>
              <a
                href={REDEEM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex h-12 items-center justify-center rounded-md border border-white bg-white px-8 font-heading text-xs font-bold uppercase tracking-[0.12em] text-sq-purple transition hover:bg-white/90"
              >
                Redeem Your Vacation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
