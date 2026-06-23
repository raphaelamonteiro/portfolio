'use client'

import Link from 'next/link'
import LanguageSwitcher from './languageSwitcher'
import { useTranslation } from '@/contexts/TranslationContext'
import { LuArrowBigDownDash } from "react-icons/lu";
import { useState } from 'react';

export default function Header() {
    const { t, locale } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const cvPath = locale === 'pt-BR' ? 'docs/Currículo - Raphaela Monteiro.pdf' : 'docs/Resume - Raphaela Monteiro.pdf'

    return (
        <header className="header">
            <Link href="/" className="header-name">
                Raphaela Monteiro
            </Link>

            {/* Botão hambúrguer - só aparece no mobile */}
            <button
                className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Menu"
            >
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
            </button>

            {/* Menu - desktop sempre visível, mobile controlado por isMenuOpen */}
            <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
                <Link href="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.home}
                </Link>
                <Link href="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.about}
                </Link>
                <Link href="/academic" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.academic}
                </Link>
                <Link href="/projects" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.projects}
                </Link>
                <Link href="/experience" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.experience}
                </Link>
                <Link href="/services" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.services}
                </Link>
                <Link href="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.contact}
                </Link>

                <a href={cvPath} download className="button-cv" onClick={() => setIsMenuOpen(false)}>
                    <LuArrowBigDownDash />
                    {t.nav.cv}
                </a>

                <LanguageSwitcher />
            </nav>
        </header>
    )
}