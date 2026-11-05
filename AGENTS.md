# AGENTS.md — Portfolio Rules

Persistent rules for the Antigravity agent. Read before any change.
If a task conflicts with a rule, STOP and ask.

## Project Identity

Personal portfolio for Raphaela Monteiro — Software Developer, FATEC student.

Targets three audiences:

1. Small business owners (freelance: websites, systems, legacy refactoring, AI integration)
2. Recruiters from big tech / fintechs / headhunters
3. Researchers, professors, open-source collaborators

- Location: Caçapava, SP (available to work in São José dos Campos, remote,
  or international).

---

## Visual Identity — "Bayonetta, Technical Magazine from 2050"

**Default theme:** Dark. The light theme exists as an option but is NOT the
default. The `<html>` tag and the theme provider must default to dark.

**Two frames stacked:**

**Frame 1 — Bayonetta:** glamorous danger, sharp elegance, deliberate precision.
Purple/black, angular, restrained but with attitude. Not cute, not playful.
Feminine confidence, not softness. Reference: Bayonetta's silhouette (sharp
angles, long lines, controlled power), not her fan service.

**Frame 2 — Technical Magazine from 2050:** Swiss grid discipline + Ghost in
the Shell HUD + editorial rhythm. Looks like a NASA technical report printed
in Tokyo in 2050. Organized (grid is uniform), but the rhythm varies (column
count changes per row).

**NOT:** cute, pastel, minimalist-empty, maximalist, neon-saturated, generic
dev portfolio, AI-generated feel (uniform 2x2 grids, same-size cards, amethyst
everywhere).

### Design principles

- Grid is **uniform** (12 cols) but **rhythm varies** (some rows full-width,
  some 3-col, some 2-col).
- **Sharp over round:** `rounded-sm` or `rounded-none` for most elements.
  `rounded-lg` only for cards. `rounded-full` only for tags/pills.
- **Angles at 45°** are allowed (corner cuts, diagonal accents).
- **Micro-details over decoration:** hairlines, corner brackets, numbered
  panels, vertical labels. Not gradients, not glows, not illustrations.
- **Amethyst appears exactly ONE time per panel.** Not two. Not three.
- **Typography does the work:** weight contrast (300 vs 800), not multiple fonts.

### Palette (frozen, in `@theme` in `globals.css`)

- void: #09080F (background — deep black)
- surface: #12101A (cards — near-black with purple tint)
- bone: #FFF8FC (primary text — warm white)
- ash: #918798 (secondary text — muted purple-gray)
- amethyst: #8F7CFF (dominant accent — purple)
- lilac: #9195F6 (structural accent — borders, subtle UI)
- moon: #EC7FA9 (RESTRICTED — see rules)
- dusty: #F39EB6 (RESTRICTED — see rules)

### Palette Usage Rules (strict)

**amethyst dominates but is used sparingly** — EXACTLY ONE moment per panel:

- One CTA button
- One status pulse dot
- One featured badge
- One section number highlight
- One hover state on the primary card

If a panel has amethyst in 2+ places, remove one. Amethyst is not decoration.

**lilac is structural:**

- Hairlines between sections (`border-lilac/10`)
- Card borders (`border-lilac/10`)
- WIP status badges
- Corner brackets (`border-lilac/40`)

**bone is the default text color.** Primary headings, body.

**ash is secondary.** Labels, meta, timestamps, muted text.

**moon and dusty are NOT used in production.** Reserved for future features
(warnings, special states) with explicit approval.

**emerald-400 is semantic only.** Reserved for "active" status indicators
where green = active is universal. Never for text, headings, or decoration.

### Layout System — "Technical Magazine from 2050"

Every section is a **numbered panel** with consistent anatomy:

```
┌─ 001 ──────────────────────────── LABEL ─┐
│                                           │
│  TITLE OF THE SECTION                     │
│                                           │
│  ─────────────────────────────            │
│                                           │
│  Content...                               │
│                                           │
│  ─────────────────────────────            │
│  [meta: status/tag/date]                  │
└───────────────────────────────────────────┘
```

**Panel anatomy (mandatory):**

1. **Top-left:** panel number `001`, `002`... in `text-amethyst/60 text-[10px] tracking-[0.2em] uppercase`
2. **Top-right:** label (e.g., `HOME`, `TECH STACK`, `NOW`) in `text-ash text-[10px] uppercase tracking-[0.2em]`
3. **Hairline** (`border-t border-lilac/10`) at the top of the panel
4. **Title** in `text-bone`
5. **Hairline** between title and content
6. **Content**
7. **Hairline** before meta
8. **Meta** at the bottom in `text-ash text-xs`
9. **ONE amethyst moment per panel** (not more)

**Grid rules:**

- Base: `grid-cols-12`
- Panels can be `col-span-12`, `col-span-6`, `col-span-4`, `col-span-3`
- Vary column count between rows (hero full-width → 3-col → 2-col → 4-col)
- **Never use uniform 2x2 or 3x3 across the whole page.** That reads AI-generated.

**Micro-details (required):**

- Hairlines between sections, not empty space
- Corner brackets on the 2-3 most important panels only:
  ```tsx
  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-lilac/40" />
  ```
- Numbers zero-padded to 3 digits (`001`, not `1`)
- Separators: `·` (middle dot), `//`, `→`, `◇` — used consistently
- Vertical labels on the left side of the hero (desktop only):

  ```tsx
  <span className="hidden lg:block [writing-mode:vertical-rl] text-[10px] tracking-[0.3em] text-ash uppercase">
    SECTION 001
  </span>
  ```

  - **Hero:** Centered or left-aligned, with **chrome/metallic text effect**
    on the H1 (CSS gradient: `bg-gradient-to-r from-white via-gray-300 to-gray-500 
bg-clip-text text-transparent`). Massive type, lots of negative space.

- **Below hero:** Dense bento grid (data panels, terminal logs, small metrics,
  corner brackets). This is where the "Technical Magazine" HUD density lives.

### Theme Elements (as nods, not centerpieces)

Each theme appears ONCE on the site, as a micro-detail. Restraint is elegance.

| Theme          | Location                 | Implementation                                                              |
| -------------- | ------------------------ | --------------------------------------------------------------------------- |
| Kitsune        | Hero right side          | SVG of 9 curved lines (abstract tails), opacity 15%, <2KB, hidden on mobile |
| Black cat      | Footer                   | SVG silhouette, 16px, next to copyright                                     |
| Coffee         | Hero status line         | Text `[coffee]` in `text-ash/60 text-[10px]`                                |
| Midnight codes | Hero status line         | Static timestamp `[00:00:00]` in mono (live update optional, see Pending)   |
| Bug hunter     | Project card hover       | Crosshair SVG appears top-right on hover (opacity 0 → 100)                  |
| Space          | Hero background + footer | Constellation SVG in hero + lat/long `-23.22° / -45.90°` in footer          |

**Rules:**

- Do NOT add literal rockets, cat illustrations, coffee cups, or fox masks.
  Abstract only (lines, dots, symbols).
- Each SVG under 2KB. Each element `aria-hidden` and `pointer-events-none`.
- If a theme appears twice, remove one instance.
- Bayonetta motifs (butterfly, moon) are allowed as replacements for kitsune
  if explicitly requested, but do not stack them.
  - **Chrome 3D elements:** Allowed as inline SVG only (e.g., a chrome star,
    abstract metallic shape). Max 5KB per SVG. Can be placed as decorative
    elements in the hero (right side, behind text).

### Do NOT use

- Pink (moon, dusty) in production UI
- Emerald outside semantic status
- Heavy images, screenshots, illustrations
- Emoji in the UI (allowed in README/email, not on the site)
- Animations beyond `fade-up` and hover transitions
- Hover transforms (translateY, scale) — use color transitions only
- Gradients except the single radial glow in hero (amethyst, 8% opacity)

---

## Component Patterns

### Card (project, service, skill)

```tsx
<article
  className="relative p-6 bg-surface border border-lilac/10
                    hover:border-lilac/30 transition-colors h-full flex flex-col"
>
  <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-lilac/40" />
  <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase">
    <span className="text-amethyst/60">{number}</span>
    <span className="text-ash">{label}</span>
  </div>
  <h3 className="mt-6 text-lg font-bold text-bone">{title}</h3>
  <hr className="border-lilac/10 my-4" />
  <p className="text-sm text-ash leading-relaxed">{content}</p>
  <div className="mt-auto pt-4 flex justify-between items-center">
    <span className="text-[10px] text-ash uppercase">{meta}</span>
    <span className="text-xs text-amethyst">{cta} →</span>
  </div>
</article>
```

- `rounded-sm` or `rounded-none` (NOT `rounded-lg` — reserve that for modals only)
- `border-lilac/10` (thin, not `/20`)
- Hover: `border-lilac/30` only (no transform, no glow)

### Project Card (specific rules)

Structure:

1. **Top-left:** year + status (e.g., `2025 · ● Active`)
2. **Top-right:** GitHub icon link (`aria-label="View source on GitHub"`) — if `links.repo` exists
3. **Title** (h3): project name
4. **Hairline**
5. **Brief description** (`line-clamp-3` of `subtitle[locale]`)
6. **Stack** (first 4 items, dot-separated, "+N" if more)
7. **Footer:** category on left, `Read →` on right
8. **The whole card is wrapped in `<Link href="/projects/[slug]">`** if `hasCaseStudy` is true
9. **The GitHub icon has `onClick={(e) => e.stopPropagation()}`** to prevent navigation

No "featured" badge. Priority is defined by array order in `data/projects.ts`.

### Tag / Pill

```tsx
<span className="px-2 py-1 border border-<accent>/30 rounded-full text-xs">
  {label}
</span>
```

- `rounded-full` ONLY for tags/badges/pills
- Accent: amethyst for primary, lilac for neutral

---

## Narrative Invariant

Every page and project must reinforce: **systems + aerospace + applied AI**.
Do not add content that dilutes this.

Personal projects (Vitral, Amparo, Polaris) stay in the "Personal" filter
and Beyond Code section. They appear LAST in the projects list. They are
never the first project a visitor sees.

## Content Consistency with GitHub

The portfolio must reflect the same narrative and projects as the GitHub README:

- Primary projects (in display order): SPRB-BD, Camplana, Adatrade, Kitsune,
  Orbita, Adatech
- Personal projects (last in list): Amparo, Vitral, Polaris
- Tech stack emphasis: C#/.NET, Python, TypeScript, PostgreSQL, Linux
  (with Java, Docker, AWS, AI tooling in "also experienced")
- Research interests: Aerospace Computing, Critical Systems, Embedded Systems,
  Real-Time Systems, Flight Software, Artificial Intelligence
- Positioning: "I like understanding what happens underneath the abstraction"

Do not contradict the GitHub narrative.

---

## Hobbies (with photos)

Hobbies are humanizing and allowed to use real photos. Budget rules:

- Maximum **6 hobbies** with photos (not 8)
- Each photo: **≤ 30KB**, WebP, 400×400px, quality 80
- Total section budget: **≤ 200KB**
- `loading="lazy"` mandatory
- `sizes` attribute mandatory (e.g., `"(max-width: 640px) 50vw, 33vw"`)
- Consistent treatment: **grayscale by default, color on hover**
- Aspect ratio: square (`aspect-square`)
- Grid: `grid-cols-2 sm:grid-cols-3`
- Overlay: `bg-gradient-to-t from-void/90 to-transparent` for legibility
- Label per card: `// hobby` in `text-amethyst/80 text-[10px] uppercase` + name in `text-bone text-sm`

If photos are not yet available, the section stays as text-only cards until
images are provided (do not use placeholder images).

---

## Services page (app/services/page.tsx)

Purpose: convert small business owners. Uses `t.work.*` from locales.

Structure:

1. Panel `003 // SERVICES` header with title and subtitle
2. Intro paragraph (`t.work.intro`)
3. Grid `grid-cols-1 md:grid-cols-2` of 6 services from `t.work.services`
4. Each service card: number `001`-`006`, title, hairline, description
5. **NO tech stack, NO jargon** in the cards
6. Strong CTA at the bottom:
   - Primary: `mailto:` button (amethyst solid), label `t.work.emailCta`
   - Secondary: "See my work" link to `/projects`
   - Note below: `t.work.emailNote` ("I respond within 48 business hours")
7. **NO WhatsApp button, NO phone number** (see Constitution rule 9)

---

## Documentation System (mandatory)

Every task executed by the agent must generate documentation in `docs/`.

### Structure

```
docs/
  CHANGELOG.md                    ← version history (semver)
  architecture.md                 ← project structure, data flow, decisions
  design-system.md                ← palette, typography, spacing, patterns, components
  tasks/
    task-01-audit.md
    task-02-visual-consistency.md
    task-03-home-layout.md
    ...
```

### Rules

1. **One file per task** in `docs/tasks/`. Filename: `task-NN-short-name.md`.
   Each must contain:
   - Date
   - Version
   - Status (Done / Partial / Blocked)
   - Scope (what was asked)
   - Files changed (list)
   - Decisions (with reasoning)
   - Verification (build, tsc, manual checks)
   - Open questions
   - Next task

2. **CHANGELOG.md** is updated after each task with:
   - Version bump (semver)
   - Date
   - Summary (1-2 lines)
   - Link to the task doc

3. **Version** follows semver, tracked in `package.json`:
   - MAJOR (1.0.0): public release, custom domain
   - MINOR (0.x.0): new page, new section, new feature
   - PATCH (0.x.y): bug fix, copy tweak, style fix

4. **Never skip docs.** If a task changes code, it writes a doc.

5. **design-system.md** is updated whenever a new pattern is introduced.

---

## Stack (frozen)

- Next.js 16 (App Router), React 19, Tailwind v4
- TypeScript strict
- Custom i18n via `app/providers.tsx` (no next-themes, no next-intl)
- Custom theme via `app/theme-provider.tsx` (no next-themes)
- Google Sans Code via CSS @import in `app/globals.css`

---

## Constitution (never violate)

1. **Zero heavy images.** No PNG/JPG screenshots. SVG inline only if <5KB.
   Exception: hobbies photos, with the budget rules above.
2. **Bilingual.** EN is primary, PT is adapted (not literal translation).
3. **Mobile-first.** Test at 375px, 768px, 1440px.
4. **Accessibility:** WCAG AA contrast, keyboard navigation, visible focus,
   aria-labels on icon buttons.
5. **No new dependencies** without explicit approval.
6. **No "Open to work" language.** Use "Open to collaborations" or factual statements.
7. **Palette and @theme in globals.css are FROZEN.** No gold, no new colors,
   without explicit approval (see Pending Decisions).
8. **No emoji in UI.** Text labels only. (Emojis allowed in README/email.)
9. **No WhatsApp CTA.** Contact is email-first. WhatsApp is reserved for
   follow-up after initial email contact. Do not add WhatsApp buttons, links,
   or phone numbers to the public UI.
10. **No "featured" badge on projects.** Priority is defined by array order
    in `data/projects.ts`. Do not add `featured: boolean` back.

---

## File Scope (READ-ONLY unless explicitly asked)

- `app/layout.tsx`
- `app/providers.tsx`
- `app/theme-provider.tsx`
- `app/globals.css` (the `@theme` block)
- `data/projects.ts` (the `Project` type)

---

## TypeScript Rules

- No `any`. No `as unknown as`.
- If types don't match, STOP and explain — do not force-cast.
- Use existing types: `Dict`, `Project`, `Bilingual`, `ProjectCategory`, `ProjectStatus`.
- If a `Dict` key is added, update EN, PT, and the type in the same commit.

---

## Styling Rules

- Use Tailwind classes from `@theme`: `bg-surface`, `text-amethyst`, `border-lilac/10`.
- Do not use `var(--color-*)` directly in JSX (except in the one hero radial glow SVG).
- Do not recreate old CSS classes (`header`, `navbar-link`, `button-projects`, `footer-text`).
- Card pattern: `p-6 bg-surface border border-lilac/10 rounded-sm`.
- Tag pattern: `px-2 py-1 border border-<accent>/30 rounded-full text-xs`.

---

## Verification Loop (mandatory)

After every change:

1. `npm run build` — must pass
2. `npx tsc --noEmit` — must pass
3. For UI changes, verify at 375px and 1440px in browser

---

## Output Format

For each task:

1. State the plan (files + summary)
2. Show the diff or new file
3. Run build + tsc, show output
4. Write `docs/tasks/task-NN-name.md`
5. Update `docs/CHANGELOG.md` and `package.json` version
6. Wait for confirmation before the next task

---

## Stop Conditions

STOP and ask if:

- A task requires changing a type in `data/projects.ts`
- A task requires a new dependency
- A task requires touching a READ-ONLY file
- A fix would violate any item in the Constitution
- A task involves the contact form or email service
- A task requires adding WhatsApp/phone to the UI
- A task requires adding a new color to the palette
- A task requires adding a "featured" badge back

---

## Pending Decisions (do not act without approval)

The following items are under discussion. Do not implement them without
explicit confirmation from Raphaela:

1. **Gold accent (#C9A961).** Proposed for 1 hairline in the hero + favicon
   to reinforce Bayonetta direction. Not approved yet. Do not add.
2. **Live timestamp in hero.** Static `[00:00:00]` for now. Live update (client
   component, updates every second) is an option, not approved.
3. **Hobbies photos.** Need 6 images from Raphaela. Until provided, hobbies
   stay as text-only cards.
4. **Kitsune style.** Abstract (9 curved lines) is the default. Literal
   (geometric fox mask) is possible with approval.
5. **Butterfly / moon motif (Bayonetta).** Not added yet. If requested, replace
   one of the existing theme elements, don't stack.

---

## Out of Scope for This Refactor

- Contact form and email API (reserved for a later phase)
- New dependencies
- New images or screenshots (except hobbies photos, with budget)
- WhatsApp buttons or phone numbers
- New color palettes
- Multi-language beyond EN/PT
- Analytics, tracking, cookies
