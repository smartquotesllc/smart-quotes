import Image from "next/image";
import Link from "next/link";

export function VacationOffer() {
  return (
    <section
      id="vacation-offer"
      className="relative overflow-hidden"
      aria-labelledby="vacation-heading"
    >
      <div className="relative min-h-[220px] sm:min-h-[260px] lg:min-h-[280px]">
        <div className="absolute inset-0">
          <Image
            src="/images/home/vacation-beach.jpg"
            alt="Tropical beach vacation destination"
            fill
            sizes="100vw"
            quality={92}
            className="object-cover object-[70%_center]"
            priority={false}
          />
        </div>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #3d1abc 0%, #4a20e0 28%, #5a2cff 48%, rgba(90,44,255,0.55) 68%, rgba(90,44,255,0.12) 88%, transparent 100%)",
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto flex min-h-[220px] max-w-7xl flex-col justify-center gap-6 px-4 py-12 sm:min-h-[260px] sm:px-6 md:flex-row md:items-center md:justify-between lg:min-h-[280px] lg:px-8">
          <div className="max-w-xl">
            <h2
              id="vacation-heading"
              className="font-heading text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
            >
              Complimentary Vacation Incentive
            </h2>
            <p className="mt-3 text-base text-white/95 sm:text-lg">
              When you request a quote through Smart Quotes, you may receive a
              complimentary hotel accommodation incentive. Airfare is not
              included.
            </p>
            <p className="mt-3 text-xs text-white/75 sm:text-sm">
              Offer subject to{" "}
              <Link
                href="/vacation-terms"
                className="underline underline-offset-2 hover:text-white"
              >
                Vacation Redemption Terms
              </Link>
              .
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/quote"
              className="inline-flex h-12 items-center justify-center rounded-md border border-white px-8 font-heading text-xs font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/10"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
