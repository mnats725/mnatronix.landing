export const siteConfig = {
  name: "MNATRONIX LABS",
  legalName: "MNATRONIX LABS",
  url: "https://mnatronix.ru",
  description:
    "Создаём сайты, интернет-магазины и веб-сервисы любой сложности. Дизайн, разработка, запуск и техническая поддержка.",
  contacts: {
    email: "hello@mnatronix.ru",
    phone: {
      display: "+7 999 123-45-67",
      href: "tel:+79991234567",
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
