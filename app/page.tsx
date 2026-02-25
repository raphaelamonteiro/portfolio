'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Link from 'next/link'

export default function Home() {
  const { t, locale, isLoading } = useTranslation()

  // Evite acentos no nome do arquivo para prevenir problemas de deploy
  /*
  const cvPath =
    locale === 'pt-BR'
      ? '/docs/Curriculo-Raphaela-Monteiro.pdf'
      : '/docs/Resume-Raphaela-Monteiro.pdf'
      --
          href={cvPath}
          download
*/
  if (isLoading) return <Loading />

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <h1 className="title-hero">
        {t.home.greeting}
      </h1>

      <h2 className="role-text mt-2">
        {t.home.role}
      </h2>

      <h3 className="sub-text mt-2">
        {t.home.sub}
      </h3>

      {/* Tag azul */}
      <span className="tag px-3 py-1 rounded-full text-xs font-medium mb-2 mt-3">
        {t.home.tag}
      </span>


      <div className="cta-buttons flex gap-4 pt-6">
        <Link href="/projects" className="button-projects">
          {t.home.cta}
        </Link>

        <Link href="/contact"
          className="button-contactme">
          {t.home.contact}
        </Link>
      </div>
    </section>
  )
}
