'use client'

import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="footer py-6 items-center flex-col w-full">
            <div className="footer-content flex justify-between margin-auto max-w-6xl mx-auto px-4 justify-between">
                <p className="footer-text text-base">
                    {t.footer.rights}
                </p>

                <div className="flex gap-2">
                    <a href="https://github.com/raphaelamonteiro" target="_blank" rel="noopener noreferrer" className="social-link">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/raphaelamonteiro" target="_blank" rel="noopener noreferrer" className="social-link">
                        LinkedIn
                    </a>
                    <a href="mailto:raphaelabm.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="social-link">
                        E-mail
                    </a>
                </div>
            </div>
        </footer>
    )
}