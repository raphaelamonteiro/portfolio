'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Image from 'next/image'
import raphs from '@/public/assets/raphs.png'

export default function About() {
    const { t, isLoading } = useTranslation()
    if (isLoading) return <Loading />

    return (
        <section className="min-h-screen flex items-center justify-center px-4">
            <div className="max-w-3xl text-center">
                <Image
                    src={raphs}
                    alt="Raphs"
                    className="mx-auto rounded-full mb-6 w-48 h-48 object-cover"
                />

                <h1 className="text-4xl font-bold mb-4">
                    {t.about.title}
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {t.about.description}
                </p>

                <h2 className="text-2xl font-semibold mb-4">
                    {t.about.skills}
                </h2>

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
            </div>
        </section>
    )
}
