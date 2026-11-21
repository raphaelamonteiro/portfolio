# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

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
