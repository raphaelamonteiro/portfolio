# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.9.9] — 2026-11-23
### Added
- LaTeX academic paper layout on Case Study page (`app/projects/[slug]/case-study.tsx`):
  - 2-column justified text layout on desktop (`columns-1 lg:columns-2 gap-8 text-justify font-mono leading-relaxed`).
  - Large bold section headings placed directly above the column text.
  - Distinct abstract block styling (`bg-void/30 p-6 border border-lilac/50`) simulating academic publication formatting.
  - Architecture diagram updated to break across columns cleanly with `break-inside-avoid column-span-all my-8`.
- In `app/projects/page.tsx`, added stretched background SVG line-chart texture (`absolute inset-0 w-full h-full z-0 opacity-[0.05] pointer-events-none`) with all content placed cleanly in `relative z-10` to eliminate text overlap.
### Changed
- Performance Fix for theme switching:
  - Replaced generic `transition-all duration-500` with `transition-colors duration-200` across all glassmorphic panels and cards.
  - Reduced `backdrop-blur-xl` to `backdrop-blur-md` across all pages, cutting GPU composite overhead and eliminating theme switch lag.
- Terminal Log refinements (`app/components/terminal-log.tsx`):
  - Updated rotation interval to 3 seconds.
  - Made cursor blink smoothly (`animate-[blink_1s_ease-in-out_infinite]`).
  - Added fixed minimum height and truncation to prevent layout shifts.
**Full task:** [task-09.9-latex-paper-layout-performance.md](./tasks/task-09.9-latex-paper-layout-performance.md)

## [0.9.8] — 2026-11-23
### Added
- Created `<TerminalLog />` client component (`app/components/terminal-log.tsx`) with dynamic rotating system event messages every 2.5s and blinking cursor, replacing static text in Panel 005.
- Added `@keyframes blink` in `app/globals.css` with blinking cursor accents on hero status and terminal logs.
- Added animated throbbing `SYS.LOAD [65%]` telemetry status bar to Hero in `app/page.tsx`.
### Fixed
- Fixed Light Theme contrast in `app/globals.css` (`.light` variable mappings: `--color-void: #F4F2F8`, `--color-surface: #FFFFFF`, `--color-bone: #1A1525`, `--color-ash: #6B6575`, `--color-amethyst: #6B4FDB`, `--color-lilac: #D1C4E9`).
- Replaced hardcoded `#12101A` dark hexes with dynamic semantic `bg-surface/60` and `bg-surface/80` across all pages (`app/page.tsx`, `app/about/page.tsx`, `app/about/components/about-hero.tsx`, `app/projects/page.tsx`, `app/projects/[slug]/case-study.tsx`, `app/services/page.tsx`), enabling crisp contrast and readability in both light and dark modes while maintaining glassmorphic `backdrop-blur-xl`.
**Full task:** [task-09.8-light-theme-hud-animations.md](./tasks/task-09.8-light-theme-hud-animations.md)

## [0.9.7] — 2026-11-23
### Added
- Mini GitHub Commit Grid HUD component (3x7 matrix of contribution activity) replacing generic line charts across `app/page.tsx` and `app/services/page.tsx`.
- Hero Telemetry in `app/page.tsx`:
  - Vertical telemetry sidebar (`SYS_INIT: OK`, `MEM_ALLOC: 4.2GB`, `NET_UPLINK: SECURE`, `CPU_LOAD: 12%`).
  - System load indicator bar (`SYS.LOAD [65%]`) in the hero status row.
- Enhanced Kitsune abstract SVG with `drop-shadow-[0_0_25px_rgba(143,124,255,0.5)]` and `opacity-60`.
### Removed
- Removed generic line-chart SVGs from all pages.
**Full task:** [task-09.7-commit-grid-telemetry.md](./tasks/task-09.7-commit-grid-telemetry.md)

## [0.9.0] — 2026-11-21
### Added
- Fixed ambient "Aurora" background to `app/layout.tsx` with cyber-dashboard multi-radial purples.
- Subtle neon purple drop-shadows on all primary headings (`drop-shadow-[0_0_15px_rgba(143,124,255,0.4)]`).
- Glowing amethyst neon highlights on the emphasis/last words of H1s (`drop-shadow-[0_0_20px_rgba(143,124,255,0.8)]`).
### Changed
- Replaced the disappearing chrome horizon gradient with solid bone white typography and cyber neon glow for high contrast and readability across all screens.
**Full task:** [task-09-game-hud-neon.md](./tasks/task-09-game-hud-neon.md)

## [0.8.1] — 2026-11-21
### Changed
- Contrast and Palette fix ("Deep Space Black"):
  - `--color-void`: `#09080F` (True deep black background).
  - `--color-surface`: `#12101A` (Dark purple-black cards).
  - `--color-bone`: `#FFF8FC` (Crisp white for primary text).
  - `--color-ash`: `#9E94A8` (Highly readable gray-purple for secondary text).
  - `--color-amethyst`: `#8F7CFF` (Vibrant purple accent).
  - `--color-lilac`: `#2A1B40` (Deeper purple borders for subtle contour lines without visual noise).
  - `--color-navy`: `#0C081A` (Deep background purple).
- Updated metallic horizon chrome H1 gradient across all pages to match `#FFF8FC` / `#9E94A8` / `#09080F`.
- Updated status line: "Open to research & collaborations" (EN) / "Aberta a pesquisa & colaborações" (PT).
**Full task:** [task-08.5-palette-fix.md](./tasks/task-08.5-palette-fix.md)

## [0.8.0] — 2026-11-21
### Added
- Comprehensive SEO and Metadata implementation:
  - Root metadataBase configured to `https://raphaelamonteiro.vercel.app`.
  - OpenGraph and Twitter card metadata for both the root site and individual case studies.
  - Server-side `generateMetadata` on `app/projects/[slug]/page.tsx` for dynamic title and description extraction.
  - Robots indexing tags and author metadata.
- Clean contact fallback panel in `app/contact/page.tsx` eliminating all deprecated color tokens.
### Changed
- Complete audit and cleanup: zero `rounded-lg` cards, zero `text-moon` or `text-dusty` in production pages.
**Full task:** [task-08-seo-metadata.md](./tasks/task-08-seo-metadata.md)

## [0.7.0] — 2026-11-21
### Added
- Case Study page "Mission Dossier" refactor:
  - Tactical radar dot matrix background and terminal navigation (`$ cd ../projects`).
  - Panel 001 (Dossier Header): `001 // DOSSIER` header, chrome horizon metallic H1, monospace subtitle, terminal bracket tags `[ Tech ]`, and terminal link buttons (`[ GITHUB ]`, `[ PAPER ]`).
  - Panels 002-008: Two-column `DossierSection` layout (`lg:col-span-3` section title in amethyst, `lg:col-span-9` text and assets).
  - Special SVG Architecture Diagram for SPRB-BD illustrating the 4-layer reference architecture (`[ PRESENTATION ] -> [ APPLICATION ] -> [ PERSISTENCE ] -> [ ANALYSIS ]`) with Aerospace Terminal palette strokes and fill.
### Changed
- Replaced all legacy case study cards with sharp `rounded-sm` geometry and `border-lilac`.
**Full task:** [task-07-case-study.md](./tasks/task-07-case-study.md)

## [0.6.0] — 2026-11-21
### Added
- Services page "The Uplink" layout refactor:
  - Panel 001 (Header): `001 // SERVICES` and `$ uplink --init` metadata, chrome horizon metallic H1, and intro paragraph without technical jargon.
  - Panel 002 (Capabilities Grid): 2-column bento grid of 6 services (`SVC_001` - `SVC_006`) tailored for small business owners and partners.
  - Panel 003 (CTA Uplink): Full-width panel with corner brackets, subtle radial glow, direct `mailto:raphaelabm.dev@gmail.com` CTA, response commitment notice, and secondary link to archive.
### Changed
- Strictly email-first conversion (no WhatsApp or phone CTAs).
- Enforced single amethyst moment per card (`SVC_00X` index) and sharp `rounded-sm` geometry throughout.
**Full task:** [task-06-services-page.md](./tasks/task-06-services-page.md)

## [0.5.0] — 2026-11-21
### Added
- Projects page Mission Control layout refactor:
  - Tactical radar dot matrix background grid (32px radial-gradient).
  - Panel 001 (Header): `001 // PROJECTS` and `SYS_DATABASE` metadata, sharp chrome metallic H1, and monospace description.
  - Panel 002 (Filter bar): Terminal-style `[ ALL ]`, `[ SYSTEMS ]`, etc., with amethyst active indicator and border.
  - Responsive Bento Grid (1 col mobile, 2 cols tablet, 3 cols desktop).
  - Standardized project card anatomy with corner metadata, semantic status dots (emerald, lilac, ash), dot-separated stack tags with `+N` count, and GitHub icon with `e.stopPropagation()`.
### Changed
- Converted cards and panels from legacy `rounded-lg` to sharp `rounded-sm`.
**Full task:** [task-05-projects-page.md](./tasks/task-05-projects-page.md)

## [0.4.0] — 2026-11-21
### Added
- About page editorial magazine layout refactor:
  - Panel 001 (Hero): 2-column desktop grid with `$ whoami` terminal chip, sharp chrome horizon gradient H1, 3 monospace paragraphs, portrait panel with corner brackets, radial glow, and grayscale-to-color hover, plus 4-column metrics panel.
  - Panel 002 (Academia): Timeline with vertical lilac hairline and dot markers, corner brackets.
  - Panel 003 (Research): Focused domain tag cloud with rounded-full pills, corner brackets.
  - Panel 004 (Principles): 3-column subgrid displaying core values as system rules (`RULE // 01`...`03`).
  - Panel 005 (Tech Stack): Terminal `$ tech-stack --list` with primary and secondary toolchains.
  - Panel 006 (Beyond Code): 8-card square bento grid with `[img]` placeholder and terminal hobby tags.
### Changed
- Strictly 1 amethyst moment per panel across all About panels.
- Replaced all legacy `rounded-lg` with `rounded-sm` and `border-lilac`.
**Full task:** [task-04-about-page.md](./tasks/task-04-about-page.md)

## [0.3.2] — 2026-11-21
### Added
- Tactical radar dot matrix background grid (32px radial-gradient).
- Subtle top border highlight on Hero panel (`border-t border-t-bone/20`).
### Changed
- Color palette updated to "Aerospace Terminal": void (`#17153B`), surface (`#2E236C`), bone (`#C9B5E0`), ash (`#433D8B`), amethyst (`#483AA0`), lilac (`#412B6B`), navy (`#00105B`), gold (`#C9A961`).
- Availability status updated to reflect current position: "Software Developer @ Wave Concept · Open to collaborations" (EN) / "Dev @ Wave Concept · Aberta a colaborações" (PT).
- Pulse dot in status line updated to `bg-amethyst`.
- All dashboard panels updated to solid `border border-lilac`.
**Full task:** [task-03-home-layout.md](./tasks/task-03-home-layout.md)

## [0.3.1] — 2026-11-05
### Added
- Hero personalization & Bayonetta refinement: abstract 9-tails Kitsune SVG, lore status line `[coffee] · [00:00:00]`.
- Gold micro-accent (`#C9A961`) on primary project active indicator dot in Panel 004.
- Subtle black cat silhouette SVG (16px) next to copyright in footer.
### Changed
- Hero H1 chrome metallic gradient sharpened to horizon metallic reflection.
**Full task:** [task-03-home-layout.md](./tasks/task-03-home-layout.md)

## [0.3.0] — 2026-11-05
### Added
- Home layout refactor: numbered panels (001 Hero, 002 Stack, 003 System Status, 004 Projects, 005 Log, 006 Contact).
- Default to dark mode initialized in `theme-provider.tsx` and `layout.tsx`.
### Changed
- Home structure: single centered block → HUD bento dashboard layout.
**Full task:** [task-03-home-layout.md](./tasks/task-03-home-layout.md)
