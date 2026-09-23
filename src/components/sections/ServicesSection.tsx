import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";

const HOME_COPY: Record<
  string,
  { description: string; href: string; cta: string }
> = {
  "merchant-services": {
    description: "Modern payment solutions for businesses of every size.",
    href: "/services/merchant-services",
    cta: "Get a Smart Quote →",
  },
  "xfinity-residential": {
    description: "Internet. Mobile. Streaming. All in one place.",
    href: "/services/xfinity-residential",
    cta: "Get a Smart Quote →",
  },
  "comcast-business": {
    description: "Reliable solutions to keep your business moving forward.",
    href: "/services/comcast-business",
    cta: "Get a Smart Quote →",
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-sq-gray-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-3 text-center font-heading text-xs font-bold uppercase tracking-[0.18em] text-sq-purple sm:text-sm">
          Same Great Services. A Smarter Way to Connect.
        </p>
        <h2 className="mb-3 text-center font-heading text-2xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:mb-4 sm:text-3xl">
          Let&apos;s Get Started
        </h2>
        <p className="mb-10 text-center text-base text-sq-gray sm:mb-12 sm:text-lg">
          Choose the service you&apos;re interested in.
        </p>
        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {SERVICES.map((service) => {
            const copy = HOME_COPY[service.slug];
            return (
              <ServiceCard
                key={service.slug}
                service={service}
                description={copy.description}
                href={copy.href}
                ctaLabel={copy.cta}
                compact
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
