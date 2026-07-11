import { Clock3 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";

export function CtaSection() {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal>
          <div className="cta">
            <div className="cta__grid" />
            <div className="cta__circle cta__circle--one" />
            <div className="cta__circle cta__circle--two" />
            <div className="cta__content">
              <p className="eyebrow">Начнём с разговора</p>
              <h2>Есть идея? Давайте превратим её в работающий продукт</h2>
              <p>
                Расскажите о своей задаче — мы предложим подходящее решение, оценим сроки и
                стоимость разработки.
              </p>
              <div className="cta__actions">
                <ButtonLink href="#contacts" variant="light">
                  Обсудить проект
                </ButtonLink>
                <span>
                  <Clock3 size={18} />
                  Ответим в течение рабочего дня
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
