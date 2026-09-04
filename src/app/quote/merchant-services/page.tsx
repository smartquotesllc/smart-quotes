import type { Metadata } from "next";
import { QuoteFormShell } from "@/components/quote/QuoteFormShell";

export const metadata: Metadata = {
  title: "Merchant Services Quote",
  description:
    "Request a Merchant Services quote from Smart Quotes LLC. Tell us about your business and payment needs.",
};

export default function MerchantQuotePage() {
  return (
    <QuoteFormShell
      title="Merchant Services Quote"
      subtitle="Tell us about your business."
      serviceSlug="merchant-services"
      imageSrc="/images/quote/merchant-pos.png"
      imageAlt="Black handheld POS payment terminal"
      imagePriority
    />
  );
}
