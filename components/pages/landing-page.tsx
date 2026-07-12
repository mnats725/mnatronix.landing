import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import type { Locale } from "@/i18n/config";
import { getAlternateLocale, getLocalizedPath } from "@/i18n/config";
import { getLandingContent } from "@/content/landing-content";
import { DocumentLocale } from "@/components/i18n/document-locale";
import { AboutSection } from "@/components/sections/about-section";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { ContactSection } from "@/components/sections/contact-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechnologiesSection } from "@/components/sections/technologies-section";

export async function LandingPage({ locale }: { locale: Locale }) {
  setRequestLocale(locale);
  const content = getLandingContent(locale);
  const messages = await getMessages({ locale });
  const homeHref = getLocalizedPath(locale);
  const alternateLocaleHref = getLocalizedPath(getAlternateLocale(locale));

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DocumentLocale locale={locale} />
      <Header
        navigation={content.navigation}
        homeHref={`${homeHref}#top`}
        contactHref="#contacts"
        alternateLocaleHref={alternateLocaleHref}
      />
      <main lang={locale}>
        <HeroSection content={content.hero} />
        <AboutSection content={content.about} />
        <ServicesSection locale={locale} content={content.services} />
        <BenefitsSection content={content.benefits} />
        <PortfolioSection locale={locale} content={content.portfolio} />
        <ProcessSection content={content.process} />
        <TechnologiesSection content={content.technologies} />
        <CtaSection content={content.cta} />
        <ContactSection locale={locale} />
      </main>
      <Footer
        locale={locale}
        content={content.footer}
        navigation={content.navigation}
        homeHref={`${homeHref}#top`}
      />
    </NextIntlClientProvider>
  );
}
