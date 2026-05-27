const experienceByLang = {
  EN: [
    {
      period: "FEB 2025 - MAY 2026",
      role: "Fullstack Web Developer",
      company: "Cimkey",
      description:
        "Led frontend architecture and interaction design on Dwit, an enterprise B2B platform for structural technical data sheets. Built scalable, modular filtering components with seamless JavaScript–Java state sync; redesigned permission-aware navigation to cut load times from seconds to instant response; and streamlined backend data flows to keep delivery fast under concurrent users. Maintained ISS logistics CRM in production while owning work end-to-end—from UI design through pre-production—with Agile coordination and technical documentation.",
      tags: [
        "JavaScript",
        "Java",
        "HTML5",
        "CSS3",
        "PL/SQL",
        "UI Architecture",
        "Agile",
      ],
    },
    {
      period: "OCT 2023 - JUN 2024",
      role: "Fullstack Web Developer",
      company: "New Strategy In Action S.L. (Strategying)",
      description:
        "Independently built an internal real-time analytics dashboard with Laravel migrations and third-party API integrations. Delivered modular Livewire components, Context API state, and CRUD flows with dynamic filtering and pagination for Momento Seguros and Smurfit Kappa client apps, including localization, validation, and full QA coverage.",
      tags: ["Laravel", "PHP", "Livewire", "JavaScript", "Blade", "MySQL", "Agile"],
    },
  ],
  ES: [
    {
      period: "FEB 2025 - MAY 2026",
      role: "Desarrollador Web Fullstack",
      company: "Cimkey",
      description:
        "Colaboré enormemente en la arquitectura frontend y el diseño de interacción en Dwit, una plataforma B2B empresarial para fichas técnicas estructurales. Construí componentes de filtrado modulares y escalables con sincronización de estado JavaScript–Java; rediseñé la navegación por permisos para reducir cargas de segundos a respuesta instantánea; y optimicé flujos de datos backend para mantener velocidad bajo alta concurrencia. También mantuve en producción el CRM logístico de ISS, gestionando el ciclo end-to-end desde UI hasta preproducción con coordinación Agile y documentación técnica.",
      tags: [
        "JavaScript",
        "Java",
        "HTML5",
        "CSS3",
        "PL/SQL",
        "Arquitectura UI",
        "Agile",
      ],
    },
    {
      period: "OCT 2023 - JUN 2024",
      role: "Desarrollador Web Fullstack",
      company: "New Strategy In Action S.L. (Strategying)",
      description:
        "Desarrollé de forma autónoma un dashboard interno de analítica en tiempo real con migraciones en Laravel e integraciones con APIs de terceros. Entregué componentes modulares con Livewire, estado con Context API y flujos CRUD con filtros dinámicos y paginación para aplicaciones de clientes como Momento Seguros y Smurfit Kappa, incluyendo localización, validaciones y QA completo.",
      tags: ["Laravel", "PHP", "Livewire", "JavaScript", "Blade", "MySQL", "Agile"],
    },
  ],
};

const educationByLang = {
  EN: [
    {
      period: "2022 - 2024",
      role: "Higher Technical Degree in Multi-platform Applications Development (DAM)",
      company: "STUCOM Pelai · Centre d'estudis",
      description:
        "Vocational degree covering full-stack and multi-platform development, relational databases, software engineering, and production-ready application delivery.",
      tags: ["Full-Stack Development", "Databases", "Mobile", "Testing", "Teamwork"],
    },
    {
      period: "2019 - 2021",
      role: "Technological Baccalaureate",
      company: "Escola Maristes Anna Ravell",
      description:
        "STEM-focused baccalaureate with emphasis on mathematics, physics, and computing foundations for higher technical studies.",
      tags: ["STEM", "Mathematics", "Physics", "Computing"],
    },
  ],
  ES: [
    {
      period: "2022 - 2024",
      role: "CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      company: "STUCOM Pelai · Centre d'estudis",
      description:
        "Formación técnica orientada a desarrollo full-stack y multiplataforma, bases de datos relacionales, ingeniería de software y entrega de aplicaciones listas para producción.",
      tags: ["Desarrollo Full-Stack", "Bases de datos", "Mobile", "Testing", "Trabajo en equipo"],
    },
    {
      period: "2019 - 2021",
      role: "Bachillerato Tecnológico",
      company: "Escola Maristes Anna Ravell",
      description:
        "Bachillerato con enfoque STEM, con base sólida en matemáticas, física y fundamentos de informática para estudios técnicos superiores.",
      tags: ["STEM", "Matemáticas", "Física", "Computación"],
    },
  ],
};

const panelsByLang = {
  EN: {
    experience: {
      index: "01",
      name: "Experience",
      subtitle: "Enterprise web development and client-facing delivery",
    },
    education: {
      index: "02",
      name: "Education",
      subtitle: "Formal training in multi-platform software development",
    },
  },
  ES: {
    experience: {
      index: "01",
      name: "Experiencia",
      subtitle: "Desarrollo web empresarial y entrega orientada a cliente",
    },
    education: {
      index: "02",
      name: "Formación",
      subtitle: "Formación formal en desarrollo de software multiplataforma",
    },
  },
};

export function getExperienceContent(language = "EN") {
  const lang = language === "ES" ? "ES" : "EN";
  return {
    experienceItems: experienceByLang[lang],
    educationItems: educationByLang[lang],
    experiencePanel: panelsByLang[lang].experience,
    educationPanel: panelsByLang[lang].education,
  };
}

export const experienceItems = experienceByLang.EN;
export const educationItems = educationByLang.EN;
export const experiencePanel = panelsByLang.EN.experience;
export const educationPanel = panelsByLang.EN.education;
