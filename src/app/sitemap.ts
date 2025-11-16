import { LOCALES, ROUTES } from '@/constants';
import { getBaseUrl } from '@nitrokit/core/urls';

import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = getBaseUrl();

    const staticRoutes = ROUTES.flatMap((route) => {
        return LOCALES.map((locale) => {
            const alternates: { hreflang: string; href: string }[] = LOCALES.map((altLocale) => ({
                hreflang: altLocale,
                href: `${baseUrl}/${altLocale}${route === '/' ? '' : `/${route.replace(/^\//, '')}`}`
            }));

            return {
                url: `${baseUrl}/${locale}${route === '/' ? '' : `/${route.replace(/^\//, '')}`}`,
                lastModified: new Date().toISOString(),
                alternates: {
                    languages: Object.fromEntries(alternates.map((alt) => [alt.hreflang, alt.href]))
                }
            };
        });
    });

    return staticRoutes;
}
