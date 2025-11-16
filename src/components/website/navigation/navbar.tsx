'use client';

import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/lib/i18n/navigation';

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui';
import { cn } from '@nitrokit/core';
import { NAV_LINKS } from '@/constants';

export function Navbar() {
    const t = useTranslations();
    const pathname = usePathname();
    const isActive = (href: string) => pathname === href;
    const menuItemClass =
        'group relative inline-flex h-8 text-neutral-950 w-max items-center justify-center text-md font-normal transition-colors after:absolute after:bottom-0 after:left-0 after:h-[3px] after:w-0 after:bg-[#8D8370] after:transition-all after:duration-300 hover:text-accent-foreground hover:after:w-full focus:outline-none';
    const menuItemActiveClass = 'text-accent-foreground after:w-full';

    return (
        <NavigationMenu className="overflow-visible">
            <NavigationMenuList className="gap-6">
                {NAV_LINKS.map((item) => {
                    return (
                        <NavigationMenuItem key={item.path}>
                            <Link
                                href={item.path}
                                className={cn(
                                    menuItemClass,
                                    isActive(item.path) && menuItemActiveClass
                                )}
                            >
                                {t(item.name as any)}
                            </Link>
                        </NavigationMenuItem>
                    );
                })}
            </NavigationMenuList>
        </NavigationMenu>
    );
}
