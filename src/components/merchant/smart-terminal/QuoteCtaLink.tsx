import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Existing Smart Quotes quote flow. */
export const SMART_TERMINAL_QUOTE_HREF = "/quote" as const;

type QuoteCtaLinkProps = {
  children?: ReactNode;
  className?: string;
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
        href={SMART_TERMINAL_QUOTE_HREF}
        className={cn(
          "inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 font-heading text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#2457FF] transition hover:bg-white/95 sm:px-8 sm:text-xs",
          className,
        )}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={SMART_TERMINAL_QUOTE_HREF}
      className={cn(
        "inline-flex h-12 items-center justify-center rounded-full px-7 font-heading text-[11px] font-extrabold uppercase tracking-[0.1em] text-white transition hover:brightness-110 sm:h-[3.25rem] sm:px-8 sm:text-xs",
        className,
      )}
      style={{
        background: "linear-gradient(90deg, #7138FF 0%, #2457FF 100%)",
        boxShadow: "0 14px 30px -14px rgba(113,56,255,0.65)",
      }}
    >
      {children}
    </Link>
  );
}
