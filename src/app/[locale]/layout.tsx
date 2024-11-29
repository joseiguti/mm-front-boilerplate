import { NextIntlClientProvider } from 'next-intl';
import { ReactNode } from 'react';

// Obtén los mensajes de traducción para el idioma actual
async function getMessages(locale: string) {
    return (await import(`../../../messages/${locale}.json`)).default;
}

export default async function LocaleLayout({
                                               children,
                                               params
                                           }: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {

    const { locale } = await params;
    const messages = await getMessages(locale);

    return (
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
    );
}
