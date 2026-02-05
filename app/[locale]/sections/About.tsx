'use client';

import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('about');

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="text-center space-y-6">
                <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
                    {t('title')}
                </h1>

                <p className="text-lg md:text-xl text-zinc-400">
                    {t('subtitle')}
                </p>
                <p className="text-lg md:text-xl text-zinc-400">
                    {t('tagline')}
                </p>


            </div>
        </section>
    );
}
