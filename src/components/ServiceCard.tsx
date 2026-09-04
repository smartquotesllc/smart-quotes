import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ServiceOption } from "@/lib/types";

const SERVICE_IMAGES: Record<string, { src: string; comment: string }> = {
  "merchant-services": {
    src: "/images/home/merchant-services.jpg",
    comment: "IMAGE 04 — Merchant Services card",
  },
  "xfinity-residential": {
    src: "/images/home/xfinity-residential.jpg",
    comment: "IMAGE 05 — Xfinity Residential card",
  },
  "comcast-business": {
    src: "/images/home/comcast-business.jpg",
    comment: "IMAGE 06 — Comcast Business card",
  },
};

type ServiceCardProps = {
  service: ServiceOption;
  featured?: boolean;
  className?: string;
  href?: string;
  ctaLabel?: string;
  withImage?: boolean;
};

export function ServiceCard({
  service,
  featured = false,
  className,
  href = `/services/${service.slug}`,
  ctaLabel = "Learn More →",
  withImage = true,
}: ServiceCardProps) {
  const image = SERVICE_IMAGES[service.slug];

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-sq-border bg-white transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-30px_rgba(8,11,34,0.45)]",
        featured && "border-sq-royal/25 ring-1 ring-sq-royal/10",
        className,
      )}
    >
      {withImage && image ? (
        // IMAGE 04–06 — service card photography (replaceable)
        <div className="relative aspect-[16/10] overflow-hidden bg-sq-dark-blue">
          <Image
            src={image.src}
            alt={`${service.label} visual`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sq-navy/35 to-transparent" />
        </div>
      ) : null}

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className="mb-2 font-heading text-[11px] font-bold uppercase tracking-[0.18em] text-sq-royal">
          {service.kicker}
        </p>
        <h3 className="mb-3 text-xl font-bold text-sq-ink">{service.label}</h3>
        <p className="mb-8 flex-1 text-sm leading-relaxed text-sq-gray">
          {service.description}
        </p>
        <Link
          href={href}
          className="font-heading text-sm font-bold uppercase tracking-[0.08em] text-sq-royal transition group-hover:translate-x-0.5"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
