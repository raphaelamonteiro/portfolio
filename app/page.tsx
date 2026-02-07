'use client'
import { useTranslation } from '@/contexts/TranslationContext'
import Link from 'next/link'

export default function Home() {
  const { t, isLoading } = useTranslation()

  if (isLoading) return <div>Carregando...</div>

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '80vh',
      padding: '50px',
      textAlign: 'center'
    }}>
      <h2 style={{ fontSize: '24px', color: '#666', marginBottom: '10px' }}>
        {t.home.greeting}
      </h2>
      <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '20px' }}>
        Seu Nome
      </h1>
      <h3 style={{ fontSize: '32px', color: '#0070f3', marginBottom: '30px' }}>
        {t.home.role}
      </h3>
      <p style={{ fontSize: '18px', color: '#666', maxWidth: '600px', marginBottom: '40px' }}>
        {t.home.description}
      </p>
      <Link
        href="/projects"
        style={{
          padding: '15px 40px',
          backgroundColor: '#0070f3',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '5px',
          fontSize: '18px'
        }}
      >
        {t.home.cta}
      </Link>
    </div>
  )
}