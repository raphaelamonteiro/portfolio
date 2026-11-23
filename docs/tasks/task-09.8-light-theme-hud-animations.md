# Task 09.8 — Light Theme Fix & Dynamic HUD Animations

- **Date:** 2026-11-23
- **Version:** 0.9.8
- **Status:** Done

---

## 1. Scope
1. Fix the light theme by updating `.light` CSS variables in `app/globals.css` to ensure high contrast, pure white cards, and readable dark purple text.
2. Eliminate all hardcoded `#12101A` hex classes across all pages, replacing them with semantic Tailwind utility classes (`bg-surface/60` and `bg-surface/80`).
3. Create client component `TerminalLog` (`app/components/terminal-log.tsx`) that cycles through live mock telemetry / system logs every 2.5 seconds with live timestamp and blinking cursor.
4. Add animated `SYS.LOAD [65%]` status bar and blinking cursor accents to `app/page.tsx`.
5. Add `@keyframes blink` to `app/globals.css`.

---

## 2. Files Changed
- `app/globals.css`: Updated `.light` palette definitions and added `@keyframes blink`.
- `app/components/terminal-log.tsx`: Created interactive terminal logs with rotation timer and blinking cursor.
- `app/page.tsx`: Integrated `TerminalLog`, animated load bar, blinking cursor, and replaced hardcoded hex with `bg-surface/60`.
- `app/about/components/about-hero.tsx`: Replaced hardcoded `#12101A` with `bg-surface/60` and `bg-surface/80`.
- `app/about/page.tsx`: Replaced hardcoded `#12101A` with `bg-surface/60` and `bg-surface/80`.
- `app/projects/page.tsx`: Replaced hardcoded `#12101A` with `bg-surface/60` and `bg-surface/80`.
- `app/projects/[slug]/case-study.tsx`: Replaced hardcoded `#12101A` with `bg-surface/60`.
- `app/services/page.tsx`: Replaced hardcoded `#12101A` with `bg-surface/60` and `bg-surface/80`.
- `package.json`: Version bumped to `0.9.8`.
- `docs/CHANGELOG.md`: Added release notes for `0.9.8`.

---

## 3. Decisions & Implementation Details
- **Dynamic Semantic Variables for Glassmorphism:** Hardcoded `bg-[#12101A]/40` prevented the light theme from switching card backgrounds, resulting in dark muddy rectangles on an off-white background. By transitioning to `bg-surface/60` (and `bg-surface/80` for cards), Tailwind dynamically applies `#FFFFFF` in `.light` mode and `#12101A` in dark mode, maintaining the frosted glass blur and high contrast in both themes.
- **Hydration Mismatch Mitigation:** In `app/components/terminal-log.tsx`, `new Date().toLocaleTimeString()` is initialized inside a `useEffect` hook so that the initial server-side render matches the initial client paint (`00:00:00`), preventing React 19 hydration mismatch warnings.
- **Strict AGENTS.md Conformance:**
  - Panels retain `rounded-sm`, `backdrop-blur-xl`, and `border border-white/10`.
  - Exactly one primary amethyst accent per section.
  - Zero WhatsApp/phone buttons.

---

## 4. Verification
- `Get-ChildItem -Path app -Recurse -Filter *.tsx | Select-String -Pattern "12101A"`: 0 matches found.
- `npx tsc --noEmit`: Passed with 0 errors.
- `npx next build --webpack`: Passed with 0 errors; all static routes generated successfully.
