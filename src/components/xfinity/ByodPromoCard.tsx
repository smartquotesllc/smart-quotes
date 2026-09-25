import Image from "next/image";
import { Button } from "@/components/Button";

const BYOD_QUOTE_HREF = "/quote/mobile";
const MOBILE_QUOTE_HREF = "/quote/mobile";

const BENEFITS = [
  "Bring your own phone (BYOP)",
  "Keep your current number",
  "Great unlimited plans",
  "Save with Xfinity Mobile + Internet",
] as const;

/**
 * Xfinity Mobile / BYOD promotion — matches approved residential service reference.
 */
export function ByodPromoCard() {
  return (
    <section
      aria-labelledby="byod-promo-heading"
      className="bg-white py-10 sm:py-14"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-sq-purple/20 bg-white shadow-[0_16px_40px_-24px_rgba(10,10,18,0.35)] sm:rounded-3xl">
          <div className="grid items-center gap-8 p-7 sm:gap-10 sm:p-10 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:gap-10 lg:gap-12 lg:p-12">
            <div className="animate-fade-up order-1 min-w-0 md:order-none">
              <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple">
                Xfinity Mobile
              </p>
              <h2
                id="byod-promo-heading"
                className="mt-4 font-heading text-2xl font-extrabold uppercase leading-tight tracking-[0.03em] text-sq-ink sm:text-3xl lg:text-[2rem]"
              >
                Keep your phone. Keep your
                <br className="hidden sm:block" /> number. Make the switch.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-sq-gray">
                Bring your own phone and keep your number with Xfinity Mobile.
                Get reliable nationwide coverage on America's most reliable 5G
                network.
              </p>
              <ul className="mt-6 space-y-2.5">
                {BENEFITS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-sq-ink"
                  >
                    <span
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sq-purple text-white"
                      aria-hidden="true"
                    >
                      <svg
                        viewBox="0 0 20 20"
                        className="h-3 w-3"
                        fill="none"
                      >
                        <path
                          d="M4.5 10.5 8 14l7.5-8"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 hidden flex-col gap-3 md:flex md:flex-row md:flex-wrap md:items-center">
                <Button href={BYOD_QUOTE_HREF} size="lg" className="w-auto">
                  Check BYOD Options →
                </Button>
                <Button
                  href={MOBILE_QUOTE_HREF}
                  variant="outline"
                  size="lg"
                  className="w-auto"
                >
                  Get a Mobile Quote →
                </Button>
              </div>
            </div>

            <div className="relative order-2 mx-auto flex w-full max-w-[280px] justify-center sm:max-w-[320px] md:order-none md:max-w-none">
              <div className="animate-fade-scale relative w-full max-w-[240px] sm:max-w-[300px]">
                <div
                  className="pointer-events-none absolute inset-[-12%] rounded-full bg-sq-soft/80 blur-2xl"
                  aria-hidden="true"
                />
                <Image
                  src="/images/xfinity/byod-phone.png"
                  alt="Smartphone representing Bring Your Own Device options with Xfinity Mobile"
                  width={720}
                  height={980}
                  className="relative z-[1] mx-auto h-auto w-full object-contain"
                  sizes="(max-width: 640px) 240px, (max-width: 768px) 280px, 320px"
                  quality={90}
                />
              </div>
            </div>

            <div className="order-3 flex flex-col gap-3 md:hidden">
              <Button href={BYOD_QUOTE_HREF} size="lg" className="w-full">
                Check BYOD Options →
              </Button>
              <Button
                href={MOBILE_QUOTE_HREF}
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
