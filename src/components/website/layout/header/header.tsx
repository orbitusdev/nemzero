'use client';

import { Navbar } from '@/components/website/navigation';
import { Logo } from '@/components/shared/';
import { useStickyNavbar } from '@/hooks';
import { CompactLocaleSwitcher } from '@/components/switchers';
import { SOCIAL_LINKS } from '@/constants';
import { Button } from '@/components/ui';

export function Header() {
    const sticky = useStickyNavbar();
    return (
        <header
            className={`sticky top-0 left-0 z-49 w-full items-center px-3 ${
                sticky
                    ? 'border-stroke bg-white/80 shadow-md backdrop-blur-[5px] transition dark:bg-black/40'
                    : 'border-0 bg-transparent'
            }`}
        >
            <div className="mx-auto flex h-20 w-full flex-row items-center bg-transparent lg:w-7xl">
                <div className="text-foreground flex flex-row items-center justify-center gap-2">
                    <Logo />
                </div>
                <div className="hidden grow items-center justify-center lg:flex">
                    <Navbar />
                </div>
                <div className="flex grow flex-row items-center justify-end gap-2 lg:grow-0">
                    <div className="flex gap-2">
                        {SOCIAL_LINKS.map((social, index) => (
                            <Button
                                key={index}
                                variant="outline"
                                size="icon"
                                asChild
                                className="hover:text-primary h-8 w-8 border-0 bg-transparent shadow-none transition-colors hover:bg-white"
                            >
                                <a
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-3 w-3" />
                                </a>
                            </Button>
                        ))}
                    </div>
                    <CompactLocaleSwitcher />
                </div>
            </div>
        </header>
    );
}
