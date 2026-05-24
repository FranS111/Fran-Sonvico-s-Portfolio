# Fran Sonvico's Portfolio

Personal portfolio built with React + Vite.

**Live site:** [frans111.github.io/Fran-Sonvico-s-Portfolio/](https://frans111.github.io/Fran-Sonvico-s-Portfolio/)

## GitHub Pages deployment

The workflow [`.github/workflows/static.yml`](.github/workflows/static.yml) builds the app and publishes `dist/` to the **`gh-pages`** branch.

In the repository **Settings → Pages**:

1. **Source:** Deploy from a branch
2. **Branch:** `gh-pages` / `/ (root)`

If the site looks blank, Pages is likely serving the `main` branch source files instead of the built `dist/` output. Switch the source to `gh-pages` as above and re-run the workflow (Actions → Deploy portfolio to GitHub Pages → Run workflow).

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview -- --base /Fran-Sonvico-s-Portfolio/
```

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
