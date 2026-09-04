import { cn } from "@/lib/utils";

type StepCardProps = { step: number | string; title: string; description: string; className?: string };

export function StepCard({ step, title, description, className }: StepCardProps) {
  const display = typeof step === "number" ? String(step).padStart(2, "0") : step;
  return (
    <article className={cn("relative rounded-xl border border-sq-border bg-white p-6 sm:p-7", className)}>
      <p className="mb-4 font-[family-name:var(--font-montserrat)] text-4xl font-bold text-sq-purple/25">{display}</p>
      <h3 className="mb-2 font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.14em] text-sq-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-sq-gray">{description}</p>
    </article>
  );
}
