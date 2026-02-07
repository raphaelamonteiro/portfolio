'use client'

import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
    const { t } = useTranslation()

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 50px',
            backgroundColor: '#fff',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <Link href="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#000' }}>
                Portfolio
            </Link>

            <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                <Link href="/" style={{ textDecoration: 'none', color: '#333' }}>
                    {t.nav.home}
                </Link>
                <Link href="/about" style={{ textDecoration: 'none', color: '#333' }}>
                    {t.nav.about}
                </Link>
                <Link href="/projects" style={{ textDecoration: 'none', color: '#333' }}>
                    {t.nav.projects}
                </Link>
                <Link href="/contact" style={{ textDecoration: 'none', color: '#333' }}>
                    {t.nav.contact}
                </Link>

                <LanguageSwitcher />
            </nav>
        </header>
    )
}