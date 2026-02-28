'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Image from 'next/image'
import about from '@/public/assets/about.png'
import { techStack } from '../data/techStack'

export default function About() {
    const { t, isLoading } = useTranslation()
    if (isLoading) return <Loading />

    return (
        <section className="about-section">
            <div className="about-top">

                <div className="about-image">
                    <Image
                        src={about}
                        alt="Raphaela Monteiro"
                        className="profile-image"
                    />
                </div>

                <div className="about-text-content">
                    <h1>{t.about.title}</h1>

                    {t.about.paragraphs.map((text, index) => (
                        <p key={index}>{text}</p>
                    ))}
                </div>

            </div>

            <div className="tech-section">
                <h2 className="tech-title">{t.about.techstack}</h2>

                <div className="tech-grid">
                    {techStack.map((tech) => (
                        <div key={tech.name} className="tech-item">
                            <i className={tech.className}></i>
                            <span>{tech.name}</span>
                        </div>
                    ))}


                    <div className="skills-section">
                        <div className="tech-grid">
                            {t.about.skillsMap.map((group, groupIndex) =>
                                group.items.map((item, index) => (
                                    <div key={`${groupIndex}-${index}`} className="tech-item">
                                        <span>{item}</span>
                                    </div>
                                ))
                            )}
                        </div>

                        <h3 className="tech-title" style={{ marginTop: '40px' }}>
                            {t.about.extra}
                        </h3>

                        <div className="tech-grid">
                            {t.about.hobbies.map((group, groupIndex) =>
                                group.items.map((item, index) => (
                                    <div key={`hobby-${groupIndex}-${index}`} className="tech-item">
                                        <span>{item}</span>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </section >

    )
}