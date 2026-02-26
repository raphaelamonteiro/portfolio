'use client'

import Link from 'next/link'
import LanguageSwitcher from './languageSwitcher'
import { useTranslation } from '@/contexts/TranslationContext'

export default function Header() {
    const { t, isLoading } = useTranslation()


    return (
        <header className="header">
            <Link href="/" className="header-name">
                Raphaela Monteiro
            </Link>

            <nav className="navbar">
                <Link href="/" className="navbar-link">
                    {t.nav.home}
                </Link>
                <Link href="/about" className="navbar-link">
                    {t.nav.about}
                </Link>
                <Link href="/work" className="navbar-link">
                    {t.nav.services}
                </Link>
                <Link href="/projects" className="navbar-link">
                    {t.nav.projects}
                </Link>
                <Link href="/contact" className="navbar-link">
                    {t.nav.contact}
                </Link>

                <LanguageSwitcher />
            </nav>
        </header>
    )
}