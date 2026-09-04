import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SERVICES } from "@/lib/services";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading label="Our Top Services" title="Choose the solution that fits you." description="Start with a category below and we'll guide you through the next step." className="mb-12" />
        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.slug} service={service} featured={index === 1} href={`/quote?service=${service.slug}`} ctaLabel="Request a Quote →" />
          ))}
        </div>
      </div>
    </section>
  );
}
