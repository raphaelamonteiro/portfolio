'use client';

import { useTranslation } from '@/app/providers';
import { projects, type Project } from '@/data/projects';
import { useState } from 'react';
import Link from 'next/link';

type Category = 'all' | Project['category'];

export default function Projects() {
    const { t, locale } = useTranslation();
    const [filter, setFilter] = useState<Category>('all');

    const filtered = filter === 'all'
        ? projects
        : projects.filter((p) => p.category === filter);

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 fade-up">

            {/* Header */}
            <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs text-ash tracking-widest uppercase">
                    <span className="text-amethyst/60">01</span>
                    <span>// {t.projects.title}</span>
                </div>
                <h1 className="font-bold text-4xl sm:text-5xl text-bone leading-tight max-w-3xl">
                    {t.projects.subtitle}
                </h1>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 pt-4 border-t border-lilac/20">
                {(['all', 'web', 'systems', 'ai', 'research'] as const).map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`
              text-xs px-3 py-1.5 rounded-md transition-colors
              ${filter === cat
                                ? 'bg-amethyst/15 text-amethyst border border-amethyst/40'
                                : 'text-ash border border-lilac/20 hover:text-bone hover:border-lilac/40'
                            }
            `}
                    >
                        {t.projects.filters[cat]}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filtered.map((p) => (
                    <ProjectCard key={p.slug} project={p} locale={locale} />
                ))}
            </div>

            {filtered.length === 0 && (
                <p className="text-ash text-sm text-center py-12">
                    Nenhum projeto nessa categoria ainda.
                </p>
            )}
        </section>
    );
}

function ProjectCard({ project: p, locale }: { project: Project; locale: 'en' | 'pt' }) {
    const { t } = useTranslation();

    return (
        <article className="group p-6 bg-surface border border-lilac/20 rounded-lg
                        hover:border-amethyst/40 transition-colors flex flex-col">

            {/* Top row: year + status */}
            <div className="flex items-center justify-between text-[10px] uppercase tracking-widest mb-4">
                <span className="text-amethyst/60">{p.year}</span>
                <span className={`
          px-2 py-0.5 rounded-full border
          ${p.status === 'active' ? 'text-emerald-400 border-emerald-400/30' : ''}
          ${p.status === 'completed' ? 'text-ash border-lilac/20' : ''}
          ${p.status === 'wip' ? 'text-dusty border-dusty/30' : ''}
        `}>
                    {t.projects.status[p.status]}
                </span>
            </div>

            {/* Title + description */}
            <h2 className="text-xl font-bold text-bone mb-2 group-hover:text-amethyst transition-colors">
                {p.title}
            </h2>

            <p className="text-sm text-ash leading-relaxed mb-4">
                {p.description[locale]}
            </p>

            {/* Highlights (opcional) */}
            {p.highlights && p.highlights.length > 0 && (
                <ul className="space-y-1 mb-4">
                    {p.highlights.map((h, i) => (
                        <li key={i} className="text-xs text-ash flex items-start gap-2">
                            <span className="text-amethyst/60 mt-[3px]">▸</span>
                            <span>{h}</span>
                        </li>
                    ))}
                </ul>
            )}

            {/* Stack */}
            <div className="flex flex-wrap gap-1.5 mb-5">
                {p.stack.map((s) => (
                    <span key={s}
                        className="text-[10px] px-2 py-1 bg-void/50 border border-lilac/20
                           rounded text-ash">
                        {s}
                    </span>
                ))}
            </div>

            {/* Links */}
            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-lilac/20">
                {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-ash hover:text-bone transition-colors">
                        ↗ {t.projects.viewCode}
                    </a>
                )}
                {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                        className="text-xs text-amethyst hover:text-amethyst/80 transition-colors">
                        ↗ {t.projects.viewProject}
                    </a>
                )}
            </div>
        </article>
    );
}