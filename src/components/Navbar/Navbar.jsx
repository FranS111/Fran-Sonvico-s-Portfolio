import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";
import useI18n from "../../hooks/useI18n";

const SECTION_IDS = [
  "intro",
  "experience",
  "education",
  "stack",
  "projects",
  "contact",
];

const NAV_LINKS = [
  { id: "intro", labelKey: "navbar.intro" },
  { id: "experience", labelKey: "navbar.experience" },
  { id: "education", labelKey: "navbar.education" },
  { id: "stack", labelKey: "navbar.stack" },
  { id: "projects", labelKey: "navbar.projects" },
];

function getNavOffset() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--nav-offset")
    .trim();
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) ? parsed : 160;
}

function getScrollMarginTop() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--scroll-margin-top")
    .trim();
  const parsed = parseInt(raw, 10);
  return Number.isFinite(parsed) ? parsed : 120;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const offset = getScrollMarginTop();
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  window.history.replaceState(null, "", `#${id}`);
}

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [activeId, setActiveId] = useState("intro");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const langRef = useRef(null);
  const { language, setLanguage, t } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      const navOffset = getNavOffset();
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= navOffset) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const onPointerDown = (event) => {
      if (!langRef.current?.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSectionClick = (event, id, beforeScroll) => {
    event.preventDefault();
    beforeScroll?.();
    requestAnimationFrame(() => {
      scrollToSection(id);
    });
  };

  const renderNavLinks = (beforeScroll) =>
    NAV_LINKS.map(({ id, labelKey }) => (
      <li key={id}>
        <a
          href={`#${id}`}
          className={activeId === id ? "active" : ""}
          onClick={(event) => handleSectionClick(event, id, beforeScroll)}
        >
          {t(labelKey)}
        </a>
      </li>
    ));

  return (
    <>
      <nav className="navbar-container" aria-label={t("navbar.mainNav")}>
        <div className="navbar-content">
          <div className="navbar-logo">
            <span className="navbar-logo__text">_franSonvico</span>
            <span className="navbar-logo__caret" aria-hidden="true">
              ▋
            </span>
          </div>
          <ul className="navbar-links navbar-links--desktop">
            {renderNavLinks()}
          </ul>
          <div className="navbar-actions">
            <div className="navbar-buttons">
              <a
                href="#contact"
                className={`sign-up-btn sign-up-btn--contact ${activeId === "contact" ? "active" : ""}`}
                onClick={(event) => handleSectionClick(event, "contact", closeMenu)}
              >
                {t("navbar.contact")}
              </a>
              <div className="lang-dropdown" ref={langRef}>
                <button
                  type="button"
                  className={`lang-btn ${isLangOpen ? "open" : ""}`}
                  aria-expanded={isLangOpen}
                  aria-haspopup="listbox"
                  aria-label={t("navbar.languageSelector")}
                  onClick={() => setIsLangOpen((prev) => !prev)}
                >
                  {language}
                </button>
                <ul
                  className={`lang-menu ${isLangOpen ? "open" : ""}`}
                  role="listbox"
                  aria-label={t("navbar.languageSelector")}
                >
                  {["EN", "ES"].map((lang) => (
                    <li key={lang}>
                      <button
                        type="button"
                        className={`lang-option ${language === lang ? "active" : ""}`}
                        role="option"
                        aria-selected={language === lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLangOpen(false);
                        }}
                      >
                        {lang}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <Toggle isChecked={isDarkMode} handleChange={toggleTheme} />
            </div>
            <button
              type="button"
              className={`navbar-menu-btn ${isMenuOpen ? "open" : ""}`}
              aria-expanded={isMenuOpen}
              aria-controls="navbar-mobile-menu"
              aria-label={isMenuOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span className="navbar-menu-btn__bar" aria-hidden="true" />
              <span className="navbar-menu-btn__bar" aria-hidden="true" />
              <span className="navbar-menu-btn__bar" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`navbar-mobile-backdrop ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
        onClick={closeMenu}
      />

      <div
        id="navbar-mobile-menu"
        className={`navbar-mobile-menu ${isMenuOpen ? "open" : ""}`}
        aria-hidden={!isMenuOpen}
      >
        <ul className="navbar-links navbar-links--mobile">
          {renderNavLinks(closeMenu)}
          <li className="navbar-links__contact-item">
            <a
              href="#contact"
              className={`navbar-mobile-contact ${activeId === "contact" ? "active" : ""}`}
              onClick={(event) => handleSectionClick(event, "contact", closeMenu)}
            >
              {t("navbar.contact")}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
