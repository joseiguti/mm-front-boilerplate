'use client';

import { useTranslations } from 'next-intl';

export default function HomePage() {
    const t = useTranslations('Home'); // Namespace "Home" debe coincidir con tu archivo JSON

    return (
        <div>
            <h1>{t('title')}</h1>
        </div>
    );
}
