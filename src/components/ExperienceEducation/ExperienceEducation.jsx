import "./ExperienceEducation.css";
import SectionHeader from "../SectionHeader/SectionHeader";
import { getExperienceContent } from "../../data/experience";
import useI18n from "../../hooks/useI18n";
import { formatPeriodDuration } from "../../utils/formatPeriodDuration";
import { renderMarkedText } from "../../utils/renderWithEmphasis";

export default function ExperienceEducation() {
  const { language, dictionary } = useI18n();
  const { experienceItems, educationItems, experiencePanel, educationPanel } =
    getExperienceContent(language);
  const durationLabels = dictionary?.duration ?? {
    year: "year",
    years: "years",
    month: "month",
    months: "months",
  };

  const panels = [
    {
      id: "experience",
      ...experiencePanel,
      items: experienceItems,
    },
    {
      id: "education",
      ...educationPanel,
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
                {panel.items.map((item) => {
                  const duration =
                    panel.id === "experience"
                      ? formatPeriodDuration(item.period, durationLabels)
                      : null;

                  return (
                    <article
                      key={`${panel.id}-${item.role}-${item.company}`}
                      className="experience-item"
                    >
                      <div className="experience-item-side">
                        <div className="experience-item-period">{item.period}</div>
                        {duration ? (
                          <div className="experience-item-period experience-item-duration">
                            {duration}
                          </div>
                        ) : null}
                      </div>
                      <div className="experience-item-card">
                        <h4 className="experience-item-heading">
                          <span className="experience-item-role">{item.role}</span>
                          <span className="experience-separator"> · </span>
                          <span className="experience-item-company">
                            {item.company}
                          </span>
                        </h4>
                        <p>{renderMarkedText(item.description)}</p>
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
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
