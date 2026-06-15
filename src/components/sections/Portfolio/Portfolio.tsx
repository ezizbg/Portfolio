import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import type { ProjectItem } from '@/i18n/translations';
import './Portfolio.scss';

// Aesthetic visual fingerprint per project — kept inline to stay framework-free.
const PROJECT_VISUALS: Array<{ accent: string; pattern: 'rings' | 'dots' | 'stack' | 'bars' }> = [
  { accent: '#ff5a4f', pattern: 'rings' },
  { accent: '#6ad6ff', pattern: 'dots' },
  { accent: '#7B6FEE', pattern: 'stack' },
  { accent: '#10B981', pattern: 'bars' },
];

function ProjectVisual({ pattern, accent }: { pattern: string; accent: string }) {
  if (pattern === 'bars') {
    const heights = [160, 280, 120, 320, 200, 100];
    return (
      <svg viewBox="0 0 400 500" className="portfolio__visual-svg" aria-hidden="true">
        <defs>
          <linearGradient id="bars-g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.28" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#bars-g)" />
        {heights.map((h, i) => (
          <rect
            key={i}
            x={42 + i * 54}
            y={400 - h}
            width={34}
            height={h}
            rx={8}
            fill={accent}
            opacity={0.12 + i * 0.05}
          />
        ))}
      </svg>
    );
  }
  if (pattern === 'rings') {
    return (
      <svg viewBox="0 0 400 500" className="portfolio__visual-svg" aria-hidden="true">
        <defs>
          <radialGradient id="rings-g" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.35" />
            <stop offset="100%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="400" height="500" fill="url(#rings-g)" />
        {[80, 120, 160, 200, 240].map((r) => (
          <circle key={r} cx="200" cy="220" r={r} fill="none" stroke={accent} strokeOpacity="0.16" />
        ))}
        <circle cx="200" cy="220" r="32" fill={accent} />
      </svg>
    );
  }
  if (pattern === 'dots') {
    return (
      <svg viewBox="0 0 400 500" className="portfolio__visual-svg" aria-hidden="true">
        <defs>
          <linearGradient id="dots-g" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.3" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#dots-g)" />
        {Array.from({ length: 64 }).map((_, idx) => {
          const col = idx % 8;
          const row = Math.floor(idx / 8);
          const cx = 50 + col * 40;
          const cy = 110 + row * 36;
          return <circle key={idx} cx={cx} cy={cy} r={3 + (col % 3)} fill={accent} opacity={0.2 + (row / 24)} />;
        })}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 400 500" className="portfolio__visual-svg" aria-hidden="true">
      <defs>
        <linearGradient id="stack-g" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.32" />
          <stop offset="100%" stopColor="#000" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="400" height="500" fill="url(#stack-g)" />
      {Array.from({ length: 6 }).map((_, idx) => (
        <rect
          key={idx}
          x={60 + idx * 12}
          y={140 + idx * 20}
          width={280 - idx * 24}
          height={50}
          rx={10}
          fill="none"
          stroke={accent}
          strokeOpacity={0.6 - idx * 0.08}
        />
      ))}
    </svg>
  );
}

function ProjectCard({ project, idx, viewProject }: { project: ProjectItem; idx: number; viewProject: string }) {
  const cardRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });
  const visualY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const visual = PROJECT_VISUALS[idx % PROJECT_VISUALS.length];

  return (
    <article className="portfolio__card" ref={cardRef}>
      <div className="portfolio__visual" style={{ background: `radial-gradient(120% 80% at 30% 0%, ${visual.accent}26, transparent 60%)` }}>
        <motion.div className="portfolio__visual-inner" style={{ y: visualY }}>
          <ProjectVisual pattern={visual.pattern} accent={visual.accent} />
        </motion.div>
      </div>

      <div className="portfolio__details">
        <div className="portfolio__details-top">
          <span className="portfolio__index t-mono">{project.index}</span>
          <span className="portfolio__chip t-mono">2024 — 2025</span>
        </div>

        <h3 className="portfolio__name t-h2">{project.title}</h3>
        {project.meta && (
          <p className="portfolio__meta t-body"><em>{project.meta}</em></p>
        )}
        {project.description && (
          <p className="portfolio__desc t-body">{project.description}</p>
        )}

        <ul className="portfolio__bullets">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="portfolio__bullet">
              <span className="portfolio__bullet-dot" aria-hidden="true" />
              <span className="portfolio__bullet-text t-body">{bullet}</span>
            </li>
          ))}
        </ul>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio__link"
        >
          <span>{viewProject}</span>
          <span className="portfolio__link-arrow" aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="work" className="portfolio" aria-label={t.portfolio.title}>
      <div className="portfolio__inner">
        <Reveal>
          <span className="t-mono portfolio__eyebrow">{t.portfolio.eyebrow}</span>
        </Reveal>

        <div className="portfolio__list">
          {t.portfolio.items.map((project, idx) => (
            <Reveal key={project.title} delay={0.04} y={32} amount={0.15}>
              <ProjectCard project={project} idx={idx} viewProject={t.portfolio.viewProject} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
