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
      title: "Multi-tab UI architecture",
      badge: "UI · UX",
      desc: "Owned the design and refactor of multiple platform tabs—restructuring page layout, interaction flows, and visual hierarchy so complex workflows felt clearer, faster, and more polished under real daily use.",
    },
    {
      title: "Permission-aware navigation",
      badge: "Role · Rendering ",
      desc: "Rebuilt role, permission, and main-menu rendering; eliminated redundant loops so critical navigation dropped from multi-second waits to instant UX.",
    },
    {
      title: "Server-side data flows",
      badge: "Backend · Data",
      desc: "Refactored inefficient backend layers to lighten server load and keep data delivery fast when many users operate the platform at once.",
    },
    {
      title: "End-to-end delivery",
      badge: "All rounder · Agile",
      desc: "Owned tasks from UI design and implementation through pre-production deployment, technical documentation, and Agile dailies.",
    },
  ],
  ES: [
    {
      title: "Arquitectura UI multi-pestaña",
      badge: "UI · UX",
      desc: "Colaboré enormemente en el diseño y refactor de múltiples pestañas de plataforma, reorganizando layout, flujos de interacción y jerarquía visual para una experiencia más clara, rápida y pulida en uso real.",
    },
    {
      title: "Navegación por permisos",
      badge: "Roles · Render",
      desc: "Rediseñé el render del menú principal basado en roles y permisos, eliminando bucles redundantes para pasar de cargas de varios segundos a una UX instantánea.",
    },
    {
      title: "Flujos de datos backend",
      badge: "Backend · Data",
      desc: "Refactoricé capas ineficientes del backend para reducir carga de servidor y mantener la entrega de datos rápida bajo alta concurrencia.",
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
      title: "Dwit",
      label: lang === "ES" ? "// cimkey · enterprise" : "// cimkey · enterprise",
      desc:
        lang === "ES"
          ? "Proyecto principal en Cimkey: plataforma web B2B compleja para gestionar fichas técnicas estructurales en sectores químico y alimentario."
          : "Flagship enterprise build at Cimkey: a complex B2B web platform for governing structural technical data sheets across chemical and food-industry workflows.",
      highlights: dwitHighlights,
      tags: ["JavaScript", "Java", "HTML5", "CSS/SASS", "PL/SQL", "UI/UX", "Agile", "B2B"],
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
          ? "Desarrollo de funcionalidades y soporte en producción para el CRM logístico de ISS: pedidos, empleados y resolución de incidencias críticas."
          : "CRM features and production support for ISS logistics—orders, employees, and critical bug fixes.",
      tags: ["JavaScript", "Java", "PL/SQL", "CRM"],
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
      tags: ["React", "JavaScript", "HTML5", "CSS/SASS"],
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
