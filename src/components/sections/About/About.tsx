import { motion } from 'framer-motion';

import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import { AnimatedText } from '@/components/ui/AnimatedText/AnimatedText';
import portrait from '@/assets/me.jpg';
import './About.scss';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__inner">
        <Reveal className="about__eyebrow">
          <span className="t-mono">{t.about.eyebrow}</span>
        </Reveal>

        <div className="about__grid">
          <div className="about__media">
            <motion.div
              className="about__media-frame"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <img
                src={portrait}
                alt={t.about.imageAlt}
                className="about__img"
                loading="lazy"
                decoding="async"
              />
              <div className="about__media-overlay" aria-hidden="true" />
            </motion.div>

            <div className="about__media-meta">
              <span className="t-mono">{t.meta.name}</span>
              <span className="t-mono about__media-meta-role">{t.meta.role}</span>
            </div>
          </div>

          <div className="about__content">
            <h2 id="about-title" className="about__title t-h2">
              <AnimatedText text={t.about.title} stagger={0.04} />
            </h2>

            <div className="about__body">
              {t.about.body.map((p, idx) => (
                <Reveal key={idx} delay={0.05 + idx * 0.08} y={20}>
                  <p className="about__paragraph t-body">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
