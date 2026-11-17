const MONTHS = {
  JAN: 0,
  FEB: 1,
  MAR: 2,
  APR: 3,
  MAY: 4,
  JUN: 5,
  JUL: 6,
  AUG: 7,
  SEP: 8,
  OCT: 9,
  NOV: 10,
  DEC: 11,
  ENE: 0,
  ABR: 3,
  AGO: 7,
  DIC: 11,
};

function parseMonthYear(token) {
  const cleaned = token.trim().toUpperCase();
  if (cleaned === "PRESENT" || cleaned === "ACTUALIDAD" || cleaned === "NOW") {
    const now = new Date();
    return { year: now.getFullYear(), month: now.getMonth() };
  }

  const monthYear = cleaned.match(/^([A-Z]{3})\s+(\d{4})$/);
  if (monthYear) {
    const month = MONTHS[monthYear[1]];
    if (month == null) return null;
    return { year: Number(monthYear[2]), month };
  }

  const yearOnly = cleaned.match(/^(\d{4})$/);
  if (yearOnly) {
    return { year: Number(yearOnly[1]), month: 0 };
  }

  return null;
}

function monthsBetween(start, end) {
  // Inclusive of both start and end months (LinkedIn-style).
  const total = (end.year - start.year) * 12 + (end.month - start.month) + 1;
  return Math.max(0, total);
}

export function getPeriodDurationParts(period) {
  if (!period || typeof period !== "string") return null;

  const parts = period.split(/\s[-–—]\s/);
  if (parts.length !== 2) return null;

  const start = parseMonthYear(parts[0]);
  const end = parseMonthYear(parts[1]);
  if (!start || !end) return null;

  const totalMonths = monthsBetween(start, end);
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return { years, months, totalMonths };
}

export function formatPeriodDuration(period, labels) {
  const parts = getPeriodDurationParts(period);
  if (!parts || parts.totalMonths <= 0) return null;

  const { years, months } = parts;
  const chunks = [];

  if (years > 0) {
    chunks.push(`${years} ${years === 1 ? labels.year : labels.years}`);
  }
  if (months > 0 || years === 0) {
    chunks.push(`${months} ${months === 1 ? labels.month : labels.months}`);
  }

  return chunks.join(" ");
}
