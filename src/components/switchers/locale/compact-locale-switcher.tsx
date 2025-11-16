'use client';

import { Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { Suspense, useEffect, useState } from 'react';
import { useLocale } from 'next-intl';
import { SmallLoading } from '@/components/shared';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@/components/ui';
import { usePathname, useRouter } from '@/lib/i18n/navigation';
import { LOCALES_WITH_FLAG } from '@/lib';
import { Locale } from '@/constants';
import { cn } from '@nitrokit/core';

export const CompactLocaleSwitcher = () => {
    const router = useRouter();
    const pathname = usePathname();
    const currentLocale = useLocale();

    const [desktopOpen, setDesktopOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleLocaleChange = (locale: Locale) => {
        router.push(pathname, { locale });
        setDesktopOpen(false);
    };

    const getCurrentLocale = () => {
        return (
            LOCALES_WITH_FLAG.find((LOCALE) => LOCALE.id === currentLocale) || LOCALES_WITH_FLAG[0]
        );
    };

    if (!mounted) {
        return <SmallLoading />;
    }

    const currentLocaleData = getCurrentLocale();

    return (
        <Suspense fallback={<SmallLoading />}>
            <div>
                <Popover open={desktopOpen} onOpenChange={setDesktopOpen}>
                    <PopoverTrigger asChild>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="border-border/0 h-8 gap-2 rounded-lg border bg-white bg-none px-1 pl-2 transition-all duration-200 hover:border hover:border-amber-300/40 hover:bg-white/80"
                        >
                            <Image
                                src={currentLocaleData.flag}
                                width={14}
                                height={14}
                                alt={currentLocaleData.name}
                            />
                            <span className="text-xs font-medium">
                                {currentLocaleData.id.toUpperCase()}
                            </span>
                            <ChevronDown size={10} className="opacity-60" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="mr-3 w-30 p-1">
                        <div className="space-y-0.5">
                            {LOCALES_WITH_FLAG.map((LOCALE) => (
                                <Button
                                    key={LOCALE.id}
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => handleLocaleChange(LOCALE.id)}
                                    className={cn(
                                        'h-auto w-full justify-start gap-2 rounded-xs px-2 py-0.5 text-amber-900 transition-colors',
                                        currentLocale === LOCALE.id
                                            ? 'bg-orange-200 hover:bg-orange-300 hover:text-white'
                                            : 'hover:bg-orange-100 hover:text-amber-600'
                                    )}
                                >
                                    <Image
                                        src={LOCALE.flag}
                                        width={16}
                                        height={16}
                                        alt={LOCALE.name}
                                    />
                                    <span className="flex-1 text-left text-xs font-normal">
                                        {LOCALE.name}
                                    </span>
                                    {currentLocale === LOCALE.id && (
                                        <Check size={14} className="ml-auto text-rose-300" />
                                    )}
                                </Button>
                            ))}
                        </div>
                    </PopoverContent>
                </Popover>
            </div>
        </Suspense>
    );
};
