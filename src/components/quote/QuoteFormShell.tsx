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
            <p className="mx-auto mt-4 max-w-xl rounded-lg bg-sq-soft px-4 py-3 text-sm text-sq-ink">
              Submit your quote through Smart Quotes and receive a complimentary
              vacation incentive.{" "}
              <a
                href="/vacation-terms"
                className="font-semibold text-sq-purple underline underline-offset-2 hover:text-sq-purple-hover"
              >
                Vacation Redemption Terms
              </a>
            </p>
          </header>

          <div className="grid items-start gap-8 lg:grid-cols-[minmax(220px,320px)_1fr] lg:gap-10">
            <div className="relative mx-auto w-full max-w-sm overflow-hidden rounded-xl lg:mx-0 lg:max-w-none">
              {/* IMAGE REPLACE: {imageSrc} */}
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={1536}
                height={serviceSlug === "comcast-business" ? 1536 : 1024}
                priority={imagePriority}
                className={
                  serviceSlug === "comcast-business"
                    ? "h-full max-h-[520px] w-full rounded-xl object-cover"
                    : "h-auto w-full rounded-xl object-contain"
                }
                sizes="(max-width: 1024px) 90vw, 320px"
                quality={92}
              />
            </div>
            <ServiceQuoteForm serviceSlug={serviceSlug} />
          </div>
        </div>
      </section>
    </div>
  );
}
