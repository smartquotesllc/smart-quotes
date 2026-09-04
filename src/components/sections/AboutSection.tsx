import { Logo } from "@/components/Logo";
import { Button } from "@/components/Button";

export function AboutSection() {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden rounded-2xl bg-sq-black p-10">
          <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 30% 30%, rgba(90,44,255,0.55), transparent 55%)" }} aria-hidden="true" />
          <Logo showWordmark variant="dark" size="lg" href={null} className="relative scale-125" />
        </div>
        <div>
          <p className="mb-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em] text-sq-purple">About Smart Quotes</p>
          <h2 className="text-3xl font-bold tracking-tight text-sq-ink sm:text-4xl">One trusted starting point for multiple solutions.</h2>
          <p className="mt-5 text-base leading-relaxed text-sq-gray sm:text-lg">
            Smart Quotes is built around a simple idea: make it easier for customers and businesses to discover solutions, request information, and connect with the right people.
          </p>
          <div className="mt-8"><Button href="/about" variant="outline">Learn About Us</Button></div>
        </div>
      </div>
    </section>
  );
}
