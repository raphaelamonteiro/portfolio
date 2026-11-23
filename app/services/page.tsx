'use client';

import { useTranslation } from '@/app/providers';
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

export default function Services() {
  const { t, locale } = useTranslation();

  return (
    <div className="relative min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8 overflow-hidden">
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
      {/* PANEL 001 — HEADER (The Uplink)                               */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative p-6 sm:p-10 lg:p-12 bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm overflow-hidden fade-up">
        <CornerBrackets />

        {/* Top Header Row */}
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-white/10 mb-8">
          <span className="text-ash">001 // SERVICES</span>
          <span className="text-ash font-mono">$ uplink --init</span>
        </div>

        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.0] tracking-tight text-bone drop-shadow-[0_0_15px_rgba(143,124,255,0.4)]">
          {(() => {
            const words = t.work.title.split(' ');
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

        <hr className="border-white/10 max-w-xl my-6" />

        <p className="text-ash max-w-2xl font-mono text-sm sm:text-base leading-relaxed">
          {t.work.intro}
        </p>

        <p className="text-ash/60 text-xs font-mono mt-3">
          {t.work.subtitle}
        </p>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* PANEL 002 — SERVICES GRID (Capabilities)                      */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="space-y-4 fade-up">
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono text-ash px-1">
          <span>002 // CAPABILITIES</span>
          <span>{t.work.services.length} ACTIVE SPECIFICATIONS</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {t.work.services.map((svc, idx) => {
            const indexStr = `SVC_00${idx + 1}`;
            return (
              <article
                key={svc.title}
                className="bg-surface/80 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm p-6 relative flex flex-col justify-between overflow-hidden"
              >
                <CommitGrid />
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-[0.2em] uppercase relative z-10">
                    <span className="text-amethyst/60">{indexStr}</span>
                    <span className="text-ash/60 font-mono">◇</span>
                  </div>

                  <h2 className="text-bone font-bold text-lg mt-4 mb-2 relative z-10">
                    {svc.title}
                  </h2>

                  <hr className="border-white/10 mb-3 relative z-10" />

                  <p className="text-ash text-xs font-mono leading-relaxed relative z-10">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-ash/60 uppercase tracking-widest relative z-10">
                  <span>DISPONIBILIDADE // ATIVA</span>
                  <span>SPEC: PRODUCTION</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* PANEL 003 — CTA PANEL (Email First)                           */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm p-8 sm:p-12 text-center overflow-hidden fade-up">
        <CornerBrackets />

        {/* Subtle amethyst glow behind text */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amethyst/10 rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative z-10 max-w-2xl mx-auto space-y-3">
          <div className="text-[10px] font-mono text-amethyst/80 uppercase tracking-[0.2em] mb-2">
            003 // ESTABLISH UPLINK
          </div>

          <h2 className="text-bone font-bold text-2xl sm:text-3xl tracking-tight">
            {t.work.contactCta}
          </h2>

          <p className="text-ash font-mono text-sm">
            {t.work.emailNote}
          </p>

          <div className="pt-4">
            <a
              href="mailto:raphaelabm.dev@gmail.com"
              className="bg-amethyst text-void px-8 py-4 rounded-sm font-bold text-lg hover:bg-amethyst/80 transition-colors inline-block"
            >
              {t.work.emailCta}
            </a>
          </div>

          <div className="pt-4">
            <Link
              href="/projects"
              className="text-xs text-ash hover:text-bone font-mono tracking-widest transition-colors inline-block"
            >
              // {locale === 'pt' ? 'Ver histórico de projetos →' : 'See archive of work →'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
