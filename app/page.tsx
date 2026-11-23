'use client';

import { useTranslation } from '@/app/providers';
import { mainTechStack, otherTechStack } from '@/data/tech-stack';
import { projects } from '@/data/projects';
import { TerminalLog } from '@/app/components/terminal-log';
import Link from 'next/link';

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-amethyst/50 pointer-events-none" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-amethyst/50 pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-amethyst/50 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-amethyst/50 pointer-events-none" />
    </>
  );
}

function CommitGrid() {
  return (
    <div className="flex gap-[3px] h-8 items-end opacity-40 pointer-events-none absolute bottom-4 right-4">
      {[0, 1, 2].map((col) => (
        <div key={col} className="flex flex-col gap-[3px]">
          {[0, 1, 2, 3, 4, 5, 6].map((row) => {
            const isActive = (col + row) % 3 === 0;
            const isMedium = (col + row) % 2 === 0;
            return (
              <div
                key={row}
                className={`w-[6px] h-[6px] rounded-[1px] ${
                  isActive ? 'bg-amethyst' : isMedium ? 'bg-amethyst/50' : 'bg-white/5'
                }`}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const { t, locale } = useTranslation();
  const previewProjects = projects.slice(0, 4);
  const allTechs = [...mainTechStack, ...otherTechStack];

  return (
    <div className="relative min-h-screen px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8 overflow-hidden max-w-7xl mx-auto">
      {/* Background Dot Matrix Pattern (32px, tactical radar screen feel) */}
      <div
        aria-hidden="true"
        className="fixed inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-bone) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* ───────────────────────────────────────────────────────────── */}
      {/* PANEL 001 — HERO (Full-width, Sharp Chrome H1, Kitsune 9-Tails)*/}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex flex-col justify-between p-6 sm:p-10 lg:p-12 bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm overflow-hidden fade-up">
        <CornerBrackets />

        {/* Hero Telemetry: Vertical text on left edge (Cockpit HUD feel) */}
        <div
          className="hidden lg:flex flex-col absolute left-4 top-1/2 -translate-y-1/2 text-[9px] font-mono text-ash/40 uppercase tracking-[0.3em] gap-6 pointer-events-none z-10"
          style={{ writingMode: 'vertical-rl' }}
        >
          <span>SYS_INIT: OK</span>
          <span>MEM_ALLOC: 4.2GB</span>
          <span>NET_UPLINK: SECURE</span>
          <span>CPU_LOAD: 12%</span>
        </div>

        {/* Radar Circle SVG behind the text (HUD upgrade) */}
        <svg
          className="absolute w-[600px] h-[600px] pointer-events-none opacity-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          viewBox="0 0 200 200"
          fill="none"
          stroke="var(--color-amethyst)"
        >
          <circle cx="100" cy="100" r="90" strokeWidth="0.5" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="60" strokeWidth="0.5" />
          <circle cx="100" cy="100" r="30" strokeWidth="0.5" />
          <line x1="100" y1="0" x2="100" y2="200" strokeWidth="0.5" />
          <line x1="0" y1="100" x2="200" y2="100" strokeWidth="0.5" />
        </svg>

        {/* Subtle radial glow behind the Kitsune motif */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute -right-20 top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-amethyst/15 blur-3xl pointer-events-none"
        />

        {/* Kitsune (9 tails) abstract SVG (Enhanced with drop-shadow glow and opacity-60) */}
        <svg
          aria-hidden="true"
          className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 w-[380px] h-[380px] xl:w-[480px] xl:h-[480px] opacity-60 drop-shadow-[0_0_25px_rgba(143,124,255,0.5)] pointer-events-none select-none"
          viewBox="0 0 500 500"
          fill="none"
        >
          <defs>
            <linearGradient id="kitsune-tail-grad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#483AA0" stopOpacity="0.8" />
              <stop offset="45%" stopColor="#412B6B" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#433D8B" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="kitsune-accent-grad" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#483AA0" stopOpacity="0.9" />
              <stop offset="60%" stopColor="#412B6B" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C9B5E0" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* 9 curved elegant abstract lines (Kitsune tails) */}
          <path d="M 380 430 C 320 410, 140 370, 70 270 C 30 210, 50 140, 110 110 C 140 95, 170 110, 160 135" stroke="url(#kitsune-tail-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 380 430 C 300 380, 130 300, 100 200 C 80 130, 120 70, 190 55 C 220 50, 240 70, 230 95" stroke="url(#kitsune-tail-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 380 430 C 310 350, 180 240, 170 140 C 160 70, 220 30, 280 35 C 310 40, 320 65, 305 85" stroke="url(#kitsune-tail-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 380 430 C 330 320, 240 190, 260 100 C 275 35, 335 20, 380 40 C 400 50, 405 75, 385 90" stroke="url(#kitsune-tail-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 380 430 C 350 300, 310 170, 350 85 C 375 30, 430 35, 455 70 C 470 90, 460 115, 440 120" stroke="url(#kitsune-accent-grad)" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M 380 430 C 370 300, 380 180, 420 110 C 445 65, 485 85, 490 125 C 495 150, 475 170, 455 165" stroke="url(#kitsune-tail-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 380 430 C 390 320, 430 220, 460 160 C 485 110, 500 140, 495 180 C 490 205, 465 215, 445 200" stroke="url(#kitsune-tail-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 380 430 C 410 350, 460 270, 475 220 C 490 170, 495 200, 480 240 C 470 265, 445 270, 425 250" stroke="url(#kitsune-tail-grad)" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M 380 430 C 420 380, 470 330, 480 290 C 490 240, 485 270, 465 305 C 450 330, 420 330, 405 310" stroke="url(#kitsune-tail-grad)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Geometric root node (HUD detail) */}
          <circle cx="380" cy="430" r="3" fill="#483AA0" opacity="0.6" />
        </svg>

        {/* Top Row: Panel ID, Status Line & System Load */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-white/10 relative z-10 gap-3">
          <span className="text-ash">001 // HOME</span>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-ash">
              {/* Primary Accent Pulse Dot */}
              <span className="flex h-2 w-2 rounded-full bg-amethyst animate-pulse" />
              <span>{t.home.status}</span>
              <span className="inline-block w-1.5 h-2.5 bg-amethyst animate-[blink_1s_step-end_infinite]" />
              <span className="text-ash/60 text-[9px] font-mono">[coffee]</span>
              <span className="text-ash/60 text-[9px] font-mono">·</span>
              <span className="text-ash/60 text-[9px] font-mono">[00:00:00]</span>
            </div>

            {/* System Load bar (dynamic pulse animation) */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-ash">
              <span>SYS.LOAD</span>
              <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div className="w-[65%] h-full bg-amethyst animate-pulse"></div>
              </div>
              <span className="text-amethyst font-bold animate-pulse">65%</span>
            </div>
          </div>
        </div>

        {/* Center: Massive H1 Title + Role with neon glow */}
        <div className="my-auto py-12 lg:py-16 relative z-10 max-w-4xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-tight text-bone drop-shadow-[0_0_15px_rgba(143,124,255,0.4)]">
            {(() => {
              const words = t.home.title.split(' ');
              const last = words.pop();
              return (
                <>
                  {words.join(' ')}{' '}
                  <span className="text-amethyst drop-shadow-[0_0_20px_rgba(143,124,255,0.8)]">
                    {last}
                  </span>
                </>
              );
            })()}
          </h1>

          <hr className="border-white/10 my-6 max-w-xl" />

          <p className="text-ash text-base sm:text-lg leading-relaxed max-w-2xl">
            {t.home.role}
          </p>
        </div>

        {/* Bottom Row: Location & CTAs */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-white/10 relative z-10">
          <div className="text-ash text-xs font-mono tracking-wider">
            {t.home.location}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* ONE amethyst moment for Panel 001 */}
            <Link
              href="/projects"
              className="text-sm font-medium px-5 py-2.5 bg-amethyst text-bone rounded-sm hover:opacity-90 transition-opacity"
            >
              {t.home.cta} →
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium px-5 py-2.5 border border-ash/30 text-ash rounded-sm hover:border-bone hover:text-bone transition-colors"
            >
              {t.home.contact}
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* HUD DASHBOARD BENTO GRID                                      */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* PANEL 002 (col-span-12 md:col-span-8) — STACK */}
        <article className="relative md:col-span-8 p-6 bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm flex flex-col justify-between overflow-hidden">
          <CornerBrackets />
          <CommitGrid />
          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-3 border-b border-white/10">
              {/* ONE amethyst moment for Panel 002 */}
              <span className="text-amethyst font-bold">002</span>
              <span className="text-ash">$ tech-stack --list</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 pt-4 relative z-10">
              {allTechs.map((tech) => (
                <div
                  key={tech.name}
                  className="px-2.5 py-1.5 bg-void/50 border border-white/10 rounded-sm text-bone font-mono text-[11px] flex items-center justify-between hover:border-amethyst transition-colors"
                >
                  <span>{tech.name}</span>
                  <span className="text-ash/40 text-[9px]">//</span>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* PANEL 003 (col-span-12 md:col-span-4) — SYSTEM STATUS (NOW) */}
        <article className="relative md:col-span-4 p-6 bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm flex flex-col justify-between overflow-hidden">
          <CommitGrid />
          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-3 border-b border-white/10">
              <span className="text-ash">003</span>
              <span className="text-ash">SYS_STATUS // ONLINE</span>
            </div>

            <ul className="pt-4 space-y-3 font-mono text-xs relative z-10">
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-ash">Education</span>
                <span className="text-bone">FATEC (2024–2026)</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-ash">Research</span>
                <span className="text-bone">PNT · ITA</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span className="text-ash">Location</span>
                <span className="text-bone">Caçapava, SP</span>
              </li>
              <li className="flex items-center gap-2 pt-1 text-[11px] text-ash">
                {/* ONE amethyst moment for Panel 003 */}
                <span className="flex h-2 w-2 rounded-full bg-amethyst animate-pulse" />
                <span>All telemetry pipelines nominal</span>
              </li>
            </ul>
          </div>
        </article>

        {/* PANEL 004 (col-span-12) — PROJECTS PREVIEW */}
        <article className="relative col-span-12 p-6 bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm">
          <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-3 border-b border-white/10">
            {/* ONE amethyst moment for Panel 004 */}
            <span className="text-amethyst font-bold">004</span>
            <span className="text-ash">$ ls projects/</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-4">
            {previewProjects.map((p, idx) => (
              <Link
                key={p.slug}
                href={p.hasCaseStudy ? `/projects/${p.slug}` : '/projects'}
                className="group p-4 bg-surface/80 backdrop-blur-md border border-white/10 hover:border-amethyst/50 rounded-sm transition-colors duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-ash mb-2">
                    <span>{p.year}</span>
                    <span className="flex items-center gap-1.5">
                      {/* Gold micro-accent on primary project active dot (#C9A961) */}
                      {idx === 0 ? (
                        <span className="flex h-1.5 w-1.5 rounded-full bg-[#C9A961] shadow-[0_0_6px_#C9A961]" />
                      ) : (
                        <span className="flex h-1.5 w-1.5 rounded-full bg-lilac" />
                      )}
                      <span className="uppercase text-[9px]">{p.status}</span>
                    </span>
                  </div>
                  <h3 className="text-bone font-bold text-sm group-hover:text-bone transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-ash text-xs mt-1 line-clamp-2 leading-relaxed">
                    {p.subtitle[locale]}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-ash font-mono">
                  <span className="uppercase">{p.category}</span>
                  <span className="text-bone group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </div>
        </article>

        {/* PANEL 005 (col-span-12 md:col-span-6) — LATEST LOG (Dynamic Terminal Log) */}
        <article className="relative md:col-span-6 p-6 bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm flex flex-col justify-between overflow-hidden">
          <CommitGrid />
          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-3 border-b border-white/10">
              <span className="text-ash">005</span>
              <span className="text-ash">$ cat /var/log/activity.log</span>
            </div>

            <TerminalLog />
          </div>
        </article>

        {/* PANEL 006 (col-span-12 md:col-span-6) — CONTACT */}
        <article className="relative md:col-span-6 p-6 bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm flex flex-col justify-between overflow-hidden">
          <CornerBrackets />
          <CommitGrid />
          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-3 border-b border-white/10">
              <span className="text-ash">006</span>
              <span className="text-ash">$ contact --send</span>
            </div>

            <div className="pt-4 space-y-4 relative z-10">
              <p className="text-bone text-sm leading-relaxed">
                Open to collaborations, research, and freelance.
              </p>
              <div className="space-y-1.5 pt-1">
                {/* ONE amethyst moment for Panel 006 */}
                <a
                  href="mailto:raphaelabm.dev@gmail.com"
                  className="inline-block text-xs font-medium px-4 py-2 bg-amethyst text-bone rounded-sm hover:opacity-90 transition-opacity font-mono"
                >
                  {t.work.emailCta} →
                </a>
                <p className="text-[10px] text-ash font-mono">{t.work.emailNote}</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
