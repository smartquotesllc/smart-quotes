import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
  light?: boolean;
};

export function SectionHeading({ eyebrow, label, title, description, align = "center", className, id, light }: SectionHeadingProps) {
  const kicker = eyebrow ?? label;
  return (
    <div id={id} className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}>
      {kicker ? (
        <p className={cn("mb-3 font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.2em]", light ? "text-white/70" : "text-sq-purple")}>{kicker}</p>
      ) : null}
      <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]", light ? "text-white" : "text-sq-ink")}>{title}</h2>
      {description ? <p className={cn("mt-4 text-base leading-relaxed sm:text-lg", light ? "text-white/75" : "text-sq-gray")}>{description}</p> : null}
    </div>
  );
}
