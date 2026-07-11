import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", siteConfig.legal.privacyPath, siteConfig.legal.termsPath];
  return pages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path ? "yearly" : "monthly",
    priority: path ? 0.3 : 1,
  }));
}
