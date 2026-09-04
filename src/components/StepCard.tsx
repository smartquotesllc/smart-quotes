type StepCardProps = {
  step: string;
  title: string;
  description: string;
};

export function StepCard({ step, title, description }: StepCardProps) {
  const display = step.padStart(2, "0");
  return (
    <article className="relative rounded-xl border border-sq-border bg-white p-6 sm:p-7">
      <p className="mb-4 font-heading text-4xl font-bold text-sq-royal/25">
        {display}
      </p>
      <h3 className="mb-2 font-heading text-sm font-bold uppercase tracking-[0.14em] text-sq-ink">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-sq-gray">{description}</p>
    </article>
  );
}
