'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function Academic() {
    const { t } = useTranslation();

    return (
        <section className="academic-section">
            <h2 className="tech-title">{t.academic.title}</h2>

            {t.academic.academia.map((group, groupIndex) => (
                <div key={groupIndex}>
                    {group.items.map((item, itemIndex) => (
                        <div className="academic-item" key={itemIndex}>
                            <span className="academic-tag">{item.title}</span>
                            <h4>{item.institute}</h4>
                            <p>{item.course}</p>
                            <small className="academic-date">{item.date}</small>
                        </div>
                    ))}
                </div>
            ))}

            {/* Mantive este fixo caso ele não esteja no seu JSON de tradução ainda 
            <div className="academic-item">
                <span className="academic-tag">Lead Author / Research</span>
                <h4>Instituto Tecnológico de Aeronáutica (ITA)</h4>
                <p>Desenvolvimento de sistemas de missão crítica, focado em infraestrutura GNSS e telemetria.</p>
            </div>
            */}
        </section>
    );
}