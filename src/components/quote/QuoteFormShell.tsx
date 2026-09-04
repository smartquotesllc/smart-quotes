import Image from "next/image";
import { ServiceQuoteForm } from "@/components/quote/ServiceQuoteForm";
import type { ServiceSlug } from "@/lib/types";

type QuoteFormShellProps = {
  title: string;
  subtitle: string;
  serviceSlug: ServiceSlug;
  /** IMAGE REPLACE: swap src under /public/images/quote/ for sharper assets */
  imageSrc: string;
  imageAlt: string;
  imagePriority?: boolean;
};

export function QuoteFormShell({
  title,
  subtitle,
  serviceSlug,
  imageSrc,
  imageAlt,
  imagePriority,
}: QuoteFormShellProps) {
  return (
    <div className="bg-sq-gray-light">
      <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="rounded-2xl border border-[#d0d4dc] bg-white p-6 shadow-[0_1px_0_rgba(15,23,42,0.04)] sm:p-8 lg:p-10">
          <header className="mb-8 text-center">
            <h1 className="font-heading text-2xl font-extrabold uppercase tracking-[0.04em] text-sq-purple sm:text-3xl">
              {title}
            </h1>
            <p className="mt-2 text-base text-sq-ink">{subtitle}</p>
          </header>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(220px,320px)_1fr] lg:gap-10">
            <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-xl lg:mx-0 lg:max-w-none">
              {/* IMAGE REPLACE: {imageSrc} */}
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1536}
                height={1024}
                priority={imagePriority}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 90vw, 320px"
              />
            </div>
            <ServiceQuoteForm serviceSlug={serviceSlug} />
          </div>
        </div>
      </section>
    </div>
  );
}
