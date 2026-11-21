# Task 05 — Projects Page: Mission Control Layout

- **Date:** 2026-11-21
- **Version:** 0.5.0
- **Status:** Done
- **Scope:** Refactor `app/projects/page.tsx` to match the "Aerospace Terminal" palette and the HUD mission control layout.

---

## 1. Files Changed

- `app/projects/page.tsx` — Full refactor with radar dot matrix background, Panel 001 Header, Panel 002 Terminal Bracket Filters (`[ ALL ]`), and 3-column responsive bento grid of mission cards.
- `package.json` — Bumped version from `0.4.0` to `0.5.0`.
- `docs/CHANGELOG.md` — Logged v0.5.0 release.
- `docs/tasks/task-05-projects-page.md` — Created task documentation.

---

## 2. Key Decisions & Anatomy

### Radar Grid & Tactical HUD Framing
- Embedded the fixed tactical radar dot matrix pattern (`radial-gradient(var(--color-bone) 1px, transparent 1px)` at 32px) matching the Home page.
- Framed Panel 001 with `CornerBrackets`, `001 // PROJECTS`, `SYS_DATABASE`, and the metallic horizon gradient H1.

### Terminal Filter Bar
- Replaced button pills with terminal-style bracket links: `[ ALL ]`, `[ SYSTEMS ]`, `[ AI ]`, `[ RESEARCH ]`, `[ WEB ]`, `[ PERSONAL ]`.
- Active state: `text-amethyst border-b border-amethyst font-bold`.
- Inactive state: `text-ash hover:text-bone`.

### Project Card Anatomy & Event Isolation
- Background: `bg-surface/40 border border-lilac hover:border-amethyst/40 transition-colors rounded-sm p-6`.
- Metadata top row: Year (`text-amethyst/60`), semantic status dot (`bg-emerald-400` active, `bg-lilac` WIP, `bg-ash` completed), status text in `text-ash`.
- GitHub Icon: Absolute top-right corner SVG with `onClick={(e) => e.stopPropagation()}` to prevent triggering card navigation.
- Whole card links to `/projects/[slug]` when `hasCaseStudy === true`.
- Monospace stack tag formatting: first 4 items separated by `·`, with `+N` indicator if more.
- Footer: Category on the left, `Read →` on the right.

---

## 3. Verification

- `npx tsc --noEmit` — Exit code 0.
- `npx next build --webpack` — Exit code 0.
