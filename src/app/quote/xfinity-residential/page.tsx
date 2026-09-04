import type { Metadata } from "next";
import { QuoteFormShell } from "@/components/quote/QuoteFormShell";

export const metadata: Metadata = {
  title: "Xfinity Residential Quote",
  description:
    "Request an Xfinity Residential quote from Smart Quotes LLC. Tell us where to connect you.",
};

export default function XfinityQuotePage() {
  return (
    <QuoteFormShell
      title="Xfinity Residential Quote"
      subtitle="Tell us where to connect you."
      serviceSlug="xfinity-residential"
      imageSrc="/images/quote/xfinity-tv.png"
      imageAlt="Television, set-top box, and remote for home entertainment"
      imagePriority
    />
  );
}
