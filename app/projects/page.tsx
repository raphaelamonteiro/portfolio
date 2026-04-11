'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function Projects() {
    const { t } = useTranslation()

    return (
        <section className="projects-section">
            <h2 className="projects-title">{t.projects.title}</h2>

            <p style={{ textAlign: 'center', color: '#666' }}>
                Em breve...
            </p>
        </section>
    )
}