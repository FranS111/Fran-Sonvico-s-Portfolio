import { useEffect, useRef, useState } from "react";
import "./Accordion.css";

export default function Accordion() {
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
      title: "About Me",
      content: "I'm a passionate fullstack developer with experience in React, Node.js, and more. I love creating user-friendly applications."
    },
    {
      title: "Skills",
      content: "Proficient in JavaScript, HTML, CSS, React, Node.js, SQL, and modern web technologies. Always learning new tools."
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
