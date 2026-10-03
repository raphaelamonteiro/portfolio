'use client';

import Link from 'next/link';
import LanguageSwitcher from './language-switcher';
import { ThemeToggle } from './theme-toggle';
import { useTranslation } from '@/app/providers';
import { LuArrowBigDownDash } from "react-icons/lu";
import { useState } from 'react';

export default function Header() {
    const { t, locale } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const cvPath = locale === 'pt'
        ? '/docs/Currículo - Raphaela Monteiro.pdf'
        : '/docs/Resume - Raphaela Monteiro.pdf';

    const linkStyle = "text-sm text-ash hover:text-bone transition-colors duration-200";

    return (
        <header className="sticky top-0 z-50 bg-void/80 backdrop-blur-md">
            <div className="w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">

                <Link href="/" className="text-base font-bold text-bone hover:text-amethyst transition-colors">
                    Raphaela Monteiro
                </Link>

                <button
                    className="md:hidden flex flex-col gap-[5px] p-2 z-[101] bg-transparent border-0 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu"
                >
                    <span className={`w-6 h-px bg-bone transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
                    <span className={`w-6 h-px bg-bone transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
                    <span className={`w-6 h-px bg-bone transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
                </button>

                <nav className={`
          fixed top-0 right-0 h-screen w-[70%] max-w-[280px]
          flex flex-col items-start gap-6 pt-20 px-6
          bg-surface transition-transform duration-300
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}

          md:static md:h-auto md:w-auto md:max-w-none md:translate-x-0
          md:flex-row md:items-center md:gap-8 md:pt-0 md:px-0 md:bg-transparent
        `}>
                    <Link href="/" className={linkStyle} onClick={() => setIsMenuOpen(false)}>{t.nav.home}</Link>
                    <Link href="/projects" className={linkStyle} onClick={() => setIsMenuOpen(false)}>{t.nav.projects}</Link>
                    <Link href="/about" className={linkStyle} onClick={() => setIsMenuOpen(false)}>{t.nav.about}</Link>
                    <Link href="/services" className={linkStyle} onClick={() => setIsMenuOpen(false)}>{t.nav.services}</Link>
                    <Link href="/contact" className={linkStyle} onClick={() => setIsMenuOpen(false)}>{t.nav.contact}</Link>

                    <div className="flex flex-col gap-3 w-full md:flex-row md:items-center md:gap-4 md:w-auto">
                        <a
                            href={cvPath}
                            download
                            className="inline-flex items-center gap-2 text-sm text-ash hover:text-bone transition-colors justify-center md:justify-start"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <LuArrowBigDownDash />
                            {t.nav.cv}
                        </a>
                        <LanguageSwitcher />
                        <ThemeToggle />
                    </div>
                </nav>
            </div>
        </header>
    );
}