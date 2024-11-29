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
    params: Promise<{ locale: string }>; // Marca params como asíncrono
}) {
    // Espera explícitamente a params.locale
    const { locale } = await params; // Desestructura params correctamente
    const messages = await getMessages(locale); // Obtén los mensajes del idioma

    return (
        <html lang={locale}>
        <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
        </NextIntlClientProvider>
        </body>
        </html>
    );
}
