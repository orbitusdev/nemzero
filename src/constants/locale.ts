export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LANGUAGE: Locale = 'en';

export const LOCALES = ['en', 'tr', 'ar'] as const;

export const LOCALE_CONFIG: Record<Locale, { name: string; flag: string; nativeName: string }> = {
    tr: { name: 'Turkish', flag: '/images/flags/tr.svg', nativeName: 'Türkçe' },
    ar: { name: 'Arabic', flag: '/images/flags/sa.svg', nativeName: 'العربية' },
    en: { name: 'English', flag: '/images/flags/us.svg', nativeName: 'English' }
} as const;
