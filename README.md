# Achieve Performance Training

Marketing website for **Achieve Performance Training** — a locally owned strength & conditioning and youth athletic development gym in Clinton, MA. Built with Next.js (App Router), TypeScript, and Tailwind CSS, and deployed to GitHub Pages.

![Achieve Performance Training — homepage hero](public/hero-preview.png)

**Live site:** https://lukegrady1.github.io/achieve/

## Tech stack

- **Next.js 16** (App Router, static export)
- **TypeScript**
- **Tailwind CSS v4**
- **next/font** — Bebas Neue (display) + Poppins (body)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it. Edit content in `src/lib/content.ts` and sections in `src/components/`.

## Project structure

```
src/
  app/            # routes (homepage + interior pages) and root layout
  components/     # reusable UI + section components
  lib/content.ts  # all site copy & data (typed)
public/           # images, logos, and static assets
image-loader.ts   # custom next/image loader (applies GitHub Pages base path)
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds a static
export (`output: 'export'`) with `NEXT_PUBLIC_BASE_PATH=/achieve` and publishes
it to GitHub Pages.

## Placeholders to replace before final launch

- Schedule times and gym hours
- Subscribe pricing
- Public email and street address
- Genuine member testimonials
- Legal copy (Terms / Privacy / Disclaimers)
- Contact and login form backends (currently not wired up)
