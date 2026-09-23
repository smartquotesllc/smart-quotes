import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ServiceOption } from "@/lib/types";
import { SERVICE_IMAGES } from "@/lib/service-images";

const SERVICE_IMAGES_BY_SLUG: Record<
  string,
  { src: string; alt: string; width: number; height: number }
> = {
  "merchant-services": SERVICE_IMAGES.merchantCard,
  "xfinity-residential": SERVICE_IMAGES.xfinityPrimary,
  "comcast-business": SERVICE_IMAGES.comcast,
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
  ctaLabel = "Get a Smart Quote →",
  withImage = true,
  compact = false,
}: ServiceCardProps) {
  const image = SERVICE_IMAGES_BY_SLUG[service.slug];
  const body = description ?? service.description;

  return (
    <article
      className={cn(
        "group flex h-full flex-col rounded-xl border border-sq-border/80 bg-white shadow-[0_10px_30px_-18px_rgba(10,10,18,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(90,44,255,0.35)]",
        featured && "ring-1 ring-sq-purple/15",
        className,
      )}
    >
      {withImage && image ? (
        <div className="flex w-full items-center justify-center rounded-t-xl bg-[#f3f6fb] p-3 sm:p-4">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 768px) 100vw, 33vw"
            quality={95}
            className="h-auto w-full object-contain"
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
