import { navigation } from "@/content/site-content";
import { siteConfig } from "@/config/site-config";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <Logo light />
            <p>Разрабатываем сайты и веб-сервисы для бизнеса.</p>
          </div>
          <FooterColumn
            title="Компания"
            links={navigation.filter((_, index) => [0, 3, 5].includes(index))}
          />
          <FooterColumn
            title="Услуги"
            links={[
              { label: "Сайты", href: "#services" },
              { label: "Интернет-магазины", href: "#services" },
              { label: "Веб-сервисы", href: "#services" },
              { label: "UI/UX-дизайн", href: "#services" },
            ]}
          />
          <FooterColumn
            title="Контакты"
            links={[
              { label: "Telegram", href: siteConfig.contacts.telegram.href },
              { label: "Email", href: `mailto:${siteConfig.contacts.email}` },
              { label: "Телефон", href: siteConfig.contacts.phone.href },
            ]}
          />
        </div>
        <div className="footer__bottom">
          <span>© 2026 MNATRONIX LABS</span>
          <div>
            <a href={siteConfig.legal.privacyPath}>Политика конфиденциальности</a>
            <a href={siteConfig.legal.termsPath}>Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; href: string }>;
}) {
  return (
    <nav className="footer__column" aria-label={title}>
      <h3>{title}</h3>
      {links.map((link) => (
        <a key={link.label} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
