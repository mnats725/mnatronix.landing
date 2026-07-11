import { Blocks, Brush, CodeXml, Headphones, LayoutTemplate, ShoppingBag } from "lucide-react";

export const navigation = [
  { label: "О нас", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Преимущества", href: "#benefits" },
  { label: "Проекты", href: "#projects" },
  { label: "Этапы работы", href: "#process" },
  { label: "Контакты", href: "#contacts" },
];

export const services = [
  {
    title: "Корпоративные сайты",
    text: "Представительские сайты для компаний, продуктов и брендов.",
    icon: LayoutTemplate,
  },
  {
    title: "Интернет-магазины",
    text: "Каталоги, корзины, системы оплаты, интеграции с CRM и службами доставки.",
    icon: ShoppingBag,
  },
  {
    title: "Landing Page",
    text: "Конверсионные посадочные страницы для рекламы, запуска продуктов и услуг.",
    icon: Blocks,
  },
  {
    title: "Веб-сервисы",
    text: "Личные кабинеты, SaaS-платформы, CRM, панели управления и внутренние системы.",
    icon: CodeXml,
  },
  {
    title: "UI/UX-дизайн",
    text: "Проектирование понятных интерфейсов, прототипирование и создание дизайн-систем.",
    icon: Brush,
  },
  {
    title: "Поддержка и развитие",
    text: "Обновление, оптимизация, аналитика и развитие уже запущенных проектов.",
    icon: Headphones,
  },
];

export const benefits = [
  "Прозрачная оценка сроков и стоимости",
  "Работа по договору",
  "Регулярные демонстрации результата",
  "Современный технологический стек",
  "Чистый и поддерживаемый код",
  "Адаптивность под все устройства",
  "SEO-основа и высокая скорость загрузки",
  "Техническая поддержка после запуска",
];

export const projects = [
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
    description: "Современный магазин с каталогом, фильтрами, онлайн-оплатой и интеграцией с CRM.",
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
];

export const processSteps = [
  ["Знакомство", "Обсуждаем задачи, цели, аудиторию и особенности бизнеса."],
  ["Аналитика", "Формируем требования, структуру проекта и техническое решение."],
  ["Прототип и дизайн", "Создаём логику интерфейса и визуальную концепцию."],
  ["Разработка", "Пишем frontend и backend, подключаем необходимые интеграции."],
  ["Тестирование", "Проверяем функциональность, адаптивность, скорость и безопасность."],
  ["Запуск", "Размещаем проект, настраиваем аналитику и передаём инструкции."],
  ["Поддержка", "Исправляем, улучшаем и развиваем продукт после публикации."],
] as const;

export const technologies = [
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

export const projectTypes = [
  "Корпоративный сайт",
  "Интернет-магазин",
  "Landing Page",
  "Веб-сервис",
  "UI/UX-дизайн",
  "Другое",
];
export const budgets = [
  "до 150 000 ₽",
  "150 000–300 000 ₽",
  "300 000–700 000 ₽",
  "от 700 000 ₽",
  "пока не определён",
];
