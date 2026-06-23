'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function Experience() {
    const { t } = useTranslation()

    return (
        <section className="projects-section">
            <h2 className="projects-title">
                {t.experience.title}
            </h2>
            <p style={{ textAlign: 'center', color: '#666' }}>
                Em breve...
            </p>
        </section>
    )
}