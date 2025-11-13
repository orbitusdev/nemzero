import { ThemedImage } from '@/components/shared';
import { useTranslations } from 'next-intl';
import React from 'react';

const logos = [
    {
        darkSrc: '/images/certification/iso.png',
        lightSrc: '/images/certification/iso.png',
        alt: 'ISO',
        width: 120,
        height: 80,
        href: ''
    },
    {
        darkSrc: '/images/certification/tse.png',
        lightSrc: '/images/certification/tse.png',
        alt: 'Typescript',
        width: 120,
        height: 80,
        href: ''
    },
    {
        darkSrc: '/images/certification/ce.png',
        lightSrc: '/images/certification/ce.png',
        alt: 'Tailwind CSS',
        width: 100,
        height: 80,
        href: ''
    },
    {
        darkSrc: '/images/certification/tubitak.png',
        lightSrc: '/images/certification/tubitak.png',
        alt: 'Prisma',
        width: 70,
        height: 70,
        href: ''
    },
    {
        darkSrc: '/images/certification/mapfre.png',
        lightSrc: '/images/certification/mapfre.png',
        alt: 'Radix-UI',
        width: 120,
        height: 80,
        href: ''
    }
];

interface LibraryLogosProps {
    variant?: 'default' | 'compact' | 'minimal';
}

function DefaultLibraryLogosView() {
    const t = useTranslations('home');
    return (
        <section className="overflow-hidden pt-10 pb-15 md:pt-15">
            <div className="container mx-auto px-6">
                <div className="mb-12 text-center" style={{ opacity: 1, transform: 'none' }}>
                    <p className="text-muted-foreground mb-6 text-xs font-semibold tracking-wider uppercase">
                        {t('technologies.title')}
                    </p>
                </div>
                <div className="relative">
                    <div className="pointer-events-none absolute start-0 top-0 z-10 h-full w-20 bg-linear-to-r to-transparent"></div>
                    <div className="pointer-events-none absolute end-0 top-0 z-10 h-full w-20 bg-linear-to-l to-transparent"></div>
                    <div className="group flex flex-row gap-(--gap) overflow-hidden p-2 [--duration:40s] [--gap:2rem]">
                        {Array(4)
                            .fill(0)
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="animate-marquee group-hover:paused flex flex-row justify-around gap-(--gap)"
                                >
                                    {logos.map((logo, idx) => (
                                        <div
                                            key={logo.alt + i + idx}
                                            className="mx-8 flex shrink-0 items-center gap-3 whitespace-nowrap opacity-50 transition-all duration-300"
                                        >
                                            <ThemedImage
                                                darkSrc={logo.darkSrc}
                                                lightSrc={logo.lightSrc}
                                                alt={logo.alt}
                                                width={logo.width}
                                                height={logo.height}
                                                href={logo.href}
                                                style={{ width: logo.width, height: 'auto' }}
                                                className={
                                                    'drop-shadow-xs transition-transform duration-200 ease-in-out hover:scale-105'
                                                }
                                            />
                                        </div>
                                    ))}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

function CompactLibraryLogosView() {
    const t = useTranslations('home');
    return (
        <section className="container mx-auto flex flex-col items-center justify-center px-4">
            <div className="mb-3 text-center" style={{ opacity: 1, transform: 'none' }}>
                <p className="mb-6 text-lg font-bold tracking-wider text-black">
                    {t('technologies.title')}
                </p>
            </div>
            <div className="grid max-w-5xl grid-cols-5 items-center justify-center gap-12">
                {logos.map((logo) => (
                    <div
                        key={logo.alt}
                        className="flex h-30 w-30 items-center justify-center rounded-sm bg-white shadow-2xs shadow-amber-50"
                    >
                        <ThemedImage
                            darkSrc={logo.darkSrc}
                            lightSrc={logo.lightSrc}
                            alt={logo.alt}
                            width={logo.width / 1.2}
                            height={logo.height / 1.2}
                            href={logo.href}
                            style={{ width: logo.width / 1.2, height: 'auto' }}
                            className="opacity-100 transition hover:opacity-70"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}

function MinimalLibraryLogosView() {
    return (
        <section className="py-2">
            <div className="flex flex-row flex-wrap justify-center gap-2">
                {logos.map((logo) => (
                    <ThemedImage
                        key={logo.alt}
                        darkSrc={logo.darkSrc}
                        lightSrc={logo.lightSrc}
                        alt={logo.alt}
                        width={logo.width / 1.5}
                        height={logo.height / 1.5}
                        href={logo.href}
                        style={{ width: logo.width / 1.5, height: 'auto' }}
                        className="opacity-50 hover:opacity-80"
                    />
                ))}
            </div>
        </section>
    );
}

export const LibraryLogos = ({ variant = 'default' }: LibraryLogosProps) => {
    if (variant === 'compact') {
        return <CompactLibraryLogosView />;
    }
    if (variant === 'minimal') {
        return <MinimalLibraryLogosView />;
    }
    return <DefaultLibraryLogosView />;
};
