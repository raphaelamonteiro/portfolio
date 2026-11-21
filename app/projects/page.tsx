'use client';

import { useTranslation } from '@/app/providers';
import { projects, type Project } from '@/data/projects';
import { useState } from 'react';
import Link from 'next/link';

type Category = 'all' | Project['category'];

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

export default function Projects() {
  const { t, locale } = useTranslation();
  const [filter, setFilter] = useState<Category>('all');

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

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
      {/* PANEL 001 — HEADER (Mission Database)                         */}
      {/* ───────────────────────────────────────────────────────────── */}
      <section className="relative p-6 sm:p-10 lg:p-12 bg-surface/40 border border-lilac border-t border-t-bone/20 rounded-sm overflow-hidden fade-up">
        <CornerBrackets />

        {/* Top Header Row */}
        <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase font-mono pb-4 border-b border-lilac mb-8">
          <span className="text-ash">001 // PROJECTS</span>
          <span className="text-ash font-mono">SYS_DATABASE</span>
        </div>

        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl leading-[1.0] tracking-tight bg-[linear-gradient(180deg,#C9B5E0_0%,#C9B5E0_48%,#433D8B_52%,#17153B_100%)] bg-clip-text text-transparent">
          {t.projects.title}
        </h1>

        <hr className="border-lilac max-w-xl my-6" />

        <p className="text-ash max-w-2xl font-mono text-sm sm:text-base leading-relaxed">
          {t.projects.subtitle}
        </p>
      </section>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* PANEL 002 — FILTERS (Terminal-Style Filter Bar)               */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="relative p-4 sm:p-6 bg-surface/40 border border-lilac rounded-sm flex flex-wrap items-center gap-2 sm:gap-4 font-mono text-xs fade-up">
        <span className="text-ash/60 text-[10px] tracking-widest uppercase mr-2">// FILTER:</span>
        {(['all', 'systems', 'ai', 'research', 'web', 'personal'] as const).map((cat) => {
          const isActive = filter === cat;
          const label =
            cat === 'all'
              ? 'ALL'
              : t.projects.filters[cat]?.toUpperCase() || cat.toUpperCase();
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-1 py-0.5 transition-colors cursor-pointer ${
                isActive
                  ? 'text-amethyst border-b border-amethyst font-bold'
                  : 'text-ash hover:text-bone'
              }`}
            >
              [ {label} ]
            </button>
          );
        })}
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* PROJECT CARDS (Bento Grid)                                    */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 fade-up">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} locale={locale} />
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full py-16 text-center text-ash font-mono text-xs">
            {locale === 'pt'
              ? '// NENHUM PROJETO ENCONTRADO NESTE SETOR'
              : '// NO ARCHIVED MISSIONS FOUND IN THIS SECTOR'}
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project: p,
  locale,
}: {
  project: Project;
  locale: 'en' | 'pt';
}) {
  const { t } = useTranslation();

  const Wrapper = p.hasCaseStudy
    ? ({ children }: { children: React.ReactNode }) => (
        <Link href={`/projects/${p.slug}`} className="block h-full group/link">
          {children}
        </Link>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <div className="h-full">{children}</div>
      );

  return (
    <Wrapper>
      <article className="bg-surface/40 border border-lilac hover:border-amethyst/40 transition-colors rounded-sm p-6 relative overflow-hidden group flex flex-col h-full">
        {/* Top row: Year + Status dot + Status text + GitHub Link */}
        <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-mono">
          <div className="flex items-center gap-2">
            <span className="text-amethyst/60">{p.year}</span>
            <span className="text-ash/40">·</span>
            <div className="flex items-center gap-1.5">
              <span
                className={`w-1.5 h-1.5 rounded-full ${
                  p.status === 'active'
                    ? 'bg-emerald-400'
                    : p.status === 'wip'
                    ? 'bg-lilac'
                    : 'bg-ash'
                }`}
              />
              <span className="text-ash">{t.projects.status[p.status]}</span>
            </div>
          </div>

          {p.links?.repo && (
            <a
              href={p.links.repo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View source on GitHub"
              onClick={(e) => e.stopPropagation()}
              className="text-ash hover:text-bone transition-colors p-1 z-20"
            >
              <svg
                className="w-4 h-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </a>
          )}
        </div>

        {/* Title */}
        <h3 className="text-bone font-bold text-lg group-hover:text-amethyst transition-colors mt-4 mb-2">
          {p.title}
        </h3>

        {/* Hairline */}
        <hr className="border-lilac/20 mb-3" />

        {/* Brief */}
        <p className="line-clamp-3 text-ash text-xs font-mono leading-relaxed mb-4">
          {p.subtitle[locale]}
        </p>

        {/* Stack (first 4 items, dot-separated, +N if more) */}
        <div className="text-[10px] text-ash/60 font-mono mt-auto pt-2 mb-4">
          {p.stack.slice(0, 4).join(' · ')}
          {p.stack.length > 4 && ` · +${p.stack.length - 4}`}
        </div>

        {/* Footer: category on left, Read → on right */}
        <div className="pt-3 border-t border-lilac/20 flex items-center justify-between text-[10px] font-mono">
          <span className="text-ash uppercase tracking-wider">{p.category}</span>
          {p.hasCaseStudy ? (
            <span className="text-amethyst group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
              Read →
            </span>
          ) : p.links?.live ? (
            <a
              href={p.links.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-ash hover:text-bone transition-colors"
            >
              Live ↗
            </a>
          ) : null}
        </div>
      </article>
    </Wrapper>
  );
}
