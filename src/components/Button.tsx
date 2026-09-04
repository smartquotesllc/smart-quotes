import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "white";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-purple-deep text-white shadow-[0_12px_28px_-14px_rgba(77,31,168,0.7)] hover:bg-purple focus-visible:ring-purple/40",
  secondary:
    "bg-lavender text-purple-deep hover:bg-[#ebe4ff] focus-visible:ring-purple/30",
  ghost: "bg-transparent text-ink hover:bg-mist focus-visible:ring-purple/20",
  outline:
    "bg-white text-ink border border-ink/10 hover:border-purple/30 hover:bg-mist focus-visible:ring-purple/25",
  white:
    "bg-white text-purple-deep border border-white hover:bg-lavender focus-visible:ring-white/40",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  type = "button",
  ...rest
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-55",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
