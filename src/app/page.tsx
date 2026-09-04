import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { WhySmartQuotes } from "@/components/sections/WhySmartQuotes";
import { SolutionsShowcase } from "@/components/sections/SolutionsShowcase";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection />
      <HowItWorksSection />
      <WhySmartQuotes />
      <SolutionsShowcase />
      <FinalCTA />
    </>
  );
}
