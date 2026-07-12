import type { Metadata } from "next";
import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/i18n/config";
import { getLandingContent } from "@/content/landing-content";

const ogImage = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "MNATRONIX LABS",
  type: "image/png",
};

export function createLandingMetadata(locale: Locale): Metadata {
  const content = getLandingContent(locale);
  const path = getLocalizedPath(locale);
  return createMetadata(
    locale,
    path,
    content.metadata.title,
    content.metadata.description,
    content.metadata.ogTitle,
  );
}

function createMetadata(
  locale: Locale,
  path: string,
  title: string,
  description: string,
  ogTitle: string,
): Metadata {
  const basePath = locale === "en" ? path.replace(/^\/en/, "") || "/" : path;
  const russianPath = getLocalizedPath("ru", basePath);
  const englishPath = getLocalizedPath("en", basePath);
  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        ru: russianPath,
        en: englishPath,
      },
    },
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      locale: locale === "ru" ? "ru_RU" : "en_US",
      url: path,
      siteName: "MNATRONIX LABS",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}
