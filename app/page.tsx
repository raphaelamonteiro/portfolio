'use client';

import { useTranslation } from '@/app/providers';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[calc(100vh-140px)] flex items-center px-4 sm:px-6 lg:px-8 py-16 relative overflow-hidden">

      {/* Grid sutil de fundo */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(var(--color-bone) 1px, transparent 1px),
            linear-gradient(90deg, var(--color-bone) 1px, transparent 1px)`, backgroundSize: '48px 48px'
        }}
      />

      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, var(--color-amethyst) 0%, transparent 70%)',
          opacity: 0.08,
        }}
      />

      <div className="w-full max-w-6xl mx-auto fade-up relative">
        {/* Linha de status estilo terminal */}
        <div className="flex items-center gap-3 text-xs text-ash tracking-widest uppercase mb-8">
          <span className="flex h-2 w-2 rounded-full bg-dusty animate-pulse" />
          <span>{t.home.status}</span>
        </div>
        <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl text-amethyst leading-[1.05] max-w-4xl">
          {t.home.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pt-12 mt-12 border-t border-lilac/20">

          <div className="md:col-span-7">
            <p className="text-bone text-lg leading-relaxed">
              {t.home.role}
            </p>
          </div>

          <div className="md:col-span-5 flex flex-col gap-6 md:items-end md:text-right">
            <span className="inline-block text-xs px-4 py-2
                             bg-dusty/15 border border-dusty/60 text-dusty rounded-full">
              {t.home.tag}
            </span>

            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/projects"
                className="text-sm font-medium px-5 py-3 bg-amethyst text-void rounded-sm
                           hover:bg-amethyst/80 transition-colors">
                {t.home.cta} →
              </Link>
              <Link href="/services"
                className="text-sm font-medium px-5 py-3 border border-ash/30 text-ash rounded-sm
                           hover:border-bone hover:text-bone transition-colors">
                {t.home.contact}
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}