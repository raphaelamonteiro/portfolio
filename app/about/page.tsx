'use client'

import Loading from '@/app/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Image from 'next/image'
import { mainTechStack, otherTechStack } from '../data/techStack'
import HobbiesCarousel from "@/app/components/ui/hobbies/hobby-carousel"

export default function About() {
    const { t } = useTranslation()

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16 fade-up">

            {/* --- CABEÇALHO / HERO --- */}
            <div className="relative border-l-2 border-[var(--amethyst)]/40 pl-4 sm:pl-6 space-y-6">
                {/* Metadados Estilo Log */}
                <div className="flex items-center gap-3 text-xs font-mono text-[var(--amethyst)]/80 tracking-widest uppercase">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{t.about.log}</span>
                </div>

                <h1 className="text-4xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-[var(--dusty-pink)] uppercase">
                    {t.about.title}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 items-center pt-4">
                    <div className="lg:col-span-5 flex justify-center">

                        <div className="relative w-[260px] sm:w-[320px] aspect-[4/5] rounded-2xl overflow-hidden">
                            <Image src="/assets/raphaela.jpg" alt="Raphaela Monteiro"
                                fill priority sizes="(max-width: 640px) 260px, 320px"
                                className="object-cover" />
                        </div>
                    </div>

                    {/* Texto de Apresentação */}
                    <div className="lg:col-span-7 space-y-2">
                        <div className="inline-block px-4 py-2 text-sm rounded-md bg-[var(--amethyst)]/10 text-[var(--amethyst)] border border-[var(--amethyst)]/20">
                            $ whoami
                        </div>
                        <h2 className="text-4xl sm:text-4xl font-extrabold tracking-wide text-[var(--amethyst)]">
                            Raphaela Monteiro
                        </h2>
                        <div className="space-y-4 text-base text-[var(--text-main)] leading-relaxed pt-2">
                            {t.about.paragraphs.map((text, index) => (
                                <p key={index}>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- MÉTRICAS / STATS (HUD PANELS) --- */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {t.about.stats.map((stat, index) => (
                    <div key={index}
                        className="relative p-4 sm:p-5 bg-[var(--bg-surface)]/40 border border-[var(--soft-lilac)] rounded-xl backdrop-blur-md transition-all hover:border-[var(--amethyst)]/60 hover:bg-[var(--bg-surface)]/60">
                        <div className="text-2xl sm:text-4xl font-extrabold font-mono text-[var(--amethyst)] tracking-tight">
                            {stat.value}
                        </div>
                        <div className="text-xs text-[var(--text-muted)] mt-1 font-medium">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            {/* --- ACADÊMICO & FORMAÇÃO --- */}
            {t.about.academia && (
                <div className="space-y-3">
                    <div className="flex items-center gap-2 uppercase tracking-widest text-4xl sm:text-4xl font-bold text-[var(--moon-pink)]">
                        <span>{t.about.academiaTitle}</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {t.about.academia[0].items.map((item, index) => (
                            <div
                                key={index}
                                className="p-5 bg-[var(--bg-surface)]/30 border border-[var(--border)] rounded-xl space-y-2 hover:border-[var(--amethyst)]/40 transition-all">
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-mono text-[var(--amethyst)] font-semibold">{item.title}</span>
                                    <span className="text-[10px] font-mono text-[var(--text-muted)]">{item.date}</span>
                                </div>
                                <h4 className="text-base font-bold text-[var(--soft-lilac)]">{item.course}</h4>
                                <p className="text-xs text-[var(--text-muted)]">{item.institute}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* --- TECH STACK (TELEMETRY TAGS) --- */}
            <div className="p-6 bg-[var(--bg-surface)]/20 border border-[var(--border)] rounded-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-[var(--border)] pb-3">
                    <span className="text-base font-black text-[var(--amethyst)] tracking-wider uppercase">{t.about.tech}
                    </span>
                </div>

                <div className="space-y-4">
                    {/* Main Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                        {mainTechStack.map((tech) => (
                            <div key={tech.name}
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-surface)] border border-[var(--amethyst)]/30 rounded-md text-xs font-mono text-[var(--text-main)] transition-all hover:border-[var(--amethyst)] hover:bg-[var(--amethyst)]/10">
                                <i className={`${tech.className} text-sm text-[var(--amethyst)]`}></i>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>

                    {/* Secondary Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--border)]/40">
                        {otherTechStack.map((tech) => (
                            <div key={tech.name}
                                className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--bg-surface)]/50 border border-[var(--border)] rounded-md text-xs font-mono text-[var(--text-muted)] transition-all hover:text-[var(--text-main)] hover:border-[var(--border)]/80">
                                <i className={`${tech.className} text-sm`}></i>
                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>




            {/* --- INTERESSES DE PESQUISA (RESEARCH) --- */}
            {t.about.researchMap && (
                <div className="space-y-2 text-center">
                    <div className="flex items-center gap-2 text-4xl font-bold text-[var(--moon-pink)] uppercase tracking-widest">
                        <span>{t.about.research}</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {t.about.researchMap[0].items.map((item, index) => (
                            <span
                                key={index}
                                className="px-5 py-3 bg-[var(--moon-pink)]/10 border border-[var(--moon-pink)]/20 rounded-full text-xs text-[var(--moon-pink)]">
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* --- SKILLS & VALUES (DATA CARDS) --- */}
            <div className="space-y-4">
                <div className="flex items-center gap-2 text-4xl font-bold text-[var(--moon-pink)]">
                    <span className="uppercase tracking-widest text-4xl sm:text-4xl font-bold text-[var(--moon-pink)]">{t.about.skills}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {t.about.skillsMap.map((group, groupIndex) =>
                        group.items.map((item, index) => (
                            <div key={`${groupIndex}-${index}`}
                                className="relative p-5 bg-[var(--bg-surface)]/30 border border-[var(--soft-lilac)] rounded-xl space-y-2 hover:border-[var(--amethyst)]/40 transition-all">

                                <h4 className="text-base font-bold text-[var(--soft-lilac)]">{item.title}</h4>
                                <p className="text-sm text-[var(--text-main)] leading-relaxed">{item.description}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* --- EXTRAS & HOBBIES --- */}
            <div className="pt-6 border-t border-[var(--soft-lilac)]">
                <div className="text-center space-y-1">
                    <span className="text-[10px] text-[var(--amethyst)] tracking-widest uppercase">// HOBBIES</span>
                    <h2 className="mt-4 text-4xl sm:text-4xl font-bold text-[var(--moon-pink)]">
                        {t.about.extra}
                    </h2>
                </div>
                <div className="w-full overflow-hidden">
                    <HobbiesCarousel items={t.about.hobbies[0].items} />
                </div>
            </div>

        </section>
    )
}