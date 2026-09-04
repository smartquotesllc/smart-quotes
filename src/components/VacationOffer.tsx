import Link from "next/link";
import { Button } from "@/components/Button";

export function VacationOffer() {
  return (
    <section id="vacation-offer" className="relative overflow-hidden bg-sq-purple" aria-labelledby="vacation-heading">
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 85% 50%, rgba(255,255,255,0.35), transparent 42%), linear-gradient(90deg, rgba(38,61,255,1) 0%, rgba(38,61,255,0.85) 55%, rgba(8,11,34,0.35) 100%)" }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 bg-[url('/brand/vacation-glow.svg')] bg-cover bg-right opacity-40 md:block" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8 lg:py-14">
        <div className="max-w-2xl">
          <h2 id="vacation-heading" className="text-2xl font-bold uppercase tracking-tight text-white sm:text-3xl lg:text-4xl">
            Request your quote.
            <span className="block text-white/90">Then unlock your vacation-stay offer.</span>
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
            After a qualifying RFQ is submitted, customers may receive a separate link with information about the Smart Quotes vacation-stay offer, subject to the{" "}
            <Link href="/vacation-terms" className="underline underline-offset-2">official offer terms</Link>
            . Eligibility, destinations, and redemption details are placeholders until the official program is finalized.
          </p>
        </div>
        <div className="shrink-0">
          <Button href="/quote" variant="white" size="lg">Start My Quote</Button>
        </div>
      </div>
    </section>
  );
}
