const GITHUB_USER = "https://github.com/FranS111";
const damProjectsByLang = {
  EN: [
    {
      name: "DAM1-BookManager",
      lang: "Java",
      desc: "Author and book management system with CRUD operations and MySQL persistence via JDBC.",
      href: `${GITHUB_USER}/DAM1-BookManager`,
    },
    {
      name: "DAM2-ElementalTypes",
      lang: "Java",
      desc: "File-driven analytics: character stats, elemental distribution reports, and combination reaction rules exported to structured outputs.",
      href: `${GITHUB_USER}/DAM2-ElementalTypes`,
    },
    {
      name: "DAM1-SessionShoppingList",
      lang: "PHP",
      desc: "Session-based shopping list with full CRUD, dynamic total pricing, and validated forms across add, edit, and delete flows.",
      href: `${GITHUB_USER}/DAM1-SessionShoppingList`,
    },
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
    },
  ],
  ES: [
    {
      name: "DAM1-BookManager",
      lang: "Java",
      desc: "Sistema de gestión de autores y libros con operaciones CRUD y persistencia en MySQL mediante JDBC.",
      href: `${GITHUB_USER}/DAM1-BookManager`,
    },
    {
      name: "DAM2-ElementalTypes",
      lang: "Java",
      desc: "Analítica basada en ficheros: estadísticas de personajes, distribución elemental y reglas de reacción exportadas a salidas estructuradas.",
      href: `${GITHUB_USER}/DAM2-ElementalTypes`,
    },
    {
      name: "DAM1-SessionShoppingList",
      lang: "PHP",
      desc: "Lista de compra con sesiones y CRUD completo, cálculo dinámico del total y formularios validados para alta, edición y borrado.",
      href: `${GITHUB_USER}/DAM1-SessionShoppingList`,
    },
    {
      name: "DAM2-AnimalStoreManager",
      lang: "Dart",
      desc: "Gestión de tienda de animales con CRUD, filtros y vistas de inventario.",
      href: `${GITHUB_USER}/DAM2-AnimalStoreManager`,
    },
    {
      name: "DAM2-Viticulture",
      lang: "Java",
      desc: "Sistema para operaciones de viticultura usando MongoDB para bodegas, campos y viñas.",
      href: `${GITHUB_USER}/DAM2-Viticulture`,
    },
    {
      name: "DAM2-Unity-Project",
      lang: "C#",
      desc: "Proyecto en Unity del ciclo de Desarrollo de Aplicaciones Multiplataforma.",
      href: `${GITHUB_USER}/DAM2-UnoGame`,
    },
  ],
};

const dwitHighlightsByLang = {
  EN: [
    {
      title: "Angular UI modules",
      badge: "Angular · Tailwind",
      desc: "Built and refactored Angular feature modules for data-sheet workflows—reusable components, reactive forms, and Tailwind CSS utility styling to keep dense enterprise UIs consistent and maintainable.",
    },
    {
      title: "Permission-aware navigation",
      badge: "Role · Rendering ",
      desc: "Rebuilt role, permission, and main-menu rendering; eliminated redundant loops so critical navigation dropped from multi-second waits to instant UX.",
    },
    {
      title: "Java & .NET data flows",
      badge: "Backend · Data",
      desc: "Worked across Java and .NET service layers to lighten server load, keep filters and sheet state in sync, and keep data delivery fast under concurrent enterprise use.",
    },
    {
      title: "End-to-end delivery",
      badge: "All rounder · Agile",
      desc: "Owned tasks from UI design and implementation through pre-production deployment, technical documentation, and Agile dailies.",
    },
  ],
  ES: [
    {
      title: "Módulos UI Angular",
      badge: "Angular · Tailwind",
      desc: "Construí y refactoricé módulos Angular para flujos de fichas técnicas—componentes reutilizables, formularios reactivos y estilos con Tailwind CSS para mantener UIs empresariales densas, coherentes y mantenibles.",
    },
    {
      title: "Navegación por permisos",
      badge: "Roles · Render",
      desc: "Rediseñé el render del menú principal basado en roles y permisos, eliminando bucles redundantes para pasar de cargas de varios segundos a una UX instantánea.",
    },
    {
      title: "Flujos Java y .NET",
      badge: "Backend · Data",
      desc: "Trabajé sobre capas de servicio Java y .NET para reducir carga de servidor, mantener filtros y estado de fichas sincronizados y entregar datos con rapidez bajo concurrencia empresarial.",
    },
    {
      title: "Entrega end-to-end",
      badge: "All rounder · Agile",
      desc: "Gestioné tareas desde diseño e implementación de UI hasta preproducción, documentación técnica y coordinación en Agile dailies.",
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
          ? "App web moderna, calmada e inspirada en la naturaleza para explorar especies animales. Proyecto en curso orientado a craft frontend: design system, arquitectura de componentes, accesibilidad, rendimiento y testing — camino Frontend Architect / Design Engineer."
          : "A modern, calm, nature-inspired web app for browsing and exploring animal species. Ongoing build focused on frontend craft: design system, component architecture, accessibility, performance, and testing — aimed at a Frontend Architect / Design Engineer path.",
      highlights:
        lang === "ES"
          ? [
              {
                title: "Design system & tokens",
                badge: "UI · Tokens",
                desc: "Tailwind CSS con design tokens (variables CSS) para color, spacing, radius, tipografía y motion, manteniendo una UI coherente y escalable.",
              },
              {
                title: "Arquitectura & accesibilidad",
                badge: "A11y · Components",
                desc: "Arquitectura de componentes reutilizable con foco en accesibilidad y experiencia de exploración clara en desktop y móvil.",
              },
              {
                title: "SSG & rendimiento",
                badge: "Next.js · Perf",
                desc: "Next.js App Router + React + TypeScript (strict), con generación estática (SSG) en páginas de especies para velocidad y SEO.",
              },
            ]
          : [
              {
                title: "Design system & tokens",
                badge: "UI · Tokens",
                desc: "Tailwind CSS with design tokens (CSS variables) for color, spacing, radius, typography, and motion—keeping the UI coherent and scalable.",
              },
              {
                title: "Architecture & accessibility",
                badge: "A11y · Components",
                desc: "Reusable component architecture with a strong accessibility focus and a clear exploration experience across desktop and mobile.",
              },
              {
                title: "SSG & performance",
                badge: "Next.js · Perf",
                desc: "Next.js App Router + React + TypeScript (strict), with static generation (SSG) for species pages to favor speed and SEO.",
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
          ? "Proyecto principal en Cimkey: plataforma web B2B compleja para gestionar fichas técnicas estructurales. Frontend Angular + Tailwind CSS integrado con servicios Java y .NET."
          : "Flagship enterprise build at Cimkey: a complex B2B web platform for structural technical data sheets. Angular + Tailwind CSS frontend integrated with Java and .NET services.",
      highlights: dwitHighlights,
      tags: [
        "Angular",
        "Tailwind CSS",
        "JavaScript",
        "Java",
        ".NET",
        "HTML5",
        "PL/SQL",
        "UI/UX",
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
          ? "Aplicaciones construidas durante DAM: sistemas CRUD, juegos y apps orientadas a datos con Java, PHP, C#, Dart y bases de datos relacionales."
          : "Applications built during the Multi-platform Applications Development degree: CRUD systems, games, and data-driven apps across Java, PHP, C#,  Dart, and relational databases.",
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
          ? "Funcionalidades y soporte en producción del CRM logístico de ISS: pedidos, empleados e incidencias críticas, con pantallas JavaScript y servicios .NET/Java respaldados en PL/SQL."
          : "CRM features and production support for ISS logistics—orders, employees, and critical fixes across JavaScript screens and .NET/Java services backed by PL/SQL.",
      tags: ["JavaScript", "Java", ".NET", "PL/SQL", "CRM"],
      layout: "small-a",
      compact: true,
    },
    {
      title: lang === "ES" ? "Este portfolio" : "This Portfolio",
      label: lang === "ES" ? "// personal · frontend" : "// personal · frontend",
      desc:
        lang === "ES"
          ? "Portfolio en React con UI modular, desplegado en GitHub Pages."
          : "React portfolio site with modular UI, deployed on GitHub Pages.",
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
