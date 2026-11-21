# Task 07 — Case Study Page: Mission Dossier

- **Date:** 2026-11-21
- **Version:** 0.7.0
- **Status:** Done
- **Scope:** Refactor `app/projects/[slug]/case-study.tsx` to resemble a classified mission dossier / technical report adhering to the Aerospace Terminal theme.

---

## 1. Files Changed

- `app/projects/[slug]/case-study.tsx` — Full refactor with tactical radar dot matrix background, terminal command navigation (`$ cd ../projects`), Panel 001 Dossier Header with bracketed metadata and action buttons, 2-column `DossierSection` layout (Panels 002-008), and inline SVG architecture diagram for `sprb-bd`.
- `package.json` — Bumped version from `0.6.0` to `0.7.0`.
- `docs/CHANGELOG.md` — Logged v0.7.0 release.
- `docs/tasks/task-07-case-study.md` — Created task documentation.

---

## 2. Key Decisions & Anatomy

### Classified Dossier Structure
- **Navigation:** Replaced standard "Back" link with terminal directory command: `← $ cd ../projects`.
- **Dossier Header (Panel 001):**
  - Top row: `001 // DOSSIER` on the left, `[year] · [category] · [status]` on the right.
  - Title: Sharp chrome horizon gradient H1.
  - Stack: Rendered as monospace bracket tokens: `[ Python ] [ FastAPI ] [ Apache Spark ]`.
  - Links: Bracket buttons `[ GITHUB ] ↗`, `[ PAPER ] ↗`, `[ LIVE ] ↗`.
- **Two-Column Dossier Sections (Panels 002-008):**
  - Left column (`lg:col-span-3`): Sticky section label in `text-amethyst font-mono text-xs uppercase tracking-widest`.
  - Right column (`lg:col-span-9`): Body content in `text-ash font-mono leading-relaxed`.
  - Sections: Abstract, Context, Approach, Architecture, Implementation (formerly What I Built), Results, Reflection.

### SPRB-BD Architectural Diagram
- Rendered inline inside the Architecture section when `project.slug === 'sprb-bd'`.
- Clean vector diagram depicting the 4 layers:
  1. `[ 01 // PRESENTATION ]` (React · Map Coverage Visualizer)
  2. `[ 02 // APPLICATION ]` (FastAPI · Commands & Telemetry API)
  3. `[ 03 // PERSISTENCE ]` (PostgreSQL · State & Event Logs)
  4. `[ 04 // ANALYSIS ]` (Apache Spark · Analytical Verification)
- Rendered using CSS tokens `var(--color-lilac)`, `var(--color-surface)`, `var(--color-bone)`, `var(--color-ash)` and under 2KB.

---

## 3. Verification

- `npx tsc --noEmit` — Exit code 0.
- `npx next build --webpack` — Exit code 0.
