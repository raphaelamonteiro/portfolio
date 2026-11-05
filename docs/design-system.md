# Design System — "Technical Magazine from 2050"

## 1. Palette
Frozen palette declared in `@theme` in `globals.css`:
- `void`: `#09080F` — Deep black background
- `surface`: `#12101A` — Cards and panel surface with purple tint
- `bone`: `#FFF8FC` — Primary text, headings
- `ash`: `#918798` — Secondary text, labels, metadata
- `amethyst`: `#8F7CFF` — Dominant accent (strictly 1 moment per panel)
- `lilac`: `#9195F6` — Structural accent (hairlines, borders `border-lilac/10`)
- `moon` (`#EC7FA9`) & `dusty` (`#F39EB6`) — Restricted, not in production UI
- `emerald-400` — Semantic status only (`active` indicator)

## 2. Typography & Chrome Effect
- **Font:** Google Sans Code / Inconsolata mono stack.
- **Hierarchy:** High weight contrast (300 body vs 800 headings/numbers).
- **Chrome H1:** `text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight bg-gradient-to-b from-bone via-ash to-void bg-clip-text text-transparent`

## 3. Panel Anatomy & HUD Dashboard
- Base grid: `grid-cols-12` with `gap-4`.
- Exactly ONE amethyst moment per panel.
- Border radius: `rounded-none` or `rounded-sm`. Never `rounded-lg` on panels.
- Hairlines: `border-lilac/10`.
- Terminal labels: `$ tech-stack --list`, `SYS_STATUS // ONLINE`, `$ ls projects/`.

## 4. Corner Brackets
Applied on high-importance panels:
```tsx
<span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-lilac/40 pointer-events-none" />
<span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-lilac/40 pointer-events-none" />
<span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-lilac/40 pointer-events-none" />
<span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-lilac/40 pointer-events-none" />
```
