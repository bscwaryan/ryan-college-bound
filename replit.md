# Ryan College Bound

## Overview
A college consulting website for Alabama families built with Next.js, React, TypeScript, and Tailwind CSS. The site provides information about college consulting services, programs, financial aid, and contact options.

## Recent Changes
- 2026-02-15: Initial Replit setup — configured port 5000, allowed dev origins, set up deployment.

## Project Architecture
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Port**: 5000 (dev and production)

### Directory Structure
```
src/
  app/           - Next.js app router pages and layout
  components/    - React components (Header, Hero, About, Programs, etc.)
public/          - Static assets (logo)
```

### Key Config Files
- `next.config.ts` - Next.js config (unoptimized images, allowedDevOrigins)
- `postcss.config.mjs` - PostCSS with Tailwind
- `tsconfig.json` - TypeScript config
- `eslint.config.mjs` - ESLint config

## Scripts
- `npm run dev` - Development server on port 5000
- `npm run build` - Production build
- `npm run start` - Production server on port 5000
