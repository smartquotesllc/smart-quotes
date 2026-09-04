import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ServiceOption } from "@/lib/types";

const SERVICE_IMAGES: Record<string, string> = {
  "merchant-services": "/images/home/merchant-services.jpg",
  "xfinity-residential": "/images/home/xfinity-residential.jpg",
  "comcast-business": "/images/home/comcast-business.jpg",
};

type ServiceCardProps = {
  service: ServiceOption;
  description?: string;
  featured?: boolean;
  className?: string;
  href?: string;
  ctaLabel?: string;
  withImage?: boolean;
  compact?: boolean;
};

export function ServiceCard({
  service,
  description,
  featured = false,
  className,
  href = `/services/${service.slug}`,
  ctaLabel = "Learn More →",
  withImage = true,
  compact = false,
}: ServiceCardProps) {
  const image = SERVICE_IMAGES[service.slug];
  const body = description ?? service.description;

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-sq-border/80 bg-white shadow-[0_10px_30px_-18px_rgba(10,10,18,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(90,44,255,0.35)]",
        featured && "ring-1 ring-sq-purple/15",
        className,
      )}
    >
      {withImage && image ? (
        <div className="relative aspect-[16/11] overflow-hidden bg-sq-gray-light">
          <Image
            src={image}
            alt={`${service.label} visual`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
          />
        </div>
      ) : null}

      <div className={cn("flex flex-1 flex-col", compact ? "p-5 sm:p-6" : "p-6 sm:p-7")}>
        <h3 className="mb-3 font-heading text-base font-extrabold uppercase tracking-wide text-sq-ink sm:text-lg">
          {service.label}
        </h3>
        <p className="mb-6 flex-1 whitespace-pre-line text-sm leading-relaxed text-sq-ink/80">
          {body}
        </p>
        <Link
          href={href}
          className="font-heading text-sm font-bold uppercase tracking-[0.06em] text-sq-purple transition group-hover:translate-x-0.5"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
