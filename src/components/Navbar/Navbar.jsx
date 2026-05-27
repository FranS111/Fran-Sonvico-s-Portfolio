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
const NAV_OFFSET = 160;

export default function Navbar({ isDarkMode, toggleTheme }) {
  const [activeId, setActiveId] = useState("intro");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);
  const { language, setLanguage, t } = useI18n();

  useEffect(() => {
    const onScroll = () => {
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= NAV_OFFSET) {
          current = id;
        }
      }
      setActiveId(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
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

  return (
    <nav className="navbar-container">
      <div className="navbar-content">
        <div className="navbar-logo">
          <span className="navbar-logo__text">_franSonvico</span>
          <span className="navbar-logo__caret" aria-hidden="true">
            ▋
          </span>
        </div>
        <ul className="navbar-links">
          <li>
            <a
              href="#intro"
              className={activeId === "intro" ? "active" : ""}
            >
              {t("navbar.intro")}
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeId === "experience" ? "active" : ""}
            >
              {t("navbar.experience")}
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeId === "education" ? "active" : ""}
            >
              {t("navbar.education")}
            </a>
          </li>
          <li>
            <a href="#stack" className={activeId === "stack" ? "active" : ""}>
              {t("navbar.stack")}
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeId === "projects" ? "active" : ""}
            >
              {t("navbar.projects")}
            </a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <a
            href="#contact"
            className={`sign-up-btn sign-up-btn--contact ${activeId === "contact" ? "active" : ""}`}
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
            {isLangOpen && (
              <ul className="lang-menu" role="listbox" aria-label={t("navbar.languageSelector")}>
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
            )}
          </div>
          <Toggle isChecked={isDarkMode} handleChange={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}
