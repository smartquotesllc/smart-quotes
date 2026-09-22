import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES } from "@/lib/services";

const HOME_COPY: Record<string, string> = {
  "merchant-services": "0% Processing Options\nLower Rates. Better Service.",
  "xfinity-residential": "Internet. Mobile. Streaming.\nWhole-home solutions.",
  "comcast-business": "Internet. Voice. Security.\nBuilt for Business.",
};

export function ServicesSection() {
  return (
    <section id="services" className="bg-sq-gray-light py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-10 text-center font-heading text-2xl font-extrabold uppercase tracking-[0.08em] text-sq-ink sm:mb-12 sm:text-3xl">
          Our Top Services
        </h2>
        <div className="grid gap-6 md:grid-cols-3 md:gap-7">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              service={service}
              description={HOME_COPY[service.slug]}
              href={`/services/${service.slug}`}
              ctaLabel="Learn More →"
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
}
