import type { Metadata } from "next";
import { QuoteFormShell } from "@/components/quote/QuoteFormShell";
import { RESIDENTIAL_SERVICES } from "@/lib/quote-options";

export const metadata: Metadata = {
  title: "Xfinity Residential Quote",
  description:
    "Request an Xfinity Residential quote from Smart Quotes LLC. Tell us where to connect you.",
};

type PageProps = {
  searchParams: Promise<{ interest?: string; byod?: string }>;
};

function resolveResidentialDefaults(params: {
  interest?: string;
  byod?: string;
}): Record<string, string> | undefined {
  const interest = params.interest?.trim();
  const matched =
    interest &&
    RESIDENTIAL_SERVICES.find(
      (opt) => opt.toLowerCase() === interest.toLowerCase(),
    );

  if (!matched && params.byod !== "1") return undefined;

  const defaults: Record<string, string> = {};
  // Preselect Mobile when coming from BYOD / Mobile CTAs
  defaults.serviceInterestedIn = matched ?? "Mobile";
  if (params.byod === "1") {
    defaults.message =
      "Interested in Xfinity Mobile — Bring Your Own Device (compatible device).";
  }
  return defaults;
}

export default async function XfinityQuotePage({ searchParams }: PageProps) {
  const params = await searchParams;
  const formDefaults = resolveResidentialDefaults(params);

  return (
    <QuoteFormShell
      title="Xfinity Residential Quote"
      subtitle="Tell us where to connect you."
      serviceSlug="xfinity-residential"
      imageSrc="/images/quote/xfinity-tv.png"
      imageAlt="Television, set-top box, and remote for home entertainment"
      imagePriority
      formDefaults={formDefaults}
    />
  );
}
