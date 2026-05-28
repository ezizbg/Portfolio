import { motion } from 'framer-motion';

import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import { Marquee } from '@/components/ui/Marquee/Marquee';
import { SKILLS } from './skillIcons';
import './Skills.scss';

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="skills" aria-label={t.skills.title}>
      <div className="skills__inner">
        <Reveal>
          <span className="t-mono skills__eyebrow">{t.skills.eyebrow}</span>
        </Reveal>

        <div className="skills__grid">
          {SKILLS.map((skill, idx) => (
            <motion.div
              key={skill.name}
              className="skills__card"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.65, delay: 0.05 * idx, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7, scale: 1.04, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }}
            >
              <span className="skills__card-icon" aria-hidden="true">{skill.icon}</span>
              <span className="skills__card-name">{skill.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="skills__marquee">
          <Marquee speed={36}>
            {SKILLS.concat(SKILLS).map((skill, idx) => (
              <span className="skills__tag" key={`${skill.name}-${idx}`}>
                {skill.name}
                <span className="skills__tag-dot" aria-hidden="true" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
