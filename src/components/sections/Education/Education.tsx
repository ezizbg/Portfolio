import { useLanguage } from '@/i18n/LanguageContext';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import './Education.scss';

export function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="education" aria-label={t.education.title}>
      <div className="education__inner">
        <Reveal>
          <span className="t-mono education__eyebrow">{t.education.eyebrow}</span>
        </Reveal>

        <ul className="education__list">
          {t.education.items.map((item, idx) => (
            <li className="education__item" key={item.place}>
              <Reveal delay={0.04 + idx * 0.05} y={24}>
                <article className="education__card">
                  <span className="education__card-index t-mono">0{idx + 1}</span>
                  <div className="education__card-body">
                    <p className="education__card-period t-mono">{item.period}</p>
                    <h3 className="education__card-place t-h3">{item.place}</h3>
                    <p className="education__card-description t-body">{item.description}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
