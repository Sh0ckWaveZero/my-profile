# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
bun dev          # dev server at http://localhost:3000 (Turbopack)
bun run build    # production build
bun run lint     # ESLint with Next.js config
bun start        # production server
```

No test framework is configured.

## Architecture

Next.js 16 App Router + TypeScript + Tailwind CSS v4 + Framer Motion. Package manager: **bun**.

```
src/
  app/
    layout.tsx          # Root layout — Geist fonts, metadata, highlight.js CSS
    page.tsx            # Home page (Server Component) — fetches GitHub stats, passes to HeroSection
    globals.css         # Tailwind base + custom animations
    blog/
      page.tsx          # Blog listing
      antigravity-guide/page.mdx  # MDX blog post
  components/
    sections/
      HeroSection.tsx   # "use client" — animated hero, GitHub stats display, floating stat card
      TechStack.tsx     # "use client" — animated skill grid
    ui/
      background-gradient.tsx  # "use client" — decorative background
    CodeBlock.tsx       # "use client" — syntax highlighter for MDX
  lib/
    utils.ts            # cn() helper (clsx + tailwind-merge)
mdx-components.tsx      # MDX component overrides (uses CodeBlock for code)
```

**Data flow**: `page.tsx` (Server) fetches GitHub API with `revalidate: 86400` → passes `GitHubUser` to `HeroSection` as `initialStats`. Fallback values are hardcoded (`repos: 137`, `followers: 28`).

## Key Constraints

- `lucide-react` v1.x removed `Github` icon — use inline SVG instead (see `HeroSection.tsx` for the pattern already in use).
- `"use client"` required for any component using Framer Motion, hooks, or event handlers. Keep parent pages as Server Components.
- Path alias `@/` maps to `src/`. Always use it over relative paths.
- MDX pages are in `src/app/` and auto-configured via `@next/mdx` in next config.
