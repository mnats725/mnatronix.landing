import { Clock3 } from "lucide-react";
import { ButtonLink } from "@/components/ui/button-link";
import { Reveal } from "@/components/ui/reveal";
import type { LandingContent } from "@/content/landing-content";

export function CtaSection({ content }: { content: LandingContent["cta"] }) {
  return (
    <section className="section cta-section">
      <div className="container">
        <Reveal>
          <div className="cta">
            <div className="cta__grid" />
            <div className="cta__circle cta__circle--one" />
            <div className="cta__circle cta__circle--two" />
            <div className="cta__content">
              <p className="eyebrow">{content.eyebrow}</p>
              <h2>{content.title}</h2>
              <p>{content.text}</p>
              <div className="cta__actions">
                <ButtonLink href="#contacts" variant="light">
                  {content.action}
                </ButtonLink>
                <span>
                  <Clock3 size={18} />
                  {content.note}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
