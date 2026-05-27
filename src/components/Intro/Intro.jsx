import "./Intro.css";
import Accordion from "../Accordion/Accordion";
import { getSocials } from "../../data/socials";
import useI18n from "../../hooks/useI18n";

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function renderWithEmphasis(text, emphasisTerms = []) {
  if (!text || !emphasisTerms.length) return text;

  const normalizedTerms = [...new Set(emphasisTerms)]
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  if (!normalizedTerms.length) return text;

  const regex = new RegExp(`(${normalizedTerms.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(regex);
  let key = 0;

  return parts.map((part) => {
    if (!part) return null;
    const isEmphasis = normalizedTerms.some(
      (term) => term.toLowerCase() === part.toLowerCase()
    );
    if (!isEmphasis) return part;
    key += 1;
    return <strong key={`intro-emphasis-${key}`}>{part}</strong>;
  });
}

export default function Intro() {
  const { language, t, dictionary } = useI18n();
  const socials = getSocials(language);
  const emphasisTerms = dictionary?.intro?.emphasis ?? [];

  return (
    <section id="intro" className="intro section-bleed">
      <div className="intro-container">
        <div className="intro-left">
          <span className="intro-prompt">{t("intro.prompt")}</span>
          <h1 className="intro-name">
            Fran Sonvico
            <span className="intro-name__caret" aria-hidden="true">
              ▋
            </span>
          </h1>
          <h2 className="intro-title">{t("intro.title")}</h2>
          <div className="intro-social-row">
            <div className="intro-available" title={t("intro.availableTitle")}>
              <span className="intro-available-dot" aria-hidden="true" />
              <span className="intro-available-text">{t("intro.available")}</span>
            </div>
            <ul className="intro-socials">
              {socials.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="intro-social-link"
                    {...(href.startsWith("mailto:")
                      ? {}
                      : { target: "_blank", rel: "noreferrer noopener" })}
                  >
                    {icon}
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="intro-accordion">
            <Accordion />
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-content">
            <p>
              {renderWithEmphasis(t("intro.p1"), emphasisTerms)}
            </p>
            <p>
              {renderWithEmphasis(t("intro.p2"), emphasisTerms)}
            </p>
            <p>
              {renderWithEmphasis(t("intro.p3"), emphasisTerms)}
            </p>
            <p>
              {renderWithEmphasis(t("intro.p4"), emphasisTerms)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
