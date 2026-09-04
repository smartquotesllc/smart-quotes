import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  {
    step: "01",
    title: "Choose a Solution",
    description:
      "Select Merchant Services, Xfinity Residential, or Comcast Business.",
  },
  {
    step: "02",
    title: "Request a Quote",
    description:
      "Share a few details so we can route your request appropriately.",
  },
  {
    step: "03",
    title: "Connect & Decide",
    description:
      "A specialist follows up so you can review options and move forward.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-sq-gray-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="How It Works"
          title="A clear path from interest to next steps."
          description="Three simple stages — no pressure, no hard sell."
          className="mb-14"
        />

        {/* Desktop connected line */}
        <div className="relative hidden lg:block">
          <div
            className="absolute left-[16.5%] right-[16.5%] top-8 h-px bg-gradient-to-r from-sq-royal/20 via-sq-royal/50 to-sq-royal/20"
            aria-hidden="true"
          />
          <ol className="grid grid-cols-3 gap-8">
            {STEPS.map((step) => (
              <li key={step.step} className="relative text-center">
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-sq-royal bg-white font-heading text-lg font-bold text-sq-royal shadow-[0_10px_30px_-18px_rgba(38,61,255,0.8)]">
                  {step.step}
                </div>
                <h3 className="font-heading text-base font-bold text-sq-ink">
                  {step.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-sq-gray">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile vertical timeline */}
        <ol className="relative space-y-8 lg:hidden">
          <div
            className="absolute bottom-2 left-[15px] top-2 w-px bg-sq-royal/25"
            aria-hidden="true"
          />
          {STEPS.map((step) => (
            <li key={step.step} className="relative flex gap-4 pl-1">
              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sq-royal font-heading text-[11px] font-bold text-white">
                {step.step}
              </div>
              <div className="pt-0.5">
                <h3 className="font-heading text-base font-bold text-sq-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sq-gray">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
