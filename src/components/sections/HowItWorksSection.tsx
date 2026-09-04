import { StepCard } from "@/components/StepCard";
import { SectionHeading } from "@/components/SectionHeading";

const STEPS = [
  { step: "01", title: "Choose", description: "Select the service you're interested in." },
  { step: "02", title: "Request", description: "Submit a quick request for a quote." },
  { step: "03", title: "Connect", description: "We'll connect you with the appropriate specialist." },
  { step: "04", title: "Move Forward", description: "Review your options and decide what works for you." },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-sq-gray-light py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="How It Works" title="A smarter way to get started." description="Four clear steps from interest to personalized follow-up." className="mb-12" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step) => <StepCard key={step.step} {...step} />)}
        </div>
      </div>
    </section>
  );
}
