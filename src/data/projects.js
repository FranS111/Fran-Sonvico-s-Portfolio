const GITHUB_USER = "https://github.com/FranS111";

export const damProjects = [
  {
    name: "DAM2-AnimalStoreManager",
    lang: "Dart",
    desc: "Animal store management with CRUD, filters, and inventory views.",
    href: `${GITHUB_USER}/DAM2-AnimalStoreManager`,
  },
  {
    name: "DAM2-Viticulture",
    lang: "Java",
    desc: "Winery operations system using MongoDB for bodegas, fields, and vines.",
    href: `${GITHUB_USER}/DAM2-Viticulture`,
  },
  {
    name: "DAM2-Unity-Project",
    lang: "C#",
    desc: "Unity project for the Multi-platform Applications Development degree.",
    href: `${GITHUB_USER}/DAM2-UnoGame`,
  }
];

export const projects = [
  {
    title: "ZGrid Platform",
    desc: "Core engine for multi-service orchestration and observability across production workflows.",
    tags: ["React", "Node.js", "Monitoring"],
    layout: "wide",
  },
  {
    title: "DAM Academic Projects",
    desc: "Applications built during the Multi-platform Applications Development degree: CRUD systems, games, and data-driven apps across Java, PHP, C#,  Dart, and relational/NoSQL databases.",
    tags: ["Java","C#", "PHP", "Dart", "MySQL"],
    layout: "tall",
    collection: damProjects,
    githubHref: `${GITHUB_USER}?tab=repositories`,
  },
  {
    title: "Sustainable AI Ops",
    desc: "Tracking and optimization layer to reduce model-inference cost and environmental impact.",
    tags: ["Analytics", "Optimization", "Cloud"],
    layout: "small-a",
  },
  {
    title: "Edge Compute Gateway",
    desc: "Low-latency edge runtime for processing events closer to users and connected devices.",
    tags: ["Edge", "Realtime", "Security"],
    layout: "small-b",
  },
];
