import "./SectionHeader.css";

/**
 * @param {object} props
 * @param {string} props.index
 * @param {string} props.name - rendered as _{name} inside JSX-style brackets
 * @param {string} props.subtitle
 * @param {"left" | "right" | "center"} [props.align="left"]
 */
export default function SectionHeader({
  index,
  name,
  subtitle,
  align = "left",
}) {
  return (
    <header className={`section-header section-header--${align}`}>
      <h2 className="section-header__title">
        <span className="section-header__index">{index}</span>
        <span className="section-header__bracket">&lt;</span>
        <span className="section-header__name">{name}</span>
        <span className="section-header__bracket"> /&gt;</span>
      </h2>
      <p className="section-header__subtitle">
        <span className="section-header__arrow" aria-hidden="true">
          →
        </span>{" "}
        {subtitle}
        <span className="section-header__caret section-header__caret--subtitle" aria-hidden="true">
          ▋
        </span>
      </p>
    </header>
  );
}
