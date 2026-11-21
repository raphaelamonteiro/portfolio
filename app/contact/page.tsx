'use client';

import { useTranslation } from '@/app/providers';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-[60vh] max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8 fade-up">
      <div className="p-8 sm:p-12 bg-surface/40 border border-lilac rounded-sm space-y-6">
        <div className="text-[10px] tracking-[0.2em] uppercase font-mono text-ash border-b border-lilac pb-3">
          001 // CONTACT
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-bone leading-tight">
          {t.contact.title}
        </h1>
        <p className="text-ash font-mono text-sm leading-relaxed max-w-xl">
          Open to engineering collaborations, research initiatives, and technical inquiries. Direct communication via encrypted or standard email protocol.
        </p>
        <div className="pt-4">
          <a
            href="mailto:raphaelabm.dev@gmail.com"
            className="bg-amethyst text-void px-8 py-3.5 rounded-sm font-bold text-base hover:bg-amethyst/80 transition-colors inline-block"
          >
            raphaelabm.dev@gmail.com ↗
          </a>
        </div>
      </div>
    </div>
  );
}
