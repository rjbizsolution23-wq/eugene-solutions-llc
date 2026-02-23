# Architecture

## System Overview

Eugene Solutions LLC website is a server-side rendered (SSR) application built on Cloudflare Workers using the Hono framework.

```
Client Browser
     |
     v
Cloudflare CDN (Global Edge Network)
     |
     v
Cloudflare Workers (SSR)
     |
     ├── Hono Router (26 routes)
     ├── JSX Renderer (HTML generation)
     ├── Static Assets (CSS, JS, images)
     └── API Endpoints (contact form, appointments)
```

## Technology Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Runtime | Cloudflare Workers | Edge compute |
| Framework | Hono v4 | HTTP routing + JSX |
| Styling | Tailwind CSS (CDN) | Utility-first CSS |
| Fonts | Google Fonts (Inter, Space Grotesk) | Typography |
| Icons | Font Awesome 6 | Icon library |
| Build | Vite v6 | Module bundling |
| Deploy | Cloudflare Pages | Edge deployment |

## Route Architecture

### Public Pages (10 routes)
Server-rendered marketing pages with SEO metadata, Circular 230 banner, and responsive layouts.

### Legal Pages (3 routes)
Compliance-focused pages (GLBA, Terms, Accessibility) with proper legal citations.

### Client Portal (7 routes)
Protected client-facing pages for document management, return tracking, and communication.

### Admin Portal (6 routes)
Internal administration pages for staff, analytics, and compliance monitoring.

### API (3 routes)
JSON endpoints for form submissions and health checks.

## Build Process

```
src/index.tsx  -->  Vite Build  -->  dist/_worker.js  -->  Cloudflare Pages
                                      dist/static/*
```

1. Vite compiles TypeScript + JSX into a single worker bundle
2. Static assets from `public/` are copied to `dist/`
3. `wrangler pages deploy` uploads to Cloudflare's global network

## Security Architecture

- IRS Circular 230 compliance banner (every page)
- GLBA-compliant privacy notice
- FTC Safeguards Rule adherence
- WISP (Written Information Security Plan) documentation
- AES-256 encryption at rest (when storage is integrated)
- TLS 1.3 in transit (Cloudflare default)
- WCAG 2.1 AA accessibility
