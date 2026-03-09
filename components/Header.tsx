'use client'

import Link from 'next/link'
import LanguageSwitcher from './languageSwitcher'
import { useTranslation } from '@/contexts/TranslationContext'
import { LuArrowBigDownDash } from "react-icons/lu";

export default function Header() {
    const { t, locale, isLoading } = useTranslation()

    // Define qual CV baixar baseado no idioma
    const cvPath = locale === 'pt-BR' ? 'docs/Currículo - Raphaela Monteiro.pdf' : 'docs/Resume - Raphaela Monteiro.pdf'

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
                <Link href="/academic" className="navbar-link">
                    {t.nav.academic}
                </Link>

                <Link href="/projects" className="navbar-link">
                    {t.nav.projects}
                </Link>
                <Link href="/services" className="navbar-link">
                    {t.nav.services}
                </Link>
                <Link href="/contact" className="navbar-link">
                    {t.nav.contact}
                </Link>

                <a href={cvPath} download className="button-cv">
                    <LuArrowBigDownDash />
                    {t.nav.cv}
                </a>

                <LanguageSwitcher />
            </nav>
        </header>
    )
}