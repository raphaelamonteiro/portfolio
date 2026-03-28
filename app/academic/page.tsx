'use client'

import { useTranslation } from '@/contexts/TranslationContext'

export default function Academic() {
    const { t } = useTranslation();

    return (
        <section className="academic-section">
            <h2 className="tech-title">{t.academic.title}</h2>

            {/*
            <div className="academic-item">
                <span className="academic-tag">Lead Author / Research</span>
                <h4>Instituto Tecnológico de Aeronáutica (ITA)</h4>
                <p>Desenvolvimento de sistemas de missão crítica, focado em infraestrutura GNSS e telemetria.</p>
            </div>
*/}
            <div className="academic-item">
                <span className="academic-tag">Undergraduate</span>
                <h4>Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal</h4>
                <p>Análise e Desenvolvimento de Sistemas.</p>
            </div>
        </section>
    );
}