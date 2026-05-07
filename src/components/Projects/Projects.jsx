import "./Projects.css";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function Projects() {
  const projects = [
    {
      title: "ZGrid Platform",
      desc: "Core engine for multi-service orchestration and observability across production workflows.",
      tags: ["React", "Node.js", "Monitoring"],
      layout: "wide",
    },
    {
      title: "Federated Learning Lab",
      desc: "Distributed AI training pipeline focused on data privacy, model synchronization, and secure aggregation.",
      tags: ["AI", "Privacy", "Edge"],
      layout: "tall",
    },
    {
      title: "Sustainable AI Ops",
      desc: "Tracking and optimization layer to reduce model-inference cost and environmental impact.",
      tags: ["Analytics", "Optimization", "Cloud"],
      layout: "small-a",
    },
    {
      title: "Edge Compute Gateway",
      desc: "Low-latency edge runtime for processing events closer to users and connected devices.",
      tags: ["Edge", "Realtime", "Security"],
      layout: "small-b",
    },
  ];

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
            className={`project-card project-card--${project.layout}`}
          >
            <p className="project-label">// case study</p>
            <h4>{project.title}</h4>
            <p>{project.desc}</p>
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
