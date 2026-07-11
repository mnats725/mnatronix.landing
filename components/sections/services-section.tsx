import { ArrowUpRight } from "lucide-react";
import { services } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ServicesSection() {
  return (
    <section className="section services" id="services">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Экспертиза"
            title="Что мы разрабатываем"
            description="От первой гипотезы до сложной корпоративной системы — берём ответственность за весь цифровой продукт."
          />
        </Reveal>
        <div className="services__grid">
          {services.map(({ title, text, icon: Icon }, index) => (
            <Reveal key={title}>
              <article className="service-card">
                <span className="service-card__index">0{index + 1}</span>
                <Icon className="service-card__icon" />
                <h3>{title}</h3>
                <p>{text}</p>
                <ArrowUpRight className="service-card__arrow" aria-hidden="true" />
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
