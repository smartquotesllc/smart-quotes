import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ServiceOption } from "@/lib/types";

type ServiceCardProps = {
  service: ServiceOption;
  featured?: boolean;
  className?: string;
  href?: string;
  ctaLabel?: string;
};

function ServiceIcon({ slug }: { slug: string }) {
  if (slug === "merchant-services") {
    return (
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <rect x="6" y="10" width="28" height="20" rx="3" fill="#5A2CFF" opacity="0.12" />
        <rect x="10" y="14" width="20" height="12" rx="2" stroke="#5A2CFF" strokeWidth="2" fill="none" />
        <path d="M14 20h12" stroke="#5A2CFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  if (slug === "xfinity-residential") {
    return (
      <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
        <path d="M8 18 L20 8 L32 18 V30 A2 2 0 0 1 30 32 H10 A2 2 0 0 1 8 30 Z" fill="#5A2CFF" opacity="0.12" />
        <path d="M12 19 L20 12 L28 19 V29 H12 Z" stroke="#5A2CFF" strokeWidth="2" fill="none" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 40 40" className="h-10 w-10" aria-hidden="true">
      <rect x="8" y="8" width="24" height="24" rx="3" fill="#5A2CFF" opacity="0.12" />
      <path d="M12 28 V16 H18 V28 M22 28 V12 H28 V28" stroke="#5A2CFF" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function ServiceCard({ service, featured = false, className, href = `/quote?service=${service.slug}`, ctaLabel = "Learn More →" }: ServiceCardProps) {
  return (
    <article className={cn("group flex h-full flex-col rounded-xl border border-sq-border bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-28px_rgba(90,44,255,0.45)]", featured && "border-sq-purple/30 bg-sq-purple-soft/60", className)}>
      <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-lg border border-sq-border bg-white">
        <ServiceIcon slug={service.slug} />
      </div>
      <p className="mb-2 font-[family-name:var(--font-montserrat)] text-[11px] font-bold uppercase tracking-[0.18em] text-sq-purple">{service.kicker}</p>
      <h3 className="mb-3 text-xl font-bold text-sq-ink">{service.label}</h3>
      <p className="mb-8 flex-1 text-sm leading-relaxed text-sq-gray">{service.description}</p>
      <Link href={href} className="font-[family-name:var(--font-montserrat)] text-sm font-bold uppercase tracking-[0.08em] text-sq-purple transition group-hover:translate-x-0.5">{ctaLabel}</Link>
    </article>
  );
}
