import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  label,
  title,
  description,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  const kicker = eyebrow ?? label;
  return (
    <div
      id={id}
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {kicker ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-purple">
          {kicker}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
