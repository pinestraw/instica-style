# Instica Style

Design system source for Instica’s inventory experiences. The repo contains:

- `instica-style-site/` – VitePress documentation site (guides, inspiration gallery, token references).
- `tokens/` – color, typography, and spacing JSON files that power the UI libraries.
- `resources/` – high-resolution screenshots and assets referenced throughout the docs.

## Local development

```bash
cd instica-style-site
npm install
npm run dev
```

## Production build

```bash
cd instica-style-site
npm run build
```

## GitHub Pages deployment

Every push to `main` triggers `.github/workflows/deploy-pages.yml`:

1. Builds the VitePress site with the `GITHUB_PAGES` flag so links use the `/instica-style/` base path.
2. Uploads `docs/.vitepress/dist` as an artifact.
3. Deploys via `actions/deploy-pages@v4`.

To finish setup, open the repository settings and enable **GitHub Pages → Source: GitHub Actions** once. After that, the workflow manages all future publishes automatically.