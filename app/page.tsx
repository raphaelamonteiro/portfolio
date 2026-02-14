'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Link from 'next/link'

export default function Home() {
  const { t, locale, isLoading } = useTranslation()

  // Define qual CV baixar baseado no idioma
  const cvPath = locale === 'pt-BR' ? '/docs/Currículo - Raphaela Monteiro.pdf' : '/docs/Resume - Raphaela Monteiro.pdf'


  if (isLoading) return <Loading />

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6">

        <h1 className="title-hero">
          {t.home.greeting}
        </h1>

        <h3 className="role-text">
          {t.home.role}
        </h3>

        <div className="cta-buttons pt-4">
          <Link href="/projects" className="button-projects">
            {t.home.cta}
          </Link>

          <Link href={cvPath} download className="button-cv">
            {t.home.cv}
          </Link>
        </div>
      </div>
    </section>
  )
}
