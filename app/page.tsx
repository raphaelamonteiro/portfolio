'use client'
import { useTranslation } from '@/contexts/TranslationContext'
import Link from 'next/link'

export default function Home() {
  const { t, isLoading } = useTranslation()

  if (isLoading) return <div>Carregando...</div>

  return (
    <div>
      <h2>
        {t.home.greeting}
      </h2>
      <h1>
        Seu Nome
      </h1>
      <h3>
        {t.home.role}
      </h3>
      <p>
        {t.home.description}
      </p>
      <Link href="/projects">
        {t.home.cta}
      </Link>
    </div>
  )
}