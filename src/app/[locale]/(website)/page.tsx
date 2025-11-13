'use client';

import { BackgroundPatterns, NewsletterConfirmDialog } from '@/components/website';
import { Hero } from './home/components';
import { LibraryLogos } from '@/components/shared';

export default function Page() {
    const nemzeroImage = '/images/backgrounds/bg-wrap.png';

    return (
        <div className="relative -top-20 min-h-screen overflow-hidden bg-white transition-colors duration-300 dark:bg-[#111113]">
            <NewsletterConfirmDialog />
            <BackgroundPatterns
                variant="image-overlay"
                backgroundImageUrl={nemzeroImage}
                className="z-0"
                animated={false}
            />
            <div className="relative z-10 pt-16">
                <Hero />
                <LibraryLogos variant="compact" />
            </div>
        </div>
    );
}
