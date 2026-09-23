"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "When will someone contact me?",
    a: "A Smart Quotes specialist typically reviews your request and follows up soon after submission during business hours. Timing can vary based on volume and the service you selected.",
  },
  {
    q: "Am I required to purchase?",
    a: "No. Requesting a Smart Quote does not obligate you to purchase service. You remain in control — review available options and decide what works best for you.",
  },
  {
    q: "Does Smart Quotes determine my final price?",
    a: "Smart Quotes helps you request and review available options. Final pricing, equipment, and eligibility are confirmed with the applicable provider or specialist based on your request.",
  },
  {
    q: "Why do you need my information?",
    a: "We use your details to understand what you need, connect you with a specialist, and present relevant options. Information is handled according to our Privacy & Data Handling policy.",
  },
  {
    q: "How does the vacation incentive work?",
    a: "Qualifying quote requests may receive complimentary vacation-stay incentive instructions. Eligibility, activation deadlines, fees, and redemption rules are governed by the Vacation Redemption Terms. Airfare is not included.",
  },
] as const;

export function HowItWorksFaq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-sq-border rounded-2xl border border-sq-border/80 bg-white">
      {FAQS.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
            >
              <span className="font-heading text-sm font-bold text-sq-ink sm:text-base">
                {item.q}
              </span>
              <span
                className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sq-soft font-heading text-lg font-bold text-sq-purple"
                aria-hidden="true"
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="px-5 pb-5 text-sm leading-relaxed text-sq-gray sm:px-6">
                {item.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
