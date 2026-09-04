import { cn } from "@/lib/utils";
import type { ServiceOption } from "@/lib/types";

interface ServiceCardProps {
  service: ServiceOption;
  featured?: boolean;
  className?: string;
  href?: string;
  ctaLabel?: string;
}

export function ServiceCard({
  service,
  featured = false,
  className,
  href = "#request-quote",
  ctaLabel = "Request a quote",
}: ServiceCardProps) {
  return (
    <a
      href={href}
      className={cn(
        "group block rounded-2xl border p-6 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1",
        featured
          ? "border-purple/20 bg-lavender shadow-[0_24px_60px_-28px_rgba(77,31,168,0.45)]"
          : "border-ink/8 bg-white shadow-[0_18px_40px_-28px_rgba(23,19,34,0.35)] hover:border-purple/20",
        className,
      )}
    >
      <p
        className={cn(
          "text-[11px] font-semibold uppercase tracking-[0.16em]",
          featured ? "text-purple-deep" : "text-purple",
        )}
      >
        {service.kicker}
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-tight text-ink">{service.label}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{service.description}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-purple-deep transition-colors group-hover:text-purple">
        {ctaLabel}
        <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
      </span>
    </a>
  );
}
