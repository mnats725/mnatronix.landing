import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const localizedPages = [
    "/",
    `${siteConfig.legal.privacyPath}/`,
    `${siteConfig.legal.termsPath}/`,
  ];
  const pages = [
    ...localizedPages,
    ...localizedPages.map((path) => (path === "/" ? "/en/" : `/en${path}`)),
  ];
  return pages.map((path) => ({
    url: `${siteConfig.url}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "/" || path === "/en/" ? "monthly" : "yearly",
    priority: path === "/" || path === "/en/" ? 1 : 0.6,
  }));
}
