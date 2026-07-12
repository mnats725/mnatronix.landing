"use client";

import { Check } from "lucide-react";
import type { LandingContent } from "@/content/landing-content";
import { Reveal } from "@/components/ui/reveal";

export function BenefitsSection({ content }: { content: LandingContent["benefits"] }) {
  return (
    <section className="section benefits" id="benefits">
      <div className="benefits__grid container">
        <Reveal>
          <div className="benefits__intro">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2>{content.title}</h2>
            <p>{content.description}</p>
            <span className="benefits__number">01</span>
          </div>
        </Reveal>
        <Reveal>
          <div className="benefits__list">
            {content.items.map((benefit, index) => (
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
