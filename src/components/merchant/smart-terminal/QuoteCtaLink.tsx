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
          "inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-white px-7 font-heading text-[11px] font-extrabold uppercase tracking-[0.1em] text-[#1e3a8a] transition hover:bg-white/95 sm:px-8 sm:text-xs",
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
        "inline-flex h-12 items-center justify-center rounded-full px-7 font-heading text-[11px] font-extrabold uppercase tracking-[0.1em] text-white transition hover:brightness-110 sm:h-[3.15rem] sm:px-8 sm:text-xs",
        className,
      )}
      style={{
        background: "linear-gradient(90deg, #2563eb 0%, #5b21b6 100%)",
        boxShadow: "0 12px 28px -14px rgba(37,99,235,0.55)",
      }}
    >
      {children}
    </Link>
  );
}
