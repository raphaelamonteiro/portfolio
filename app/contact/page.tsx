'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function Contact() {
    const { t } = useTranslation()

    return (
        <div style={{ padding: '50px', maxWidth: '600px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '36px', marginBottom: '40px', textAlign: 'center' }}>
                {t.contact.title}
            </h1>
            <p style={{ textAlign: 'center', color: '#666' }}>
                Em breve...
            </p>
        </div>
    )
}