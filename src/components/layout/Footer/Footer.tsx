import { useLanguage } from '@/i18n/LanguageContext';
import './Footer.scss';

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__name">{t.meta.name}</span>
        <span className="footer__year t-mono">2026</span>
      </div>
    </footer>
  );
}
