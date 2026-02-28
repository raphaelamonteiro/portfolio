'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'

export default function Services() {
    const { t, isLoading } = useTranslation()
    if (isLoading) return <Loading />

    return (
        <section className="min-h-screen flex items-center justify-center px-4">

            <h1 className="text-4xl font-bold mb-4">
                {t.work.title}
            </h1>

            <div className="flex flex-wrap justify-center gap-3">
                {['React', 'Next.js', 'TypeScript'].map(skill => (
                    <span
                        key={skill}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </section >
    )
}
