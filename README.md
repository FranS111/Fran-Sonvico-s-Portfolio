# Fran Sonvico's Portfolio

Personal portfolio built with React + Vite.

**Live site:** [frans111.github.io/Fran-Sonvico-s-Portfolio/](https://frans111.github.io/Fran-Sonvico-s-Portfolio/)

## GitHub Pages deployment

The workflow [`.github/workflows/static.yml`](.github/workflows/static.yml) builds the app and publishes `dist/` to the **`gh-pages`** branch.

In the repository **Settings → Pages**:

1. **Source:** **GitHub Actions** (not "Deploy from a branch")
2. Push to `main` or run **Actions → Deploy portfolio to GitHub Pages → Run workflow**

If the site looks blank, Pages was likely serving raw source from `main` instead of the built `dist/` output. The workflow must run `npm run build` and upload the `dist` folder.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview -- --base /Fran-Sonvico-s-Portfolio/
```

## Contact form (Formspree)

The contact form sends messages via [Formspree](https://formspree.io).

1. Create a form at [formspree.io](https://formspree.io) and set the notification email to your inbox (e.g. the same address as `CONTACT_EMAIL` in `src/data/socials.jsx`).
2. Copy the form endpoint URL (format: `https://formspree.io/f/xxxxxxxx`).
3. Create `.env.local` in the project root (see `.env.example`):

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id
```

4. Restart the dev server after changing env variables.

For **GitHub Pages**, add `VITE_FORMSPREE_ENDPOINT` as a repository secret or build env var in your GitHub Actions workflow so it is available at build time.

Without this variable, the form shows a configuration error instead of submitting.

---

## React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
