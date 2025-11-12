import { useTranslations } from 'next-intl';
import { Link } from '@/lib/i18n/navigation';
import { ThemedImage } from '@/components/shared';
import { cn } from '@/lib';

export function Logo({ className = '' }: { className?: string }) {
    const t = useTranslations('common');
    return (
        <Link href={'/'} className={cn('flex items-center justify-start gap-4', className)}>
            <ThemedImage
                lightSrc={'/images/logos/nemzero.png'}
                darkSrc={'/images/logos/nemzero.png'}
                alt="Nitrokit"
                width={190}
                height={70}
                className={'drop-shadow-xs'}
            />
        </Link>
    );
}
