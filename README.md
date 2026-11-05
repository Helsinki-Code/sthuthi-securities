# Sthuthi Securities

Sthuthi Securities is a cybersecurity assessment, remediation, and retesting product from Sthuthi Technologies, LLC. This first release combines a public service site, a labeled demo client workspace, a staff delivery console, a persisted assessment-request API, and a deterministic synthetic authorization test.

## Run it

The project reuses the maintained React, Vite, and TypeScript toolchain installed in the parent repository.

```bash
npm test
npm run build
npm start
```

Open `http://localhost:4173`. The production-style server serves the built app and the local API. Use `npm run dev` for UI work; form persistence and synthetic runs require `npm start` after a build.

## Sitemap generation

`npm run build` regenerates `public/sitemap.xml` and `public/robots.txt` before copying public assets into the production bundle. The generator discovers public static routes from `src/App.tsx`, service routes from `src/catalog.mjs`, and article routes and modification dates from `src/articles.ts`. Demo, authentication, private-workspace, legal-draft, and duplicate alias routes are excluded.

Run `npm run generate:sitemap` when you only need to refresh the crawler files. Do not edit `public/sitemap.xml` manually. Set `CANONICAL_ORIGIN` to the verified production HTTPS origin during deployment so the generated sitemap uses absolute URLs.

Assessment requests are stored in `data/requests.json` with owner-only file permissions. This file is ignored and is not a production database. Do not put passwords, tokens, or customer records in a request.

## Important routes

- `/` public site
- `/services` and `/services/:slug` structured catalog and detail pages
- `/request` persisted intake
- `/workspace` labeled client demo and synthetic vertical slice
- `/internal` labeled staff demo and real provider status
- `/sample-report` illustrative report with print watermark

## Architecture

The browser calls the application API. The API validates intake, organization and role rules, and signed-scope gates. The implemented synthetic adapter runs a local two-customer support-agent fixture and returns provenance-rich evidence. Production scanners, model providers, secrets, object storage, identity, payment, and notifications remain behind provider boundaries and are explicitly unconnected.

See [docs/architecture.md](docs/architecture.md), [docs/capability-matrix.md](docs/capability-matrix.md), [docs/keyword-research-2026-11.md](docs/keyword-research-2026-11.md), [docs/competitor-analysis-2026-11.md](docs/competitor-analysis-2026-11.md), and [docs/content-strategy-2026-11.md](docs/content-strategy-2026-11.md).

## Deployment

1. Copy `.env.example` to the deployment secret/config system. Do not commit secrets.
2. Replace JSON intake storage with tenant-aware PostgreSQL migrations and backups.
3. Configure an established identity provider with MFA and server-verified organization roles.
4. Configure private object storage, short-lived downloads, upload validation, and quarantine.
5. Configure secret management, notifications, and payment only after webhook verification and idempotency are implemented.
6. Set `CANONICAL_ORIGIN` only after the owner controls the deployed origin. The build will then generate absolute sitemap locations automatically.

The build is a coherent first release and a working local vertical slice. It is not labeled production-ready.
