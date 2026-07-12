import type { Locale } from "@/i18n/config";

export type NavigationItem = { label: string; href: string };
export type ProjectContent = {
  name: string;
  category: string;
  description: string;
  stack: string[];
  variant: string;
};

export type LandingContent = {
  metadata: { title: string; description: string; ogTitle: string };
  navigation: NavigationItem[];
  header: {
    navigationLabel: string;
    homeLabel: string;
    mobileNavigationLabel: string;
    openMenu: string;
    closeMenu: string;
    discussProject: string;
    themeLabel: string;
    languageLabel: string;
    languageName: string;
    theme: { switch: string; light: string; dark: string };
  };
  hero: {
    eyebrow: string;
    title: string;
    accent: string;
    lead: string;
    primaryAction: string;
    secondaryAction: string;
    visualLabel: string;
    stats: Array<[string, string]>;
  };
  about: { eyebrow: string; title: string; text: string; principles: string[] };
  services: { eyebrow: string; title: string; description: string };
  benefits: { eyebrow: string; title: string; description: string; items: string[] };
  portfolio: {
    eyebrow: string;
    title: string;
    description: string;
    action: string;
    projects: ProjectContent[];
  };
  process: {
    eyebrow: string;
    title: string;
    description: string;
    steps: Array<[string, string]>;
  };
  technologies: { eyebrow: string; title: string; items: string[] };
  cta: { eyebrow: string; title: string; text: string; action: string; note: string };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    honeypot: string;
    fields: {
      name: string;
      namePlaceholder: string;
      contact: string;
      contactPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      projectType: string;
      message: string;
      messagePlaceholder: string;
      budget: string;
      selectPlaceholder: string;
      privacyPrefix: string;
      privacyLink: string;
    };
    projectTypes: string[];
    budgets: string[];
    submit: string;
    submitting: string;
    directEyebrow: string;
    directTitle: string;
    directText: string;
    phoneLabel: string;
    hoursLabel: string;
    online: string;
    messages: {
      validation: string;
      submitting: string;
      mailClient: string;
      success: string;
      error: string;
    };
  };
  footer: {
    description: string;
    company: string;
    services: string;
    contacts: string;
    privacy: string;
    terms: string;
    serviceLinks: Array<{ label: string; slug: string }>;
  };
};

const sharedTechnologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "NestJS",
  "PostgreSQL",
  "Python",
  "Docker",
  "Redis",
  "Figma",
  "Git",
  "REST API",
];

const ru: LandingContent = {
  metadata: {
    title: "Разработка сайтов и веб-сервисов под ключ | MNATRONIX LABS",
    description:
      "Создаём сайты, интернет-магазины и веб-сервисы любой сложности. Дизайн, разработка, запуск и техническая поддержка.",
    ogTitle: "MNATRONIX LABS — цифровые продукты под ключ",
  },
  navigation: [
    { label: "О нас", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Преимущества", href: "#benefits" },
    { label: "Проекты", href: "#projects" },
    { label: "Этапы работы", href: "#process" },
    { label: "Контакты", href: "#contacts" },
  ],
  header: {
    navigationLabel: "Основная навигация",
    homeLabel: "MNATRONIX LABS — на главную",
    mobileNavigationLabel: "Мобильная навигация",
    openMenu: "Открыть меню",
    closeMenu: "Закрыть меню",
    discussProject: "Обсудить проект",
    themeLabel: "Тема оформления",
    languageLabel: "EN",
    languageName: "English version",
    theme: {
      switch: "Переключить цветовую тему",
      light: "Включить светлую тему",
      dark: "Включить тёмную тему",
    },
  },
  hero: {
    eyebrow: "Разработка цифровых продуктов под ключ",
    title: "Создаём сайты и веб-сервисы",
    accent: "любой сложности",
    lead: "Проектируем и разрабатываем быстрые, удобные и масштабируемые цифровые продукты, которые помогают бизнесу расти.",
    primaryAction: "Обсудить проект",
    secondaryAction: "Смотреть проекты",
    visualLabel: "Абстрактная композиция цифрового интерфейса",
    stats: [
      ["5+", "лет опыта"],
      ["40+", "реализованных проектов"],
      ["✓", "Работаем по договору"],
      ["↗", "Поддержка после запуска"],
    ],
  },
  about: {
    eyebrow: "О компании",
    title: "Превращаем идеи в работающие продукты",
    text: "Мы создаём не просто красивые страницы, а полноценные цифровые решения. Изучаем задачи бизнеса, проектируем архитектуру, разрабатываем интерфейс и доводим продукт до стабильного запуска.",
    principles: [
      "Погружаемся в бизнес",
      "Думаем о пользователях",
      "Создаём решения с запасом на рост",
    ],
  },
  services: {
    eyebrow: "Экспертиза",
    title: "Что мы разрабатываем",
    description:
      "От первой гипотезы до сложной корпоративной системы — берём ответственность за весь цифровой продукт.",
  },
  benefits: {
    eyebrow: "Почему мы",
    title: "Разработка без хаоса и неожиданных проблем",
    description: "Понятный процесс, измеримый результат и ответственность на каждом этапе.",
    items: [
      "Прозрачная оценка сроков и стоимости",
      "Работа по договору",
      "Регулярные демонстрации результата",
      "Современный технологический стек",
      "Чистый и поддерживаемый код",
      "Адаптивность под все устройства",
      "SEO-основа и высокая скорость загрузки",
      "Техническая поддержка после запуска",
    ],
  },
  portfolio: {
    eyebrow: "Избранные кейсы",
    title: "Проекты, которыми мы гордимся",
    description:
      "Проектируем продукты вокруг бизнес-метрик — от первого экрана до внутренней логики.",
    action: "Смотреть проект",
    projects: [
      {
        name: "FinFlow",
        category: "Финансовая SaaS-платформа",
        description: "Сервис для управления платежами, аналитикой и финансовыми отчётами.",
        stack: ["Next.js", "TypeScript", "PostgreSQL"],
        variant: "finance",
      },
      {
        name: "Nord Store",
        category: "Интернет-магазин",
        description:
          "Современный магазин с каталогом, фильтрами, онлайн-оплатой и интеграцией с CRM.",
        stack: ["React", "Node.js", "Redis"],
        variant: "store",
      },
      {
        name: "MedSpace",
        category: "Сервис онлайн-записи",
        description: "Личный кабинет пациента, расписание врачей и автоматические уведомления.",
        stack: ["Next.js", "NestJS", "Docker"],
        variant: "medical",
      },
      {
        name: "BuildControl",
        category: "Корпоративный веб-сервис",
        description: "Система контроля строительных проектов, задач, документов и сотрудников.",
        stack: ["React", "Python", "PostgreSQL"],
        variant: "build",
      },
    ],
  },
  process: {
    eyebrow: "Процесс",
    title: "От идеи до запуска",
    description:
      "Двигаемся короткими понятными итерациями. Вы всегда знаете, что происходит с проектом.",
    steps: [
      ["Знакомство", "Обсуждаем задачи, цели, аудиторию и особенности бизнеса."],
      ["Аналитика", "Формируем требования, структуру проекта и техническое решение."],
      ["Прототип и дизайн", "Создаём логику интерфейса и визуальную концепцию."],
      ["Разработка", "Пишем frontend и backend, подключаем необходимые интеграции."],
      ["Тестирование", "Проверяем функциональность, адаптивность, скорость и безопасность."],
      ["Запуск", "Размещаем проект, настраиваем аналитику и передаём инструкции."],
      ["Поддержка", "Исправляем, улучшаем и развиваем продукт после публикации."],
    ],
  },
  technologies: {
    eyebrow: "Технологии",
    title: "Используем проверенный стек",
    items: sharedTechnologies,
  },
  cta: {
    eyebrow: "Начнём с разговора",
    title: "Есть идея? Давайте превратим её в работающий продукт",
    text: "Расскажите о своей задаче — мы предложим подходящее решение, оценим сроки и стоимость разработки.",
    action: "Обсудить проект",
    note: "Ответим в течение рабочего дня",
  },
  contact: {
    eyebrow: "Связаться с нами",
    title: "Расскажите о вашем проекте",
    text: "Коротко опишите задачу — вернёмся с первыми вопросами и предложим следующий шаг.",
    honeypot: "Не заполняйте это поле",
    fields: {
      name: "Имя",
      namePlaceholder: "Как к вам обращаться",
      contact: "Телефон или Telegram",
      contactPlaceholder: "+7 999 000-00-00",
      email: "Email",
      emailPlaceholder: "mail@company.ru",
      projectType: "Тип проекта",
      message: "Описание задачи",
      messagePlaceholder: "Что нужно разработать и какую задачу решить?",
      budget: "Предполагаемый бюджет",
      selectPlaceholder: "Выберите вариант",
      privacyPrefix: "Я согласен с",
      privacyLink: "политикой обработки персональных данных",
    },
    projectTypes: [
      "Корпоративный сайт",
      "Интернет-магазин",
      "Landing Page",
      "Веб-сервис",
      "UI/UX-дизайн",
      "Другое",
    ],
    budgets: [
      "до 150 000 ₽",
      "150 000–300 000 ₽",
      "300 000–700 000 ₽",
      "от 700 000 ₽",
      "пока не определён",
    ],
    submit: "Отправить заявку",
    submitting: "Отправляем…",
    directEyebrow: "Напрямую",
    directTitle: "Предпочитаете написать сами?",
    directText: "Свяжитесь с нами удобным способом. Отвечаем лично, без ботов и длинных анкет.",
    phoneLabel: "Телефон",
    hoursLabel: "Время работы",
    online: "Сейчас на связи",
    messages: {
      validation: "Проверьте заполнение обязательных полей.",
      submitting: "Отправляем заявку…",
      mailClient: "Заявка подготовлена. Завершите отправку в открывшемся почтовом приложении.",
      success: "Спасибо! Заявка отправлена. Мы свяжемся с вами в течение рабочего дня.",
      error: "Не удалось отправить заявку",
    },
  },
  footer: {
    description: "Разрабатываем сайты и веб-сервисы для бизнеса.",
    company: "Компания",
    services: "Услуги",
    contacts: "Контакты",
    privacy: "Политика конфиденциальности",
    terms: "Пользовательское соглашение",
    serviceLinks: [
      { label: "Сайты", slug: "corporate-websites" },
      { label: "Интернет-магазины", slug: "ecommerce" },
      { label: "Веб-сервисы", slug: "web-services" },
      { label: "UI/UX-дизайн", slug: "ui-ux-design" },
    ],
  },
};

const en: LandingContent = {
  metadata: {
    title: "Websites and web applications development | MNATRONIX LABS",
    description:
      "We design and build fast, scalable websites, e-commerce platforms and web applications for growing businesses.",
    ogTitle: "MNATRONIX LABS — digital products built to scale",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Benefits", href: "#benefits" },
    { label: "Projects", href: "#projects" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contacts" },
  ],
  header: {
    navigationLabel: "Main navigation",
    homeLabel: "MNATRONIX LABS — home",
    mobileNavigationLabel: "Mobile navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    discussProject: "Discuss a project",
    themeLabel: "Appearance",
    languageLabel: "RU",
    languageName: "Русская версия",
    theme: { switch: "Switch colour theme", light: "Use light theme", dark: "Use dark theme" },
  },
  hero: {
    eyebrow: "End-to-end digital product development",
    title: "We build websites and web applications",
    accent: "ready to scale",
    lead: "We design and develop fast, intuitive and scalable digital products that help businesses grow.",
    primaryAction: "Discuss a project",
    secondaryAction: "View projects",
    visualLabel: "Abstract digital interface composition",
    stats: [
      ["5+", "years of experience"],
      ["40+", "projects delivered"],
      ["✓", "Contract-based delivery"],
      ["↗", "Post-launch support"],
    ],
  },
  about: {
    eyebrow: "About us",
    title: "We turn ideas into working products",
    text: "We build complete digital solutions, not just polished screens. We learn the business context, design the architecture, create the interface and take the product through a stable launch.",
    principles: [
      "We understand the business",
      "We design for real users",
      "We build with growth in mind",
    ],
  },
  services: {
    eyebrow: "Expertise",
    title: "What we build",
    description:
      "From an early hypothesis to a complex business platform, we take responsibility for the complete digital product.",
  },
  benefits: {
    eyebrow: "Why us",
    title: "Product development without chaos",
    description: "A clear process, measurable outcomes and ownership at every stage.",
    items: [
      "Transparent estimates and schedules",
      "Contract-based delivery",
      "Regular product demonstrations",
      "Modern technology stack",
      "Clean maintainable code",
      "Responsive on every device",
      "Technical SEO and high performance",
      "Support after launch",
    ],
  },
  portfolio: {
    eyebrow: "Selected work",
    title: "Projects we are proud of",
    description:
      "We design products around business metrics, from the first screen to the internal workflow.",
    action: "View project",
    projects: [
      {
        name: "FinFlow",
        category: "Financial SaaS platform",
        description: "Payment, analytics and financial reporting workspace for growing teams.",
        stack: ["Next.js", "TypeScript", "PostgreSQL"],
        variant: "finance",
      },
      {
        name: "Nord Store",
        category: "E-commerce",
        description:
          "Modern storefront with product discovery, online payments and CRM integration.",
        stack: ["React", "Node.js", "Redis"],
        variant: "store",
      },
      {
        name: "MedSpace",
        category: "Healthcare booking service",
        description: "Patient portal, practitioner schedules and automated notifications.",
        stack: ["Next.js", "NestJS", "Docker"],
        variant: "medical",
      },
      {
        name: "BuildControl",
        category: "Business web platform",
        description: "A system for managing construction projects, tasks, documents and teams.",
        stack: ["React", "Python", "PostgreSQL"],
        variant: "build",
      },
    ],
  },
  process: {
    eyebrow: "Process",
    title: "From idea to launch",
    description:
      "We work in short, understandable iterations so you always know where the product stands.",
    steps: [
      ["Discovery", "We discuss goals, users and the business context."],
      ["Analysis", "We define requirements, structure and the technical approach."],
      ["Prototype and design", "We shape the experience and visual direction."],
      ["Development", "We build frontend, backend and required integrations."],
      ["Testing", "We verify functionality, responsiveness, speed and security."],
      ["Launch", "We deploy the product, configure analytics and hand over documentation."],
      ["Support", "We fix, improve and grow the product after launch."],
    ],
  },
  technologies: {
    eyebrow: "Technology",
    title: "A proven modern stack",
    items: sharedTechnologies,
  },
  cta: {
    eyebrow: "Start with a conversation",
    title: "Have an idea? Let’s turn it into a working product",
    text: "Tell us about the challenge. We will suggest an approach and estimate the delivery schedule and budget.",
    action: "Discuss a project",
    note: "We reply within one business day",
  },
  contact: {
    eyebrow: "Contact us",
    title: "Tell us about your project",
    text: "Describe the challenge briefly. We will return with the first questions and a practical next step.",
    honeypot: "Do not fill in this field",
    fields: {
      name: "Name",
      namePlaceholder: "How should we address you?",
      contact: "Phone or Telegram",
      contactPlaceholder: "+1 555 000 0000",
      email: "Email",
      emailPlaceholder: "mail@company.com",
      projectType: "Project type",
      message: "Project brief",
      messagePlaceholder: "What would you like to build and why?",
      budget: "Estimated budget",
      selectPlaceholder: "Select an option",
      privacyPrefix: "I agree to the",
      privacyLink: "privacy policy",
    },
    projectTypes: [
      "Corporate website",
      "E-commerce",
      "Landing page",
      "Web application",
      "UI/UX design",
      "Other",
    ],
    budgets: ["up to $2,000", "$2,000–$5,000", "$5,000–$10,000", "$10,000+", "not decided yet"],
    submit: "Send enquiry",
    submitting: "Sending…",
    directEyebrow: "Direct contact",
    directTitle: "Prefer to contact us directly?",
    directText:
      "Choose a convenient channel. You will speak to a person, not a bot or a long questionnaire.",
    phoneLabel: "Phone",
    hoursLabel: "Working hours",
    online: "Available now",
    messages: {
      validation: "Please complete all required fields.",
      submitting: "Sending your enquiry…",
      mailClient:
        "Your enquiry is ready. Complete sending it in the email application that opened.",
      success:
        "Thank you! Your enquiry has been sent. We will contact you within one business day.",
      error: "We could not send your enquiry",
    },
  },
  footer: {
    description: "We build websites and web applications for growing businesses.",
    company: "Company",
    services: "Services",
    contacts: "Contact",
    privacy: "Privacy policy",
    terms: "Terms of use",
    serviceLinks: [
      { label: "Corporate websites", slug: "corporate-websites" },
      { label: "E-commerce", slug: "ecommerce" },
      { label: "Web applications", slug: "web-services" },
      { label: "UI/UX design", slug: "ui-ux-design" },
    ],
  },
};

export const landingContent: Record<Locale, LandingContent> = { ru, en };

export function getLandingContent(locale: Locale): LandingContent {
  return landingContent[locale];
}
