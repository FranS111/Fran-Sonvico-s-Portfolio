import "./Intro.css";
import Accordion from "../Accordion/Accordion";
import { socials } from "../../data/socials";

export default function Intro() {
  return (
    <section id="intro" className="intro section-bleed">
      <div className="intro-container">
        <div className="intro-left">
          <span className="intro-prompt">~/portfolio $ whoami</span>
          <h1 className="intro-name">
            Fran Sonvico
            <span className="intro-name__caret" aria-hidden="true">
              ▋
            </span>
          </h1>
          <h2 className="intro-title">Fullstack Developer</h2>
          <div className="intro-social-row">
            <div className="intro-available" title="Open to opportunities">
              <span className="intro-available-dot" aria-hidden="true" />
              <span className="intro-available-text">Available</span>
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
              <strong>Fullstack Developer</strong> with 2+ years of experience
              building and optimizing <strong>enterprise web applications</strong>.
              Working across the full <strong>lifecycle</strong>—from robust{" "}
              <strong>backend architecture</strong> to seamless{" "}
              <strong>user interfaces</strong>—with a long-term focus on the{" "}
              <strong>Frontend</strong> ecosystem.
            </p>
            <p>
              Beyond writing code, I combine a solid{" "}
              <strong>technical foundation</strong> with{" "}
              <strong>lateral thinking</strong> and an{" "}
              <strong>aesthetic sensibility</strong> shaped by music, art, and
              architecture—bringing both visual craft and novel solutions to complex
              problems. I care deeply about <strong>UX</strong> and{" "}
              <strong>interaction design</strong>: interfaces that are intuitive and
              appealing, yet <strong>technically efficient</strong> and optimized for{" "}
              <strong>system performance</strong>, delivering real{" "}
              <strong>end-to-end business value</strong>.
            </p>
            <p>
            Adept at managing full-stack cohesion, managing{" "}
              <strong>complex data flows</strong> and designing{" "}
              <strong>modular architectures</strong> with <strong>reusable</strong>,
              maintainable components for large, long-term projects. I have cut critical{" "}
              <strong>loading times</strong> from seconds to near-instant response,
              maintained critical platforms in production, and handled demanding{" "}
              <strong>large-scale projects</strong>.
            </p>
            <p>
              Thrive in high-collaboration <strong>Agile</strong> environments
              , with a strong commitment to promoting{" "}
              <strong>continuous learning</strong>, <strong>engineering best practices</strong>, and high-quality{" "}
              <strong>technical documentation</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
