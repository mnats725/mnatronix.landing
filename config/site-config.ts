const DEFAULT_SITE_URL = "https://mnats725-mnatronix-landing-328a.twc1.net";
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL).replace(/\/$/, "");

export const siteConfig = {
  name: "MNATRONIX LABS",
  legalName: "MNATRONIX LABS",
  url: siteUrl,
  description:
    "Создаём сайты, интернет-магазины и веб-сервисы любой сложности. Дизайн, разработка, запуск и техническая поддержка.",
  contacts: {
    email: "mnatssteam@mail.ru",
    phone: {
      display: "+7 900 286-72-53",
      href: "tel:+79002867253",
    },
    telegram: {
      display: "@mnatronix",
      href: "https://t.me/mnatronix",
    },
    workingHours: "Пн–Пт, 10:00–19:00",
  },
  legal: {
    privacyPath: "/privacy",
    termsPath: "/terms",
  },
} as const;
