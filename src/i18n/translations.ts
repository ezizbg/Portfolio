export type Locale = "ru" | "en";

export const LOCALES: Locale[] = ["ru", "en"];

export interface ExperienceItem {
  company: string;
  role?: string;
  period: string;
  description: string;
}

export interface EducationItem {
  place: string;
  period: string;
  description: string;
  link?: string;
}

export interface ProjectItem {
  index: string;
  title: string;
  description: string;
  meta?: string;
  bullets: string[];
  link: string;
}

export interface Dictionary {
  meta: {
    role: string;
    name: string;
  };
  nav: {
    about: string;
    experience: string;
    skills: string;
    work: string;
    education: string;
    contacts: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    title: string[];
    subtitle: string;
    scroll: string;
    statsLabels: { years: string; projects: string };
    stats: { years: string; projects: string };
  };
  about: {
    eyebrow: string;
    title: string;
    body: string[];
    imageAlt: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    items: ExperienceItem[];
  };
  skills: {
    eyebrow: string;
    title: string;
    note: string;
    also: string;
  };
  education: {
    eyebrow: string;
    title: string;
    verifyLink: string;
    items: EducationItem[];
  };
  portfolio: {
    eyebrow: string;
    title: string;
    viewProject: string;
    items: ProjectItem[];
  };
  contacts: {
    eyebrow: string;
    title: string;
    lead: string;
    emailLabel: string;
    socialsLabel: string;
    cta: string;
  };
  footer: Record<string, never>;
}

export const translations: Record<Locale, Dictionary> = {
  ru: {
    meta: {
      role: "Frontend-разработчик",
      name: "Эзиз Бердыев",
    },
    nav: {
      about: "Обо мне",
      experience: "Опыт",
      skills: "Навыки",
      work: "Работы",
      education: "Образование",
      contacts: "Контакты",
      cta: "Связаться",
    },
    hero: {
      eyebrow: "Frontend Developer · 2026",
      title: ["Создаю", "интерфейсы"],
      subtitle:
        "Создаю современные веб-приложения, масштабируемые интерфейсы и AI-продукты с фокусом на качество исполнения и пользовательский опыт.",
      scroll: "Прокрутить",
      statsLabels: {
        years: "Лет в разработке",
        projects: "Реализованных проектов",
      },
      stats: {
        years: "2+",
        projects: "10+",
      },
    },
    about: {
      eyebrow: "01 — Обо мне",
      title: "Frontend-разработчик, который думает как product-инженер.",
      body: [
        "Frontend-разработчик с коммерческим опытом разработки веб-приложений, адаптивных интерфейсов и production-ready digital-продуктов. Специализируюсь на интеграции LLM-сервисов: OpenAI API, Anthropic API, Claude SDK — streaming-компоненты, chatbot UI, диалоговые интерфейсы. Сертифицирован Anthropic. Самостоятельно реализую задачи от макета до production, эффективно взаимодействую с backend-разработчиками и дизайнерами в команде.",
      ],
      imageAlt: "Портрет Эзиза Бердыева",
    },
    experience: {
      eyebrow: "02 — Опыт",
      title: "Опыт работы",
      items: [
        {
          company: "ООО «Континенталь»",
          role: "Frontend-разработчик",
          period: "Июнь — Сент. 2025",
          description:
            "Разрабатывал и улучшал frontend-интерфейсы для веб-приложений и digital-продуктов, включая коммерческие решения для АльфаСтрахование-ОМС. Работал над адаптивными интерфейсами, UI-логикой, REST API интеграциями, анимациями и интерактивными пользовательскими сценариями. Взаимодействовал с backend-разработчиками и product-командой для улучшения usability, scalability и пользовательского опыта.",
        },
        {
          company: "Контрактная разработка",
          role: "Frontend-разработчик",
          period: "Апр. 2024 — Май 2025",
          description:
            "Разрабатывал адаптивные веб-интерфейсы и frontend-решения для различных digital-продуктов и корпоративных клиентов. Реализовывал интерактивные UI-компоненты, анимации, пользовательские сценарии и адаптивные layouts с использованием SCSS, методологии BEM и REST API интеграций. Фокус на usability, cross-device compatibility и production-ready результат.",
        },
      ],
    },
    skills: {
      eyebrow: "03 — Стек",
      title: "Технологии, с которыми я работаю",
      note: "Инструменты ежедневного использования",
      also: "Также работаю с: REST API · Axios · React Query · React Router · Next.js · Zustand · Tailwind CSS · OpenAI API · Anthropic API · Claude SDK · CI/CD",
    },
    education: {
      eyebrow: "04 — Образование",
      title: "Образование",
      verifyLink: "Проверить →",
      items: [
        {
          place: "Building with the Claude API · Anthropic",
          period: "Май 2026",
          description:
            "Курс по разработке приложений с использованием Claude API: интеграция LLM, streaming-компоненты, диалоговые интерфейсы. Сертификат № 9sjcn3p55gmh.",
          link: "https://verify.skilljar.com/c/9sjcn3p55gmh",
        },
        {
          place: "Российский университет дружбы народов · Магистратура",
          period: "Сент. 2025 — н.в.",
          description:
            "Факультет физико-математических и естественных наук, направление «Фундаментальная информатика и информационные технологии». 1 курс.",
        },
        {
          place: "Российский университет дружбы народов · Бакалавриат",
          period: "Сент. 2021 — Июнь 2025",
          description:
            "Факультет физико-математических и естественных наук, направление «Фундаментальная информатика и информационные технологии».",
        },
        {
          place: "Курс по HTML, CSS, JavaScript",
          period: "Янв. — март 2024",
          description:
            "Создание структуры веб-страниц на HTML, оформление с использованием CSS (SASS/SCSS) и методологии БЭМ, интерактивность с помощью JavaScript.",
        },
      ],
    },
    portfolio: {
      eyebrow: "05 — Избранные работы",
      title: "Избранные проекты",
      viewProject: "Открыть проект",
      items: [
        {
          index: "01",
          title: "Определённо, Мама-Супер!",
          description:
            "Проект для АльфаСтрахование-ОМС — сервис для будущих и молодых мам.",
          bullets: [
            "Адаптивная вёрстка",
            "Интерфейсная логика",
            "Интеграция с API",
            "Анимации и пользовательские сценарии",
          ],
          link: "https://alfastrahoms.ru/mama-super",
        },
        {
          index: "02",
          title: "Random Coffee People",
          description: "Telegram-приложение для нетворкинга.",
          bullets: [
            "Интерфейс и адаптивность",
            "Взаимодействие с API",
            "Реализация пользовательских сценариев",
          ],
          link: "https://random-coffee.ru",
        },
        {
          index: "03",
          title: "Offerify — AI Career Tools",
          description:
            "SaaS-приложение с тремя AI-инструментами для карьерного развития, задеплоенное в production.",
          bullets: [
            "Генератор сопроводительных писем на базе Claude SDK",
            "ATS-анализатор резюме с поддержкой PDF upload",
            "Конструктор описаний вакансий с AI",
            "Streaming через ReadableStream, server-side изоляция API-ключа",
          ],
          link: "https://offerify-seven.vercel.app",
        },
        {
          index: "04",
          title: "React Admin Dashboard",
          description:
            "Веб-приложение с архитектурой, приближенной к production.",
          bullets: [
            "Работа с API и кэшированием данных",
            "Управление состоянием (React Query)",
            "Маршрутизация и структура приложения",
            "Обработка ошибок и loading-состояний",
          ],
          link: "https://ezizbg.github.io/React-admin-dashboard",
        },
      ],
    },
    contacts: {
      eyebrow: "06 — Контакты",
      title: "Открыт к полной занятости и фриланс-проектам. Доступен для удалённой работы.",
      lead: "Открыт к интересным проектам, фриланс-задачам и full-time возможностям. Напишите — обсудим.",
      emailLabel: "Почта",
      socialsLabel: "Социальные сети",
      cta: "Написать на почту",
    },
    footer: {},
  },

  en: {
    meta: {
      role: "Frontend Developer",
      name: "Eziz Berdiyev",
    },
    nav: {
      about: "About",
      experience: "Experience",
      skills: "Skills",
      work: "Work",
      education: "Education",
      contacts: "Contacts",
      cta: "Get in touch",
    },
    hero: {
      eyebrow: "Frontend Developer · 2026",
      title: ["Crafting", "interfaces"],
      subtitle:
        "Building modern web applications, scalable interfaces and AI-powered digital products with a focus on execution quality and user experience.",
      scroll: "Scroll",
      statsLabels: {
        years: "Years coding",
        projects: "Shipped projects",
      },
      stats: {
        years: "2+",
        projects: "10+",
      },
    },
    about: {
      eyebrow: "01 — About",
      title: "Frontend developer who thinks like a product engineer.",
      body: [
        "Frontend developer with commercial experience building web applications, responsive interfaces and production-ready digital products. Specialized in LLM integration: OpenAI API, Anthropic API, Claude SDK — streaming components, chatbot UI, conversational interfaces. Anthropic certified. Independently delivering tasks from design to production, collaborating effectively with backend developers and designers.",
      ],
      imageAlt: "Portrait of Eziz Berdiyev",
    },
    experience: {
      eyebrow: "02 — Experience",
      title: "Work experience",
      items: [
        {
          company: 'LLC "Continental"',
          role: "Frontend Developer",
          period: "June — Sept. 2025",
          description:
            "Developed and improved frontend interfaces for web applications and digital products, including commercial solutions for Alfa Insurance (OMS). Worked on responsive interfaces, UI logic, REST API integrations, animations and interactive user flows. Collaborated with backend developers and product teams to improve usability, scalability and overall UX across modern web platforms.",
        },
        {
          company: "Contract Development",
          role: "Frontend Developer",
          period: "Apr. 2024 — May 2025",
          description:
            "Built responsive web interfaces and frontend solutions for various digital products and corporate clients. Developed interactive UI components, animations, user flows and adaptive layouts using SCSS, BEM methodology and REST API integrations. Focused on usability, cross-device compatibility and production-ready delivery.",
        },
      ],
    },
    skills: {
      eyebrow: "03 — Stack",
      title: "Technologies I work with",
      note: "Tools used daily",
      also: "Also working with: REST API · Axios · React Query · React Router · Next.js · Zustand · Tailwind CSS · OpenAI API · Anthropic API · Claude SDK · CI/CD",
    },
    education: {
      eyebrow: "04 — Education",
      title: "Education",
      verifyLink: "Verify →",
      items: [
        {
          place: "Building with the Claude API · Anthropic",
          period: "May 2026",
          description:
            "Course on building applications with Claude API: LLM integration, streaming components, conversational interfaces. Certificate No. 9sjcn3p55gmh.",
          link: "https://verify.skilljar.com/c/9sjcn3p55gmh",
        },
        {
          place: "RUDN University · Master's degree",
          period: "Sept. 2025 — present",
          description:
            "Faculty of Physical, Mathematical and Natural Sciences. Fundamental Informatics and Information Technologies. 1st year.",
        },
        {
          place: "RUDN University · Bachelor's degree",
          period: "Sept. 2021 — June 2025",
          description:
            "Faculty of Physical, Mathematical and Natural Sciences. Fundamental Informatics and Information Technologies.",
        },
        {
          place: "HTML, CSS, JavaScript Course",
          period: "Jan. — Mar. 2024",
          description:
            "Structuring web pages with HTML, styling with CSS (SASS/SCSS) and BEM methodology, building interactivity with JavaScript.",
        },
      ],
    },
    portfolio: {
      eyebrow: "05 — Selected work",
      title: "Selected projects",
      viewProject: "View project",
      items: [
        {
          index: "01",
          title: "Definitely, Mama-Super!",
          description:
            "A project for Alfa Insurance (OMS) — a service for expecting and young mothers.",
          bullets: [
            "Responsive layout",
            "Interface logic",
            "API integration",
            "Animations and user flows",
          ],
          link: "https://alfastrahoms.ru/mama-super",
        },
        {
          index: "02",
          title: "Random Coffee People",
          description: "A Telegram mini-app for networking.",
          bullets: [
            "UI & responsiveness",
            "API interactions",
            "User flow implementation",
          ],
          link: "https://random-coffee.ru",
        },
        {
          index: "03",
          title: "Offerify — AI Career Tools",
          description:
            "SaaS app with three AI-powered career tools, deployed to production.",
          bullets: [
            "Cover letter generator powered by Claude SDK",
            "ATS resume analyzer with PDF upload support",
            "Job description writer with AI",
            "Streaming via ReadableStream, server-side API key isolation",
          ],
          link: "https://offerify-seven.vercel.app",
        },
        {
          index: "04",
          title: "React Admin Dashboard",
          description: "A web app with a near-production architecture.",
          bullets: [
            "API integration & data caching",
            "State management (React Query)",
            "Routing & application structure",
            "Error & loading state handling",
          ],
          link: "https://ezizbg.github.io/React-admin-dashboard",
        },
      ],
    },
    contacts: {
      eyebrow: "06 — Contacts",
      title: "Open to full-time roles and freelance projects worldwide. Available for remote work.",
      lead: "Open to interesting projects, freelance work and full-time opportunities. Drop a line — let's talk.",
      emailLabel: "Email",
      socialsLabel: "Socials",
      cta: "Send an email",
    },
    footer: {},
  },
};
