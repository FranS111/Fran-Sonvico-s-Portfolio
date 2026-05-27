import "./Projects.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { getProjectsContent } from "../../data/projects";
import useI18n from "../../hooks/useI18n";

export default function Projects() {
  const { language, t } = useI18n();
  const projects = getProjectsContent(language);

  return (
    <section id="projects" className="projects section-bleed">
      <SectionHeader
        index="04"
        name={t("projects.title")}
        subtitle={t("projects.subtitle")}
        align="center"
      />
      <div className="projects-grid-fragmented">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`project-card project-card--${project.layout} ${project.compact ? "project-card--compact" : ""} ${!project.compact && (project.collection || project.highlights) ? "project-card--collection" : ""}`}
          >
            <p className="project-label">
              {project.label ??
                (project.collection ? t("projects.damGithub") : t("projects.caseStudy"))}
            </p>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>

            {project.highlights ? (
              <ul className="project-collection-list project-highlights-list">
                {project.highlights.map((item) => (
                  <li key={item.title}>
                    <div className="project-collection-link project-highlight-head">
                      <span className="project-collection-name">{item.title}</span>
                      <span className="project-collection-lang">{item.badge}</span>
                    </div>
                    <p className="project-collection-desc">{item.desc}</p>
                  </li>
                ))}
              </ul>
            ) : null}

            {project.collection ? (
              <ul className="project-collection-list">
                {project.collection.map((repo) => (
                  <li key={repo.name}>
                    <a
                      href={repo.href}
                      className="project-collection-link"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <span className="project-collection-name">{repo.name}</span>
                      <span className="project-collection-lang">{repo.lang}</span>
                    </a>
                    <p className="project-collection-desc">{repo.desc}</p>
                  </li>
                ))}
              </ul>
            ) : null}

            {project.liveHref || project.githubHref ? (
              <div className="project-links">
                {project.liveHref ? (
                  <a
                    href={project.liveHref}
                    className="project-github-cta"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {t("projects.liveSite")}
                  </a>
                ) : null}
                {project.githubHref ? (
                  <a
                    href={project.githubHref}
                    className="project-github-cta"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {t("projects.github")}
                  </a>
                ) : null}
              </div>
            ) : null}

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={`${project.title}-${tag}`} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
