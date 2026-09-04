import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { HeroVisual } from "@/components/HeroVisual";
import { QuoteForm } from "@/components/QuoteForm";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { StepCard } from "@/components/StepCard";
import { VacationOffer } from "@/components/VacationOffer";
import { SERVICES } from "@/lib/services";

const TRUST_ITEMS = [
  "Clear service options",
  "Simple quote request",
  "Appointment-oriented follow-up",
];

const STEPS = [
  {
    title: "Choose a service",
    description:
      "Select Merchant Services, Xfinity Residential, or Comcast Business to tell us what you’re exploring.",
  },
  {
    title: "Share your details",
    description:
      "Submit a short request-for-quote form so we can understand how to reach you.",
  },
  {
    title: "Move toward an appointment",
    description:
      "We’ll follow up to discuss next steps and help schedule an appointment when you’re ready.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-ink/5">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(243,239,255),transparent_55%),linear-gradient(180deg,#ffffff_0%,#f8f7fa_100%)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:py-24">
          <div className="animate-fade-up">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple">Smart Quotes LLC</p>
            <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Explore options. Request a quote. Schedule with confidence.
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Smart Quotes LLC helps you compare Merchant Services, Xfinity Residential, and Comcast Business pathways — then submit a quote request so we can guide you toward an appointment.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="#request-quote" size="lg">Request a quote</Button>
              <Button href="#services" variant="outline" size="lg">View services</Button>
            </div>
          </div>
          <div className="animate-fade-up" style={{ animationDelay: "120ms" }}>
            <HeroVisual />
          </div>
        </div>
      </section>

      <section className="border-b border-ink/5 bg-white" aria-label="Why Smart Quotes">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p className="text-sm font-medium text-ink">Built for clarity — not clutter.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {TRUST_ITEMS.map((item) => (
              <li key={item} className="text-sm text-muted">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-purple align-middle" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="services" className="scroll-mt-20 bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Services"
              title="Three paths. One clear next step."
              description="Choose the category that fits, then request a quote. We don’t list invented pricing or speeds — your consultation covers the details that matter for your situation."
            />
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SERVICES.map((service, i) => (
              <FadeIn key={service.slug} delayMs={i * 80}>
                <ServiceCard service={service} featured={i === 1} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="How it works"
              title="From interest to appointment"
              description="A straightforward conversion path designed around your quote request."
            />
          </FadeIn>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <FadeIn key={step.title} delayMs={i * 80}>
                <StepCard step={i + 1} title={step.title} description={step.description} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section id="vacation-offer" className="scroll-mt-20 bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <VacationOffer />
        </div>
      </section>

      <section id="request-quote" className="scroll-mt-20 bg-white py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Request for quote"
              title="Tell us what you’re exploring"
              description="Submit the form and we’ll follow up. After a successful request, a separate vacation-stay offer communication may also be sent — subject to official terms."
            />
            <ul className="mt-8 space-y-3 text-sm text-muted">
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />Merchant Services consultations for business owners</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />Xfinity Residential options for your home</li>
              <li className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple" />Comcast Business connectivity for your company</li>
            </ul>
          </FadeIn>
          <FadeIn delayMs={100}>
            <QuoteForm />
          </FadeIn>
        </div>
      </section>

      <section id="about" className="scroll-mt-20 border-t border-ink/5 bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="About"
              title="About Smart Quotes LLC"
              description="Smart Quotes LLC is an independent information and quote-request service. We help visitors explore Merchant Services, Xfinity Residential, and Comcast Business options and convert interest into an appointment-oriented follow-up — without inventing pricing, speeds, or vacation guarantees on this site."
            />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
