import { useLanguage } from '@/i18n/LanguageContext';
import { MagneticLink } from '@/components/ui/MagneticLink/MagneticLink';
import { Reveal } from '@/components/ui/Reveal/Reveal';
import './Contacts.scss';

const SOCIAL_LINKS = [
  { label: 'Telegram', href: 'https://t.me/ezizbg' },
  { label: 'GitHub', href: 'https://github.com/ezizbg' },
] as const;

export function Contacts() {
  const { t } = useLanguage();
  const titleLines = t.contacts.title.split('\n');

  return (
    <section id="contacts" className="contacts" aria-labelledby="contacts-title">
      <div className="contacts__glow" aria-hidden="true" />

      <div className="contacts__inner">
        <Reveal>
          <span className="t-mono contacts__eyebrow">{t.contacts.eyebrow}</span>
        </Reveal>

        <h2 id="contacts-title" className="contacts__title">
          {titleLines.map((line, idx) => (
            <span className="contacts__title-line" key={idx}>
              <span className="contacts__title-inner">{line}</span>
            </span>
          ))}
        </h2>

        <Reveal delay={0.2} className="contacts__actions">
          <div className="contacts__socials">
            {SOCIAL_LINKS.map((link) => (
              <MagneticLink
                key={link.label}
                href={link.href}
                className="contacts__social-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
                <span className="contacts__social-arrow" aria-hidden="true">↗</span>
              </MagneticLink>
            ))}
          </div>

          <a href="mailto:ezizbg04@gmail.com" className="contacts__cta">
            <span>{t.contacts.cta}</span>
            <span className="contacts__cta-arrow" aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
