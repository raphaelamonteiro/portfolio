'use client'

import Loading from '@/components/loading'
import { useTranslation } from '@/contexts/TranslationContext'
import { title } from 'process';

export default function Services() {
    const { t } = useTranslation();


    return (
        <section className="services-section">
            <h2 className="service-title">{t.work.title}</h2>
            <p className="service-text">
                {t.work.subtitle}
            </p>

            <div className="services-grid">
                {t.work.services.map((group, groupIndex) =>
                    group.items.map((item, index) => (
                        <div key={`${groupIndex}-${index}`} className="service-card">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p> {/* Reutilizando lógica de precisão */}
                        </div>
                    ))
                )}
            </div>


        </section>
    );
}
