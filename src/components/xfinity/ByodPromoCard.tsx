import Image from "next/image";
import { Button } from "@/components/Button";

const BYOD_QUOTE_HREF =
  "/quote/xfinity-residential?interest=Mobile&byod=1";

const BENEFITS = [
  "Bring your compatible phone",
  "Keep your existing number",
  "Get connected with Xfinity Mobile",
] as const;

/**
 * Secondary Xfinity Mobile / BYOD promotion.
 * Placed after the TV/streaming visual — does not replace the hero entertainment image.
 */
export function ByodPromoCard() {
  return (
    <section
      aria-labelledby="byod-promo-heading"
      className="bg-white py-10 sm:py-12"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-sq-border/80 bg-white shadow-[0_16px_40px_-24px_rgba(10,10,18,0.35)] sm:rounded-3xl">
          <div className="grid items-center gap-8 p-7 sm:gap-10 sm:p-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-10 lg:gap-12 lg:p-12">
            {/* Content ~55% — CTAs stay with copy on desktop; reorder on mobile */}
            <div className="animate-fade-up order-1 min-w-0 md:order-none">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple">
                Xfinity Mobile
              </p>
              <span className="mt-3 inline-flex rounded-full border border-sq-purple/25 bg-sq-soft px-3 py-1 font-heading text-[10px] font-bold uppercase tracking-[0.12em] text-sq-purple">
                BYOD — Bring Your Own Device
              </span>
              <h2
                id="byod-promo-heading"
                className="mt-4 font-heading text-2xl font-extrabold uppercase leading-tight tracking-[0.03em] text-sq-ink sm:text-3xl lg:text-[2rem]"
              >
                Keep your phone. Keep your number. Make the switch.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-sq-gray">
                Already have a phone you love? Bring your compatible device to
                Xfinity Mobile and explore available mobile options.
              </p>
              <ul className="mt-6 space-y-2.5">
                {BENEFITS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-sq-ink"
                  >
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sq-soft text-sq-purple"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="h-3.5 w-3.5"
                        fill="none"
                      >
                        <path
                          d="M4.5 10.5 8 14l7.5-8"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Desktop/tablet CTAs — with copy in 2-col layout */}
              <div className="mt-8 hidden flex-col gap-3 md:flex md:flex-row md:flex-wrap md:items-center">
                <Button href={BYOD_QUOTE_HREF} size="lg" className="w-auto">
                  Check BYOD Options
                </Button>
                <Button
                  href={BYOD_QUOTE_HREF}
                  variant="outline"
                  size="lg"
                  className="w-auto"
                >
                  Get a Mobile Quote →
                </Button>
              </div>
            </div>

            {/* Visual ~45% — centered on mobile between benefits and CTAs */}
            <div className="relative order-2 mx-auto flex w-full max-w-[280px] justify-center sm:max-w-[320px] md:order-none md:max-w-none">
              <div className="animate-fade-scale relative w-full max-w-[240px] sm:max-w-[300px]">
                <div
                  className="pointer-events-none absolute inset-[-12%] rounded-full bg-sq-soft/80 blur-2xl"
                  aria-hidden="true"
                />
                {/* BYOD IMAGE — REPLACE THIS FILE WITH FINAL SMARTPHONE PROMOTIONAL IMAGE */}
                <Image
                  src="/images/xfinity/byod-phone.png"
                  alt="Smartphone representing Bring Your Own Device options with Xfinity Mobile"
                  width={720}
                  height={980}
                  className="relative z-[1] mx-auto h-auto w-full max-h-[300px] object-contain sm:max-h-[420px]"
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                  quality={90}
                />
                <span className="absolute bottom-2 left-1/2 z-[2] -translate-x-1/2 whitespace-nowrap rounded-full border border-sq-purple/20 bg-white/95 px-3 py-1.5 font-heading text-[10px] font-bold uppercase tracking-[0.1em] text-sq-purple shadow-sm sm:bottom-4">
                  Bring Your Own Device
                </span>
              </div>
            </div>

            {/* Mobile CTAs — after phone visual; hidden when 2-col */}
            <div className="order-3 flex flex-col gap-3 md:hidden">
              <Button href={BYOD_QUOTE_HREF} size="lg" className="w-full">
                Check BYOD Options
              </Button>
              <Button
                href={BYOD_QUOTE_HREF}
                variant="outline"
                size="lg"
                className="w-full"
              >
                Get a Mobile Quote →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
