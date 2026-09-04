import Link from "next/link";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";

export function VacationOffer() {
  return (
    <FadeIn>
      <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-10 text-white sm:px-10 sm:py-12">
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-purple/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 left-10 h-48 w-48 rounded-full bg-purple-deep/50 blur-3xl" />
        <div className="relative max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lavender/80">After you submit</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            A separate vacation-stay offer may follow
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            After a successful quote request, Smart Quotes LLC may send a
            separate vacation-stay offer link by email or text. Eligibility,
            destinations, and redemption details are defined only in the
            official offer terms — not on this page.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button href="#request-quote" variant="secondary">Request a quote first</Button>
            <Link href="/vacation-terms" className="text-sm font-medium text-lavender underline-offset-4 hover:underline">
              Read vacation offer terms
            </Link>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}
