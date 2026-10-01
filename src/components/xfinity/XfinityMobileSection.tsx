import { Button } from "@/components/Button";

const MOBILE_QUOTE_HREF = "/quote/mobile";

const FEATURES = [
  {
    title: "BYOD",
    copy: "Use your compatible device and keep your number.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect
          x="7.5"
          y="3.5"
          width="9"
          height="17"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path d="M11 17.5h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "5G Nationwide",
    copy: "Reliable coverage on America's most reliable 5G network.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path
          d="M6 16.5V18M10 13v5M14 9.5v8.5M18 6v12"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Great Plan Options",
    copy: "Flexible plans to fit your lifestyle and save with Xfinity Internet.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M4.5 18.5c.8-2.6 2.6-4 4.5-4s3.7 1.4 4.5 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M13.2 14.2c.7-.4 1.6-.6 2.8-.6 2 0 3.6 1.2 4.3 3.4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
] as const;

/** Why Xfinity / mobile benefits section — matches approved residential service reference. */
export function XfinityMobileSection() {
  return (
    <section
      aria-labelledby="xfinity-mobile-heading"
      className="border-y border-sq-border/60 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple">
            Why Xfinity
          </p>
          <h2
            id="xfinity-mobile-heading"
            className="mt-3 font-heading text-2xl font-extrabold uppercase tracking-[0.04em] text-sq-ink sm:text-3xl"
          >
            Your phone. Your number. Your choice.
          </h2>
          <p className="mt-4 text-base text-sq-gray">
            Bring your own phone, keep your number, and take advantage of
            reliable nationwide 5G coverage with Xfinity Mobile.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3 sm:gap-8">
          {FEATURES.map((feature, i) => (
            <article
              key={feature.title}
              className="animate-fade-up flex items-start gap-4 rounded-2xl border border-sq-border/70 bg-white px-5 py-6 shadow-[0_10px_28px_-22px_rgba(10,10,18,0.3)] sm:px-6"
              style={{ animationDelay: `${80 + i * 60}ms` }}
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-sq-purple text-white">
                {feature.icon}
              </span>
              <div>
                <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.1em] text-sq-ink">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sq-ink/80">
                  {feature.copy}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href={MOBILE_QUOTE_HREF} size="lg">
            Explore Mobile Options →
          </Button>
        </div>
      </div>
    </section>
  );
}
