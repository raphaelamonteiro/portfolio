'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function About() {
    const { t } = useTranslation()

    return (
        <div style={{ padding: '50px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>
                {t.about.title}
            </h1>
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#666' }}>
                {t.about.description}
            </p>

            <h2 style={{ fontSize: '28px', marginTop: '40px', marginBottom: '20px' }}>
                {t.about.skills}
            </h2>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <span style={{ padding: '8px 16px', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px' }}>
                    React
                </span>
                <span style={{ padding: '8px 16px', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px' }}>
                    Next.js
                </span>
                <span style={{ padding: '8px 16px', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px' }}>
                    TypeScript
                </span>
            </div>
        </div>
    )
}