'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Link from 'next/link'

export default function Home() {
  const { t, isLoading } = useTranslation()

  if (isLoading) return <Loading />

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl text-center space-y-6">

        <h1 className="title-hero">
          {t.home.greeting}
        </h1>

        <h3 className="role-text">
          {t.home.role}
        </h3>

        <p className="text-gray-500 leading-relaxed">
          {t.home.description}
        </p>

        <div className="pt-4">
          <Link href="/projects"
            className="inline-block rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition">
            {t.home.cta}
          </Link>

          <Link href="/projects"
            className="inline-block rounded-lg bg-black px-6 py-3 text-white font-medium hover:bg-gray-800 transition">
            {t.home.cta}
          </Link>
        </div>
      </div>
    </section>
  )
}
