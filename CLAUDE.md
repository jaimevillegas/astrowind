# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server at localhost:3000
npm run build        # Build production site to ./dist/
npm run preview      # Preview production build locally
npm run check        # Run all checks (astro check + eslint + prettier)
npm run fix          # Fix eslint and prettier issues
```

## Architecture

This is an Astro 4.0 + Tailwind CSS website based on the AstroWind template. It uses static output mode.

### Configuration System

The site configuration lives in `src/config.yaml` and is loaded through a custom Astro integration (`vendor/integration/`). This integration creates a virtual module `astrowind:config` that exports:
- `SITE` - Site name, URL, trailing slash settings
- `I18N` - Language and text direction
- `METADATA` - Default SEO metadata
- `APP_BLOG` - Blog configuration (permalinks, pagination, categories, tags)
- `UI` - Theme settings
- `ANALYTICS` - Google Analytics configuration

Import from the virtual module: `import { SITE, APP_BLOG } from 'astrowind:config';`

### Path Alias

The `~` alias maps to `./src/`, used throughout the codebase (e.g., `~/components/`, `~/utils/`).

### Layout Hierarchy

- `Layout.astro` - Base HTML wrapper with meta, analytics, view transitions
- `PageLayout.astro` - Extends Layout, adds Header/Footer
- `MarkdownLayout.astro` - For markdown/MDX content pages

### Content Collections

Blog posts use Astro's content collections in `src/content/post/`. Schema defined in `src/content/config.ts` with fields: title, publishDate, excerpt, image, category, tags, author, draft.

### Key Utilities

- `src/utils/permalinks.ts` - URL/slug generation, respects config for trailing slashes and blog paths
- `src/utils/blog.ts` - Blog post fetching and filtering
- `src/utils/frontmatter.ts` - Remark/rehype plugins for reading time, responsive tables, lazy images

### Navigation

Header and footer navigation defined in `src/navigation.ts` using `getPermalink()` helper.

### Widgets

Reusable page sections in `src/components/widgets/` (Hero, Features, CallToAction, Steps, FAQs, Contact, etc.). Each widget accepts typed props defined in `src/types.d.ts`.

### Styling

- Tailwind with custom theme colors via CSS variables (`--aw-color-primary`, etc.)
- Dark mode via `class` strategy
- Custom fonts configured in `src/components/CustomStyles.astro`
- Typography plugin for prose content
