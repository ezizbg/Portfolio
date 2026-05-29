import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { useLanguage } from "@/i18n/LanguageContext";
import { LOCALES, type Locale } from "@/i18n/translations";
import "./Navigation.scss";

const SCROLL_THRESHOLD = 40;

export function Navigation() {
  const { t, locale, setLocale } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > SCROLL_THRESHOLD);
    handler();
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  const links: Array<{ href: string; label: string }> = [
    { href: "#about", label: t.nav.about },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#work", label: t.nav.work },
    { href: "#education", label: t.nav.education },
    { href: "#contacts", label: t.nav.contacts },
  ];

  const close = () => setOpen(false);

  return (
    <motion.header
      className={["nav", scrolled ? "nav--scrolled" : ""]
        .filter(Boolean)
        .join(" ")}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="nav__inner">
        <a
          href="#top"
          className="nav__logo"
          onClick={close}
          aria-label={`${t.meta.name} — home`}
        >
          <span className="nav__logo-mark">{t.meta.name[0]}</span>
          <span className="nav__logo-text">{t.meta.name.split(" ")[1]}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav__link">
              <span className="nav__link-text">{link.label}</span>
            </a>
          ))}
        </nav>

        <div className="nav__actions">
          <div className="nav__lang" role="group" aria-label="Language">
            {LOCALES.map((l: Locale) => (
              <button
                key={l}
                type="button"
                className={["nav__lang-btn", l === locale ? "nav__lang-btn--active" : ""].filter(Boolean).join(" ")}
                onClick={() => setLocale(l)}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>
          <a className="nav__cta" href="#contacts">
            <span>{t.nav.cta}</span>
            <span className="nav__cta-arrow" aria-hidden="true">
              →
            </span>
          </a>
          <button
            type="button"
            className={["nav__burger", open ? "nav__burger--open" : ""]
              .filter(Boolean)
              .join(" ")}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((prev) => !prev)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <motion.div
        className={["nav__drawer", open ? "nav__drawer--open" : ""]
          .filter(Boolean)
          .join(" ")}
        initial={false}
        animate={{ height: open ? "auto" : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav className="nav__drawer-links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="nav__drawer-link"
            >
              {link.label}
            </a>
          ))}
          <a href="#contacts" onClick={close} className="nav__drawer-cta">
            {t.nav.cta} →
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
