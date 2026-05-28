import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import './Experience.scss';

export function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="experience" aria-label={t.experience.title}>
      <div className="experience__inner">
        <Reveal>
          <span className="t-mono experience__eyebrow">{t.experience.eyebrow}</span>
        </Reveal>

        <ol className="experience__list">
          {t.experience.items.map((item, idx) => (
            <li className="experience__item" key={item.company}>
              <Reveal delay={0.05 + idx * 0.05} y={32}>
                <article className="experience__card">
                  <div className="experience__card-meta">
                    <span className="experience__card-index">0{idx + 1}</span>
                    <span className="experience__card-period t-mono">{item.period}</span>
                  </div>

                  <div className="experience__card-body">
                    <h3 className="experience__card-company t-h2">{item.company}</h3>
                    {item.role && (
                      <p className="experience__card-role t-mono">{item.role}</p>
                    )}
                    <p className="experience__card-description t-body">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
