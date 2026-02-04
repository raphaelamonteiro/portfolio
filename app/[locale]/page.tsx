import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">
        {t('herotitle')}
      </h1>

      <p className="mt-4 text-lg">
        {t('herosubtitle')}
      </p>
    </main>
  );
}
