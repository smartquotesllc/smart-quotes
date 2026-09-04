import { Button } from "@/components/Button";
import { HeroVisual } from "@/components/HeroVisual";

export function Hero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-sq-black text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/brand/hero-lights.svg')" }}
        aria-hidden="true"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto grid min-h-[78vh] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:px-8 lg:py-24">
        <div className="animate-fade-up max-w-3xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-white/70">
            Smart Quotes LLC
          </p>
          <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Better Solutions.
            <br />
            Better Connections.
            <br />
            Better Business.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Explore Merchant Services, Xfinity Residential, and Comcast Business
            options — then request a quote so we can guide you toward an
            appointment.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/quote" size="lg">
              Get a Free Quote
            </Button>
            <Button href="#services" variant="secondary" size="lg">
              View Services
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/55">
            Simple process · Personalized assistance · No pressure
          </p>
        </div>

        <div
          className="animate-fade-up hidden lg:block"
          style={{ animationDelay: "120ms" }}
        >
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
