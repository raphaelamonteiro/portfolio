'use client';

import { useTranslation } from '@/app/providers';
import Link from 'next/link';

export default function Home() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl fade-up">
        <h1 className="font-bold text-5xl sm:text-6xl text-amethyst leading-tight">
          {t.home.title}
        </h1>

        <div className="flex flex-col gap-6 pt-6">
          <p className="text-bone text-lg leading-relaxed max-w-3xl">
            {t.home.role}
          </p>

          <span className="inline-block self-start text-sm px-4 py-2 bg-dusty/10 border border-dusty/40 text-dusty rounded-full">
            {t.home.tag}
          </span>
        </div>

        <div className="flex flex-wrap gap-3 mt-10">
          <Link href="/projects"
            className="text-sm font-medium px-5 py-3 bg-amethyst text-void rounded-md hover:bg-amethyst/80 transition-colors">
            {t.home.cta} →
          </Link>
          <Link href="/services"
            className="text-sm font-medium px-5 py-3 border border-ash/30 text-ash rounded-md hover:border-bone hover:text-bone transition-colors">
            {t.home.contact}
          </Link>
        </div>
      </div>
    </section>
  );
}