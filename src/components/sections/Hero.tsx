import Image from "next/image";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative isolate min-h-[78vh] overflow-hidden text-white sm:min-h-[82vh] lg:min-h-[86vh]">
      {/* Full-bleed cinematic city / highway hero */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/home/hero-city-highway.jpg"
          alt="Night city skyline with purple highway light trails"
          fill
          priority
          sizes="100vw"
          className="animate-hero-kenburns object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/45 to-black/20"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/25"
          aria-hidden="true"
        />
      </div>

      <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-center px-4 py-20 sm:min-h-[82vh] sm:px-6 lg:min-h-[86vh] lg:px-8 lg:py-24">
        <div className="animate-fade-up max-w-2xl">
          <h1 className="font-heading text-[2.35rem] font-extrabold uppercase leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[3.6rem] xl:text-[3.9rem]">
            Better Solutions.
            <br />
            Better Connections.
            <br />
            Better Business.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            We connect you to top-rated solutions that help you save, grow &amp;
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
        </div>
      </div>
    </section>
  );
}
