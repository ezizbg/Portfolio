import { createContext, useContext, useState, type ReactNode } from 'react';

import { translations, type Dictionary, type Locale } from './translations';

interface LanguageContextValue {
  t: Dictionary;
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getSavedLocale(): Locale {
  try {
    const saved = localStorage.getItem('locale');
    if (saved === 'en' || saved === 'ru') return saved;
  } catch {}
  return 'ru';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getSavedLocale);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    try { localStorage.setItem('locale', next); } catch {}
  };

  return (
    <LanguageContext.Provider value={{ t: translations[locale], locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside <LanguageProvider>');
  return ctx;
}
