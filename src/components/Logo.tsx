import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string | null;
};

/** Bold black SQ mark + SMART QUOTES wordmark — styled to match approved homepage mockup. */
export function Logo({
  className,
  showWordmark = true,
  variant = "light",
  size = "md",
  href = "/",
}: LogoProps) {
  const markSize =
    size === "lg"
      ? "h-11 w-12 text-[1.75rem]"
      : size === "sm"
        ? "h-9 w-10 text-[1.35rem]"
        : "h-10 w-11 text-[1.5rem]";
  const wordSize =
    size === "lg"
      ? "text-[13px] tracking-[0.18em]"
      : size === "sm"
        ? "text-[11px] tracking-[0.16em]"
        : "text-xs tracking-[0.17em]";
  const ink = variant === "dark" ? "text-white" : "text-sq-ink";

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 sm:gap-3",
        className,
      )}
    >
      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center font-heading font-extrabold leading-none select-none",
          markSize,
          ink,
        )}
        aria-hidden="true"
      >
        <span className="absolute left-0 top-0 z-[1]">S</span>
        <span className="absolute right-0 bottom-0 opacity-95">Q</span>
      </span>
      {showWordmark ? (
        <span
          className={cn(
            "font-heading font-extrabold uppercase leading-none",
            wordSize,
            ink,
          )}
        >
          Smart Quotes
        </span>
      ) : null}
      <span className="sr-only">Smart Quotes</span>
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} className="inline-flex shrink-0 rounded-sm">
      {content}
    </Link>
  );
}
