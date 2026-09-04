import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string | null;
};

/** Replaceable SQ mark — S black / Q purple overlapping (wireframe). */
export function Logo({
  className,
  showWordmark = true,
  variant = "light",
  size = "md",
  href = "/",
}: LogoProps) {
  const markSize =
    size === "lg" ? "h-12 w-14 text-[1.75rem]" : size === "sm" ? "h-8 w-9 text-lg" : "h-10 w-11 text-xl";
  const wordSize =
    size === "lg" ? "text-sm tracking-[0.18em]" : size === "sm" ? "text-[10px] tracking-[0.16em]" : "text-xs tracking-[0.18em]";
  const wordColor = variant === "dark" ? "text-white" : "text-sq-ink";

  const content = (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span className={cn("relative inline-flex items-center justify-center font-[family-name:var(--font-montserrat)] font-extrabold leading-none select-none", markSize)} aria-hidden="true">
        <span className="absolute left-0 top-0 text-sq-ink">S</span>
        <span className="absolute right-0 bottom-0 text-sq-purple">Q</span>
      </span>
      {showWordmark ? (
        <span className={cn("font-[family-name:var(--font-montserrat)] font-bold uppercase", wordSize, wordColor)}>
          Smart Quotes
        </span>
      ) : null}
      <span className="sr-only">Smart Quotes</span>
    </span>
  );

  if (href === null) return content;
  return <Link href={href} className="inline-flex shrink-0 rounded-sm">{content}</Link>;
}
