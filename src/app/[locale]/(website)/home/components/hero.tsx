import { RandomText, TextRotator } from '@/components/shared';
import { useTranslations } from 'next-intl';

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

    return (
        <div className="relative">
            <div className="container mx-auto px-8 py-14 lg:px-4 lg:py-8">
                <div className="mx-auto mt-10 max-w-4xl text-center lg:mt-20 lg:max-w-5xl">
                    <div className="mb-8 w-full text-5xl tracking-tight">
                        <TextRotator
                            texts={titleArray}
                            interval={10000}
                            className="mb-0 inline-block bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-center text-3xl leading-10 font-bold text-transparent text-shadow-white/25 text-shadow-xs lg:mb-6 lg:text-6xl lg:leading-19"
                        />
                    </div>

                    <p className="mx-auto mb-12 w-full max-w-4xl rounded-4xl bg-white/20 p-4 text-lg leading-relaxed text-orange-400 text-shadow-2xs/10 text-shadow-amber-400 md:text-2xl lg:p-10 lg:text-xl dark:text-gray-800">
                        <RandomText texts={descriptionArray} />
                    </p>
                </div>
            </div>
        </div>
    );
}
