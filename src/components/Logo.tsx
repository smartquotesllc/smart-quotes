import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  /** Kept for API compatibility; wordmark is part of the official logo asset. */
  showWordmark?: boolean;
  /** Kept for API compatibility; official asset includes its own colors. */
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string | null;
  priority?: boolean;
};

const SIZE_WIDTH: Record<NonNullable<LogoProps["size"]>, string> = {
  // Header: mobile ~135–150px, desktop ~155–175px
  sm: "w-[138px] sm:w-[148px] lg:w-[165px]",
  md: "w-[150px] sm:w-[165px]",
  lg: "w-[180px] sm:w-[200px]",
};

/** Official Smart Quotes brand mark (SQ monogram + SMART QUOTES wordmark). */
export function Logo({
  className,
  size = "md",
  href = "/",
  priority = false,
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex shrink-0", SIZE_WIDTH[size], className)}>
      <Image
        src="/brand/sq-logo.jpg"
        alt="Smart Quotes"
        width={449}
        height={380}
        className="h-auto w-full object-contain"
        sizes="(max-width: 1024px) 150px, 175px"
        priority={priority}
      />
    </span>
  );

  if (href === null) return content;
  return (
    <Link href={href} className="inline-flex shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-purple">
      {content}
    </Link>
  );
}
