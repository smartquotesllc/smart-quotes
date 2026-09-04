import { cn } from "@/lib/utils";

type CheckListProps = {
  items: string[];
  variant?: "purple" | "white";
  className?: string;
};

function CheckIcon({ variant }: { variant: "purple" | "white" }) {
  const stroke = variant === "white" ? "white" : "currentColor";
  return (
    <svg
      viewBox="0 0 20 20"
      className={cn(
        "mt-0.5 h-5 w-5 shrink-0",
        variant === "purple" ? "text-sq-purple" : "text-white",
      )}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 10.5 8 14l7.5-8"
        stroke={stroke}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CheckList({ items, variant = "purple", className }: CheckListProps) {
  return (
    <ul className={cn("space-y-3", className)}>
      {items.map((item) => (
        <li
          key={item}
          className={cn(
            "flex items-start gap-3 text-[15px] leading-snug",
            variant === "white" ? "text-white/95" : "text-sq-ink",
          )}
        >
          <CheckIcon variant={variant} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
