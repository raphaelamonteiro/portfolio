'use client'

import Link from 'next/link'
import { useTranslation } from '@/contexts/TranslationContext'

export default function Footer() {
    const { t } = useTranslation()

    return (
        <footer className="footer">
            <div className="footer-content">
                <p className="footer-text">
                    {t.footer.rights}
                </p>

                <div className="footer-social">
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