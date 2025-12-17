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

### Internationalization (i18n)

The site supports English and Spanish with Astro's built-in i18n:
- Default locale: `en`
- Localized pages live under `src/pages/en/` and `src/pages/es/`
- Root `src/pages/index.astro` serves as the default landing
- Separate navigation files: `src/navigation.ts` (English) and `src/navigationEsp.ts` (Spanish)
- Language switcher in `src/components/common/LanguageSwitcher.astro` toggles between `/en/` and `/es/` paths
- Header determines current language from URL path prefix

### Layout Hierarchy

- `Layout.astro` - Base HTML wrapper with meta, analytics, view transitions
- `PageLayout.astro` - Extends Layout, adds Header/Footer (English)
- `PageLayoutEsp.astro` - Spanish version with Spanish navigation
- `MarkdownLayout.astro` - For markdown/MDX content pages

### Content Collections

Blog posts use Astro's content collections in `src/content/post/`. Schema defined in `src/content/config.ts` with fields: title, publishDate, excerpt, image, category, tags, author, draft.

### Key Utilities

- `src/utils/permalinks.ts` - URL/slug generation, respects config for trailing slashes and blog paths
- `src/utils/blog.ts` - Blog post fetching and filtering
- `src/utils/frontmatter.ts` - Remark/rehype plugins for reading time, responsive tables, lazy images

### Navigation

Header and footer navigation defined in `src/navigation.ts` (English) and `src/navigationEsp.ts` (Spanish) using `getPermalink()` helper.

### Widgets

Reusable page sections in `src/components/widgets/` (Hero, Features, CallToAction, Steps, FAQs, Contact, etc.). Each widget accepts typed props defined in `src/types.d.ts`.

### Icons

Uses `astro-icon` with pre-configured icon sets:
- `tabler:*` - Primary icon set (e.g., `<Icon name="tabler:mail" />`)
- `flat-color-icons:*` - Color icons for features
- `logos:*` and `simple-icons:*` - Brand/logo icons

Icons are used via the `Icon` component from `astro-icon/components`.

### Forms & Contact

Contact forms use EmailJS (`@emailjs/browser`) for client-side email submission. Configuration in `src/components/ui/Form.astro`.

### External Images

Remote images from `cdn.pixabay.com` are allowed (configured in `astro.config.ts`). Add other domains to `image.domains` as needed.

### Styling

- Tailwind with custom theme colors via CSS variables (`--aw-color-primary`, etc.)
- Dark mode via `class` strategy
- Custom fonts configured in `src/components/CustomStyles.astro`
- Typography plugin for prose content
