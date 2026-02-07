'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function Projects() {
    const { t } = useTranslation()

    return (
        <div style={{ padding: '50px' }}>
            <h1 style={{ fontSize: '36px', marginBottom: '40px', textAlign: 'center' }}>
                {t.projects.title}
            </h1>
            <p style={{ textAlign: 'center', color: '#666' }}>
                Em breve...
            </p>
        </div>
    )
}