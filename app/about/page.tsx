'use client';

import { useTranslation } from '@/app/providers';
import AboutHero from './components/about-hero';
import { mainTechStack, otherTechStack } from '@/data/tech-stack';

export default function About() {
    const { t } = useTranslation();
    const a = t.about;

    return (
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 fade-up">
            <AboutHero />

            {/* ACADEMIA */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-moon uppercase tracking-widest">
                    {a.academiaTitle}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {a.academia.map((item) => (
                        <div key={item.course} className="p-5 bg-surface border border-lilac/20 rounded-lg space-y-2">
                            <div className="flex justify-between items-start">
                                <span className="text-xs text-amethyst">{item.title}</span>
                                <span className="text-[10px] text-ash">{item.date}</span>
                            </div>
                            <h3 className="text-base font-bold text-bone">{item.course}</h3>
                            <p className="text-xs text-ash">{item.institute}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* TECH STACK */}
            <div className="p-6 bg-surface border border-lilac/20 rounded-lg space-y-6">
                <h2 className="text-base font-bold text-amethyst tracking-wider uppercase border-b border-lilac/20 pb-3">
                    {a.tech}
                </h2>
                <div className="flex flex-wrap gap-2">
                    {mainTechStack.map((tech) => (
                        <div key={tech.name} className="inline-flex items-center gap-2 px-3 py-1.5 bg-void border border-amethyst/30 rounded-md text-xs text-bone">
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-lilac/20">
                    {otherTechStack.map((tech) => (
                        <div key={tech.name} className="inline-flex items-center gap-2 px-3 py-1.5 bg-void/50 border border-lilac/20 rounded-md text-xs text-ash">
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* RESEARCH */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-moon uppercase tracking-widest">{a.research}</h2>
                <div className="flex flex-wrap gap-2">
                    {a.researchMap.map((item) => (
                        <span key={item} className="px-4 py-2 bg-moon/10 border border-moon/20 rounded-full text-xs text-moon">
                            {item}
                        </span>
                    ))}
                </div>
            </div>

            {/* SKILLS */}
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-moon uppercase tracking-widest">{a.skills}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {a.skillsMap.map((item) => (
                        <div key={item.title} className="p-5 bg-surface border border-lilac/20 rounded-lg space-y-2">
                            <h3 className="text-base font-bold text-bone">{item.title}</h3>
                            <p className="text-sm text-ash leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* HOBBIES */}
            <div className="pt-6 border-t border-lilac/20 space-y-6">
                <div className="space-y-1">
                    <span className="text-[10px] text-amethyst tracking-widest uppercase">// HOBBIES</span>
                    <h2 className="text-2xl font-bold text-moon">{a.extra}</h2>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {a.hobbies.map((h) => (
                        <li key={h.name} className="border border-lilac/20 rounded-lg p-3">
                            <span className="text-[10px] text-ash uppercase">// hobby</span>
                            <p className="text-sm text-bone mt-1">{h.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}