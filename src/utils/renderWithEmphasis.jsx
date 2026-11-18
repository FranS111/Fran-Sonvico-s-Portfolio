/**
 * Highlights matching terms as <strong> (used by Intro).
 */
export function renderWithEmphasis(text, emphasisTerms = [], keyPrefix = "emphasis") {
  if (!text || !emphasisTerms.length) return text;

  const escapeRegExp = (value) =>
    value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const normalizedTerms = [...new Set(emphasisTerms)]
    .filter(Boolean)
    .sort((a, b) => b.length - a.length);

  if (!normalizedTerms.length) return text;

  const regex = new RegExp(`(${normalizedTerms.map(escapeRegExp).join("|")})`, "gi");
  const parts = text.split(regex);
  let key = 0;

  return parts.map((part) => {
    if (!part) return null;
    const isEmphasis = normalizedTerms.some(
      (term) => term.toLowerCase() === part.toLowerCase()
    );
    if (!isEmphasis) return part;
    key += 1;
    return <strong key={`${keyPrefix}-${key}`}>{part}</strong>;
  });
}

/**
 * Renders inline **marked** phrases as <strong>.
 */
export function renderMarkedText(text, keyPrefix = "mark") {
  if (!text || typeof text !== "string") return text;
  if (!text.includes("**")) return text;

  const parts = text.split(/(\*\*[^*]+\*\*)/g);

  return parts.map((part, index) => {
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return (
        <strong key={`${keyPrefix}-${index}`}>{part.slice(2, -2)}</strong>
      );
    }
    return part;
  });
}
