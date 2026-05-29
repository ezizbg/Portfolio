# Portfolio — Eziz Berdiyev

> 🚀 Modern, responsive portfolio website showcasing frontend development expertise, projects, and professional experience.

## 📋 Overview

A full-stack portfolio website built with modern web technologies, featuring:
- **Bilingual support** (Russian/English) with seamless language switching
- **Responsive design** optimized for all devices
- **Smooth animations & interactions** for enhanced UX
- **Production-ready architecture** with TypeScript and component-based design
- **Optimized performance** with lazy loading and efficient bundling

The portfolio serves as a professional showcase for commercial projects, technical expertise in React, API integrations, and modern frontend workflows.

---

## ✨ Key Features

- 🌐 **Bilingual Interface** — Russian and English versions with persistent language selection
- 📱 **Fully Responsive** — Mobile-first design, works seamlessly across all screen sizes
- ✨ **Smooth Animations** — Framer Motion-powered transitions and interactions
- 🎨 **Modern UI** — Clean, professional design with SCSS styling
- ⚡ **Performance Optimized** — Fast loading times, optimized assets, efficient rendering
- 🎯 **SEO Friendly** — Semantic HTML, meta tags, proper structure
- 💼 **Professional Content** — Work experience, education, projects, and contact information

---

## 🛠 Tech Stack

**Frontend Framework:**
- React 18.3 — UI library
- TypeScript 5.7 — Type-safe JavaScript
- Vite 6.0 — Fast build tool & dev server

**Styling & Animation:**
- SCSS (Sass) — Advanced styling with variables, mixins, nesting
- Framer Motion 11.15 — Declarative animations and interactions
- CSS Grid / Flexbox — Responsive layout

**Utilities & Libraries:**
- Lenis 1.1 — Smooth scrolling experience
- React Context API — Language state management
- Vite plugins — React Fast Refresh, TypeScript support

**DevOps & Deployment:**
- GitHub Pages — Static hosting
- gh-pages — Automated deployment
- GitHub Actions ready

**Development Tools:**
- Node.js package manager
- ESM module system
- TypeScript compiler

---

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── layout/           # Layout components
│   │   │   ├── Footer/
│   │   │   ├── Navigation/
│   │   │   ├── SmoothScroll/
│   │   │   └── Cursor/
│   │   ├── sections/         # Page sections
│   │   │   ├── About/
│   │   │   ├── Experience/
│   │   │   ├── Education/
│   │   │   ├── Contacts/
│   │   │   └── Portfolio/
│   │   └── ui/              # Reusable UI components
│   │       ├── AnimatedText/
│   │       ├── MagneticLink/
│   │       ├── Marquee/
│   │       └── Reveal/
│   ├── hooks/               # Custom React hooks
│   │   ├── useLenis.ts
│   │   └── usePointerFine.ts
│   ├── i18n/                # Internationalization
│   │   ├── translations.ts  # Content in RU/EN
│   │   └── LanguageContext.tsx
│   ├── styles/              # Global SCSS
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/ezizbg/Portfolio.git
cd Portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start dev server (http://localhost:5173)
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Deployment

```bash
# Deploy to GitHub Pages
npm run deploy
```

---

## 📊 Portfolio Sections

### 01 — About
Professional summary highlighting:
- Commercial experience with responsive interface design
- Corporate applications, landing pages, admin panels, interactive components
- Direct LLM integration (OpenAI API, Anthropic API, Claude SDK)
- Streaming components and conversational interfaces
- Team collaboration and cross-functional work

### 02 — Experience
Work history including:
- **LLC Continental** (June — Sept. 2025) — Frontend Developer
- **Freelance** (Apr. 2024 — May 2025) — Frontend Developer

### 03 — Skills
Technical stack organized by categories, with daily-use tools highlighted.

### 04 — Education
Professional development:
- Building with the Claude API · Anthropic (May 2026)
- RUDN University — Master's degree (Sept. 2025 — present)
- RUDN University — Bachelor's degree (Sept. 2021 — June 2025)
- HTML, CSS, JavaScript Course (Jan. — Mar. 2024)

### 05 — Selected Projects
Showcase of 3 key projects:
1. **Определённо, Мама-Супер!** — Service for expecting mothers (Alfa Insurance)
2. **Random Coffee People** — Telegram mini-app for networking
3. **React Admin Dashboard** — Production-grade web application

### 06 — Contacts
Direct contact information and social links.

---

## 🌟 Key Highlights

✅ **Commercial Experience** — Real-world projects for Alfa Insurance (OMS)  
✅ **Modern Stack** — React + TypeScript + Vite for optimal performance  
✅ **AI Integration** — Direct experience with LLM APIs and streaming interfaces  
✅ **Responsive Design** — Mobile-first, tested across devices  
✅ **Production Ready** — Clean code, TypeScript, proper architecture  
✅ **Bilingual** — Seamless RU/EN language switching  
✅ **Performance** — Optimized bundle, lazy loading, smooth animations  

---

## 📈 Performance

- **Bundle Size:** ~300KB (gzip: ~100KB) — Optimized with Vite
- **First Contentful Paint:** < 1s
- **Lighthouse Score:** 90+
- **Mobile Optimized:** Responsive design, touch-friendly interactions

---

## 🔗 Live Demo

🌐 **Website:** [https://ezizbg.github.io/Portfolio/](https://ezizbg.github.io/Portfolio/)

Available in:
- 🇷🇺 Russian
- 🇬🇧 English

---

## 📝 Content & Customization

All text content is centralized in `src/i18n/translations.ts` for easy maintenance:
- Add/edit text content
- Update work experience, education, projects
- Modify contact information
- Add new sections

Changes automatically reflect in both language versions.

---

## 🤝 Contact & Collaboration

I'm open to:
- ✅ Full-time opportunities
- ✅ Freelance projects
- ✅ Interesting product challenges
- ✅ Collaboration on modern tech stack projects

**Email:** [ezizbg04@gmail.com](mailto:ezizbg04@gmail.com)  
**GitHub:** [@ezizbg](https://github.com/ezizbg)

---

## 📄 License

This project is personal portfolio work. Feel free to explore the code and architecture.

---

## 🛡️ Best Practices Implemented

✨ **Code Quality**
- TypeScript for type safety
- Component-based architecture
- Custom React hooks for reusability
- Proper separation of concerns

🎨 **Performance**
- Code splitting & lazy loading
- Optimized images & assets
- Efficient CSS with SCSS
- Production build optimization with Vite

📱 **UX/UI**
- Responsive design (mobile-first)
- Accessibility considerations
- Smooth interactions & animations
- Fast load times

🔧 **Developer Experience**
- Hot Module Replacement (HMR)
- Easy local development setup
- Clear folder structure
- Centralized content management

---

**Created & Maintained by [Eziz Berdiyev](https://github.com/ezizbg)**  
Last updated: May 2026
