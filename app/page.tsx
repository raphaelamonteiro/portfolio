'use client'

import Loading from '@/app/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import Link from 'next/link'
import { useState } from 'react'
import Stars from '@/app/components/stars'

export default function Home() {
  const { t, isLoading } = useTranslation()

  if (isLoading) return <Loading />

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4">
      <Stars />
      <div
        className="gap-2 w-full max-w-6xl fade-up">
        <h2 className="title font-bold text-6xl">
          {t.home.title}
        </h2>

        <div className="role-tag-container pt-4 gap-10">
          <h3 className="role pb-4 text-lg font-semibold">
            {t.home.role}
          </h3>

          <span className="tag text-base font-semibold px-4 py-2">
            {t.home.tag}
          </span>
        </div>

        <div
          className="flex flex-wrap gap-4 mt-6 text-2xl font-bold">
          <Link href="/projects" className="button-projects px-6 py-4">
            {t.home.cta}
          </Link>
          <Link href="/contact" className="button-contact px-6 py-4">
            {t.home.contact}
          </Link>
        </div>
      </div>
    </section>
  )
}