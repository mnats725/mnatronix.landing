"use client";

import { Check } from "lucide-react";
import { benefits } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";

export function BenefitsSection() {
  return (
    <section className="section benefits" id="benefits">
      <div className="benefits__grid container">
        <Reveal>
          <div className="benefits__intro">
            <p className="eyebrow">Почему мы</p>
            <h2>Разработка без хаоса и неожиданных проблем</h2>
            <p>Понятный процесс, измеримый результат и ответственность на каждом этапе.</p>
            <span className="benefits__number">01</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="benefits__list">
            {benefits.map((benefit, index) => (
              <div key={benefit}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{benefit}</h3>
                <i>
                  <Check size={17} />
                </i>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
