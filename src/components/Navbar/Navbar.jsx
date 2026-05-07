import { useEffect, useState } from "react";
import "./Navbar.css";
import Toggle from "../Toggle/Toggle";

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
              Intro
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className={activeId === "experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#education"
              className={activeId === "education" ? "active" : ""}
            >
              Education
            </a>
          </li>
          <li>
            <a href="#stack" className={activeId === "stack" ? "active" : ""}>
              Stack
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeId === "projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
        </ul>
        <div className="navbar-buttons">
          <a href="#contact" className="sign-up-btn sign-up-btn--contact">
            Contact
          </a>
          <Toggle isChecked={isDarkMode} handleChange={toggleTheme} />
        </div>
      </div>
    </nav>
  );
}
