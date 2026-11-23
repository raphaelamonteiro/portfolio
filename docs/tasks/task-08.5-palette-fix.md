# Task 08.5 — Contrast & Palette Fix (Deep Space Black)

- **Date:** 2026-11-21
- **Version:** 0.8.1
- **Status:** Done
- **Scope:** Revert from the blue-tinted palette to a strict "Deep Space Black" palette with high contrast, crisp typography, and neutral hero status text.

---

## 1. Files Changed

- `app/globals.css` — Updated `@theme` tokens:
  - `--color-void`: `#09080F`
  - `--color-surface`: `#12101A`
  - `--color-bone`: `#FFF8FC`
  - `--color-ash`: `#9E94A8`
  - `--color-amethyst`: `#8F7CFF`
  - `--color-lilac`: `#2A1B40`
  - `--color-navy`: `#0C081A`
  - `--color-gold`: `#C9A961`
  - Ensured `body` styles: `background-color: var(--color-void); color: var(--color-bone);`.
- `data/locales.ts` — Updated `home.status`:
  - EN: `"Open to research & collaborations"`
  - PT: `"Aberta a pesquisa & colaborações"`
- `app/page.tsx` — Updated H1 chrome horizon reflection gradient using `#FFF8FC`, `#9E94A8`, `#09080F`.
- `app/about/components/about-hero.tsx` — Updated H1 chrome horizon reflection gradient.
- `app/projects/page.tsx` — Updated H1 chrome horizon reflection gradient.
- `app/projects/[slug]/case-study.tsx` — Updated H1 chrome horizon reflection gradient.
- `app/services/page.tsx` — Updated H1 chrome horizon reflection gradient.
- `package.json` — Bumped version from `0.8.0` to `0.8.1`.
- `docs/CHANGELOG.md` — Logged v0.8.1 release.
- `docs/tasks/task-08.5-palette-fix.md` — Created task documentation.

---

## 2. Key Decisions & Verification

### Contrast & Readability
- Void (`#09080F`) establishes a deep space black background rather than blue.
- Secondary text Ash (`#9E94A8`) provides strong, WCAG AA-compliant contrast against both Void and Surface (`#12101A`).
- Lilac (`#2A1B40`) provides dark, subtle panel borders that structure the layout without bright purple outlines.
- Status string neutralized to focus on research and collaboration opportunities.

---

## 3. Verification

- `npx tsc --noEmit` — Exit code 0.
- `npx next build --webpack` — Exit code 0.
