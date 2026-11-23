# Task 09.7 — GitHub Commit Grid & Hero Telemetry

- **Date:** 2026-11-23
- **Version:** 0.9.7
- **Status:** Done
- **Scope:** Replace generic line charts with mini GitHub contribution grids, and inject cockpit/HUD telemetry into the Hero section.

---

## 1. Files Changed

- `app/page.tsx`:
  - Replaced `HudGraph` with `CommitGrid` (3 columns x 7 squares simulating a contribution graph).
  - Added vertical telemetry text on the left edge (`SYS_INIT: OK`, `MEM_ALLOC: 4.2GB`, `NET_UPLINK: SECURE`, `CPU_LOAD: 12%`).
  - Added `SYS.LOAD [65%]` progress bar in the top-right header row.
  - Enhanced Kitsune abstract SVG with `drop-shadow-[0_0_25px_rgba(143,124,255,0.5)]` and `opacity-60`.
- `app/services/page.tsx`:
  - Replaced line charts with `CommitGrid` on all 6 service cards.
- `app/projects/page.tsx`:
  - Removed line charts entirely.
- `package.json`:
  - Bumped version to `0.9.7`.
- `docs/CHANGELOG.md`:
  - Logged v0.9.7 release.

---

## 2. Key Decisions & Anatomy

### GitHub Commit Grid HUD Texture
- Generated 3 columns of 7 rounded micro-squares in the bottom-right corner of panels and cards.
- Patterned activity intensities using `bg-amethyst`, `bg-amethyst/50`, and `bg-white/5` with `opacity-40 pointer-events-none`.

### Cockpit Telemetry
- Vertical orientation via `writingMode: 'vertical-rl'` anchored to the left of the Hero panel.
- Dynamic telemetry load metric complementing the existing live timestamp and coffee lore indicators.

---

## 3. Verification

- `npx tsc --noEmit` — Exit code 0.
- `npx next build --webpack` — Exit code 0.
