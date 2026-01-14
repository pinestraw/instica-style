# COPILOT.md

## Icon generation (gpt-image-1.5)
- Use the Node script: `node scripts/generate_icons.js` (requires Node 18+ for built-in fetch).
- Model: `gpt-image-1.5`, size `1024x1024`, quality `high`.
- Env: set `OPENAI_API_KEY` (found in `../jungle-secrets/instica/.env.local`).
- Outputs: `instica-style-site/docs/public/icons/{navigation,actions,status,features,content}/`.
- Do not use the deleted Python/DALL-E script; JS is the source of truth.

## Deploying docs
- Build docs: `cd instica-style-site && npm install && GITHUB_PAGES=true npm run build`.
- Publish to GitHub Pages: copy `.vitepress/dist` to the `gh-pages` branch root and force-push.

## Notes
- Icon specs live inline in `scripts/generate_icons.js` (25 icons across 5 categories).
- Keep the `guide/icons.md` page aligned with any regenerated assets.
