'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function LanguageSwitcher() {
    const { locale, changeLocale } = useTranslation()

    return (
        <button className="language-switcher"
            onClick={() => changeLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')}>
            {locale === 'pt-BR' ? 'EN - US' : 'PT - BR'}
        </button>
    )
}