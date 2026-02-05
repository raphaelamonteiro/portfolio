import { useTranslations, useLocale } from 'next-intl';

export default function Hero() {
    const t = useTranslations();
    const locale = useLocale();

    return (
        <section>
            <p>Locale atual: {locale}</p>
            <h1>{t('herotitle')}</h1>
            <p>{t('herosubtitle')}</p>
        </section>
    );
}
