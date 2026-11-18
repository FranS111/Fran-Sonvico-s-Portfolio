const GITHUB_USER = "https://github.com/FranS111";
const damProjectsByLang = {
  EN: [
    {
      name: "DAM1-BookManager",
      lang: "Java",
      desc: "Author and book management system with **CRUD** operations and MySQL persistence via JDBC.",
      href: `${GITHUB_USER}/DAM1-BookManager`,
    },
    {
      name: "DAM2-ElementalTypes",
      lang: "Java",
      desc: "**File-driven analytics**: character stats, elemental distribution reports, and combination reaction rules exported to structured outputs.",
      href: `${GITHUB_USER}/DAM2-ElementalTypes`,
    },
    {
      name: "DAM1-SessionShoppingList",
      lang: "PHP",
      desc: "Session-based shopping list with full **CRUD**, dynamic total pricing, and validated forms across add, edit, and delete flows.",
      href: `${GITHUB_USER}/DAM1-SessionShoppingList`,
    },
    {
      name: "DAM2-AnimalStoreManager",
      lang: "Dart",
      desc: "Animal store management with **CRUD**, filters, and inventory views.",
      href: `${GITHUB_USER}/DAM2-AnimalStoreManager`,
    },
    {
      name: "DAM2-Viticulture",
      lang: "Java",
      desc: "Winery operations system using **MongoDB** for bodegas, fields, and vines.",
      href: `${GITHUB_USER}/DAM2-Viticulture`,
    },
    {
      name: "DAM2-Unity-Project",
      lang: "C#",
      desc: "**Unity** project for the Multi-platform Applications Development degree.",
      href: `${GITHUB_USER}/DAM2-UnoGame`,
    },
  ],
  ES: [
    {
      name: "DAM1-BookManager",
      lang: "Java",
      desc: "Sistema de gestión de autores y libros con operaciones **CRUD** y persistencia en MySQL mediante JDBC.",
      href: `${GITHUB_USER}/DAM1-BookManager`,
    },
    {
      name: "DAM2-ElementalTypes",
      lang: "Java",
      desc: "**Analítica basada en ficheros**: estadísticas de personajes, distribución elemental y reglas de reacción exportadas a salidas estructuradas.",
      href: `${GITHUB_USER}/DAM2-ElementalTypes`,
    },
    {
      name: "DAM1-SessionShoppingList",
      lang: "PHP",
      desc: "Lista de compra con sesiones y **CRUD** completo, cálculo dinámico del total y formularios validados para alta, edición y borrado.",
      href: `${GITHUB_USER}/DAM1-SessionShoppingList`,
    },
    {
      name: "DAM2-AnimalStoreManager",
      lang: "Dart",
      desc: "Gestión de tienda de animales con **CRUD**, filtros y vistas de inventario.",
      href: `${GITHUB_USER}/DAM2-AnimalStoreManager`,
    },
    {
      name: "DAM2-Viticulture",
      lang: "Java",
      desc: "Sistema para operaciones de viticultura usando **MongoDB** para bodegas, campos y viñas.",
      href: `${GITHUB_USER}/DAM2-Viticulture`,
    },
    {
      name: "DAM2-Unity-Project",
      lang: "C#",
      desc: "Proyecto en **Unity** del ciclo de Desarrollo de Aplicaciones Multiplataforma.",
      href: `${GITHUB_USER}/DAM2-UnoGame`,
    },
  ],
};

const dwitHighlightsByLang = {
  EN: [
    {
      title: "Dynamic filtering system",
      badge: "Angular · Tailwind",
      desc: "Designed and implemented a generic **filtering system** by data-sheet type—driving create, edit, and delete flows with Angular, JavaScript, and Tailwind CSS while keeping UI state synced with Java, .NET, and C# services.",
    },
    {
      title: "Permission-aware navigation",
      badge: "Role · Rendering ",
      desc: "Redesigned and optimized role, permission, and menu rendering; eliminated redundant iterations so critical navigation dropped from multi-second waits to **instantaneous UX**.",
    },
    {
      title: "Query & data optimization",
      badge: "PL/SQL · Backend",
      desc: "Analyzed and refactored inefficient queries and stored procedures to reduce **database load** and keep data delivery fast under multi-user operational stress.",
    },
    {
      title: "End-to-end delivery",
      badge: "All rounder · Agile",
      desc: "Delivered tasks from UI design through **pre-production** deployment, with technical documentation and daily Agile coordination.",
    },
  ],
  ES: [
    {
      title: "Filtrado dinámico",
      badge: "Angular · Tailwind",
      desc: "Diseñé e implementé un sistema genérico de **filtrado** por tipo de ficha—flujos de alta, edición y borrado con Angular, JavaScript y Tailwind CSS, manteniendo el estado de UI sincronizado con servicios Java, .NET y C#.",
    },
    {
      title: "Navegación por permisos",
      badge: "Roles · Render",
      desc: "Rediseñé y optimicé el render de roles, permisos y menú; eliminé iteraciones redundantes para pasar de cargas de varios segundos a una **UX instantánea**.",
    },
    {
      title: "Optimización de consultas",
      badge: "PL/SQL · Backend",
      desc: "Analicé y refactoricé consultas y procedimientos ineficientes para reducir **carga de base de datos** y mantener la entrega de datos rápida bajo estrés operativo multiusuario.",
    },
    {
      title: "Entrega end-to-end",
      badge: "All rounder · Agile",
      desc: "Entregué tareas desde diseño de UI hasta **preproducción**, con documentación técnica y coordinación diaria en Agile.",
    },
  ],
};

export function getProjectsContent(language = "EN") {
  const lang = language === "ES" ? "ES" : "EN";
  const damProjects = damProjectsByLang[lang];
  const dwitHighlights = dwitHighlightsByLang[lang];

  return [
    {
      title: lang === "ES" ? "Wildlife Encyclopedia" : "Wildlife Encyclopedia",
      label: lang === "ES" ? "// en curso · personal" : "// ongoing · personal",
      status: lang === "ES" ? "En curso" : "Ongoing",
      desc:
        lang === "ES"
          ? "App web moderna, calmada e inspirada en la naturaleza para explorar especies animales. Proyecto en curso orientado a craft frontend: **design system**, arquitectura de componentes, accesibilidad, rendimiento y testing — camino **Frontend Architect / Design Engineer**."
          : "A modern, calm, nature-inspired web app for browsing and exploring animal species. Ongoing build focused on frontend craft: **design system**, component architecture, accessibility, performance, and testing — aimed at a **Frontend Architect / Design Engineer** path.",
      highlights:
        lang === "ES"
          ? [
              {
                title: "Design system & tokens",
                badge: "UI · Tokens",
                desc: "Tailwind CSS con **design tokens** (variables CSS) para color, spacing, radius, tipografía y motion, manteniendo una UI coherente y escalable.",
              },
              {
                title: "Arquitectura & accesibilidad",
                badge: "A11y · Components",
                desc: "Arquitectura de componentes reutilizable con foco en **accesibilidad** y experiencia de exploración clara en desktop y móvil.",
              },
              {
                title: "SSG & rendimiento",
                badge: "Next.js · Perf",
                desc: "Next.js App Router + React + TypeScript (strict), con generación estática (**SSG**) en páginas de especies para velocidad y SEO.",
              },
            ]
          : [
              {
                title: "Design system & tokens",
                badge: "UI · Tokens",
                desc: "Tailwind CSS with **design tokens** (CSS variables) for color, spacing, radius, typography, and motion—keeping the UI coherent and scalable.",
              },
              {
                title: "Architecture & accessibility",
                badge: "A11y · Components",
                desc: "Reusable component architecture with a strong **accessibility** focus and a clear exploration experience across desktop and mobile.",
              },
              {
                title: "SSG & performance",
                badge: "Next.js · Perf",
                desc: "Next.js App Router + React + TypeScript (strict), with static generation (**SSG**) for species pages to favor speed and SEO.",
              },
            ],
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "SSG",
        "Design System",
        "A11y",
        "Testing",
      ],
      layout: "full",
    },
    {
      title: "Dwit",
      label: lang === "ES" ? "// cimkey · enterprise" : "// cimkey · enterprise",
      desc:
        lang === "ES"
          ? "Proyecto principal en Cimkey: plataforma **B2B** para fichas técnicas estructurales. Frontend Angular, JavaScript y Tailwind CSS sincronizado con servicios Java, .NET y C#."
          : "Flagship Cimkey build: **B2B** platform for structural technical data sheets. Angular, JavaScript, and Tailwind CSS frontend synced with Java, .NET, and C# services.",
      highlights: dwitHighlights,
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
        "B2B",
      ],
      layout: "wide",
      liveHref: "https://dwit.es/",
    },
    {
      title: lang === "ES" ? "Proyectos académicos DAM" : "DAM Academic Projects",
      desc:
        lang === "ES"
          ? "Aplicaciones construidas durante DAM: sistemas **CRUD**, juegos y apps orientadas a datos con Java, PHP, C#, Dart y bases de datos relacionales."
          : "Applications built during the Multi-platform Applications Development degree: **CRUD** systems, games, and data-driven apps across Java, PHP, C#, Dart, and relational databases.",
      tags: ["Java", "C#", "PHP", "Dart", "MySQL"],
      layout: "tall",
      collection: damProjects,
      githubHref: `${GITHUB_USER}?tab=repositories`,
    },
    {
      title: "Dwit · ISS CRM",
      label: lang === "ES" ? "// cimkey · producción" : "// cimkey · production",
      desc:
        lang === "ES"
          ? "Mantenimiento y resolución en tiempo real de **bugs críticos** del CRM logístico de ISS (seguridad multinacional), asegurando continuidad de negocio en pedidos y gestión de empleados."
          : "Comprehensive maintenance and real-time **critical bug** resolution for the logistics CRM of multinational security firm ISS—keeping order and employee workflows running in production.",
      tags: ["JavaScript", "Java", ".NET", "C#", "PL/SQL", "CRM"],
      layout: "small-a",
      compact: true,
    },
    {
      title: lang === "ES" ? "Este portfolio" : "This Portfolio",
      label: lang === "ES" ? "// personal · frontend" : "// personal · frontend",
      desc:
        lang === "ES"
          ? "Portfolio en React con **UI modular**, desplegado en GitHub Pages."
          : "React portfolio site with **modular UI**, deployed on GitHub Pages.",
      tags: ["React", "JavaScript", "HTML5", "CSS3", "SASS"],
      layout: "small-b",
      compact: true,
      liveHref: "https://frans111.github.io/Fran-Sonvico-s-Portfolio/",
      githubHref: `${GITHUB_USER}/Fran-Sonvico-s-Portfolio`,
    },
  ];
}

export const damProjects = damProjectsByLang.EN;
export const dwitHighlights = dwitHighlightsByLang.EN;
export const projects = getProjectsContent("EN");
