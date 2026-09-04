import type { MetadataRoute } from "next";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:4321";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/services", "/services/merchant-services", "/services/xfinity-residential",
    "/services/comcast-business", "/quote", "/quote/merchant-services",
    "/quote/xfinity-residential", "/quote/comcast-business",
    "/about", "/contact", "/resources",
    "/privacy", "/terms", "/vacation-terms",
  ];
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
}
