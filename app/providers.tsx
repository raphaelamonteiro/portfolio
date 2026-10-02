'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import { locales, type Dict, type Locale } from '@/data/locales';

type Ctx = { locale: Locale; t: Dict; setLocale: (l: Locale) => void };

const TranslationCtx = createContext<Ctx | null>(null);

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>('en');

    return (
        <TranslationCtx.Provider value={{ locale, t: locales[locale], setLocale }}>
            {children}
        </TranslationCtx.Provider>
    );
}

export function useTranslation() {
    const ctx = useContext(TranslationCtx);
    if (!ctx) throw new Error('useTranslation must be inside TranslationProvider');
    return ctx;
}