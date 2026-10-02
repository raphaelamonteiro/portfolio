'use client';

import { useTranslation } from '@/app/providers';

export default function LanguageSwitcher() {
    const { locale, setLocale } = useTranslation();

    return (
        <button
            className="text-sm text-ash hover:text-bone transition-colors font-mono"
            onClick={() => setLocale(locale === 'pt' ? 'en' : 'pt')}
            aria-label="Switch language"
        >
            {locale === 'pt' ? 'EN' : 'PT'}
        </button>
    );
}