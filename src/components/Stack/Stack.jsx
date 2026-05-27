import { useMemo, useState } from "react";
import "./Stack.css";
import TechPreview from "../TechPreview/TechPreview";
import SectionHeader from "../SectionHeader/SectionHeader";
import { getStackContent } from "../../data/stack";
import { getProjectsContent } from "../../data/projects";
import useI18n from "../../hooks/useI18n";

const PROJECT_PRIORITY = {
  Dwit: 400,
  "Dwit · ISS CRM": 320,
  "This Portfolio": 260,
  "Este portfolio": 260,
  "DAM Academic Projects": 180,
  "Proyectos académicos DAM": 180,
};

const TAG_ALIASES = {
  css3: ["css", "csssass", "sass"],
  csssass: ["css3", "css", "sass"],
  html5: ["html"],
  plsql: ["sql", "mysql"],
  sql: ["plsql", "mysql"],
  javascript: ["js"],
};

const TECH_ORIGIN_SECTION = {
  Livewire: "experience",
  Blade: "experience",
  jQuery: "experience",
  Laravel: "experience",
  AJAX: "education",
  Flutter: "education",
  Python: "education",
  MongoDB: "education",
};

function normalizeTag(value) {
  return (value ?? "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

function getTechVariants(techName) {
  const normalized = normalizeTag(techName);
  const variants = new Set([normalized]);
  (TAG_ALIASES[normalized] ?? []).forEach((tag) => variants.add(tag));
  return variants;
}

function scoreProject(project, variants) {
  let score = PROJECT_PRIORITY[project.title] ?? 100;
  const projectTags = project.tags ?? [];

  projectTags.forEach((tag) => {
    const normalized = normalizeTag(tag);
    if (variants.has(normalized)) score += 120;
  });

  if (project.highlights?.length) score += 15;
  if (project.layout === "wide") score += 10;
  if (project.layout === "small-a" || project.layout === "small-b") score += 5;
  return score;
}

function getRelatedProject(techName, projects) {
  if (!techName) return null;
  const variants = getTechVariants(techName);

  const candidates = projects.filter((project) =>
    (project.tags ?? []).some((tag) => variants.has(normalizeTag(tag)))
  );

  if (!candidates.length) return null;

  const [winner] = candidates.sort(
    (a, b) => scoreProject(b, variants) - scoreProject(a, variants)
  );
  return winner ?? null;
}

export default function Stack() {
  const { language, t } = useI18n();
  const { stackGroups, stackPreviews } = useMemo(
    () => getStackContent(language),
    [language]
  );
  const projects = useMemo(() => getProjectsContent(language), [language]);

  const categoryMap = useMemo(() => {
    const map = {};
    stackGroups.forEach((g) => {
      g.items.forEach((item) => {
        map[item] = g.label;
      });
    });
    return map;
  }, [stackGroups]);

  const totalTech = stackGroups.reduce((acc, g) => acc + g.items.length, 0);
  const numCategories = stackGroups.length;
  const numFeatured = Object.keys(stackPreviews).length;

  const [hovered, setHovered] = useState(null);
  const relatedProjectMap = useMemo(() => {
    const map = {};
    stackGroups.forEach((group) => {
      group.items.forEach((tech) => {
        map[tech] = getRelatedProject(tech, projects);
      });
    });
    return map;
  }, [projects, stackGroups]);

  const previewData = hovered ? stackPreviews[hovered] ?? null : null;
  const category = hovered ? categoryMap[hovered] ?? null : null;
  const relatedProject = hovered ? relatedProjectMap[hovered] ?? null : null;

  function getTechDestination(tech) {
    if (TECH_ORIGIN_SECTION[tech]) return TECH_ORIGIN_SECTION[tech];
    if (relatedProjectMap[tech]) return "projects";
    return null;
  }

  function handleTechClick(tech) {
    const destinationId = getTechDestination(tech);
    if (!destinationId) return;
    document
      .getElementById(destinationId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <section id="stack" className="stack section-bleed">
      <SectionHeader
        index="03"
        name={t("stack.title")}
        subtitle={t("stack.subtitle")}
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
                          style={{ "--stack-flex": `${tech.length} 1 auto` }}
                          onClick={() => handleTechClick(tech)}
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
              relatedProject={relatedProject}
              relatedLabel={t("stack.relatedProject")}
              fallbackDesc={t("stack.fallbackDesc")}
              hoverHint={t("stack.hoverHint")}
            />
            <p className="stack-stats-line" aria-hidden="true">
              {t("stack.stats", {
                total: totalTech,
                categories: numCategories,
                featured: numFeatured,
              })}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
