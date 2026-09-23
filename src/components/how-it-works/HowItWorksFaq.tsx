"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "When will someone contact me after I submit a Smart Quote?",
    a: "A Smart Quotes specialist typically reviews your request and follows up soon after submission during business hours. Timing can vary based on volume and the service you selected.",
  },
  {
    q: "Do I have to purchase anything to request a quote?",
    a: "No. Requesting a Smart Quote does not obligate you to purchase service. You can review available options and decide what works best for you.",
  },
  {
    q: "How does the vacation-stay incentive work?",
    a: "Qualifying quote requests may receive complimentary vacation-stay incentive instructions. Eligibility, activation deadlines, fees, and redemption rules are governed by the Vacation Redemption Terms. Airfare is not included.",
  },
  {
    q: "What services can I request through Smart Quotes?",
    a: "You can request quotes for Xfinity Residential (Internet, Mobile, and Streaming), Comcast Business, and Merchant Services payment solutions.",
  },
  {
    q: "How is my information protected?",
    a: "Quote details are processed securely through our website intake and handled according to our Privacy & Data Handling policy. Authorized partners may receive information needed to fulfill your request.",
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
