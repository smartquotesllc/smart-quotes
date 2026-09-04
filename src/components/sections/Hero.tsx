import { Button } from "@/components/Button";
import { HeroCollage } from "@/components/HeroCollage";
import { HeroWave } from "@/components/HeroWave";

export function Hero() {
  return (
    <section className="hero-gradient relative isolate overflow-hidden text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at 75% 35%, rgba(65,105,255,0.35), transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:min-h-[720px] lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-20 xl:min-h-[750px]">
        <div className="animate-fade-up relative z-10 max-w-xl pb-10 lg:pb-16">
          <p className="mb-5 font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/70">
            Smart Quotes LLC
          </p>
          <h1 className="text-4xl font-extrabold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
            Better Solutions.
            <br />
            Better Connections.
            <br />
            Better Business.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
            We connect you to trusted solutions that help you save, grow, and
            succeed.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/quote" size="lg">
              Get a Free Quote
            </Button>
            <Button href="tel:+18881234567" variant="secondary" size="lg">
              Call Us Now
            </Button>
          </div>
          <p className="mt-6 text-sm text-white/55">
            Simple process • Personalized assistance • No pressure
          </p>
        </div>

        <div className="relative z-10 pb-16 lg:pb-20">
          <HeroCollage />
        </div>
      </div>

      <HeroWave />
    </section>
  );
}
