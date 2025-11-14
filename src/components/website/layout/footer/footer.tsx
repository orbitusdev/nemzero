'use client';

import React from 'react';
import { Button } from '@/components/ui';
import { Heart, Palette } from 'lucide-react';
import { DevelopedBy, Logo } from '@/components/shared';
import { SOCIAL_LINKS, FOOTER_LINKS } from '@/constants';
import { Separator } from '@radix-ui/themes';
import { CompactNewsletter } from '@/components/website/newsletter';
import { useTranslations } from 'next-intl';
import { FooterMenu } from '@/components/website/navigation';

export function Footer() {
    const t = useTranslations();

    return (
        <footer className="flex w-full flex-col items-center justify-center px-10 lg:mx-auto lg:my-10 lg:w-7xl lg:px-0">
            <div className="relative">
                <section className="py-6">
                    <div className="grid gap-6 lg:grid-cols-7">
                        <div className="lg:col-span-3 lg:pr-20">
                            <Logo />
                            <p className="text-muted-foreground my-4 leading-relaxed">
                                {t('common.description')}
                            </p>
                            <div className="flex gap-2">
                                {SOCIAL_LINKS.map((social, index) => (
                                    <Button
                                        key={index}
                                        variant="outline"
                                        size="icon"
                                        asChild
                                        className="hover:bg-primary hover:text-primary-foreground h-8 w-8 transition-colors"
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
                        </div>
                        <div className="flex gap-20 border-t pt-10 pb-6 lg:col-span-2 lg:border-0 lg:pt-0 lg:pb-0">
                            <FooterMenu
                                title={t('common.navigation.products')}
                                icon={Palette}
                                iconBgColor="bg-blue-500/10"
                                iconTextColor="text-blue-500"
                                links={FOOTER_LINKS.SECTION1}
                            />
                            <FooterMenu
                                title={t('common.navigation.support')}
                                icon={Heart}
                                iconBgColor="bg-green-500/10"
                                iconTextColor="text-green-500"
                                links={FOOTER_LINKS.SECTION2}
                            />
                        </div>
                        <div className="border-t pt-10 pb-6 lg:col-span-2 lg:border-0 lg:pt-0 lg:pb-0">
                            <CompactNewsletter />
                        </div>
                    </div>
                </section>
                <Separator />
                <section className="flex flex-col items-center justify-between gap-4 py-3 md:flex-row">
                    <div className="text-muted-foreground flex items-center gap-1 text-xs">
                        <span>
                            © {new Date().getFullYear()} {t('common.shortName')} •{' '}
                            {t('common.allRightsReserved')}
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <DevelopedBy />
                    </div>
                </section>
            </div>
        </footer>
    );
}
