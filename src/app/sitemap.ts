import type { MetadataRoute } from "next";
import { COMPANY } from "@/lib/company";

const base =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || COMPANY.website;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/services",
    "/services/merchant-services",
    "/services/xfinity-residential",
    "/services/comcast-business",
    "/quote",
    "/quote/merchant-services",
    "/quote/xfinity-residential",
    "/quote/comcast-business",
    "/quote/internet",
    "/quote/mobile",
    "/quote/streaming",
    "/about",
    "/contact",
    "/resources",
    "/how-it-works",
    "/become-an-agent",
    "/privacy",
    "/terms",
    "/vacation-terms",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
