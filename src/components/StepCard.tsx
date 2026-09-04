import { cn } from "@/lib/utils";

interface StepCardProps {
  step: number | string;
  title: string;
  description: string;
  className?: string;
}

export function StepCard({ step, title, description, className }: StepCardProps) {
  return (
    <div className={cn("relative rounded-2xl border border-ink/8 bg-white p-6", className)}>
      <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-lavender text-sm font-semibold text-purple-deep">
        {step}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </div>
  );
}
