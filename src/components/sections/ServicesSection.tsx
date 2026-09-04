import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/services";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Services"
          title="Solutions for home and business."
          description="Explore Merchant Services, Xfinity Residential, and Comcast Business — then request a free quote."
          className="mb-12"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              featured={index === 1}
              href={`/services/${service.slug}`}
              ctaLabel="Learn More →"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
