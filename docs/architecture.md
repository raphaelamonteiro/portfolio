# Architecture Overview

This project is Raphaela Monteiro's personal portfolio built with Next.js 16 (App Router), React 19, and Tailwind CSS v4.

## Project Structure

```
portfolio/
├── app/                  # Next.js App Router routes & components
│   ├── about/            # About page route and components
│   ├── components/       # Shared UI components (header, footer, toggles)
│   ├── contact/          # Contact page stub
│   ├── projects/         # Projects directory & case studies
│   │   └── [slug]/       # Dynamic case study route and view
│   ├── services/         # Services page (commercial solutions)
│   ├── globals.css       # Theme definitions (@theme), fonts, animations
│   ├── layout.tsx        # Root HTML layout, font setup, navigation wrapper
│   ├── page.tsx          # Homepage (numbered-panel technical magazine)
│   ├── providers.tsx     # Custom bilingual i18n context provider
│   └── theme-provider.tsx# Custom dark/light theme state provider
├── data/                 # Content and data layer
│   ├── locales.ts        # Typed bilingual dictionaries (EN / PT)
│   ├── projects.ts       # Project metadata, categories, case study contents
│   └── tech-stack.ts     # Tech stack definitions (primary and secondary)
├── docs/                 # Documentation system, architecture, tasks, changelog
└── public/               # Static assets, resume PDFs, and icons
```

## Data Flow & Invariants

1. **Static Rendering:** All pages and case studies are statically pre-rendered (`generateStaticParams`).
2. **i18n Context:** `useTranslation` hook delivers translated strings from `data/locales.ts`. Type-safe via `Dict`.
3. **No External CMS:** All portfolio projects, taxonomy, and case study sections are defined statically in `data/projects.ts`.
4. **Theme System:** Dark mode default with light mode variant, driven by CSS variables in `globals.css` and applied via `theme-provider.tsx`.

