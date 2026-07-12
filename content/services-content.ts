import type { Locale } from "@/i18n/config";

export const serviceSlugs = [
  "corporate-websites",
  "ecommerce",
  "landing-pages",
  "web-services",
  "ui-ux-design",
  "support",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export type ServiceCardContent = {
  slug: ServiceSlug;
  title: string;
  cardDescription: string;
  insight: string;
};

const ruServices: Record<ServiceSlug, ServiceCardContent> = {
  "corporate-websites": {
    slug: "corporate-websites",
    title: "Корпоративные сайты",
    cardDescription:
      "Переводим сложный бизнес в ясную цифровую историю, которой доверяют клиенты, партнёры и кандидаты. Выстраиваем сайт вокруг решений, которые человек принимает до первого разговора с компанией.",
    insight: "Репутация начинает работать ещё до первого звонка.",
  },
  ecommerce: {
    slug: "ecommerce",
    title: "Интернет-магазины",
    cardDescription:
      "Проектируем торговую систему, которая не ломается при росте ассортимента и заказов. Соединяем путь покупателя с реальными процессами склада, оплаты и логистики.",
    insight: "Рост продаж не должен увеличивать операционный хаос.",
  },
  "landing-pages": {
    slug: "landing-pages",
    title: "Landing Page",
    cardDescription:
      "Собираем аргументацию вокруг одного коммерческого действия: заявки, продажи или запуска. Каждая секция продолжает мысль клиента и снимает конкретное сомнение.",
    insight: "Хороший лендинг не украшает оффер — он делает выбор очевидным.",
  },
  "web-services": {
    slug: "web-services",
    title: "Веб-сервисы",
    cardDescription:
      "Превращаем ручные операции и разрозненные данные в управляемый цифровой процесс. Создаём продукт, который экономит время команды и открывает новые модели дохода.",
    insight: "Сильный сервис становится частью бизнес-модели, а не ещё одним инструментом.",
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX-дизайн",
    cardDescription:
      "Находим места, где продукт теряет внимание, время и деньги пользователя. Перестраиваем сценарии так, чтобы сложные действия ощущались простыми и предсказуемыми.",
    insight: "Интерфейс хорош не тогда, когда его замечают, а когда в нём достигают цели.",
  },
  support: {
    slug: "support",
    title: "Поддержка и развитие",
    cardDescription:
      "Берём действующий продукт под постоянный контроль и превращаем накопленные проблемы в план развития. Улучшаем его по данным, а не по списку случайных пожеланий.",
    insight: "После запуска продукт должен набирать ценность, а не технический долг.",
  },
};

const enServices: Record<ServiceSlug, ServiceCardContent> = {
  "corporate-websites": {
    slug: "corporate-websites",
    title: "Corporate websites",
    cardDescription:
      "We turn a complex company into a clear digital narrative for clients, partners and talent. The website is structured around the decisions people make before they ever speak to your team.",
    insight: "Your reputation should start working before the first call.",
  },
  ecommerce: {
    slug: "ecommerce",
    title: "E-commerce",
    cardDescription:
      "We design commerce systems that stay coherent as orders, products and markets multiply. The customer journey works in step with inventory, fulfilment and the people running the operation.",
    insight: "Revenue growth should not create operational chaos.",
  },
  "landing-pages": {
    slug: "landing-pages",
    title: "Landing pages",
    cardDescription:
      "We build the entire narrative around one commercial decision: enquire, buy or join. Every section advances the argument and removes a specific reason to hesitate.",
    insight: "A strong landing page makes the decision feel obvious.",
  },
  "web-services": {
    slug: "web-services",
    title: "Web services",
    cardDescription:
      "We turn manual operations and fragmented data into one controlled digital workflow. The result gives the team back time and creates room for entirely new revenue models.",
    insight: "The right service becomes part of the business model, not another tool.",
  },
  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX design",
    cardDescription:
      "We find where the product costs users attention, time and confidence. Then we reshape the journey until complex work feels calm, obvious and dependable.",
    insight: "The best interface disappears while the user reaches the goal.",
  },
  support: {
    slug: "support",
    title: "Support and growth",
    cardDescription:
      "We place a live product under continuous control and turn accumulated friction into a focused growth plan. Priorities come from evidence, not a queue of disconnected requests.",
    insight: "After launch, a product should gain value—not technical debt.",
  },
};

export const servicesContent: Record<Locale, Record<ServiceSlug, ServiceCardContent>> = {
  ru: ruServices,
  en: enServices,
};
