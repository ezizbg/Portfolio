import { motion } from 'framer-motion';

import { useLanguage } from '@/i18n/LanguageContext';
import './Hero.scss';

const lineVariants = {
  hidden: { y: '105%' },
  visible: (i: number) => ({
    y: '0%',
    transition: { duration: 1.0, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  const { t } = useLanguage();
  const titleLines = t.hero.title;

  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <motion.span
          className="hero__role t-mono"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.meta.role}
        </motion.span>

        <h1 id="hero-title" className="hero__title">
          {titleLines.map((line, idx) => (
            <span className="hero__line" key={`${line}-${idx}`}>
              <motion.span
                className="hero__line-inner"
                custom={idx}
                initial="hidden"
                animate="visible"
                variants={lineVariants}
              >
                {idx === 1 ? <em className="hero__line-em">{line}</em> : line}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="hero__subtitle t-lead"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          {t.hero.subtitle}
        </motion.p>

        <div className="hero__bottom">
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="hero__stat">
              <span className="hero__stat-value">{t.hero.stats.years}</span>
              <span className="hero__stat-label">{t.hero.statsLabels.years}</span>
            </div>
            <div className="hero__stat">
              <span className="hero__stat-value">{t.hero.stats.projects}</span>
              <span className="hero__stat-label">{t.hero.statsLabels.projects}</span>
            </div>
          </motion.div>

          <motion.a
            href="#about"
            className="hero__scroll"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.15 }}
            aria-label={t.hero.scroll}
          >
            <span className="hero__scroll-text">{t.hero.scroll}</span>
            <span className="hero__scroll-line" aria-hidden="true" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
