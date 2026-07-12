import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import type { LandingContent } from "@/content/landing-content";

export function AboutSection({ content }: { content: LandingContent["about"] }) {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal>
          <div className="about__top">
            <div>
              <p className="eyebrow">{content.eyebrow}</p>
              <h2>{content.title}</h2>
            </div>
            <p className="about__text">{content.text}</p>
          </div>
          <div className="about__wordmark">
            <span>DESIGN</span>
            <i>/</i>
            <span>CODE</span>
            <i>/</i>
            <span>GROWTH</span>
          </div>
          <div className="principles">
            {content.principles.map((item, index) => (
              <article key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <ArrowDownRight />
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
