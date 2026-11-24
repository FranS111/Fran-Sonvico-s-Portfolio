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
      title: "EXOCAT Interactive Visualizer",
      label: lang === "ES" ? "// en curso · personal" : "// ongoing · personal",
      status: lang === "ES" ? "En curso" : "Ongoing",
      desc:
        lang === "ES"
          ? "Atlas interactivo de la **fauna exótica invasora de Cataluña**: un dashboard de datos con filtrado cruzado y una guía de campo visual en una sola app. Cubre 31 especies invasoras reales en las 14 cuencas fluviales catalanas, con registros sintéticos y deterministas para la demo."
          : "Interactive atlas of the **invasive alien fauna of Catalonia**: a cross-filtering data dashboard and a visual field guide in one app. Covers 31 real invasive species across Catalonia's 14 river basins, with seeded, deterministic synthetic records for demo purposes.",
      highlights:
        lang === "ES"
          ? [
              {
                title: "Dashboard con filtrado cruzado",
                badge: "Leaflet · Recharts",
                desc: "Vista de datos para técnicos e investigadores: mapa Leaflet (registros en capa canvas, malla de densidad de 10 km, cuencas), composición taxonómica, registros por cuenca y riesgo, timeline con **brush** de periodo y catálogo de especies ordenable. Cada filtro actualiza mapa, gráficos y tabla a la vez.",
              },
              {
                title: "Guía de campo visual",
                badge: "Explore · d3-geo",
                desc: "Vista editorial para el público: los cinco grupos animales, ficha destacada por especie (historia, área nativa y ruta hasta Cataluña), **atlas de orígenes** con d3-geo, timeline de primeras llegadas y consejos para ayudar.",
              },
              {
                title: "Arquitectura tipada",
                badge: "React · TypeScript",
                desc: "React 18 + TypeScript sin framework de UI: contextos de datos, filtros (**useReducer** con datos derivados memoizados) y UI, hooks dedicados y estilos con **tokens CSS**. Vite como build.",
              },
              {
                title: "i18n, temas y accesibilidad",
                badge: "A11y · i18n",
                desc: "Catalán, castellano e inglés (las claves que faltan son errores de compilación), tema día/noche según el sistema, búsqueda predictiva sin acentos, <dialog> nativo, vista de tabla para cada gráfico y soporte de **reduced motion**.",
              },
            ]
          : [
              {
                title: "Cross-filtering dashboard",
                badge: "Leaflet · Recharts",
                desc: "Data view for technicians and researchers: Leaflet map (canvas-rendered records, 10 km density grid, basin hubs), taxonomic composition, records by watershed and risk, a **brushable** timeline, and a sortable species catalogue. Every filter updates the map, charts, and table together.",
              },
              {
                title: "Visual field guide",
                badge: "Explore · d3-geo",
                desc: "Editorial, photo-led view for the general public: the five animal groups, a spotlight per species (story, native range, route to Catalonia), an **atlas of origins** built with d3-geo, a timeline of first arrivals, and practical ways to help.",
              },
              {
                title: "Typed architecture",
                badge: "React · TypeScript",
                desc: "React 18 + TypeScript with no UI framework: data, filter (**useReducer** with memoised derived data), and UI contexts, dedicated hooks, and plain **CSS tokens**. Built with Vite.",
              },
              {
                title: "i18n, themes & accessibility",
                badge: "A11y · i18n",
                desc: "Catalan, Spanish, and English (missing keys are compile errors), system-aware day/night theme, accent-insensitive predictive search, native <dialog> profiles, table views for every chart, and **reduced-motion** support.",
              },
            ],
      tags: [
        "React",
        "TypeScript",
        "Vite",
        "Leaflet",
        "Recharts",
        "d3-geo",
        "Data Viz",
        "i18n",
        "A11y",
      ],
      layout: "full",
      githubHref: `${GITHUB_USER}/exocat-visualizer`,
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
