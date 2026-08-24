'use client'

import Loading from '@/app/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Image from 'next/image'
import me from '@/public/assets/raphaela.jpg'
import { mainTechStack, otherTechStack } from '../data/techStack'
import HobbiesCarousel from "@/app/components/hobbiesCarousel";

export default function About() {
    const { t, isLoading } = useTranslation()
    if (isLoading) return <Loading />

    return (
        <section className="px-[6%] md:px-[8%] pt-4 pb-12">

            <div className="mt-8">
                <h1 className="text-5xl md:text-7xl font-bold text-[var(--dusty-pink)]">
                    {t.about.title}
                </h1>

                <div className="mt-4 h-[2px] w-10 rounded-full bg-[var(--amethyst)]" />
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-[320px_1fr] lg:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-center max-w-6xl">

                <div className="flex justify-center md:justify-start">
                    <Image
                        src={me}
                        priority
                        alt="Raphaela Monteiro"
                        className="w-[260px]
                sm:w-[280px]
                md:w-[320px]
                lg:w-[380px]
                aspect-[4/5] object-cover rounded-3xl border border-[var(--border)] shadow-xl"/>
                </div>

                {/* Text */}
                <div className="max-w-2xl">

                    <h2 className="mt-2 text-3xl md:text-5xl font-bold tracking-wide text-[var(--amethyst)]">
                        Raphaela Monteiro
                    </h2>

                    <div className="mt-6 space-y-4 text-base md:text-lg leading-relaxed text-[var(--text-main)]">
                        {t.about.paragraphs.map((text, index) => (
                            <p key={index}>{text}</p>
                        ))}
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12">
                {t.about.stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-bg-surface/50 backdrop-blur-sm border border-border rounded-2xl p-6 text-center hover:border-amethyst/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <div className="text-4xl md:text-5xl font-bold text-amethyst">
                            {stat.value}
                        </div>
                        <div className="text-sm md:text-base text-text-muted mt-2">
                            {stat.label}
                        </div>
                    </div>
                ))}
            </div>

            <div className="tech-section pt-16">
                <h2 className="tech-title center font-bold text-4xl">{t.about.tech}</h2>
                <h3 className="text-left font-bold text-lg mt-3">{t.about.mainStack}</h3>
                <div className="tech-grid mt-2">
                    {mainTechStack.map((tech) => (
                        <div key={tech.name} className="tech-item text-sm gap-2 rounded-3xl px-3 py-3">
                            <i className={tech.className}></i>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>

                <h3 className="text-left font-bold text-lg mt-3">{t.about.otherStack}</h3>
                <div className="tech-grid mt-2">
                    {otherTechStack.map((tech) => (
                        <div key={tech.name} className="tech-item text-sm gap-2 rounded-3xl px-3 py-3">
                            <i className={tech.className}></i>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>

                <div className="tech-grid mt-2">
                    {t.about.otherSkills.map((group, groupIndex) =>
                        group.items.map((item, index) => (
                            <div key={`${groupIndex}-${index}`} className="tech-item text-sm gap-2 items-center rounded-3xl px-3 py-3">
                                <span>{item}</span>
                            </div>
                        ))
                    )}
                </div>


                <h3 className="text-left font-bold text-lg mt-3">{t.about.skills}</h3>
                <div className="services-grid">
                    {t.about.skillsMap.map((group, groupIndex) =>
                        group.items.map((item, index) => (
                            <div key={`${groupIndex}-${index}`} className="service-card">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))
                    )}
                </div>
            </div>

            <div className="research-text-content pt-8">
                <h1 className="title-research font-bold text-4xl">{t.about.title}</h1>

                {t.about.paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>

            <div className="research-text-content pt-8">
                <h1 className="title-research font-bold text-4xl">{t.about.title}</h1>

                {t.about.paragraphs.map((text, index) => (
                    <p key={index}>{text}</p>
                ))}
            </div>


            <h3 className="tech-title">
                {t.about.extra}
            </h3>
            <div className="tech-grid">
                <HobbiesCarousel items={t.about.hobbies[0].items} />
            </div>


        </section >

    )
}