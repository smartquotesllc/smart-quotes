import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden bg-sq-black text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/brand/hero-lights.svg')" }} aria-hidden="true" />
      <div className="hero-overlay absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-5 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.22em] text-white/70">Smart Quotes LLC</p>
          <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Better Solutions.<br />Better Connections.<br />Better Business.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            We connect you to top-rated solutions that help you save, grow &amp; succeed.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/quote" size="lg">Get a Free Quote</Button>
            <Button href="tel:+18881234567" variant="secondary" size="lg">Call Us Now</Button>
          </div>
          <p className="mt-6 text-sm text-white/55">Simple process · Personalized assistance · No pressure</p>
        </div>
      </div>
    </section>
  );
}
