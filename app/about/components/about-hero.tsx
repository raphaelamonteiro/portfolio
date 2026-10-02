'use client';

import { useTranslation } from '@/app/providers';
import Image from 'next/image';

export default function AboutHero() {
    const { t } = useTranslation();
    const a = t.about;

    return (
        <section className="space-y-12">
            <div className="relative border-l-2 border-amethyst/40 pl-6 space-y-6">
                <div className="flex items-center gap-3 text-xs font-mono text-amethyst/80 tracking-widest uppercase">
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{a.log}</span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-dusty uppercase">
                    {a.title}
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-6 pt-4">
                    <div className="lg:col-span-5 flex justify-center">
                        <div className="relative w-[260px] sm:w-[320px] aspect-[4/5] rounded-lg overflow-hidden">
                            <Image src="/assets/raphaela.png" alt="Raphaela Monteiro"
                                fill priority sizes="(max-width: 640px) 260px, 320px"
                                className="object-cover" />
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-3">
                        <div className="inline-block px-4 py-2 text-sm rounded-md bg-amethyst/10 text-amethyst border border-amethyst/20 font-mono">
                            $ whoami
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide text-amethyst">
                            Raphaela Monteiro
                        </h2>
                        <div className="space-y-4 text-base text-bone leading-relaxed pt-2">
                            {a.paragraphs.map((text, i) => <p key={i}>{text}</p>)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {a.stats.map((s) => (
                    <div key={s.label}
                        className="p-4 sm:p-5 bg-surface/40 border border-lilac/30 rounded-lg hover:border-amethyst/60 transition">
                        <div className="text-2xl sm:text-4xl font-extrabold font-mono text-amethyst tracking-tight">
                            {s.value}
                        </div>
                        <div className="text-xs text-ash mt-1 font-medium">{s.label}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}