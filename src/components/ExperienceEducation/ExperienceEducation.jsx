import "./ExperienceEducation.css";
import SectionHeader from "../SectionHeader/SectionHeader";

export default function ExperienceEducation() {
  const experienceItems = [
    {
      period: "JAN 2025 - PRESENT",
      role: "Full-Stack Engineer",
      company: "Ecodreum",
      description:
        "Architected and shipped production-ready cross-platform applications, connecting scalable frontend experiences with robust backend services.",
      tags: ["React Native", "Expo", "Node.js", "Express", "TypeScript"],
    },
    {
      period: "SEP 2020 - PRESENT",
      role: "Software Engineer",
      company: "Freelance",
      description:
        "Engineered and deployed full-stack web and mobile solutions for multiple clients, translating business requirements into clean, maintainable products.",
      tags: ["TypeScript", "React", "Next.js", "React Native", "Node.js"],
    },
    {
      period: "MAY 2025 - AUG 2025",
      role: "IT Specialist",
      company: "Public Sector",
      description:
        "Supported infrastructure, software, and network operations, focusing on reliability, incident response, and continuous service improvement.",
      tags: ["IT Support", "Networking", "Security", "Hardware"],
    },
  ];
  const educationItems = [
    {
      period: "2018 - 2022",
      role: "B.Sc. in Computer Science",
      company: "University of Tech",
      description:
        "Strong foundation in software engineering, algorithms, and database systems with a focus on maintainable architecture.",
      tags: ["Software Engineering", "Data Structures", "Databases"],
    },
    {
      period: "2023",
      role: "Frontend Bootcamp",
      company: "Code Academy",
      description:
        "Intensive hands-on program focused on React, component design, and responsive UI development for production-ready interfaces.",
      tags: ["React", "UI Architecture", "Responsive Design"],
    },
  ];

  const panels = [
    {
      id: "experience",
      index: "01",
      name: "Experience",
      subtitle: "Professional path and recent roles",
      items: experienceItems,
    },
    {
      id: "education",
      index: "02",
      name: "Education",
      subtitle: "Academic background and training",
      items: educationItems,
    },
  ];

  return (
    <section className="experience-education">
      <div className="experience-education-layout">
        {panels.map((panel) => (
          <div
            key={panel.id}
            id={panel.id}
            className="experience-section"
          >
            <SectionHeader
              index={panel.index}
              name={panel.name}
              subtitle={panel.subtitle}
              align={panel.id === "education" ? "right" : "left"}
            />
            <div className="experience-panel">
              <div className="experience-list">
                {panel.items.map((item) => (
                  <article
                    key={`${panel.id}-${item.role}-${item.company}`}
                    className="experience-item"
                  >
                    <div className="experience-item-period">{item.period}</div>
                    <div className="experience-item-card">
                      <h4 className="experience-item-heading">
                        <span className="experience-item-role">{item.role}</span>
                        <span className="experience-separator"> · </span>
                        <span className="experience-item-company">
                          {item.company}
                        </span>
                      </h4>
                      <p>{item.description}</p>
                      <div className="experience-tags">
                        {item.tags.map((tag) => (
                          <span
                            key={`${panel.id}-${item.role}-${tag}`}
                            className="experience-tag"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
