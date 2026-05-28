import { motion } from 'framer-motion';

import { useLanguage } from '@/i18n/LanguageContext';
import './LanguageSwitcher.scss';

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="lang-switch" role="group" aria-label="Language">
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
        className={`lang-switch__pill lang-switch__pill--${locale}`}
        aria-hidden="true"
      />
      {(['ru', 'en'] as const).map((code) => (
        <button
          key={code}
          type="button"
          className={[
            'lang-switch__option',
            locale === code ? 'lang-switch__option--active' : '',
          ].filter(Boolean).join(' ')}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
