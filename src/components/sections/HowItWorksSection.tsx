import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Select a Service",
    description:
      "Choose Merchant Services, Xfinity Residential, or Comcast Business to tell us what you’re exploring.",
  },
  {
    step: "02",
    title: "Complete a Smart Quote Request",
    description:
      "Share a few details so we can understand your needs and route your request to the right specialist.",
  },
  {
    step: "03",
    title: "A Representative Follows Up",
    description:
      "A Smart Quotes representative reviews your request and contacts you about next steps — no pressure.",
  },
  {
    step: "04",
    title: "Vacation Incentive (If Eligible)",
    description:
      "After you complete the qualifying quote process, eligible customers may receive a complimentary hotel accommodation incentive, subject to official terms. Airfare is not included.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How the Process Works"
          title="From interest to next steps — clearly and simply."
          description="Four stages designed around your quote request. Vacation incentives apply only when eligibility and redemption terms are met."
          className="mb-12 sm:mb-14"
        />

        <ol className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((step) => (
            <li key={step.step} className="relative text-center lg:text-left">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-sq-royal bg-sq-soft font-heading text-base font-bold text-sq-royal lg:mx-0">
                {step.step}
              </div>
              <h3 className="font-heading text-base font-bold text-sq-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sq-gray">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <p className="mt-10 text-center text-xs text-sq-gray sm:text-sm">
          Offer details are governed by the{" "}
          <Link
            href="/vacation-terms"
            className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
          >
            Vacation Redemption Terms
          </Link>
          . Hotel accommodation only — airfare and related travel costs are not
          included.
        </p>
      </div>
    </section>
  );
}
