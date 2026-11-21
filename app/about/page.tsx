'use client';

import { useTranslation } from '@/app/providers';
import AboutHero from './components/about-hero';
import { mainTechStack, otherTechStack } from '@/data/tech-stack';

function CornerBrackets() {
  return (
    <>
      <span className="absolute top-0 left-0 w-2 h-2 border-t border-l border-lilac/40 pointer-events-none" />
      <span className="absolute top-0 right-0 w-2 h-2 border-t border-r border-lilac/40 pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-lilac/40 pointer-events-none" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-lilac/40 pointer-events-none" />
    </>
  );
}

export default function About() {
  const { t } = useTranslation();
  const a = t.about;

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 fade-up">
      {/* PANEL 001 — ABOUT HERO */}
      <AboutHero />

      {/* BENTO GRID: PANELS 002-006 */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* PANEL 002 — EDUCATION / ACADEMIA (lg:col-span-6) */}
        <div className="relative md:col-span-12 lg:col-span-6 p-6 sm:p-8 bg-surface/40 border border-lilac rounded-sm flex flex-col justify-between">
          <CornerBrackets />

          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-lilac mb-6">
              <span className="text-amethyst">002 // ACADEMIA</span>
              <span className="text-ash font-mono">{a.academiaTitle}</span>
            </div>

            {/* Timeline */}
            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-lilac/30">
              {a.academia.map((item) => (
                <div key={item.course} className="relative">
                  <span className="absolute -left-6 top-1.5 w-2 h-2 rounded-full bg-lilac/60 border border-void" />
                  <div className="flex items-baseline justify-between gap-2 text-xs font-mono">
                    <span className="text-ash uppercase tracking-wider">{item.title}</span>
                    <span className="text-ash/60">{item.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-bone mt-1">{item.course}</h3>
                  <p className="text-xs text-ash/80 mt-0.5 font-mono">{item.institute}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-lilac flex items-center justify-between text-[10px] font-mono text-ash tracking-widest uppercase">
            <span>TRAJECTORY // FORMAL</span>
            <span>VERIFIED LOG</span>
          </div>
        </div>

        {/* PANEL 003 — RESEARCH (lg:col-span-6) */}
        <div className="relative md:col-span-12 lg:col-span-6 p-6 sm:p-8 bg-surface/40 border border-lilac rounded-sm flex flex-col justify-between">
          <CornerBrackets />

          <div>
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-lilac mb-6">
              <span className="text-amethyst">003 // RESEARCH</span>
              <span className="text-ash font-mono">{a.research}</span>
            </div>

            <div className="space-y-4 my-auto py-2">
              <p className="text-xs text-ash font-mono leading-relaxed">
                Core computational disciplines and theoretical focus areas:
              </p>
              <div className="flex flex-wrap gap-2">
                {a.researchMap.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-void/50 border border-lilac/40 hover:border-lilac text-bone rounded-full text-xs font-mono transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 mt-6 border-t border-lilac flex items-center justify-between text-[10px] font-mono text-ash tracking-widest uppercase">
            <span>FOCUS // APPLIED SYSTEMS</span>
            <span>{a.researchMap.length} DOMAINS</span>
          </div>
        </div>

        {/* PANEL 004 — VALUES / PRINCIPLES (col-span-12) */}
        <div className="relative col-span-12 p-6 sm:p-8 bg-surface/40 border border-lilac rounded-sm">
          <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-lilac mb-6">
            <span className="text-amethyst">004 // PRINCIPLES</span>
            <span className="text-ash font-mono">{a.skills}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {a.skillsMap.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 bg-void/40 border border-lilac rounded-sm space-y-3"
              >
                <div className="text-[10px] font-mono text-ash tracking-widest uppercase">
                  RULE // 0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-bone">{item.title}</h3>
                <p className="text-xs text-ash leading-relaxed font-mono">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PANEL 005 — TECH STACK (col-span-12) */}
        <div className="relative col-span-12 p-6 sm:p-8 bg-surface/40 border border-lilac rounded-sm">
          <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-lilac mb-6">
            <span className="text-amethyst">005 // TECH STACK</span>
            <span className="text-ash font-mono">$ tech-stack --list</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-[10px] font-mono text-ash uppercase tracking-widest">
                PRIMARY // PRODUCTION CORES
              </div>
              <div className="flex flex-wrap gap-2">
                {mainTechStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1.5 bg-void/60 border border-lilac/60 text-bone rounded-full text-xs font-mono"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-lilac/30 space-y-3">
              <div className="text-[10px] font-mono text-ash uppercase tracking-widest">
                SECONDARY // ECOSYSTEM & TOOLING
              </div>
              <div className="flex flex-wrap gap-2">
                {otherTechStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-2.5 py-1 border border-lilac/20 text-ash rounded-full text-xs font-mono hover:text-bone hover:border-lilac/40 transition-colors"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PANEL 006 — HOBBIES (col-span-12) */}
        <div className="relative col-span-12 p-6 sm:p-8 bg-surface/40 border border-lilac rounded-sm">
          <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-lilac mb-6">
            <span className="text-amethyst">006 // BEYOND CODE</span>
            <span className="text-ash font-mono">$ ls hobbies/</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {a.hobbies.map((h) => (
              <div
                key={h.name}
                className="aspect-square p-4 bg-void/50 border border-lilac rounded-sm flex flex-col justify-between hover:border-lilac/60 transition-colors group"
              >
                <span className="text-[10px] text-ash font-mono uppercase tracking-widest">// hobby</span>
                <div className="text-xs font-mono text-ash/30 border border-dashed border-lilac/30 rounded-sm w-12 h-12 flex items-center justify-center mx-auto my-auto group-hover:text-ash/60 transition-colors">
                  [img]
                </div>
                <p className="text-xs sm:text-sm text-bone font-mono leading-tight">{h.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
