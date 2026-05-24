import { useState } from "react";
import "./Stack.css";
import TechPreview from "../TechPreview/TechPreview";
import SectionHeader from "../SectionHeader/SectionHeader";
import { stackGroups, stackPreviews } from "../../data/stack";

const categoryMap = (() => {
  const map = {};
  stackGroups.forEach((g) => {
    g.items.forEach((item) => {
      map[item] = g.label;
    });
  });
  return map;
})();

const totalTech = stackGroups.reduce((acc, g) => acc + g.items.length, 0);
const numCategories = stackGroups.length;
const numFeatured = Object.keys(stackPreviews).length;

export default function Stack() {
  const [hovered, setHovered] = useState(null);

  const previewData = hovered ? stackPreviews[hovered] ?? null : null;
  const category = hovered ? categoryMap[hovered] ?? null : null;

  return (
    <section id="stack" className="stack section-bleed">
      <SectionHeader
        index="03"
        name="TechStack"
        subtitle="Languages, frameworks, and tools from my professional work"
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
