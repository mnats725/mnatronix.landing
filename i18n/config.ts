export const locales = ["ru", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ru";

export function getLocalizedPath(locale: Locale, path = "/"): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) return normalizedPath;
  return normalizedPath === "/" ? "/en/" : `/en${normalizedPath}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "ru" ? "en" : "ru";
}
