import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string | null;
};

/** Existing SQ mark — S dark / Q royal overlapping. Replaceable later. */
export function Logo({
  className,
  showWordmark = true,
  variant = "light",
  size = "md",
  href = "/",
}: LogoProps) {
  const markSize =
    size === "lg"
      ? "h-11 w-12 text-[1.6rem]"
      : size === "sm"
        ? "h-8 w-9 text-lg"
        : "h-9 w-10 text-xl";
  const wordSize =
    size === "lg"
      ? "text-[13px] tracking-[0.16em]"
      : size === "sm"
        ? "text-[11px] tracking-[0.14em]"
        : "text-xs tracking-[0.15em]";
  const wordColor = variant === "dark" ? "text-white" : "text-sq-ink";
  const sColor = variant === "dark" ? "text-white" : "text-sq-ink";

  const content = (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 sm:gap-3",
        "w-[135px] sm:w-[155px] lg:w-[170px]",
        className,
      )}
    >
      <span
        className={cn(
          "relative inline-flex shrink-0 items-center justify-center font-heading font-extrabold leading-none select-none",
          markSize,
        )}
        aria-hidden="true"
      >
        <span className={cn("absolute left-0 top-0", sColor)}>S</span>
        <span className="absolute right-0 bottom-0 text-sq-royal">Q</span>
      </span>
      {showWordmark ? (
        <span className={cn("font-heading font-bold uppercase leading-tight", wordSize, wordColor)}>
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
