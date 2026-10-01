import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Reuses the existing Smart Quotes quote flow at /quote. */
export const FULL_POS_QUOTE_HREF = "/quote" as const;

type QuoteCtaLinkProps = {
  children?: ReactNode;
  className?: string;
  /** Inverse style for the final gradient banner */
  tone?: "gradient" | "onGradient";
};

export function QuoteCtaLink({
  children = "Get a Smart Quote →",
  className,
  tone = "gradient",
}: QuoteCtaLinkProps) {
  if (tone === "onGradient") {
    return (
      <Link
        href={FULL_POS_QUOTE_HREF}
        className={cn(
          "inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 font-heading text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#1a1a40] transition hover:bg-white/95 sm:h-12 sm:px-8 sm:text-xs",
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={FULL_POS_QUOTE_HREF}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-7 font-heading text-[11px] font-extrabold uppercase tracking-[0.1em] text-white transition hover:brightness-110 sm:h-[3.15rem] sm:px-8 sm:text-xs",
        className,
      )}
      style={{
        background: "linear-gradient(90deg, #4f46e5 0%, #3b82f6 100%)",
        boxShadow: "0 12px 28px -14px rgba(79,70,229,0.65)",
      }}
    >
      {children}
    </Link>
  );
}
