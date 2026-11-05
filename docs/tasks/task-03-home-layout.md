# Task 03 — Home Refactor ("Chrome Hero + HUD Dashboard") & Task 3.5 Personalization

- **Date:** 2026-11-05
- **Version:** 0.3.1
- **Status:** Done

## Scope
Refactor `app/page.tsx` to match the Chrome Hero + HUD Dashboard aesthetic with Bayonetta personal touches:
1. **Default to dark mode:** `theme-provider.tsx` initialized to `'dark'`, `layout.tsx` configured with `className="dark"` on `<html>`.
2. **Hero (Panel 001):** Full-width, `min-h-[80vh]`, massive chrome typography H1 with sharp metallic horizon sheen (`bg-[linear-gradient(180deg,#FFF8FC_0%,#FFF8FC_48%,#918798_52%,#332D47_100%)] bg-clip-text text-transparent`), negative space, abstract 9-tails Kitsune inline SVG (<2KB, opacity-40, hidden on mobile), status line with lore nods (`● Available for projects · [coffee] · [00:00:00]`), primary amethyst CTA (`/projects`) and secondary ghost CTA (`/services`).
3. **HUD Dashboard:** Dense bento grid (`grid-cols-1 md:grid-cols-12 gap-4`):
   - Panel 002 (md:col-span-8): STACK (`$ tech-stack --list`), dense tech grid, corner brackets, amethyst moment on number `002`.
   - Panel 003 (md:col-span-4): SYSTEM STATUS (`SYS_STATUS // ONLINE`), education, research, location, amethyst moment on pulse dot.
   - Panel 004 (col-span-12): PROJECTS PREVIEW (`$ ls projects/`), 4 mini project cards with status, category, direct links, and a gold micro-accent (`#C9A961`) on the active dot of the primary project.
   - Panel 005 (md:col-span-6): LATEST LOG (`$ cat /var/log/activity.log`), mono simulated activity stream (bone/ash, no amethyst).
   - Panel 006 (md:col-span-6): CONTACT (`$ contact --send`), direct mailto CTA button (amethyst moment), response time note, corner brackets.
4. **Footer:** Added subtle black cat silhouette SVG (16px) next to the copyright text.

## Files Changed
- `app/page.tsx` — Replaced star with Kitsune 9-tails SVG, sharpened chrome H1, added lore nodes to status line, gold micro-accent on project dot.
- `app/components/footer.tsx` — Added 16px black cat silhouette SVG next to copyright.
- `app/theme-provider.tsx` — Default theme initialized to `'dark'` and fallback set to `'dark'`.
- `app/layout.tsx` — Added `className="dark"` to `<html>` tag.
- `data/locales.ts` — Updated location to `Caçapava, SP · Remote · Worldwide` (EN) and `Caçapava, SP · Remoto · Global` (PT); added `emailCta` and `emailNote` to `work`.
- `package.json` — Bumped version to `0.3.1`.
- `docs/tasks/task-03-home-layout.md` — Updated task documentation.
- `docs/CHANGELOG.md` — Updated release notes for 0.3.1.
- `docs/design-system.md` — Documented Chrome H1, Kitsune motif, and HUD panel patterns.

## Decisions
- **Kitsune 9-Tails:** Replaced geometric star with 9 abstract, elegant curves emanating from a root node with amethyst-to-ash linear gradients. Kept restrained at `opacity-40`, hidden on mobile viewports.
- **Gold Accent (#C9A961):** Applied exclusively as a single micro-detail on the active dot of the primary project in Panel 004.
- **Lore nodes in status line:** `[coffee]` and `[00:00:00]` formatted as `text-ash/60 text-[9px] font-mono`.
- **Black cat silhouette:** Subtle 16px icon in footer next to copyright for the Yennefer/Bayonetta nod.

## Verification
- `npx tsc --noEmit` passed with 0 errors.
- `npx next build --webpack` completed production build with all 13 static routes generated.
- Amethyst count per panel verified: exactly 1 per panel.
- `rounded-lg` count in `app/page.tsx`: 0.
- `moon` and `dusty` count in `app/page.tsx`: 0.
- Default theme on first load: Dark mode.

## Next Task
Task 4 — About page personality pass (system overview feel, numbered section headers, research priority).
