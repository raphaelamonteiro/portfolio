'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { ptBR } from '@/locales/pt-BR'
import { enUS } from '@/locales/en-US'

export type Locale = 'pt-BR' | 'en-US'

type TranslationContextType = {
    t: typeof ptBR
    locale: Locale
    changeLocale: (locale: Locale) => void
    isLoading: boolean
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [locale, setLocale] = useState<Locale>('pt-BR')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const savedLocale = localStorage.getItem('locale') as Locale
        if (savedLocale) {
            setLocale(savedLocale)
        }
        setIsLoading(false)
    }, [])

    const t = locale === 'pt-BR' ? ptBR : enUS

    const changeLocale = (newLocale: Locale) => {
        setLocale(newLocale)
        localStorage.setItem('locale', newLocale)
    }

    return (
        <TranslationContext.Provider value={{ t, locale, changeLocale, isLoading }}>
            {children}
        </TranslationContext.Provider>
    )
}

export function useTranslation() {
    const context = useContext(TranslationContext)
    if (context === undefined) {
        throw new Error('useTranslation must be used within a TranslationProvider')
    }
    return context
}