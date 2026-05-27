import { useEffect, useRef, useState } from "react";
import "./Accordion.css";
import useI18n from "../../hooks/useI18n";

export default function Accordion() {
  const { t } = useI18n();
  const [activeIndex, setActiveIndex] = useState(null);
  const transitionTimeoutRef = useRef(null);

  const CLOSE_ANIMATION_MS = 300;

  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  const toggleAccordion = (index) => {
    if (transitionTimeoutRef.current) {
      clearTimeout(transitionTimeoutRef.current);
      transitionTimeoutRef.current = null;
    }

    // If clicking the currently open item, just close it.
    if (activeIndex === index) {
      setActiveIndex(null);
      return;
    }

    // If nothing is open, open immediately.
    if (activeIndex === null) {
      setActiveIndex(index);
      return;
    }

    // If another item is open, close first and open target after transition.
    setActiveIndex(null);

    transitionTimeoutRef.current = setTimeout(() => {
      setActiveIndex(index);
      transitionTimeoutRef.current = null;
    }, CLOSE_ANIMATION_MS);
  };

  const items = [
    {
      title: t("accordion.about"),
      content: t("accordion.aboutContent"),
    },
    {
      title: t("accordion.skills"),
      content: t("accordion.skillsContent"),
    }
  ];

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div
          key={index}
          className={`accordion-item ${activeIndex === index ? "is-open" : ""}`}
        >
          <button
            type="button"
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span className="accordion-icon-wrap" aria-hidden="true">
              <span className="accordion-bracket">[</span>
              <span
                className={`accordion-icon ${activeIndex === index ? "open" : ""}`}
              >
                +
              </span>
              <span className="accordion-bracket">]</span>
            </span>
          </button>
          <div
            className={`accordion-content ${activeIndex === index ? "open" : ""}`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
