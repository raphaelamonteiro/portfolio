# Design System — "Aerospace Terminal / Game UI"

## 1. Palette
Frozen aerospace terminal palette declared in `@theme` in `globals.css`:
- `void`: `#17153B` — Main background (deep navy-purple)
- `surface`: `#2E236C` — Card and panel background
- `bone`: `#C9B5E0` — Primary text, headings (soft aerospace lavender-white)
- `ash`: `#433D8B` — Secondary text, labels, metadata
- `amethyst`: `#483AA0` — Primary accent (strictly 1 moment per panel)
- `lilac`: `#412B6B` — Structural borders (`border-lilac`)
- `navy`: `#00105B` — Deep secondary accent for shadows/backgrounds
- `gold`: `#C9A961` — Micro-accent only (active project indicator)
- `emerald-400` — Semantic status only (`active` indicator where needed)

## 2. Typography & Chrome Effect
- **Font:** Google Sans Code / Inconsolata mono stack.
- **Hierarchy:** High weight contrast (300 body vs 800 headings/numbers).
- **Chrome H1:** `text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight bg-[linear-gradient(180deg,#C9B5E0_0%,#C9B5E0_48%,#433D8B_52%,#17153B_100%)] bg-clip-text text-transparent`

## 3. Panel Anatomy & HUD Dashboard
- Base grid: `grid-cols-12` with `gap-4`.
- Exactly ONE amethyst moment per panel.
- Border radius: `rounded-none` or `rounded-sm`. Never `rounded-lg` on panels.
- Hairlines: `border-lilac`.
- Radar dot matrix background: 32px radial gradient dots.
- Terminal labels: `$ tech-stack --list`, `SYS_STATUS // ONLINE`, `$ ls projects/`.

## 4. Corner Brackets
Applied on high-importance panels:
```tsx
<span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-lilac/40 pointer-events-none" />
<span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-lilac/40 pointer-events-none" />
<span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-lilac/40 pointer-events-none" />
<span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-lilac/40 pointer-events-none" />
```
