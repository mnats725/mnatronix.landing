import type { LandingContent } from "@/content/landing-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection({ content }: { content: LandingContent["process"] }) {
  return (
    <section className="section process" id="process">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>
        <div className="process__track">
          {content.steps.map(([title, text], index) => (
            <Reveal key={title}>
              <article className="process-step">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <i />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
