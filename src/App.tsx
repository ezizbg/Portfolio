import { LanguageProvider } from '@/i18n/LanguageContext';
import { SmoothScroll } from '@/components/layout/SmoothScroll/SmoothScroll';
import { Cursor } from '@/components/layout/Cursor/Cursor';
import { Navigation } from '@/components/layout/Navigation/Navigation';
import { Footer } from '@/components/layout/Footer/Footer';

import { Hero } from '@/components/sections/Hero/Hero';
import { About } from '@/components/sections/About/About';
import { Experience } from '@/components/sections/Experience/Experience';
import { Skills } from '@/components/sections/Skills/Skills';
import { Education } from '@/components/sections/Education/Education';
import { Portfolio } from '@/components/sections/Portfolio/Portfolio';
import { Contacts } from '@/components/sections/Contacts/Contacts';

import './App.scss';

export function App() {
  return (
    <LanguageProvider>
      <SmoothScroll>
        <Cursor />
        <Navigation />
        <main id="main" tabIndex={-1}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Education />
          <Portfolio />
          <Contacts />
        </main>
        <Footer />
      </SmoothScroll>
    </LanguageProvider>
  );
}
