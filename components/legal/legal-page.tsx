import Link from "next/link";
import { Logo } from "@/components/ui/logo";

type LegalSection = { title: string; paragraphs: string[] };

export function LegalPage({
  title,
  updatedAt,
  sections,
}: {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
}) {
  return (
    <main className="legal-page">
      <div className="container">
        <header className="legal-page__header">
          <Logo priority />
          <Link href="/">Вернуться на главную</Link>
        </header>
        <article>
          <p className="eyebrow">Юридическая информация</p>
          <h1>{title}</h1>
          <p className="legal-page__date">Редакция от {updatedAt}</p>
          {sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </article>
      </div>
    </main>
  );
}
