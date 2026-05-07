import { useEffect, useMemo, useRef, useState } from "react";
import "../Stack/Stack.css";

const FALLBACK_DESC =
  "No featured project — used across multiple internal builds.";

function buildView(techName, previewData, category) {
  if (!techName) return null;
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
    desc: FALLBACK_DESC,
    category: category ?? null,
    tags: [],
  };
}

export default function TechPreview({ techName, category, previewData }) {
  const view = useMemo(
    () => buildView(techName, previewData ?? null, category ?? null),
    [techName, previewData, category]
  );

  const viewKey = view?.key ?? "__empty__";

  const [displayed, setDisplayed] = useState(null);
  const [phase, setPhase] = useState("in");
  const isFirstRun = useRef(true);

  useEffect(() => {
    const nextView =
      viewKey === "__empty__"
        ? null
        : buildView(techName, previewData ?? null, category ?? null);

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
  }, [viewKey, techName, previewData, category]);

  if (!displayed) {
    return (
      <div className={`tech-preview tech-preview-empty tech-preview-${phase}`}>
        <p className="hover-text">
          Hover a technology to see a project preview.
        </p>
      </div>
    );
  }

  return (
    <div className={`tech-preview tech-preview-${phase}`}>
      <div className="tech-preview-card">
        <h3>{displayed.title}</h3>
        {displayed.kind === "fallback" && displayed.category && (
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
