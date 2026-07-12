import { describe, expect, it } from "vitest";
import { locales } from "@/i18n/config";
import { serviceSlugs, servicesContent } from "@/content/services-content";

describe("service content", () => {
  it.each(locales)("keeps every %s service card distinctive", (locale) => {
    const services = serviceSlugs.map((slug) => servicesContent[locale][slug]);

    expect(new Set(services.map(({ cardDescription }) => cardDescription)).size).toBe(
      serviceSlugs.length,
    );
    expect(new Set(services.map(({ insight }) => insight)).size).toBe(serviceSlugs.length);
    services.forEach(({ cardDescription, insight }) => {
      expect(cardDescription.split(/[.!?]/).filter(Boolean).length).toBeGreaterThanOrEqual(2);
      expect(insight.length).toBeGreaterThan(35);
    });
  });
});
