import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import type { Locale } from "@/i18n/config";
import { DocumentLocale } from "@/components/i18n/document-locale";

type LegalSection = { title: string; paragraphs: string[] };

export function LegalPage({
  title,
  updatedAt,
  sections,
  locale = "ru",
  homeHref = "/",
  backLabel = "Вернуться на главную",
  eyebrow = "Юридическая информация",
  revisionLabel = "Редакция от",
}: {
  title: string;
  updatedAt: string;
  sections: LegalSection[];
  locale?: Locale;
  homeHref?: string;
  backLabel?: string;
  eyebrow?: string;
  revisionLabel?: string;
}) {
  return (
    <main className="legal-page" lang={locale}>
      <DocumentLocale locale={locale} />
      <div className="container">
        <header className="legal-page__header">
          <Logo href={homeHref} eager />
          <Link href={homeHref}>{backLabel}</Link>
        </header>
        <article>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="legal-page__date">
            {revisionLabel} {updatedAt}
          </p>
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
