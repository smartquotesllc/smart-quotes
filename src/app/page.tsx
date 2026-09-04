import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { VacationOffer } from "@/components/VacationOffer";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSection } from "@/components/sections/AboutSection";
import { QuoteForm } from "@/components/QuoteForm";

export default function HomePage() {
  return (
    <>
      <Hero />
      <section className="border-b border-sq-border bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-4 py-6 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <p className="font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-sq-ink">One company. Multiple solutions.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-sq-gray">
            <li>✓ Professional Assistance</li>
            <li>✓ Quote-Based Solutions</li>
            <li>✓ Customer-Focused Service</li>
          </ul>
        </div>
      </section>
      <ServicesSection />
      <HowItWorksSection />
      <VacationOffer />
      <section id="request-quote" className="bg-sq-gray-light py-20 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <QuoteForm />
        </div>
      </section>
      <AboutSection />
      <TrustBar />
    </>
  );
}
