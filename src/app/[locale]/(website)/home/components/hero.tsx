import { RandomText, TextRotator } from '@/components/shared';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export function Hero() {
    const t = useTranslations('home');

    const titles = {
        title1: t.rich('hero.titles.title1', { br: () => <br /> }),
        title2: t.rich('hero.titles.title2', { br: () => <br /> })
    };

    const descriptions = {
        description1: t.rich('hero.description.description1', { br: () => <br /> }),
        description2: t.rich('hero.description.description2', { br: () => <br /> }),
        description3: t.rich('hero.description.description3', { br: () => <br /> })
    };

    const titleArray = Object.values(titles);
    const descriptionArray = Object.values(descriptions);

    const heroImages = ['/images/hero/hero-2.png', '/images/hero/hero.png'];
    const randomImage = heroImages[Math.floor(Math.random() * heroImages.length)];

    return (
        <div className="relative">
            <div className="container mx-auto max-w-7xl items-center justify-center px-8 py-14 lg:px-4 lg:py-20">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
                    <div className="flex flex-col justify-center text-center lg:text-left">
                        <div className="mb-8 w-full text-5xl tracking-tight">
                            <TextRotator
                                texts={titleArray}
                                interval={10000}
                                className="mb-0 inline-block bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-center text-4xl leading-10 font-bold text-transparent text-shadow-white/25 text-shadow-xs lg:mb-6 lg:text-left lg:text-6xl lg:leading-19"
                            />
                        </div>
                        <p className="mx-auto mb-12 w-full max-w-4xl rounded-4xl bg-white/20 text-lg leading-relaxed text-orange-400 text-shadow-2xs/10 text-shadow-amber-400 md:text-2xl lg:text-xl dark:text-gray-800">
                            <RandomText texts={descriptionArray} />
                        </p>
                    </div>
                    <div className="flex items-center justify-center lg:items-start lg:justify-start">
                        <Image
                            src={randomImage}
                            alt="Nemzero İzolasyon Boyası"
                            width={1024}
                            height={816}
                            className="h-auto w-full max-w-sm lg:max-w-full"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
