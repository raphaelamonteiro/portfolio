'use client';

import { useTranslation } from '@/app/providers';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-lilac/20 mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4 items-center md:flex-row md:justify-between md:gap-0">
                <p className="text-sm text-ash text-center md:text-left">{t.footer.rights}</p>

                <div className="flex gap-3">
                    <a href="https://github.com/raphaelamonteiro" target="_blank" rel="noopener noreferrer"
                        className="text-sm text-ash hover:text-bone transition-colors">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/raphaelamonteiro" target="_blank" rel="noopener noreferrer"
                        className="text-sm text-ash hover:text-bone transition-colors">
                        LinkedIn
                    </a>
                    <a href="mailto:raphaelabm.dev@gmail.com"
                        className="text-sm text-ash hover:text-bone transition-colors">
                        E-mail
                    </a>
                </div>
            </div>
        </footer>
    );
}