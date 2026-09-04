import { Button } from "@/components/Button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(115deg, #080B22 0%, #11184A 45%, #263DFF 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at 80% 40%, rgba(65,105,255,0.4), transparent 50%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-3 font-heading text-xs font-bold uppercase tracking-[0.2em] text-white/60">
          Get started
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Ready for better solutions?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          Request a free quote for Merchant Services, Xfinity Residential, or
          Comcast Business. Simple process. Personalized assistance. No
          pressure.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="/quote" size="lg">
            Get a Free Quote
          </Button>
          <Button href="tel:+18881234567" variant="secondary" size="lg">
            Call Us Now
          </Button>
        </div>
      </div>
    </section>
  );
}
