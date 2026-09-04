import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-sq-royal text-white hover:bg-sq-purple-hover shadow-[0_12px_28px_-14px_rgba(38,61,255,0.75)]",
  secondary:
    "bg-transparent text-white border border-white/85 hover:bg-white/10",
  outline:
    "bg-white text-sq-royal border border-sq-royal hover:bg-sq-soft",
  ghost: "bg-transparent text-sq-ink hover:text-sq-royal",
  white: "bg-white text-sq-royal border border-white hover:bg-white/90",
} as const;

const sizes = {
  sm: "h-10 px-4 text-[11px] tracking-[0.08em]",
  md: "h-12 px-6 text-xs tracking-[0.1em]",
  lg: "h-14 px-8 text-sm tracking-[0.12em]",
} as const;

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-heading font-bold uppercase transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sq-royal disabled:pointer-events-none disabled:opacity-60",
    variants[variant],
    sizes[size],
    className,
  );
  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}
