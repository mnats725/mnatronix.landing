import { ArrowUpRight } from "lucide-react";
import type { Locale } from "@/i18n/config";
import type { LandingContent } from "@/content/landing-content";
import { ProjectMockup } from "@/components/ui/project-mockup";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function PortfolioSection({
  locale,
  content,
}: {
  locale: Locale;
  content: LandingContent["portfolio"];
}) {
  return (
    <section className="section portfolio" id="projects">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow={content.eyebrow}
            title={content.title}
            description={content.description}
          />
        </Reveal>
        <div className="portfolio__list">
          {content.projects.map((project, index) => (
            <Reveal key={project.name}>
              <article className="project">
                <div className="project__visual">
                  <ProjectMockup variant={project.variant} name={project.name} locale={locale} />
                </div>
                <div className="project__info">
                  <span className="project__number">/ 0{index + 1}</span>
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="project__stack">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <a href="#contacts" data-analytics-event="portfolio_view">
                    {content.action} <ArrowUpRight size={18} />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
