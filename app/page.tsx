'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Link from 'next/link'

export default function Home() {
  const { t, isLoading } = useTranslation()

  if (isLoading) return <Loading />

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <div
        className="flex flex-col gap-2 w-full max-w-6xl fade-up">
        <h2 className="title text-5xl font-bold leading-tight">
          {t.home.title}
        </h2>

        <div className="role-tag-container pt-2 gap-10 flex-col">
          <h3 className="role pb-4 text-lg font-semibold">
            {t.home.role}
          </h3>

          <span className="tag text-base font-bold px-4 py-2">
            {t.home.tag}
          </span>
        </div>

        <div
          className="flex flex-wrap gap-4 px-2 mt-2 text-2xl font-bold">
          <Link href="/projects" className="button-projects px-6 py-4">
            {t.home.cta}
          </Link>

          <Link href="/services" className="button-contactme px-6 py-4">
            {t.home.contact}
          </Link>
        </div>
      </div>
    </section>
  )
}