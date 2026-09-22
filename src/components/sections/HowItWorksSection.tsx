import Link from "next/link";
import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Choose Your Service",
    description:
      "Select Merchant Services, Xfinity Residential, or Comcast Business to get started.",
  },
  {
    step: "02",
    title: "Tell Us What You Need",
    description:
      "Share a few details so we can understand your goals and prepare a personalized response.",
  },
  {
    step: "03",
    title: "A Specialist Reviews Your Request",
    description:
      "A Smart Quotes specialist reviews your submission and follows up with next steps — no obligation to purchase.",
  },
  {
    step: "04",
    title: "Review Your Available Options",
    description:
      "Compare the options presented for your request. Eligible customers may also receive vacation-incentive instructions.",
  },
];

const AFTER_SUBMIT = [
  { title: "Request Submitted", detail: "Your quote request is received securely." },
  { title: "Smart Quotes Review", detail: "We classify and review your service needs." },
  { title: "Specialist Follow-Up", detail: "A real specialist contacts you to help." },
  { title: "Quote / Options Presented", detail: "You review available solutions." },
  {
    title: "Incentive Instructions Sent",
    detail: "If eligible, vacation-stay instructions are shared.",
  },
];

const WHY = [
  {
    title: "No Obligation to Purchase",
    detail: "Explore options with a clear, pressure-free quote process.",
  },
  {
    title: "Real Specialist Support",
    detail: "Talk with people who understand the services you requested.",
  },
  {
    title: "Your Information Is Protected",
    detail: (
      <>
        We handle quote details carefully. See our{" "}
        <Link
          href="/privacy"
          className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
        >
          Privacy &amp; Data Handling
        </Link>{" "}
        policy.
      </>
    ),
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Getting a Smart Quote Is Simple"
          title="One Process. Different Solutions."
          description="Four clear stages from service selection to reviewing your options. Vacation incentives apply only when eligibility and redemption terms are met."
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

        <div className="mt-16 rounded-2xl border border-sq-border/80 bg-sq-gray-light px-5 py-10 sm:px-8 sm:py-12">
          <h3 className="text-center font-heading text-xl font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-2xl">
            What Happens After You Submit?
          </h3>
          <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {AFTER_SUBMIT.map((item, index) => (
              <li
                key={item.title}
                className="relative rounded-xl border border-sq-border/70 bg-white px-4 py-5 text-center shadow-[0_10px_28px_-22px_rgba(10,10,18,0.35)]"
              >
                <span className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#3d1abc] to-[#5a2cff] font-heading text-xs font-bold text-white">
                  {index + 1}
                </span>
                <p className="font-heading text-sm font-bold text-sq-ink">
                  {item.title}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-sq-gray">
                  {item.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-16">
          <h3 className="text-center font-heading text-xl font-extrabold uppercase tracking-[0.06em] text-sq-ink sm:text-2xl">
            Why Use Smart Quotes?
          </h3>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {WHY.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-sq-border/80 bg-white px-6 py-7 text-center shadow-[0_10px_28px_-22px_rgba(10,10,18,0.35)]"
              >
                <h4 className="font-heading text-base font-extrabold text-sq-ink">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-sq-gray">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>

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
