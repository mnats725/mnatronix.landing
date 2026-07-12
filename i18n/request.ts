import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { landingContent } from "@/content/landing-content";
import { defaultLocale, locales } from "@/i18n/config";

export default getRequestConfig(async ({ requestLocale }) => {
  const requestedLocale = await requestLocale;
  const locale = hasLocale(locales, requestedLocale) ? requestedLocale : defaultLocale;

  return {
    locale,
    messages: {
      Landing: landingContent[locale],
    },
  };
});
