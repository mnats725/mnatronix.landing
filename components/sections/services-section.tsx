import {
  Blocks,
  Brush,
  CodeXml,
  Headphones,
  LayoutTemplate,
  ShoppingBag,
  type LucideIcon,
} from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { LandingContent } from "@/content/landing-content";
import { servicesContent, serviceSlugs, type ServiceSlug } from "@/content/services-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  "corporate-websites": LayoutTemplate,
  ecommerce: ShoppingBag,
  "landing-pages": Blocks,
  "web-services": CodeXml,
  "ui-ux-design": Brush,
  support: Headphones,
};

export function ServicesSection({
  locale,
  content,
}: {
  locale: Locale;
  content: LandingContent["services"];
}) {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>
        <div className="services__grid">
          {serviceSlugs.map((slug, index) => {
            const service = servicesContent[locale][slug];
            const Icon = serviceIcons[slug];
            return (
              <Reveal key={slug}>
                <article className="service-card">
                  <span className="service-card__index">{String(index + 1).padStart(2, "0")}</span>
                  <Icon className="service-card__icon" />
                  <h3>{service.title}</h3>
                  <p>{service.cardDescription}</p>
                  <strong className="service-card__insight">{service.insight}</strong>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
