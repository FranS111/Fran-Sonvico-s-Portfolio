const stackGroupsBase = [
  {
    labelKey: "frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
      "Vue.js",
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
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
    items: ["Java", "PHP", "Laravel", "Node.js", ".NET", "C#", "Python"],
  },
  {
    labelKey: "database",
    items: ["SQL", "PL/SQL", "MySQL", "MongoDB"],
  }
];

const stackPreviewsByLang = {
  EN: {
    JavaScript: {
      title: "Enterprise data-sheet platform",
      desc: "**Front-end architecture** and scalable filtering on Dwit, synced with Java, .NET, and C# services at Cimkey.",
      tags: ["JavaScript", "HTML5", "CSS3"],
    },
    TypeScript: {
      title: "Typed frontend craft",
      desc: "Strict **TypeScript** across Wildlife Encyclopedia (Next.js) and typed Angular modules in enterprise UI work.",
      tags: ["TypeScript", "React", "Angular"],
    },
    React: {
      title: "Portfolio & client UIs",
      desc: "Component-driven interfaces with focus on **performance** and modular architecture.",
      tags: ["React", "JavaScript"],
    },
    "Next.js": {
      title: "Wildlife Encyclopedia",
      desc: "App Router + React + TypeScript with static generation (**SSG**) for species pages—performance, SEO, and design-system driven UI.",
      tags: ["Next.js", "React", "TypeScript"],
    },
    Angular: {
      title: "Dwit enterprise UI (Cimkey)",
      desc: "Angular feature modules, **reusable components**, and reactive forms for structural data-sheet workflows on Dwit.",
      tags: ["Angular", "TypeScript", "JavaScript"],
    },
    "Vue.js": {
      title: "Component-driven UIs",
      desc: "Lightweight reactive interfaces and **reusable components** for fast, clear product experiences.",
      tags: ["Vue.js", "JavaScript"],
    },
    "Tailwind CSS": {
      title: "Dwit & Wildlife styling",
      desc: "Utility-first styling on Dwit enterprise UI at Cimkey, and **design-token** systems in Wildlife Encyclopedia.",
      tags: ["Tailwind CSS", "CSS3"],
    },
    "Node.js": {
      title: "JavaScript backend services",
      desc: "Server-side JavaScript for APIs, tooling, and **full-stack** delivery alongside modern frontend stacks.",
      tags: ["Node.js", "JavaScript"],
    },
    ".NET": {
      title: "Cimkey platform services",
      desc: ".NET and C# services supporting Dwit data-sheet flows and **ISS** logistics CRM alongside Java backends.",
      tags: [".NET", "C#"],
    },
    Java: {
      title: "Fullstack cohesion (Dwit)",
      desc: "Server-side flows for **permissions**, roles, and data-sheet lifecycle—coordinated with Angular UI and .NET/C# services under concurrent enterprise use.",
      tags: ["Java", "JavaScript"],
    },
    Laravel: {
      title: "Internal analytics dashboard",
      desc: "Full **dashboard** with migrations, APIs, and Livewire modules at New Strategy In Action.",
      tags: [],
    },
    Blade: {
      title: "Strategying client interfaces",
      desc: "**Server-rendered** UI views built at Strategying for internal and client-facing modules, with reusable templates and maintainable component structure.",
      tags: [],
    },
    jQuery: {
      title: "Strategying interaction layer",
      desc: "Used in Strategying projects to enhance **legacy** and hybrid interfaces with dynamic DOM interactions and smoother user flows.",
      tags: [],
    },
    PHP: {
      title: "Client applications",
      desc: "CRUD, localization, and validation flows for **Momento Seguros** and Smurfit Kappa.",
      tags: ["PHP", "Laravel", "Livewire"],
    },
    Livewire: {
      title: "Strategying modular dashboard UI",
      desc: "Built modular **Livewire** components in Strategying to deliver dynamic tables, filters, sorting, and pagination in production dashboards.",
      tags: [],
    },
    AJAX: {
      title: "DAM STUCOM coursework",
      desc: "Applied **asynchronous** request patterns during DAM studies at STUCOM to improve responsiveness in practical web development projects.",
      tags: [],
    },
    Flutter: {
      title: "DAM STUCOM mobile projects",
      desc: "Used in DAM STUCOM academic work to build and structure **cross-platform** mobile interfaces as part of multi-platform development training.",
      tags: [],
    },
    Python: {
      title: "DAM STUCOM foundations",
      desc: "Used in DAM STUCOM study projects for programming **fundamentals**, problem solving, and structured software development practice.",
      tags: [],
    },
    MongoDB: {
      title: "DAM STUCOM data practice",
      desc: "Worked with **MongoDB** in DAM STUCOM assignments to model and query document-based data in multi-platform application scenarios.",
      tags: [],
    },
    MySQL: {
      title: "Strategying relational data",
      desc: "**Relational schemas** and queries for internal dashboards and client apps at New Strategy In Action (Laravel / MySQL).",
      tags: ["MySQL", "SQL"],
    },
    SQL: {
      title: "Query optimization",
      desc: "Refactored **stored procedures** and queries to reduce load under operational stress at Cimkey.",
      tags: ["SQL", "PL/SQL"],
    },
    CSS3: {
      title: "Enterprise UI styling",
      desc: "**Responsive** layouts and component styling across client and internal platforms.",
      tags: ["CSS3"],
    },
    SASS: {
      title: "Structured stylesheets",
      desc: "SASS/SCSS for maintainable style **architecture**—variables, nesting, and modular stylesheets in product UIs.",
      tags: ["SASS", "CSS3"],
    },
  },
  ES: {
    JavaScript: {
      title: "Plataforma empresarial de fichas técnicas",
      desc: "**Arquitectura frontend** y filtrado escalable en Dwit, sincronizado con servicios Java, .NET y C# en Cimkey.",
      tags: ["JavaScript", "HTML5", "CSS3"],
    },
    TypeScript: {
      title: "Frontend tipado",
      desc: "**TypeScript** strict en Wildlife Encyclopedia (Next.js) y módulos Angular tipados en UI empresarial.",
      tags: ["TypeScript", "React", "Angular"],
    },
    React: {
      title: "Portfolio e interfaces cliente",
      desc: "Interfaces orientadas a componentes con foco en **rendimiento** y arquitectura modular.",
      tags: ["React", "JavaScript"],
    },
    "Next.js": {
      title: "Wildlife Encyclopedia",
      desc: "App Router + React + TypeScript con generación estática (**SSG**) en páginas de especies—rendimiento, SEO y UI basada en design system.",
      tags: ["Next.js", "React", "TypeScript"],
    },
    Angular: {
      title: "UI empresarial Dwit (Cimkey)",
      desc: "Módulos Angular, **componentes reutilizables** y formularios reactivos para flujos de fichas técnicas en Dwit.",
      tags: ["Angular", "TypeScript", "JavaScript"],
    },
    "Vue.js": {
      title: "UIs orientadas a componentes",
      desc: "Interfaces reactivas ligeras y **componentes reutilizables** para experiencias de producto claras y rápidas.",
      tags: ["Vue.js", "JavaScript"],
    },
    "Tailwind CSS": {
      title: "Estilos Dwit y Wildlife",
      desc: "Estilos utility-first en la UI empresarial de Dwit (Cimkey) y sistemas de **tokens** en Wildlife Encyclopedia.",
      tags: ["Tailwind CSS", "CSS3"],
    },
    "Node.js": {
      title: "Servicios backend en JavaScript",
      desc: "JavaScript en servidor para APIs, tooling y entrega **full-stack** junto a stacks frontend modernos.",
      tags: ["Node.js", "JavaScript"],
    },
    ".NET": {
      title: "Servicios de plataforma Cimkey",
      desc: "Servicios .NET y C# para flujos de fichas en Dwit y soporte del CRM logístico **ISS** junto a backends Java.",
      tags: [".NET", "C#"],
    },
    Java: {
      title: "Cohesión fullstack (Dwit)",
      desc: "Flujos server-side de **permisos**, roles y ciclo de vida de fichas—coordinados con UI Angular y servicios .NET/C# bajo concurrencia empresarial.",
      tags: ["Java", "JavaScript"],
    },
    Laravel: {
      title: "Dashboard interno de analítica",
      desc: "**Dashboard** completo con migraciones, APIs y módulos Livewire en New Strategy In Action.",
      tags: [],
    },
    Blade: {
      title: "Interfaces Strategying",
      desc: "Vistas **renderizadas en servidor** construidas en Strategying para módulos internos y de cliente, con plantillas reutilizables.",
      tags: [],
    },
    jQuery: {
      title: "Capa de interacción Strategying",
      desc: "Usado en proyectos Strategying para mejorar interfaces híbridas y **legacy** con interacciones dinámicas en el DOM.",
      tags: [],
    },
    PHP: {
      title: "Aplicaciones cliente",
      desc: "Flujos CRUD, localización y validación para **Momento Seguros** y Smurfit Kappa.",
      tags: ["PHP", "Laravel", "Livewire"],
    },
    Livewire: {
      title: "UI modular en Strategying",
      desc: "Componentes **Livewire** modulares para tablas dinámicas, filtros, ordenación y paginación en dashboards de producción.",
      tags: [],
    },
    AJAX: {
      title: "DAM STUCOM · coursework",
      desc: "Patrones de peticiones **asíncronas** aplicados en DAM STUCOM para mejorar respuesta en proyectos web prácticos.",
      tags: [],
    },
    Flutter: {
      title: "Proyectos mobile DAM STUCOM",
      desc: "Uso de Flutter en trabajos académicos DAM para crear interfaces mobile **multiplataforma**.",
      tags: [],
    },
    Python: {
      title: "Fundamentos DAM STUCOM",
      desc: "Uso de Python en proyectos de estudio para **fundamentos** de programación, resolución de problemas y práctica estructurada.",
      tags: [],
    },
    MongoDB: {
      title: "Práctica de datos DAM STUCOM",
      desc: "Trabajo con **MongoDB** en ejercicios DAM para modelar y consultar datos documentales en escenarios multiplataforma.",
      tags: [],
    },
    MySQL: {
      title: "Datos relacionales Strategying",
      desc: "Esquemas y consultas **relacionales** para dashboards internos y apps cliente en New Strategy In Action (Laravel / MySQL).",
      tags: ["MySQL", "SQL"],
    },
    SQL: {
      title: "Optimización de consultas",
      desc: "Refactor de consultas y **procedimientos** para reducir carga bajo estrés operativo en Cimkey.",
      tags: ["SQL", "PL/SQL"],
    },
    CSS3: {
      title: "Estilos UI empresariales",
      desc: "Layouts **responsivos** y estilos de componentes en plataformas internas y de cliente.",
      tags: ["CSS3"],
    },
    SASS: {
      title: "Hojas de estilo estructuradas",
      desc: "SASS/SCSS para **arquitectura** de estilos mantenible—variables, anidación y hojas modulares en UIs de producto.",
      tags: ["SASS", "CSS3"],
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
