'use client';

import { useTranslation } from '@/app/providers';
import AboutHero from './components/about-hero';
import { mainTechStack, otherTechStack } from '@/data/tech-stack';

export default function About() {
    const { t } = useTranslation();
    const a = t.about;

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 fade-up">
            <AboutHero />

            {/* ACADEMIA */}
            <div className="space-y-6">
                <SectionHeader index="01" title={a.academiaTitle} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {a.academia.map((item) => (
                        <div key={item.course}
                            className="p-5 bg-surface border border-lilac/20 rounded-lg space-y-3
                            hover:border-lilac/40 transition-colors">
                            <div className="flex justify-between items-start">
                                <span className="text-[10px] text-amethyst uppercase tracking-widest">
                                    {item.title}
                                </span>
                                <span className="text-[10px] text-ash">{item.date}</span>
                            </div>
                            <h3 className="text-lg font-bold text-bone">{item.course}</h3>
                            <p className="text-xs text-ash">{item.institute}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* TECH STACK */}
            <div className="space-y-6">
                <SectionHeader index="02" title={a.tech} />
                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {mainTechStack.map((tech) => (
                            <span key={tech.name}
                                className="px-3 py-1.5 bg-amethyst/10 border border-amethyst/30
                               rounded-md text-xs text-amethyst">
                                {tech.name}
                            </span>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-lilac/20">
                        {otherTechStack.map((tech) => (
                            <span key={tech.name}
                                className="px-3 py-1.5 border border-lilac/20 rounded-md text-xs text-ash
                               hover:text-bone hover:border-lilac/40 transition-colors">
                                {tech.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* RESEARCH */}
            <div className="space-y-6">
                <SectionHeader index="03" title={a.research} />
                <div className="flex flex-wrap gap-2">
                    {a.researchMap.map((item) => (
                        <span key={item}
                            className="px-4 py-2 bg-moon/10 border border-moon/30 rounded-full
                             text-xs text-moon">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* SKILLS */}
            <div className="space-y-6">
                <SectionHeader index="04" title={a.skills} />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {a.skillsMap.map((item) => (
                        <div key={item.title}
                            className="p-5 bg-surface border border-lilac/20 rounded-lg space-y-2
                            hover:border-amethyst/40 transition-colors">
                            <h3 className="text-base font-bold text-bone">{item.title}</h3>
                            <p className="text-sm text-ash leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* HOBBIES */}
            <div className="space-y-6 pt-10 border-t border-lilac/20">
                <SectionHeader index="05" title={a.extra} small />
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {a.hobbies.map((h) => (
                        <li key={h.name}
                            className="border border-lilac/20 rounded-lg p-3
                           hover:border-moon/40 transition-colors">
                            <span className="text-[10px] text-amethyst uppercase tracking-widest">// hobby</span>
                            <p className="text-sm text-bone mt-2">{h.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function SectionHeader({ index, title, small }: { index: string; title: string; small?: boolean }) {
    return (
        <div className="flex items-baseline gap-4">
            <span className="text-xs text-amethyst/60 tracking-widest">{index}</span>
            <h2 className={`font-bold text-bone uppercase tracking-widest ${small ? 'text-lg' : 'text-xl'}`}>
                {title}
            </h2>
        </div>
    );
}