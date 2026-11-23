'use client';

import { useTranslation } from '@/app/providers';
import Image from 'next/image';

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

export default function AboutHero() {
  const { t } = useTranslation();
  const a = t.about;

  return (
    <section className="space-y-8">
      {/* PANEL 001 — ABOUT HERO */}
      <div className="relative p-6 sm:p-10 lg:p-12 bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm overflow-hidden">
        <CornerBrackets />

        {/* Top Header Row */}
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-white/10 relative z-10 mb-8">
          <span className="text-ash">001 // ABOUT</span>
          <div className="flex items-center gap-2 text-ash">
            <span className="flex h-2 w-2 rounded-full bg-amethyst animate-pulse" />
            <span>{t.home.status}</span>
          </div>
        </div>

        {/* 2-Column Desktop Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 text-xs rounded-sm bg-void/60 border border-white/10 text-amethyst font-mono">
              $ whoami
            </div>

            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.0] tracking-tight text-bone drop-shadow-[0_0_15px_rgba(143,124,255,0.4)]">
              {(() => {
                const words = a.title.split(' ');
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

            <hr className="border-white/10 max-w-xl" />

            <div className="space-y-4 text-ash text-sm sm:text-base leading-relaxed max-w-2xl font-mono">
              {a.paragraphs.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
            </div>
          </div>

          {/* Right Column (lg:col-span-5): Portrait Panel */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Radial glow behind portrait */}
              <div
                aria-hidden="true"
                className="absolute -inset-4 bg-amethyst/15 rounded-full blur-2xl pointer-events-none"
              />

              <div className="relative p-3 bg-surface/80 backdrop-blur-md border border-white/10 rounded-sm shadow-xl">
                <CornerBrackets />
                <div className="relative w-[260px] sm:w-[300px] aspect-[4/5] rounded-sm overflow-hidden bg-void">
                  <Image
                    src="/assets/raphaela.png"
                    alt="Raphaela Monteiro"
                    fill
                    priority
                    sizes="(max-width: 640px) 260px, 300px"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500 cursor-crosshair"
                  />
                </div>
                <div className="pt-2 flex items-center justify-between text-[9px] font-mono text-ash tracking-widest uppercase">
                  <span>SYS_ID // RM-2026</span>
                  <span>100% NOMINAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* STATS: 4-column grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {a.stats.map((s) => (
          <div
            key={s.label}
            className="relative p-6 bg-surface/60 backdrop-blur-md border border-white/10 shadow-[inset_0_0_20px_rgba(143,124,255,0.05)] hover:border-amethyst/50 hover:shadow-[0_0_30px_rgba(143,124,255,0.15)] transition-colors duration-200 rounded-sm flex flex-col justify-between"
          >
            <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono text-amethyst tracking-tight">
              {s.value}
            </div>
            <div className="text-xs text-ash font-mono mt-2">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
