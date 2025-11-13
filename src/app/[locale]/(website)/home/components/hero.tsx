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
            <div className="container mx-auto px-4 py-14 lg:py-8">
                <div className="mx-auto mt-20 max-w-5xl text-center">
                    <div className="mb-8 w-full text-5xl tracking-tight">
                        <TextRotator
                            texts={titleArray}
                            interval={10000}
                            className="mb-6 inline-block bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-center text-6xl leading-19 font-bold text-transparent text-shadow-white/25 text-shadow-xs"
                        />
                    </div>

                    <p className="mx-auto mb-12 w-full max-w-4xl rounded-4xl bg-white/10 p-10 text-xl leading-relaxed text-[#7A7672] text-shadow-2xs text-shadow-[#F3E0BD] md:text-2xl dark:text-gray-800">
                        <RandomText texts={descriptionArray} />
                    </p>
                </div>
            </div>
        </div>
    );
}
