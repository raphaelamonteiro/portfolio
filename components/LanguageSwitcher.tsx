'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function LanguageSwitcher() {
    const { t, locale, changeLocale } = useTranslation()

    return (
        <button
            onClick={() => changeLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')}
            style={{
                padding: '8px 16px',
                border: '1px solid #ddd',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: '#fff',
                fontSize: '14px'
            }}
        >
            {locale === 'pt-BR' ? '🇺🇸 EN' : '🇧🇷 PT'}
        </button>
    )
}