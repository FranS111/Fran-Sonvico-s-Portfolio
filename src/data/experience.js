const experienceByLang = {
  EN: [
    {
      period: "FEB 2025 - MAY 2026",
      role: "Fullstack Web Developer",
      company: "Cimkey · Barcelona",
      description:
        "Contributed to **frontend architecture** on Dwit, an enterprise B2B platform for structural technical data sheets. Designed and implemented a generic **dynamic-filtering system** by data-sheet type—driving create, edit, and delete flows and keeping UI state in sync between Angular, JavaScript, HTML5, CSS, and Tailwind CSS on the frontend and Java, .NET, and C# on the backend. Redesigned role/permission navigation so menu rendering dropped from multi-second waits to **instant UX**; refactored inefficient PL/SQL queries and stored procedures under multi-user load; and provided **critical production support** for ISS logistics CRM (orders and employees). Delivered work end-to-end from UI design through pre-production with technical documentation and Agile syncs.",
      tags: [
        "Angular",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Java",
        ".NET",
        "C#",
        "PL/SQL",
        "Agile",
      ],
    },
    {
      period: "JUL 2023 - FEB 2025",
      role: "Fullstack Web Developer",
      company: "New Strategy In Action S.L. (Strategying) · Barcelona",
      description:
        "Independently designed and built an internal **real-time analytics dashboard** in React and JavaScript with Context API state, Laravel migrations for relational schemas, and third-party API integrations. In a separate client track, delivered modular Livewire components, CRUD flows, and data tables with dynamic filtering, sorting, and pagination. Designed modular UI, validation, and multi-language localization for **Momento Seguros** and **Smurfit Kappa** apps, with unit, integration, and system QA coverage.",
      tags: ["React", "JavaScript", "Laravel", "PHP", "Livewire", "Blade", "MySQL", "Agile"],
    },
  ],
  ES: [
    {
      period: "FEB 2025 - MAY 2026",
      role: "Desarrollador Web Fullstack",
      company: "Cimkey · Barcelona",
      description:
        "Colaboré en la **arquitectura frontend** de Dwit, plataforma B2B empresarial para fichas técnicas estructurales. Diseñé e implementé un sistema genérico de **filtrado dinámico** por tipo de ficha—impulsando flujos de alta, edición y borrado y manteniendo el estado de UI sincronizado entre Angular, JavaScript, HTML5, CSS y Tailwind CSS en frontend y Java, .NET y C# en backend. Rediseñé la navegación por roles/permisos para pasar de cargas de varios segundos a **UX instantánea**; refactoricé consultas y procedimientos PL/SQL ineficientes bajo carga multiusuario; y di **soporte crítico en producción** al CRM logístico de ISS (pedidos y empleados). Entregué trabajo end-to-end desde UI hasta preproducción con documentación técnica y sincronización Agile.",
      tags: [
        "Angular",
        "JavaScript",
        "Tailwind CSS",
        "HTML5",
        "CSS3",
        "Java",
        ".NET",
        "C#",
        "PL/SQL",
        "Agile",
      ],
    },
    {
      period: "JUL 2023 - FEB 2025",
      role: "Desarrollador Web Fullstack",
      company: "New Strategy In Action S.L. (Strategying) · Barcelona",
      description:
        "Diseñé y desarrollé de forma autónoma un **dashboard interno de analítica en tiempo real** con React y JavaScript, estado con Context API, migraciones Laravel para esquemas relacionales e integraciones con APIs de terceros. En otra línea de cliente, entregué componentes Livewire modulares, flujos CRUD y tablas con filtrado dinámico, ordenación y paginación. Diseñé UI modular, validaciones y localización multiidioma para apps de **Momento Seguros** y **Smurfit Kappa**, con cobertura QA unitaria, de integración y de sistema.",
      tags: ["React", "JavaScript", "Laravel", "PHP", "Livewire", "Blade", "MySQL", "Agile"],
    },
  ],
};

const educationByLang = {
  EN: [
    {
      period: "2026 - Present",
      role: "B.S. in Software Engineering (Software Development & Testing)",
      company: "Joint Degree: UOC, OUNL & UNED",
      description:
        "Online international bachelor's covering the full **software lifecycle**: programming, software architecture, testing, UX, web and mobile development, cloud computing, systems, and cybersecurity.",
      tags: [
        "Software Engineering",
        "Testing",
        "Cloud",
        "Web & Mobile",
        "UX",
      ],
    },
    {
      period: "2026",
      role: "Cambridge English C1 Advanced (CAE)",
      company: "Cambridge Assessment English",
      description:
        "Certified advanced English proficiency (**CEFR C1**): fluent professional communication, complex texts, and confident spoken and written expression in international contexts.",
      tags: ["CEFR", "Cambridge"],
    },
    {
      period: "2022 - 2024",
      role: "Higher Technical Degree in Multi-platform Applications Development (DAM)",
      company: "STUCOM Pelai · Centre d'estudis",
      description:
        "Vocational degree covering **full-stack** and **multi-platform development**, relational databases, software engineering, and production-ready application delivery.",
      tags: ["Full-Stack Development", "Databases", "Mobile", "Testing", "Teamwork"],
    },
    {
      period: "2019 - 2021",
      role: "Technological Baccalaureate",
      company: "Escola Maristes Anna Ravell",
      description:
        "**STEM**-focused baccalaureate with emphasis on mathematics, physics, and computing foundations for higher technical studies.",
      tags: ["STEM", "Mathematics", "Physics", "Computing"],
    },
  ],
  ES: [
    {
      period: "2026 - Actualidad",
      role: "Grado en Ingeniería de Software (Desarrollo y pruebas de Software)",
      company: "Interuniversitario: UOC, OUNL, UNED",
      description:
        "Grado internacional online centrado en el **ciclo de vida del software**: programación, arquitectura, pruebas, UX, desarrollo web y móvil, cloud computing, sistemas y ciberseguridad.",
      tags: [
        "Ingeniería de Software",
        "Testing",
        "Cloud",
        "Web y Mobile",
        "UX",
      ],
    },
    {
      period: "2026",
      role: "Cambridge English C1 Advanced (CAE)",
      company: "Cambridge Assessment English",
      description:
        "Certificación de inglés avanzado (**MCER C1**): comunicación profesional fluida, comprensión de textos complejos y expresión oral y escrita con soltura en contextos internacionales.",
      tags: ["MCER", "Cambridge"],
    },
    {
      period: "2022 - 2024",
      role: "CFGS en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      company: "STUCOM Pelai · Centre d'estudis",
      description:
        "Formación técnica orientada a desarrollo **full-stack** y **multiplataforma**, bases de datos relacionales, ingeniería de software y entrega de aplicaciones listas para producción.",
      tags: ["Desarrollo Full-Stack", "Bases de datos", "Mobile", "Testing", "Trabajo en equipo"],
    },
    {
      period: "2019 - 2021",
      role: "Bachillerato Tecnológico",
      company: "Escola Maristes Anna Ravell",
      description:
        "Bachillerato con enfoque **STEM**, con base sólida en matemáticas, física y fundamentos de informática para estudios técnicos superiores.",
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
      subtitle: "Formal training in software engineering",
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
      subtitle: "Formación formal en ingeniería de software",
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
