"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { trackEvent } from "@/lib/analytics";
import { navigation } from "@/content/site-content";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
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
    const mobileMenu = mobileMenuRef.current;
    const backgroundElements = [document.querySelector("main"), document.querySelector("footer")];
    backgroundElements.forEach((element) => {
      if (element instanceof HTMLElement) element.inert = true;
    });

    const interactiveElements = mobileMenu?.querySelectorAll<HTMLElement>("a, button") ?? [];
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
        <Logo priority />
        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <ThemeToggle />
          <a
            className="header-cta"
            href="#contacts"
            data-analytics-event="project_discussion_click"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Обсудить проект
          </a>
        </div>
        <button
          className="menu-button"
          ref={menuButtonRef}
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav
          id="mobile-menu"
          className="mobile-nav"
          ref={mobileMenuRef}
          aria-label="Мобильная навигация"
        >
          <div className="container">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <div className="mobile-nav__theme">
              <span>Тема оформления</span>
              <ThemeToggle />
            </div>
            <a className="button button--primary" href="#contacts" onClick={closeMenu}>
              Обсудить проект
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
