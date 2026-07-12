import type { Locale } from "@/i18n/config";
import { getLocalizedPath } from "@/i18n/config";
import type { LandingContent, NavigationItem } from "@/content/landing-content";
import { siteConfig } from "@/config/site-config";
import { Logo } from "@/components/ui/logo";

type FooterProps = {
  locale: Locale;
  content: LandingContent["footer"];
  navigation: NavigationItem[];
  homeHref: string;
};

export function Footer({ locale, content, navigation, homeHref }: FooterProps) {
  const companyLinks = navigation.filter((_, index) => [0, 3, 5].includes(index));
  const serviceLinks = content.serviceLinks.map(({ label }) => ({
    label,
    href: `${homeHref.split("#")[0]}#services`,
  }));

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light href={homeHref} />
            <p>{content.description}</p>
          </div>
          <FooterColumn title={content.company} links={companyLinks} />
          <FooterColumn title={content.services} links={serviceLinks} />
          <FooterColumn
            title={content.contacts}
            links={[
              { label: "Telegram", href: siteConfig.contacts.telegram.href },
              { label: "Email", href: `mailto:${siteConfig.contacts.email}` },
              {
                label: locale === "ru" ? "Телефон" : "Phone",
                href: siteConfig.contacts.phone.href,
              },
            ]}
          />
        </div>
        <div className="footer__bottom">
          <span>© 2026 MNATRONIX LABS</span>
          <div>
            <a href={getLocalizedPath(locale, siteConfig.legal.privacyPath)}>{content.privacy}</a>
            <a href={getLocalizedPath(locale, siteConfig.legal.termsPath)}>{content.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: NavigationItem[] }) {
  return (
    <nav className="footer__column" aria-label={title}>
      <h3>{title}</h3>
      {links.map((link) => (
        <a key={`${link.label}-${link.href}`} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
