import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  href?: string | null;
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
}

/** Replaceable SQ brand mark — swap when final assets arrive. */
export function Logo({
  className,
  href = "/",
  size = "md",
  showWordmark = true,
}: LogoProps) {
  const mark =
    size === "sm"
      ? "h-8 w-8 text-sm"
      : size === "lg"
        ? "h-12 w-12 text-lg"
        : "h-10 w-10 text-base";
  const word =
    size === "sm" ? "text-sm" : size === "lg" ? "text-xl" : "text-base";

  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "inline-flex items-center justify-center rounded-xl bg-purple-deep font-semibold tracking-tight text-white shadow-[0_10px_30px_-12px_rgba(77,31,168,0.65)]",
          mark,
        )}
        aria-hidden
      >
        SQ
      </span>
      {showWordmark ? (
        <span className={cn("font-semibold tracking-tight text-ink", word)}>
          Smart Quotes
          <span className="ml-1 font-normal text-muted">LLC</span>
        </span>
      ) : null}
    </span>
  );

  if (!href) return content;

  return (
    <Link
      href={href}
      className="inline-flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple/40 focus-visible:ring-offset-2"
    >
      {content}
      <span className="sr-only">Smart Quotes LLC home</span>
    </Link>
  );
}
