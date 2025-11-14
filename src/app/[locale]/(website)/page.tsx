'use client';

import { NewsletterConfirmDialog } from '@/components/website';
import { Hero } from './home/components';
import { LibraryLogos } from '@/components/shared';

export default function Page() {
    return (
        <div className="relative -top-20 min-h-screen overflow-hidden transition-colors duration-300">
            <NewsletterConfirmDialog />
            <div className="relative z-10 pt-16">
                <Hero />
                <LibraryLogos variant="compact" />
            </div>
        </div>
    );
}
