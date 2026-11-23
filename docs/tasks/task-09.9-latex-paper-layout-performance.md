# Task 09.9 — LaTeX Paper Layout & Performance Fix

- **Date:** 2026-11-23
- **Version:** 0.9.9
- **Status:** Done

---

## 1. Scope
1. **Performance Fix (Theme Switch Lag):**
   - Eliminate heavy `transition-all duration-500` from all panels and cards across `app/page.tsx`, `app/about/page.tsx`, `app/about/components/about-hero.tsx`, `app/projects/page.tsx`, `app/services/page.tsx`, and `app/projects/[slug]/case-study.tsx`.
   - Replace with snappy `transition-colors duration-200`.
   - Reduce `backdrop-blur-xl` to `backdrop-blur-md` to alleviate GPU rendering loads.
2. **Projects Page Chart Fix:**
   - Eliminate chart overlapping text by making the chart an ambient background texture: `absolute inset-0 w-full h-full z-0 opacity-[0.05] pointer-events-none` with `preserveAspectRatio="none"`.
   - Ensure all card foreground text/elements sit inside `relative z-10 flex flex-col h-full`.
3. **LaTeX Academic Paper Layout for Case Study:**
   - Refactor `DossierSection` in `app/projects/[slug]/case-study.tsx` to flow text into two justified columns on desktop (`columns-1 lg:columns-2 gap-8 text-justify font-mono leading-relaxed text-ash`).
   - Move section titles to bold uppercase headings directly above the two columns.
   - For section `002` (Abstract), apply dedicated highlighted styling (`bg-void/30 p-6 border border-lilac/50`).
   - Configure architectural diagrams to span across both columns (`break-inside-avoid column-span-all my-8`).
4. **Terminal Log Timing & Smooth Cursor:**
   - Update event rotation to 3000ms.
   - Smooth out blinking cursor (`animate-[blink_1s_ease-in-out_infinite]`).
   - Eliminate layout shifts with container `min-h-[52px]` and truncated rows.

---

## 2. Files Changed
- `app/components/terminal-log.tsx`: 3-second cycle, smooth ease-in-out cursor, fixed container constraints.
- `app/projects/[slug]/case-study.tsx`: 2-column LaTeX paper layout, abstract container, full-span architecture diagram, fast color transitions.
- `app/projects/page.tsx`: Background chart texture (5% opacity), isolated foreground content container, fast color transitions.
- `app/page.tsx`: Replaced `backdrop-blur-xl` and `transition-all` with `backdrop-blur-md` and `transition-colors duration-200`.
- `app/about/page.tsx`: Replaced `backdrop-blur-xl` and `transition-all` with `backdrop-blur-md` and `transition-colors duration-200`.
- `app/about/components/about-hero.tsx`: Replaced `backdrop-blur-xl` and `transition-all` with `backdrop-blur-md` and `transition-colors duration-200`.
- `app/services/page.tsx`: Replaced `backdrop-blur-xl` and `transition-all` with `backdrop-blur-md` and `transition-colors duration-200`.
- `package.json`: Bumped to `0.9.9`.
- `docs/CHANGELOG.md`: Added release notes for `0.9.9`.

---

## 3. Decisions & Implementation Details
- **CSS Multi-Columns vs CSS Grid:** Using `columns-1 lg:columns-2` with `text-justify` and `column-span-all` creates an authentic academic LaTeX/IEEE paper flow where paragraphs seamlessly wrap from column 1 into column 2, while large figures like `SprbArchitectureDiagram` span full width between paragraphs without interrupting the reader's flow.
- **Theme Switch Performance:** Browsers struggle to interpolate complex `backdrop-filter: blur(24px)` alongside box-shadows when `transition: all 500ms` is active during a class switch on `html`. Switching to `transition-colors duration-200` restricts the transition strictly to color properties (background-color, border-color, text-color) without triggering expensive GPU blur recalculations on every frame.

---

## 4. Verification
- `npx tsc --noEmit`: Passed with 0 errors.
- `npx next build --webpack`: Passed with 0 errors; all static routes generated successfully.
