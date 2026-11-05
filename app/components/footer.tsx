'use client';

import { useTranslation } from '@/app/providers';

export default function Footer() {
    const { t } = useTranslation();

    return (
        <footer className="border-t border-lilac/10 mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-4 items-center md:flex-row md:justify-between md:gap-0">
                <div className="flex items-center gap-2">
                    <p className="text-sm text-ash text-center md:text-left">{t.footer.rights}</p>
                    <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-ash/50 shrink-0 fill-current"
                        viewBox="0 0 24 24"
                    >
                        <path d="M12 2l-2.5 4a6.5 6.5 0 0 0-3 1.2L4 4l.5 4.5A8 8 0 0 0 3 14c0 4.4 3.6 8 8 8 2.5 0 4.8-1.2 6.2-3 1.2.6 2.6.4 3.4-.6.9-1.1.6-2.8-.7-3.4-.8-.4-1.8-.1-2.4.6-.2-1-.7-2-1.5-2.8V9.5l2-3.5-3 1.5a6.5 6.5 0 0 0-3-1.2L12 2zm-3 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm6 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                </div>

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
