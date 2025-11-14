import { Link } from '@/lib/i18n/navigation';
import { ThemedImage } from '@/components/shared';
import { cn } from '@/lib';
import { useTranslations } from 'next-intl';

export function Logo({ className = '' }: { className?: string }) {
    const t = useTranslations('common');
    return (
        <Link href={'/'} className={cn('flex items-center justify-start gap-1', className)}>
            <ThemedImage
                lightSrc={'/images/logos/sembol.png'}
                darkSrc={'/images/logos/sembol.png'}
                alt="Nemzero"
                width={1024}
                height={1024}
                className={'h-12 w-12 drop-shadow-xs'}
            />
            <span
                className={`text-4xl leading-none font-normal tracking-wide text-stone-700 text-shadow-2xs text-shadow-amber-500/15 dark:text-shadow-xs`}
            >
                {t('shortName')}
            </span>
        </Link>
    );
}
