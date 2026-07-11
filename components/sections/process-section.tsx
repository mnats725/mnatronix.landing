import { processSteps } from "@/content/site-content";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function ProcessSection() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <Reveal>
          <SectionHeading
            eyebrow="Процесс"
            title="От идеи до запуска"
            description="Двигаемся короткими понятными итерациями. Вы всегда знаете, что происходит с проектом."
          />
        </Reveal>
        <div className="process__track">
          {processSteps.map(([title, text], index) => (
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
