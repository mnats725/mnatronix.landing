import { Braces } from "lucide-react";
import type { LandingContent } from "@/content/landing-content";
import { Reveal } from "@/components/ui/reveal";

export function TechnologiesSection({ content }: { content: LandingContent["technologies"] }) {
  return (
    <section className="technologies">
      <div className="container">
        <Reveal>
          <div className="technologies__header">
            <p className="eyebrow">{content.eyebrow}</p>
            <h2>{content.title}</h2>
          </div>
          <div className="technologies__list">
            {content.items.map((technology) => (
              <span key={technology}>
                <Braces size={17} />
                {technology}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
