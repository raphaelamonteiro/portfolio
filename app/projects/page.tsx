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
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 fade-up">

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
                {(['all', 'systems', 'ai', 'research', 'web', 'personal'] as const).map((cat) => (
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
                    {locale === 'pt' ? 'Nenhum projeto nessa categoria ainda.' : 'No projects in this category yet.'}
                </p>
            )}
        </section>
    );
}

function ProjectCard({ project: p, locale }: { project: Project; locale: 'en' | 'pt' }) {
    const { t } = useTranslation();

    const Wrapper = p.hasCaseStudy
        ? ({ children }: { children: React.ReactNode }) => (
            <Link href={`/projects/${p.slug}`} className="block">{children}</Link>
        )
        : ({ children }: { children: React.ReactNode }) => <>{children}</>;

    return (
        <Wrapper>
            <article className="group p-6 bg-surface border border-lilac/20 rounded-lg
                          hover:border-amethyst/40 transition-colors flex flex-col h-full">

                {/* Top row: year + status */}
                <div className="flex items-center justify-between text-[10px] uppercase tracking-widest mb-4">
                    <span className="text-amethyst/60">{p.year}</span>
                    <div className="flex items-center gap-2">
                        <span className={`
              px-2 py-0.5 rounded-full border
              ${p.status === 'active' ? 'text-emerald-400 border-emerald-400/30' : ''}
              ${p.status === 'completed' ? 'text-ash border-lilac/20' : ''}
              ${p.status === 'wip' ? 'text-lilac border-lilac/30' : ''}
            `}>
                            {t.projects.status[p.status]}
                        </span>
                    </div>
                </div>

                {/* Title + subtitle */}
                <h2 className="text-xl font-bold text-bone mb-2 group-hover:text-amethyst transition-colors">
                    {p.title}
                </h2>

                <p className="text-sm text-ash leading-relaxed mb-4">
                    {p.subtitle[locale]}
                </p>

                {/* Highlights */}
                {p.highlights && p.highlights[locale].length > 0 && (
                    <ul className="space-y-1 mb-4">
                        {p.highlights[locale].map((h, i) => (
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
                            className="text-[10px] px-2 py-1 bg-void/50 border border-lilac/20 rounded-full text-ash">
                            {s}
                        </span>
                    ))}
                </div>

                {/* Footer */}
                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-lilac/20">
                    {p.hasCaseStudy && (
                        <span className="text-xs text-amethyst">
                            {t.projects.readCase} →
                        </span>
                    )}
                    {p.links?.repo && (
                        <a href={p.links.repo} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-ash hover:text-bone transition-colors"
                            onClick={(e) => e.stopPropagation()}>
                            ↗ {t.projects.viewCode}
                        </a>
                    )}
                    {p.links?.live && (
                        <a href={p.links.live} target="_blank" rel="noopener noreferrer"
                            className="text-xs text-ash hover:text-bone transition-colors"
                            onClick={(e) => e.stopPropagation()}>
                            ↗ {t.projects.viewProject}
                        </a>
                    )}
                </div>
            </article>
        </Wrapper>
    );
}