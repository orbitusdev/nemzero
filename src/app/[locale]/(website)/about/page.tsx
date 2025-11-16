import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import { generatePageMetadata } from '@nitrokit/core';
import { PageHero } from '@/components/website/layout';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getTranslations('about');
    return await generatePageMetadata({
        params: Promise.resolve({
            title: t('title'),
            description: t('description')
        })
    });
}

export default async function Page() {
    const t = await getTranslations('about');

    return (
        <div className="relative">
            <div className="w-full px-4 lg:mx-auto lg:w-7xl lg:p-0">
                <PageHero
                    gradientVariant="orange"
                    h1={t('pageHero.h1')}
                    h2={t('pageHero.h2')}
                    p={t('pageHero.p')}
                />

                <section className="py-16 lg:py-24">
                    <div className="container mx-auto px-4">
                        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
                            <div className="space-y-6">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-lg">
                                            <Target className="text-primary h-6 w-6" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                            {t('mission.title')}
                                        </h2>
                                    </div>
                                    <p className="text-md leading-relaxed text-gray-600 dark:text-gray-300">
                                        {t('mission.p')}
                                    </p>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-3">
                                        <div className="bg-secondary flex h-12 w-12 items-center justify-center rounded-lg">
                                            <TrendingUp className="text-secondary-foreground h-6 w-6" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                                            {t('vision.title')}
                                        </h2>
                                    </div>
                                    <p className="text-md leading-relaxed text-gray-600 dark:text-gray-300">
                                        {t('vision.p')}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <Image
                                    src="/images/hero/nemzero-about.png"
                                    alt={t('title')}
                                    width={1024}
                                    height={1024}
                                    className="rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
