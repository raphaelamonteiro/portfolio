'use client'

import Link from 'next/link'
import LanguageSwitcher from './LanguageSwitcher'
import { useTranslation } from '@/contexts/TranslationContext'
import { LuArrowBigDownDash } from "react-icons/lu";
import { useState } from 'react';
import { Toggle } from './ui/theme-switcher/toggle';

export default function Header() {
    const { t, locale } = useTranslation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const cvPath = locale === 'pt-BR' ? 'docs/Currículo - Raphaela Monteiro.pdf' : 'docs/Resume - Raphaela Monteiro.pdf'

    return (
        <header className="header sticky top-0 z-50 flex items-center justify-between px-8 py-5">
            <Link href="/" className="header-name text-2xl font-bold">
                Raphaela Monteiro
            </Link>

            {/* Botão hambúrguer - só aparece no mobile */}
            <button className="hamburger"
                onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Menu">
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
                <span className={isMenuOpen ? 'open' : ''}></span>
            </button>

            {/* Menu - desktop sempre visível, mobile controlado por isMenuOpen */}
            <nav className={`navbar flex items-center gap-8 text-base font-bold ${isMenuOpen ? "navbar-open" : ""}`}>

                <Link href="/" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.home}
                </Link>
                <Link href="/projects" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.projects}
                </Link>
                <Link href="/about" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.about}
                </Link>
                <Link href="/services" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.services}
                </Link>
                <Link href="/contact" className="navbar-link" onClick={() => setIsMenuOpen(false)}>
                    {t.nav.contact}
                </Link>

                <div className='justify-between flex items-center gap-5 font-bold'>
                    <a href={cvPath} download className="button-cv inline-flex items-center gap-2 py-2 px-4 text-base" onClick={() => setIsMenuOpen(false)}>
                        <LuArrowBigDownDash />
                        {t.nav.cv}
                    </a>
                    <LanguageSwitcher />

                    <Toggle />
                </div>
            </nav>
        </header>
    )
}