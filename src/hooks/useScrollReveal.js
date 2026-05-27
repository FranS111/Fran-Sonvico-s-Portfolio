import { useEffect } from "react";

const DEFAULT_OPTIONS = {
  root: null,
  rootMargin: "0px 0px -8% 0px",
  threshold: 0.2,
};

function markRevealItems(root, itemSelector) {
  const items = itemSelector
    ? Array.from(root.querySelectorAll(itemSelector))
    : [root];

  items.forEach((item, index) => {
    item.classList.add("reveal-item");
    item.style.setProperty("--reveal-i", String(index));
  });
}

export default function useScrollReveal(config = [], options = DEFAULT_OPTIONS) {
  useEffect(() => {
    if (!config.length) return undefined;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const roots = config
      .map((entry) => {
        const root = document.querySelector(entry.rootSelector);
        if (!root) return null;

        root.classList.add("reveal-root");
        // Ensure a deterministic initial state before triggering animations.
        root.classList.remove("is-inview");
        markRevealItems(root, entry.itemSelector);

        if (prefersReducedMotion) {
          root.classList.add("is-inview");
        }

        return {
          root,
          once: entry.once !== false,
          eager: entry.eager === true,
        };
      })
      .filter(Boolean);

    if (prefersReducedMotion || !roots.length) {
      return undefined;
    }

    // Eager roots: animate right after first paint (e.g. hero intro)
    roots.forEach(({ root, eager }) => {
      if (!eager) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.setTimeout(() => {
            root.classList.add("is-inview");
          }, 40);
        });
      });
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-inview");

        const rootEntry = roots.find((item) => item.root === entry.target);
        if (rootEntry?.once) observer.unobserve(entry.target);
      });
    }, options);

    roots.forEach(({ root, eager }) => {
      if (eager) return;
      observer.observe(root);
    });

    return () => observer.disconnect();
  }, [config, options]);
}
