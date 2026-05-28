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
}

export interface ProjectItem {
  index: string;
  title: string;
  description: string;
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
  };
  education: {
    eyebrow: string;
    title: string;
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
      contacts: "Контакты",
      cta: "Связаться",
    },
    hero: {
      eyebrow: "Frontend Developer · 2026",
      title: ["Создаю", "интерфейсы"],
      subtitle:
        "Разрабатываю web-приложения, масштабируемые интерфейсы и digital-продукты с фокусом на качество исполнения и пользовательский опыт.",
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
        "Имею коммерческий опыт разработки адаптивных frontend-решений, интерактивных интерфейсов, интеграции API и работы над современными веб-платформами.",
        "Участвовал в разработке коммерческих продуктов, включая проекты для АльфаСтрахование-ОМС, где занимался frontend-архитектурой, реализацией интерфейсов, бизнес-логикой и улучшением пользовательского опыта.",
        "Работаю с современными frontend-подходами, уделяя внимание производительности, масштабируемости, качеству интерфейсов и AI-assisted workflow в процессе разработки.",
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
          period: "Июнь 2025 — Сентябрь 2025",
          description:
            "Разрабатывал и улучшал frontend-интерфейсы для web applications и digital products, включая коммерческие решения для АльфаСтрахование-ОМС. Работал над адаптивными интерфейсами, UI logic, API integrations, animations и interactive user flows. Взаимодействовал с backend-разработчиками и product-командой, участвуя в улучшении usability, scalability и общего пользовательского опыта современных web-платформ.",
        },
        {
          company: "Фриланс",
          role: "Frontend-разработчик",
          period: "Апрель 2024 — Май 2025",
          description:
            "Разрабатывал адаптивные веб-интерфейсы и frontend-решения для различных проектов и digital-продуктов. Реализовывал интерактивные UI-компоненты, анимации, пользовательские сценарии и адаптивные layouts с фокусом на usability и cross-device compatibility. Работал с современными frontend workflows, API integrations и улучшением пользовательского опыта.",
        },
      ],
    },
    skills: {
      eyebrow: "03 — Стек",
      title: "Технологии, с которыми я работаю",
      note: "Инструменты ежедневного использования",
    },
    education: {
      eyebrow: "04 — Образование",
      title: "Образование",
      items: [
        {
          place: "Российский университет дружбы народов · Магистратура",
          period: "Сентябрь 2025 — настоящее время",
          description:
            "Факультет физико-математических и естественных наук, направление «Фундаментальная информатика и информационные технологии». 1 курс.",
        },
        {
          place: "Российский университет дружбы народов · Бакалавриат",
          period: "Сентябрь 2021 — Июнь 2025",
          description:
            "Факультет физико-математических и естественных наук, направление «Фундаментальная информатика и информационные технологии».",
        },
        {
          place: "Курс по HTML, CSS, JavaScript",
          period: "Январь 2024 — Март 2024",
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
      title: "Открыт к современным проектам и профессиональным возможностям.",
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
      contacts: "Contacts",
      cta: "Get in touch",
    },
    hero: {
      eyebrow: "Frontend Developer · 2026",
      title: ["Crafting", "interfaces"],
      subtitle:
        "Building modern web applications, scalable interfaces and digital products with a focus on execution quality and user experience.",
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
        "Experienced in developing responsive frontend solutions, interactive UI systems, API integrations and adaptive interfaces for modern web platforms.",
        "Contributed to commercial products, including applications for Alfa Insurance (OMS) — working on frontend architecture, UI implementation, business logic and user experience optimization.",
        "Skilled in modern frontend workflows, performance-focused implementation and building clean, scalable interfaces using modern technologies and AI-assisted development practices.",
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
          period: "June 2025 — September 2025",
          description:
            "Developed and improved frontend interfaces for web applications and digital products, including commercial solutions for Alfa Insurance (OMS). Worked on responsive interfaces, UI logic, API integrations, animations and interactive user flows. Collaborated with backend developers and product teams to improve usability, scalability and overall UX across modern web platforms.",
        },
        {
          company: "Freelance",
          role: "Frontend Developer",
          period: "April 2024 — May 2025",
          description:
            "Developed responsive web interfaces and frontend solutions for various projects and digital products. Built interactive UI components, animations, user flows and adaptive layouts focused on usability and cross-device compatibility. Worked with modern frontend workflows, API integrations and UX improvements.",
        },
      ],
    },
    skills: {
      eyebrow: "03 — Stack",
      title: "Technologies I work with",
      note: "Tools used daily",
    },
    education: {
      eyebrow: "04 — Education",
      title: "Education",
      items: [
        {
          place: "RUDN University · Master's degree",
          period: "September 2025 — present",
          description:
            "Faculty of Physical, Mathematical and Natural Sciences. Fundamental Informatics and Information Technologies. 1st year.",
        },
        {
          place: "RUDN University · Bachelor's degree",
          period: "September 2021 — June 2025",
          description:
            "Faculty of Physical, Mathematical and Natural Sciences. Fundamental Informatics and Information Technologies.",
        },
        {
          place: "HTML, CSS, JavaScript Course",
          period: "January 2024 — March 2024",
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
      title: "Open to modern projects and professional opportunities.",
      lead: "Open to interesting projects, freelance work and full-time opportunities. Drop a line — let's talk.",
      emailLabel: "Email",
      socialsLabel: "Socials",
      cta: "Send an email",
    },
    footer: {},
  },
};
