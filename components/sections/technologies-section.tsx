import { Braces } from "lucide-react";
import { technologies } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";

export function TechnologiesSection() {
  return (
    <section className="technologies">
      <div className="container">
        <Reveal>
          <div className="technologies__header">
            <p className="eyebrow">Технологии</p>
            <h2>Используем проверенный стек</h2>
          </div>
          <div className="technologies__list">
            {technologies.map((technology) => (
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
