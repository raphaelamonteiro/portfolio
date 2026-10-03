'use client';

import { useTranslation } from '@/app/providers';

export default function Projects() {
    const { t } = useTranslation();

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 fade-up">
            <h1 className="text-4xl font-bold text-moon uppercase tracking-widest mb-12">
                {t.projects.title}
            </h1>
            <p className="text-ash">Em construção.</p>
        </section>
    );
}