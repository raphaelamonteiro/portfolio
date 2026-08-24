'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function LanguageSwitcher() {
    const { locale, changeLocale } = useTranslation()

    return (
        <button className="language-switcher py-2 px-4 text-base"
            onClick={() => changeLocale(locale === 'pt-BR' ? 'en-US' : 'pt-BR')}>
            {locale === 'pt-BR' ? 'EN - US' : 'PT - BR'}
        </button>
    )
}