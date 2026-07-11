import type { Metadata } from "next";
import Script from "next/script";
import "@fontsource-variable/manrope";
import { AnalyticsProvider } from "@/components/analytics/analytics-provider";
import { ClientMonitor } from "@/components/monitoring/client-monitor";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { siteConfig } from "@/config/site-config";
import { getThemeBootstrapScript } from "@/lib/theme";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "Разработка сайтов и веб-сервисов под ключ | MNATRONIX LABS",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: "MNATRONIX LABS — цифровые продукты под ключ",
    description: "Проектируем и разрабатываем быстрые, удобные и масштабируемые цифровые продукты.",
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "MNATRONIX LABS",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "MNATRONIX LABS" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MNATRONIX LABS — цифровые продукты под ключ",
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.contacts.email,
    description: metadata.description,
  };

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: getThemeBootstrapScript() }} />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
        <AnalyticsProvider />
        <ClientMonitor />
        {process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY && (
          <Script
            src="https://challenges.cloudflare.com/turnstile/v0/api.js"
            strategy="afterInteractive"
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
