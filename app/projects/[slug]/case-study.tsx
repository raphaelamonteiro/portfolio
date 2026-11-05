'use client';

import { useTranslation } from '@/app/providers';
import type { Project } from '@/data/projects';
import Link from 'next/link';

export default function CaseStudy({ project }: { project: Project }) {
    const { t, locale } = useTranslation();
    const cs = project.caseStudy;
    if (!cs) return null;

    return (
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 fade-up">

            {/* Back */}
            <Link href="/projects"
                className="inline-block text-xs text-ash hover:text-bone transition-colors">
                ← {locale === 'pt' ? 'Voltar' : 'Back'}
            </Link>

            {/* Header */}
            <header className="space-y-6">
                <div className="flex flex-wrap items-center gap-3 text-xs text-ash uppercase tracking-widest">
                    <span className="text-amethyst/60">{project.year}</span>
                    <span>//</span>
                    <span>{project.category}</span>
                    <span>//</span>
                    <span className={project.status === 'wip' ? 'text-lilac' : 'text-emerald-400'}>
                        ● {t.projects.status[project.status]}
                    </span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-bold text-bone leading-tight">
                    {project.title}
                </h1>

                <p className="text-lg text-ash leading-relaxed">
                    {project.subtitle[locale]}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((s) => (
                        <span key={s}
                            className="text-[10px] px-2 py-1 border border-lilac/20 rounded-full text-ash">
                            {s}
                        </span>
                    ))}
                </div>

                {/* Links */}
                {(project.links?.repo || project.links?.live || project.links?.paper) && (
                    <div className="flex flex-wrap gap-4 pt-2 text-xs">
                        {project.links?.repo && (
                            <a href={project.links.repo} target="_blank" rel="noopener noreferrer"
                                className="text-ash hover:text-bone transition-colors">
                                ↗ GitHub
                            </a>
                        )}
                        {project.links?.live && (
                            <a href={project.links.live} target="_blank" rel="noopener noreferrer"
                                className="text-amethyst hover:text-amethyst/80 transition-colors">
                                ↗ {t.projects.viewProject}
                            </a>
                        )}
                        {project.links?.paper && (
                            <a href={project.links.paper} target="_blank" rel="noopener noreferrer"
                                className="text-ash hover:text-bone transition-colors">
                                ↗ Paper
                            </a>
                        )}
                    </div>
                )}
            </header>

            {/* Sections */}
            <Section title="Abstract">{cs.abstract[locale]}</Section>
            <Section title="Context">{cs.context[locale]}</Section>
            <Section title="Approach">{cs.approach[locale]}</Section>
            <Section title="Architecture">{cs.architecture[locale]}</Section>
            <Section title={locale === 'pt' ? 'O que eu construí' : 'What I built'}>
                {cs.whatIBuilt[locale]}
            </Section>
            <Section title={locale === 'pt' ? 'Resultados' : 'Results'}>
                {cs.results[locale]}
            </Section>
            <Section title={locale === 'pt' ? 'Reflexão' : 'Reflection'}>
                {cs.reflection[locale]}
            </Section>

            {/* Footer nav */}
            <div className="pt-8 border-t border-lilac/20">
                <Link href="/projects"
                    className="text-xs text-ash hover:text-bone transition-colors">
                    ← {locale === 'pt' ? 'Todos os projetos' : 'All projects'}
                </Link>
            </div>
        </article>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <section className="space-y-3 pt-8 border-t border-lilac/20">
            <h2 className="text-xs text-amethyst uppercase tracking-widest">// {title}</h2>
            <p className="text-base text-bone leading-relaxed">{children}</p>
        </section>
    );
}