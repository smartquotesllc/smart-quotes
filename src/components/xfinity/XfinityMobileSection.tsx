import { Button } from "@/components/Button";

const MOBILE_QUOTE_HREF =
  "/quote/xfinity-residential?interest=Mobile&byod=1";

const FEATURES = [
  {
    title: "BYOD",
    copy: "Bring a compatible phone you already own.",
  },
  {
    title: "Keep Your Number",
    copy: "Transfer your existing number when you make the switch.",
  },
  {
    title: "Mobile Options",
    copy: "Explore available Xfinity Mobile plans for your household.",
  },
] as const;

/** Compact Xfinity Mobile section — secondary to Residential / Internet / TV. */
export function XfinityMobileSection() {
  return (
    <section
      aria-labelledby="xfinity-mobile-heading"
      className="border-y border-sq-border/60 bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple">
            Xfinity Mobile
          </p>
          <h2
            id="xfinity-mobile-heading"
            className="mt-3 font-heading text-2xl font-extrabold uppercase tracking-[0.04em] text-sq-ink sm:text-3xl"
          >
            Your phone. Your number. Your choice.
          </h2>
          <p className="mt-4 text-base text-sq-gray">
            Bring a compatible phone or explore available mobile options — then
            request a quote through Smart Quotes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3 sm:gap-6">
          {FEATURES.map((feature, i) => (
            <article
              key={feature.title}
              className="animate-fade-up rounded-2xl border border-sq-border/70 bg-white px-6 py-7 text-center shadow-[0_10px_28px_-22px_rgba(10,10,18,0.3)]"
              style={{ animationDelay: `${80 + i * 60}ms` }}
            >
              <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.1em] text-sq-purple">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-sq-ink/80">
                {feature.copy}
              </p>
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
