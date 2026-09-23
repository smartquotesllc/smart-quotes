import type { Metadata } from "next";
import { TermsAndConditions } from "@/components/terms/TermsAndConditions";
import { COMPANY } from "@/lib/company";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the terms governing use of the Smart Quotes LLC website, quote requests, third-party services, merchant solutions, and related website features.",
  alternates: {
    canonical: `${COMPANY.website}/terms`,
  },
  openGraph: {
    title: "Terms & Conditions | Smart Quotes LLC",
    description:
      "Review the terms governing use of the Smart Quotes LLC website, quote requests, third-party services, merchant solutions, and related website features.",
    url: `${COMPANY.website}/terms`,
  },
};

export default function TermsPage() {
  return <TermsAndConditions />;
}
