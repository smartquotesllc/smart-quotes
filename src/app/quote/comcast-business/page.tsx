import type { Metadata } from "next";
import { QuoteFormShell } from "@/components/quote/QuoteFormShell";

export const metadata: Metadata = {
  title: "Comcast Business Quote",
  description:
    "Request a Comcast Business quote from Smart Quotes LLC. Tell us about your business connectivity needs.",
};

export default function ComcastBusinessQuotePage() {
  return (
    <QuoteFormShell
      title="Comcast Business Quote"
      subtitle="Tell us about your business."
      serviceSlug="comcast-business"
      imageSrc="/images/quote/comcast-office.png"
      imageAlt="Modern multi-story glass office building at dusk"
      imagePriority
    />
  );
}
