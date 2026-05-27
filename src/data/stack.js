const stackGroupsBase = [
  {
    labelKey: "frontend",
    items: [
      "JavaScript",
      "React",
      "HTML5",
      "CSS3",
      "Livewire",
      "Blade",
      "jQuery",
      "AJAX",
      "Dart",
      "Flutter",
    ],
  },
  {
    labelKey: "backend",
    items: ["Java", "PHP", "Laravel", "C#", "Python"],
  },
  {
    labelKey: "database",
    items: ["SQL", "PL/SQL", "MongoDB"],
  }
];

const stackPreviewsByLang = {
  EN: {
    JavaScript: {
      title: "Enterprise data-sheet platform",
      desc: "Front-end architecture and scalable filtering synced with Java backends at Cimkey (Dwit).",
      tags: ["JavaScript", "HTML5", "CSS3"],
    },
    React: {
      title: "Portfolio & client UIs",
      desc: "Component-driven interfaces with focus on performance and modular architecture.",
      tags: ["React", "JavaScript"],
    },
    Java: {
      title: "Fullstack cohesion (Dwit)",
      desc: "Server-side flows for permissions, roles, and data-sheet lifecycle—optimized for fast delivery under concurrent enterprise use.",
      tags: ["Java", "JavaScript"],
    },
    Laravel: {
      title: "Internal analytics dashboard",
      desc: "Full dashboard with migrations, APIs, and Livewire modules at New Strategy In Action.",
      tags: [],
    },
    Blade: {
      title: "Strategying client interfaces",
      desc: "Server-rendered UI views built at Strategying for internal and client-facing modules, with reusable templates and maintainable component structure.",
      tags: [],
    },
    jQuery: {
      title: "Strategying interaction layer",
      desc: "Used in Strategying projects to enhance legacy and hybrid interfaces with dynamic DOM interactions and smoother user flows.",
      tags: [],
    },
    PHP: {
      title: "Client applications",
      desc: "CRUD, localization, and validation flows for Momento Seguros and Smurfit Kappa.",
      tags: ["PHP", "Laravel", "Livewire"],
    },
    Livewire: {
      title: "Strategying modular dashboard UI",
      desc: "Built modular Livewire components in Strategying to deliver dynamic tables, filters, sorting, and pagination in production dashboards.",
      tags: [],
    },
    AJAX: {
      title: "DAM STUCOM coursework",
      desc: "Applied asynchronous request patterns during DAM studies at STUCOM to improve responsiveness in practical web development projects.",
      tags: [],
    },
    Flutter: {
      title: "DAM STUCOM mobile projects",
      desc: "Used in DAM STUCOM academic work to build and structure cross-platform mobile interfaces as part of multi-platform development training.",
      tags: [],
    },
    Python: {
      title: "DAM STUCOM foundations",
      desc: "Used in DAM STUCOM study projects for programming fundamentals, problem solving, and structured software development practice.",
      tags: [],
    },
    MongoDB: {
      title: "DAM STUCOM data practice",
      desc: "Worked with MongoDB in DAM STUCOM assignments to model and query document-based data in multi-platform application scenarios.",
      tags: [],
    },
    MySQL: {
      title: "Relational data modeling",
      desc: "Schemas and queries for dashboards and multi-user enterprise workloads.",
      tags: ["MySQL", "SQL"],
    },
    SQL: {
      title: "Query optimization",
      desc: "Refactored stored procedures and queries to reduce load under operational stress.",
      tags: ["SQL", "PL/SQL"],
    },
    CSS3: {
      title: "Enterprise UI styling",
      desc: "Responsive layouts and component styling across client and internal platforms.",
      tags: ["CSS3", "SASS"],
    },
  },
  ES: {
    JavaScript: {
      title: "Plataforma empresarial de fichas técnicas",
      desc: "Arquitectura frontend y filtrado escalable sincronizado con backends Java en Cimkey (Dwit).",
      tags: ["JavaScript", "HTML5", "CSS3"],
    },
    React: {
      title: "Portfolio e interfaces cliente",
      desc: "Interfaces orientadas a componentes con foco en rendimiento y arquitectura modular.",
      tags: ["React", "JavaScript"],
    },
    Java: {
      title: "Cohesión fullstack (Dwit)",
      desc: "Flujos server-side para permisos, roles y ciclo de vida de fichas técnicas optimizados para concurrencia empresarial.",
      tags: ["Java", "JavaScript"],
    },
    Laravel: {
      title: "Dashboard interno de analítica",
      desc: "Dashboard completo con migraciones, APIs y módulos Livewire en New Strategy In Action.",
      tags: [],
    },
    Blade: {
      title: "Interfaces Strategying",
      desc: "Vistas renderizadas en servidor construidas en Strategying para módulos internos y de cliente, con plantillas reutilizables.",
      tags: [],
    },
    jQuery: {
      title: "Capa de interacción Strategying",
      desc: "Usado en proyectos Strategying para mejorar interfaces híbridas y legacy con interacciones dinámicas en el DOM.",
      tags: [],
    },
    PHP: {
      title: "Aplicaciones cliente",
      desc: "Flujos CRUD, localización y validación para Momento Seguros y Smurfit Kappa.",
      tags: ["PHP", "Laravel", "Livewire"],
    },
    Livewire: {
      title: "UI modular en Strategying",
      desc: "Componentes Livewire modulares para tablas dinámicas, filtros, ordenación y paginación en dashboards de producción.",
      tags: [],
    },
    AJAX: {
      title: "DAM STUCOM · coursework",
      desc: "Patrones de peticiones asíncronas aplicados en DAM STUCOM para mejorar respuesta en proyectos web prácticos.",
      tags: [],
    },
    Flutter: {
      title: "Proyectos mobile DAM STUCOM",
      desc: "Uso de Flutter en trabajos académicos DAM para crear interfaces mobile multiplataforma.",
      tags: [],
    },
    Python: {
      title: "Fundamentos DAM STUCOM",
      desc: "Uso de Python en proyectos de estudio para fundamentos de programación, resolución de problemas y práctica estructurada.",
      tags: [],
    },
    MongoDB: {
      title: "Práctica de datos DAM STUCOM",
      desc: "Trabajo con MongoDB en ejercicios DAM para modelar y consultar datos documentales en escenarios multiplataforma.",
      tags: [],
    },
    MySQL: {
      title: "Modelado relacional",
      desc: "Esquemas y consultas para dashboards y cargas multiusuario en contexto empresarial.",
      tags: ["MySQL", "SQL"],
    },
    SQL: {
      title: "Optimización de consultas",
      desc: "Refactor de consultas y procedimientos para reducir carga bajo estrés operativo.",
      tags: ["SQL", "PL/SQL"],
    },
    CSS3: {
      title: "Estilos UI empresariales",
      desc: "Layouts responsivos y estilos de componentes en plataformas internas y de cliente.",
      tags: ["CSS3", "SASS"],
    },
  },
};

const groupLabelByLang = {
  EN: {
    frontend: "// frontend",
    backend: "// backend",
    database: "// database",
  },
  ES: {
    frontend: "// frontend",
    backend: "// backend",
    database: "// base de datos",
  },
};

export function getStackContent(language = "EN") {
  const lang = language === "ES" ? "ES" : "EN";
  return {
    stackGroups: stackGroupsBase.map((group) => ({
      ...group,
      label: groupLabelByLang[lang][group.labelKey],
    })),
    stackPreviews: stackPreviewsByLang[lang],
  };
}

export const stackGroups = getStackContent("EN").stackGroups;
export const stackPreviews = stackPreviewsByLang.EN;
