import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

export function HeroVisual({ className }: { className?: string }) {
  const merchant = SERVICES[0]!;
  const residential = SERVICES[1]!;
  const business = SERVICES[2]!;

  return (
    <div className={cn("relative mx-auto aspect-[4/5] w-full max-w-md lg:aspect-square lg:max-w-none", className)} aria-hidden>
      <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-gradient-to-br from-mist via-lavender to-[#e8dffc]">
        <div className="animate-soft-pulse absolute -left-10 top-10 h-48 w-48 rounded-full bg-purple/20 blur-3xl" />
        <div className="animate-soft-pulse absolute -right-8 bottom-8 h-56 w-56 rounded-full bg-purple-deep/15 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.7),transparent_55%)]" />
      </div>
      <div className="absolute inset-0 p-5 sm:p-8">
        <div className="animate-float-a absolute left-4 top-8 w-[68%] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_22px_50px_-24px_rgba(23,19,34,0.45)] backdrop-blur sm:left-6 sm:top-10 sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple">{merchant.kicker}</p>
          <p className="mt-2 text-base font-semibold text-ink">{merchant.label}</p>
          <p className="mt-1 line-clamp-2 text-xs text-muted">{merchant.description}</p>
        </div>
        <div className="animate-float-b absolute right-3 top-[34%] z-10 w-[72%] rounded-2xl border border-purple/15 bg-lavender p-4 shadow-[0_28px_60px_-22px_rgba(77,31,168,0.5)] sm:right-5 sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple-deep">{residential.kicker}</p>
          <p className="mt-2 text-base font-semibold text-ink">{residential.label}</p>
          <p className="mt-1 line-clamp-2 text-xs text-muted">{residential.description}</p>
        </div>
        <div className="animate-float-c absolute bottom-8 left-8 w-[66%] rounded-2xl border border-white/70 bg-white/95 p-4 shadow-[0_22px_50px_-24px_rgba(23,19,34,0.45)] backdrop-blur sm:bottom-10 sm:left-10 sm:p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-purple">{business.kicker}</p>
          <p className="mt-2 text-base font-semibold text-ink">{business.label}</p>
          <p className="mt-1 line-clamp-2 text-xs text-muted">{business.description}</p>
        </div>
      </div>
    </div>
  );
}
