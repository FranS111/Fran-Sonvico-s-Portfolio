import { useState } from "react";
import "./Stack.css";
import TechPreview from "../TechPreview/TechPreview";
import SectionHeader from "../SectionHeader/SectionHeader";

const stackGroups = [
  {
    label: "// frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "AngularJS"],
  },
  {
    label: "// backend",
    items: [
      "Java",
      "Spring Framework",
      "PHP",
      "Node.js",
      "Express",
      "APIs REST",
    ],
  },
  {
    label: "// database",
    items: ["SQL", "PL/SQL", "Oracle Database", "MongoDB"],
  },
];

const categoryMap = (() => {
  const map = {};
  stackGroups.forEach((g) => {
    g.items.forEach((item) => {
      map[item] = g.label;
    });
  });
  return map;
})();

const previews = {
  React: {
    title: "Portfolio Website",
    desc: "Minimalistic portfolio built with React.",
    tags: ["React", "CSS"],
  },
  "Next.js": {
    title: "Blog with SSR",
    desc: "A performant blog using Next.js and SSG.",
    tags: ["Next.js", "Vercel"],
  },
  "Node.js": {
    title: "E-commerce App",
    desc: "Fullstack shop with cart & checkout.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
  Express: {
    title: "API Server",
    desc: "REST API for user auth and products.",
    tags: ["Express", "Node.js"],
  },
  MongoDB: {
    title: "Data Store",
    desc: "Database for storing products and users.",
    tags: ["MongoDB"],
  },
  CSS3: {
    title: "Styled UI",
    desc: "Responsive UI built with modern CSS.",
    tags: ["CSS3", "Animations"],
  },
};

const totalTech = stackGroups.reduce((acc, g) => acc + g.items.length, 0);
const numCategories = stackGroups.length;
const numFeatured = Object.keys(previews).length;

export default function Stack() {
  const [hovered, setHovered] = useState(null);

  const previewData = hovered ? previews[hovered] ?? null : null;
  const category = hovered ? categoryMap[hovered] ?? null : null;

  return (
    <section id="stack" className="stack section-bleed">
      <SectionHeader
        index="03"
        name="TechStack"
        subtitle="Languages and Frameworks i worked with"
      />
      <div className="stack-panel">
        <div className="stack-grid">
          <div className="stack-left">
            {stackGroups.map((group, groupIndex) => {
              const offset = stackGroups
                .slice(0, groupIndex)
                .reduce((acc, g) => acc + g.items.length, 0);
              return (
                <div key={group.label} className="stack-group">
                  <h4 className="stack-group-label">{group.label}</h4>
                  <div className="stack-group-items">
                    {group.items.map((tech, itemIndex) => {
                      const index = offset + itemIndex;
                      const variantClass =
                        index % 3 === 0
                          ? "variant-default"
                          : index % 3 === 1
                            ? "variant-dark"
                            : "variant-muted";
                      return (
                        <button
                          key={tech}
                          type="button"
                          className={`stack-item ${variantClass} ${hovered === tech ? "active" : ""}`}
                          onMouseEnter={() => setHovered(tech)}
                          onMouseLeave={() => setHovered(null)}
                          onFocus={() => setHovered(tech)}
                          onBlur={() => setHovered(null)}
                        >
                          {tech}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="stack-right">
            <TechPreview
              techName={hovered}
              category={category}
              previewData={previewData}
            />
            <p className="stack-stats-line" aria-hidden="true">
              // {totalTech} technologies · {numCategories} categories ·{" "}
              {numFeatured} featured
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
