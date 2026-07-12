"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useRef, useState } from "react";
import type { NavigationItem, LandingContent } from "@/content/landing-content";
import { trackEvent } from "@/lib/analytics";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";

type HeaderProps = {
  navigation: NavigationItem[];
  homeHref: string;
  contactHref: string;
  alternateLocaleHref: string;
};

export function Header({ navigation, homeHref, contactHref, alternateLocaleHref }: HeaderProps) {
  const t = useTranslations("Landing.header");
  const themeLabels = t.raw("theme") as LandingContent["header"]["theme"];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = useMemo(
    () => navigation.map(({ href }) => href.split("#")[1]).filter(Boolean),
    [navigation],
  );
  const activeSectionId = useActiveSection(sectionIds);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);
    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    trackEvent("mobile_menu_open");
    const backgroundElements = [document.querySelector("main"), document.querySelector("footer")];
    backgroundElements.forEach((element) => {
      if (element instanceof HTMLElement) element.inert = true;
    });
    const interactiveElements =
      mobileMenuRef.current?.querySelectorAll<HTMLElement>("a, button") ?? [];
    interactiveElements[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || interactiveElements.length === 0) return;
      const firstElement = interactiveElements[0];
      const lastElement = interactiveElements[interactiveElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      backgroundElements.forEach((element) => {
        if (element instanceof HTMLElement) element.inert = false;
      });
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={cn("site-header", isScrolled && "site-header--scrolled")}>
      <div className="site-header__inner container">
        <Logo href={homeHref} homeLabel={t("homeLabel")} eager />
        <nav className="desktop-nav" aria-label={t("navigationLabel")}>
          <NavigationLinks navigation={navigation} activeSectionId={activeSectionId} />
        </nav>
        <div className="header-actions">
          <a
            className="header-cta"
            href={contactHref}
            data-analytics-event="project_discussion_click"
          >
            <MessageCircle size={18} aria-hidden="true" />
            {t("discussProject")}
          </a>
          <a
            className="language-switch"
            href={alternateLocaleHref}
            hrefLang={alternateLocaleHref.startsWith("/en") ? "en" : "ru"}
            aria-label={t("languageName")}
          >
            <span aria-hidden="true">{t("languageLabel")}</span>
          </a>
          <ThemeToggle labels={themeLabels} />
        </div>
        <button
          className="menu-button"
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? t("closeMenu") : t("openMenu")}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          ref={mobileMenuRef}
          aria-label={t("mobileNavigationLabel")}
        >
          <div className="container">
            <NavigationLinks
              navigation={navigation}
              activeSectionId={activeSectionId}
              onNavigate={closeMenu}
            />
            <a className="mobile-nav__language" href={alternateLocaleHref} onClick={closeMenu}>
              {t("languageName")}
            </a>
            <div className="mobile-nav__theme">
              <span>{t("themeLabel")}</span>
              <ThemeToggle labels={themeLabels} />
            </div>
            <a className="button button--primary" href={contactHref} onClick={closeMenu}>
              {t("discussProject")}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function NavigationLinks({
  navigation,
  activeSectionId,
  onNavigate,
}: {
  navigation: NavigationItem[];
  activeSectionId: string | null;
  onNavigate?: () => void;
}) {
  return navigation.map((item) => {
    const sectionId = item.href.split("#")[1];
    return (
      <a
        key={item.href}
        href={item.href}
        aria-current={sectionId === activeSectionId ? "location" : undefined}
        onClick={onNavigate}
      >
        {item.label}
      </a>
    );
  });
}
