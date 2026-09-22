import { Hero } from "@/components/sections/Hero";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { VacationOffer } from "@/components/VacationOffer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <HowItWorksSection />
      <VacationOffer />
    </>
  );
}
