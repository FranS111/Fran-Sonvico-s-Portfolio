import "./Projects.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="projects section-bleed">
      <SectionHeader
        index="04"
        name="Projects"
        subtitle="Selected builds and production-ready systems"
        align="center"
      />
      <div className="projects-grid-fragmented">
        {projects.map((project) => (
          <article
            key={project.title}
            className={`project-card project-card--${project.layout} ${project.collection ? "project-card--collection" : ""}`}
          >
            <p className="project-label">
              {project.collection ? "// dam · github" : "// case study"}
            </p>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>

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
