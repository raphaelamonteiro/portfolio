# Task 06 — Services Page: The Uplink (Conversion)

- **Date:** 2026-11-21
- **Version:** 0.6.0
- **Status:** Done
- **Scope:** Transform `app/services/page.tsx` from a stub into an Aerospace Terminal layout designed to convert small business clients using an email-first approach.

---

## 1. Files Changed

- `data/locales.ts` — Added `intro` and `contactCta` to `Dict.work`, expanded to 6 clear services without jargon in both EN and PT.
- `app/services/page.tsx` — Full implementation with radar dot matrix background, Panel 001 Header (`$ uplink --init`), Panel 002 Capabilities Grid (6 cards), and Panel 003 Email-First Uplink CTA.
- `package.json` — Bumped version from `0.5.0` to `0.6.0`.
- `docs/CHANGELOG.md` — Logged v0.6.0 release.
- `docs/tasks/task-06-services-page.md` — Created task documentation.

---

## 2. Key Decisions & Anatomy

### Client Conversion Architecture
- **Audience Focus:** Copy tailored for small business owners and collaborators without technical jargon (focusing on responsiveness, speed, stability, and clean engineering).
- **Email-First Policy (Constitution Rule 9):**
  - Primary button: `mailto:raphaelabm.dev@gmail.com` styled with `bg-amethyst text-void px-8 py-4 rounded-sm font-bold text-lg hover:bg-amethyst/80`.
  - Notice: 48-hour business response time statement.
  - Secondary link: navigates to `/projects` for past mission validation.
  - Zero WhatsApp or telephone buttons.

### Palette & Geometric Discipline
- **Sharp Over Round:** All panels and cards use `rounded-sm` with `border border-lilac`.
- **Amethyst Moments:**
  - Panel 001: bone/ash typography only.
  - Panel 002: Each service card has exactly ONE amethyst moment (`SVC_001` through `SVC_006` in `text-amethyst/60`).
  - Panel 003: Main solid amethyst CTA button is the focal moment.

---

## 3. Verification

- `npx tsc --noEmit` — Exit code 0.
- `npx next build --webpack` — Exit code 0.
