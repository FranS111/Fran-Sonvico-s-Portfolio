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
          <p className="intro-tagline">
            Modular components, scalable architecture, and user-driven solutions
            for the modern day.
          </p>
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
              I'm a developer passionate about crafting accessible,
              pixel-perfect user interfaces that blend thoughtful design with
              robust engineering. My favorite work lies at the intersection of
              design and development, creating experiences that not only look
              great but are meticulously built for performance, scalability, and
              usability.
            </p>
            <p>
              As a <strong>Fullstack Developer</strong>, I specialize in
              building end-to-end solutions that seamlessly connect beautiful
              frontend experiences with powerful backend systems. I'm proficient
              in modern JavaScript frameworks like <strong>React</strong>,
              backend technologies including <strong>Java</strong> and{" "}
              <strong>Node.js</strong>, and database management with{" "}
              <strong>SQL</strong>. My approach combines frontend excellence
              with solid backend architecture to deliver complete,
              production-ready applications.
            </p>
            <p>
              I'm constantly learning and improving my skills across the full
              development stack, from <strong>HTML5</strong> and{" "}
              <strong>CSS3</strong> for creating responsive, modern interfaces,
              to advanced JavaScript patterns and backend API development. I
              believe in writing clean, maintainable code and following best
              practices that ensure long-term project success.
            </p>
            <p>
              When I'm not coding, I'm usually exploring new technologies,
              contributing to open-source projects, or working on personal
              projects that challenge me to grow as a developer. I'm always
              excited to take on new challenges and collaborate on innovative
              solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
