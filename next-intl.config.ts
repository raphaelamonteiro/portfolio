import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
    const resolvedLocale = locale ?? 'en';

    const messages = {
        en: (await import('./app/messages/en.json')).default,
        pt: (await import('./app/messages/pt.json')).default,
    };

    return {
        locale: resolvedLocale,
        messages: messages[resolvedLocale as 'en' | 'pt']
    };
});
