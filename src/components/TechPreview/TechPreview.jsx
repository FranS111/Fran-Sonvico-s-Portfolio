import { useEffect, useMemo, useRef, useState } from "react";
import "../Stack/Stack.css";

function getProjectPreviewDesc(project) {
  if (project.highlights?.length) {
    return project.highlights[0].desc;
  }
  return project.desc;
}

function buildView(
  techName,
  previewData,
  category,
  relatedProject,
  relatedLabel,
  fallbackDesc
) {
  if (!techName) return null;
  if (relatedProject) {
    return {
      key: `${techName}-${relatedProject.title}`,
      kind: "project",
      title: relatedProject.title,
      desc: getProjectPreviewDesc(relatedProject),
      tags: [],
      category: relatedLabel,
    };
  }
  if (previewData) {
    return {
      key: `${techName}-featured`,
      kind: "featured",
      title: previewData.title,
      desc: previewData.desc,
      tags: previewData.tags ?? [],
    };
  }
  return {
    key: `${techName}-fallback`,
    kind: "fallback",
    title: techName,
    desc: fallbackDesc,
    category: category ?? null,
    tags: [],
  };
}

export default function TechPreview({
  techName,
  category,
  previewData,
  relatedProject,
  relatedLabel,
  fallbackDesc,
  hoverHint,
}) {
  const view = useMemo(
    () =>
      buildView(
        techName,
        previewData ?? null,
        category ?? null,
        relatedProject ?? null,
        relatedLabel ?? "// related project",
        fallbackDesc ?? "No featured project — used across multiple internal builds."
      ),
    [techName, previewData, category, relatedProject, relatedLabel, fallbackDesc]
  );

  const viewKey = view?.key ?? "__empty__";

  const [displayed, setDisplayed] = useState(null);
  const [phase, setPhase] = useState("in");
  const isFirstRun = useRef(true);

  useEffect(() => {
    const nextView =
      viewKey === "__empty__"
        ? null
        : buildView(
            techName,
            previewData ?? null,
            category ?? null,
            relatedProject ?? null,
            relatedLabel ?? "// related project",
            fallbackDesc ?? "No featured project — used across multiple internal builds."
          );

    if (isFirstRun.current) {
      isFirstRun.current = false;
      setDisplayed(nextView);
      setPhase("in");
      return;
    }

    if (viewKey === "__empty__") {
      setPhase("out");
      const timeout = setTimeout(() => {
        setDisplayed(null);
        setPhase("in");
      }, 150);
      return () => clearTimeout(timeout);
    }

    setPhase("out");
    const timeout = setTimeout(() => {
      setDisplayed(nextView);
      setPhase("in");
    }, 150);

    return () => clearTimeout(timeout);
  }, [viewKey, techName, previewData, category, relatedProject, relatedLabel, fallbackDesc]);

  if (!displayed) {
    return (
      <div className={`tech-preview tech-preview-empty tech-preview-${phase}`}>
        <p className="hover-text">
          {hoverHint ?? "Hover a technology to see a project preview."}
        </p>
      </div>
    );
  }

  return (
    <div className={`tech-preview tech-preview-${phase}`}>
      <div className="tech-preview-card">
        <h3>{displayed.title}</h3>
        {displayed.category && (
          <p className="tech-preview-category">{displayed.category}</p>
        )}
        <p>{displayed.desc}</p>
        {displayed.tags && displayed.tags.length > 0 && (
          <div className="preview-tags">
            {displayed.tags.map((t) => (
              <span key={t} className="preview-tag">
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
