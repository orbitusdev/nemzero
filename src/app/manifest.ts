import { getLocale, getTranslations } from 'next-intl/server';
import { getLangDir } from 'rtl-detect';
import { getBaseUrl } from '@nitrokit/core/urls';
import type { MetadataRoute } from 'next';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
    const baseUrl = getBaseUrl();
    const locale = await getLocale();
    const direction = getLangDir(locale);
    const t = await getTranslations({ locale, namespace: 'common' });

    const manifest: MetadataRoute.Manifest = {
        id: 'nitrokit',
        name: t('name'),
        short_name: t('shortName'),
        description: t('description'),
        start_url: `${baseUrl}/`,
        display: 'standalone',
        dir: direction,
        lang: locale,
        scope: baseUrl,
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#6FBDFF',
        icons: [
            {
                src: `${baseUrl}/images/favicon/android-chrome-192x192.png`,
                sizes: '192x192',
                type: 'image/png'
            },
            {
                src: `${baseUrl}/images/favicon/android-chrome-512x512.png`,
                sizes: '512x512',
                type: 'image/png'
            }
        ]
    };
    return manifest;
}
