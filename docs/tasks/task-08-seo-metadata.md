# Task 08 — SEO, Metadata & Final Polish

- **Date:** 2026-11-21
- **Version:** 0.8.0
- **Status:** Done
- **Scope:** Implement SEO best practices, OpenGraph/Twitter cards, dynamic metadata for case studies, and complete design system audit/polish.

---

## 1. Files Changed

- `app/layout.tsx` — Added comprehensive root metadata: title, description, metadataBase, OpenGraph, Twitter card, robots, and author information.
- `app/projects/[slug]/page.tsx` — Added dynamic `generateMetadata` function extracting project titles and English summary for SEO.
- `app/contact/page.tsx` — Polished contact stub to use standard `bg-surface/40 border border-lilac` and `text-bone`, removing the last instance of `text-moon`.
- `package.json` — Bumped version from `0.7.0` to `0.8.0`.
- `docs/CHANGELOG.md` — Logged v0.8.0 release.
- `docs/tasks/task-08-seo-metadata.md` — Created task documentation.

---

## 2. Key Decisions & Verification

### Global SEO & OpenGraph
- Base domain: `https://raphaelamonteiro.vercel.app`.
- Title template: `%s | Raphaela Monteiro`.
- Default Title: `Raphaela Monteiro — Software Developer & Aerospace Computing`.
- Description: Highlighted engineering focus (constrained systems, PNT reference architectures, and open collaborations).
- Dynamic metadata for all 5 case study paths.

### Final Design System Polish
- Verified 0 instances of deprecated colors (`moon`, `dusty`) in active pages.
- Verified 0 instances of `rounded-lg` on panels and cards (all strict `rounded-sm` or `rounded-none`).
- Checked semantic status colors (green/emerald strictly for active status, lilac for WIP, ash for completed).

---

## 3. Verification

- `npx tsc --noEmit` — Exit code 0.
- `npx next build --webpack` — Exit code 0.
