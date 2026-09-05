import type { Metadata } from "next";
import { VacationRedemptionTerms } from "@/components/vacation-terms/VacationRedemptionTerms";

export const metadata: Metadata = {
  title: "Vacation Redemption Terms & Conditions",
  description:
    "Official Smart Quotes LLC vacation redemption terms for the complimentary hotel accommodation incentive fulfilled through RedeemVacations.com.",
};

export default function VacationTermsPage() {
  return <VacationRedemptionTerms />;
}
