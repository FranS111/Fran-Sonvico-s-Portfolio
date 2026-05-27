import { useMemo, useState } from "react";
import { messages } from "./messages";
import { I18nContext } from "./context";

const STORAGE_KEY = "portfolio_lang";
const FALLBACK_LANG = "EN";

function getInitialLanguage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "EN" || stored === "ES") return stored;
  } catch {
    // Ignore storage access errors.
  }
  return FALLBACK_LANG;
}

function interpolate(value, vars = {}) {
  if (typeof value !== "string") return value;
  return value.replace(/\{(\w+)\}/g, (_, key) =>
    vars[key] !== undefined ? String(vars[key]) : `{${key}}`
  );
}

function getByPath(source, path) {
  return path.split(".").reduce((acc, segment) => {
    if (acc && typeof acc === "object" && segment in acc) return acc[segment];
    return undefined;
  }, source);
}

export function I18nProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = (next) => {
    const normalized = next === "ES" ? "ES" : "EN";
    setLanguageState(normalized);
    try {
      localStorage.setItem(STORAGE_KEY, normalized);
    } catch {
      // Ignore storage access errors.
    }
  };

  const value = useMemo(() => {
    const t = (path, vars) => {
      const localized = getByPath(messages[language], path);
      const fallback = getByPath(messages[FALLBACK_LANG], path);
      const picked = localized ?? fallback ?? path;
      return interpolate(picked, vars);
    };

    return {
      language,
      setLanguage,
      t,
      dictionary: messages[language] ?? messages[FALLBACK_LANG],
    };
  }, [language]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
