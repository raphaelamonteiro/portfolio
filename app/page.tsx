'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Link from 'next/link'

export default function Home() {
  const { t, isLoading } = useTranslation()

  if (isLoading) return <Loading />

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="hero-content">
        <h1 className="title-hero">
          {t.home.greeting}
        </h1>

        <h2 className="role-text">
          {t.home.role}
        </h2>

        <div className="sub-tag-container">
          <h3 className="sub-text">
            {t.home.sub}
          </h3>

          <span className="tag">
            {t.home.tag}
          </span>
        </div>

        <div className="cta-buttons">
          <Link href="/projects" className="button-projects">
            {t.home.cta}
          </Link>

          <Link href="/services" className="button-contactme">
            {t.home.contact}
          </Link>
        </div>
      </div>
    </section>
  )
}