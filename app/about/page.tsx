'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Image from 'next/image'
import me from '@/public/assets/raphaela.jpg'
import { mainTechStack, otherTechStack } from '../data/techStack'
import HobbiesCarousel from "@/components/hobbiesCarousel";

export default function About() {
    const { t, isLoading } = useTranslation()
    if (isLoading) return <Loading />

    return (
        <section className="pt-6 px-[8%] pb-2 fade-up">

            <h1 className="title-page text-left font-bold text-7xl">{t.about.title}</h1>
            <div className="about-top w-full max-w-6xl items-center justify-center mt-12">

                <div className="about-image gap-2">
                    <Image src={me} priority alt="Raphaela Monteiro" className="profile-image w-full max-w-[400px] aspect-[4/5] object-cover rounded-3xl max-w-xs" />
                </div>
                <div className="about-text-content gap-2 flex">
                    <h1 className="title-about font-semibold text-5xl">Raphaela Monteiro</h1>
                    {t.about.paragraphs.map((text, index) => (
                        <p key={index} className="text-xl">{text}</p>
                    ))}
                </div>

            </div>

            <div className="tech-section pt-10 flex justify-center items-center gap-2">
                <h2 className="tech-title center font-bold text-4xl">{t.about.tech}</h2>
                <h3 className="text-left font-bold text-lg mt-3">{t.about.mainStack}</h3>
                <div className="tech-grid mt-2">
                    {mainTechStack.map((tech) => (
                        <div key={tech.name} className="tech-item text-sm gap-2 items-center rounded-3xl px-3 py-3">
                            <i className={tech.className}></i>
                            <span>{tech.name}</span>
                        </div>
                    ))}
                </div>

                <h3 className="text-left font-bold text-lg mt-3">{t.about.otherStack}</h3>
                <div className="tech-grid mt-2">
                    {otherTechStack.map((tech) => (
                        <div key={tech.name} className="tech-item text-sm gap-2 items-center rounded-3xl px-3 py-3">
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