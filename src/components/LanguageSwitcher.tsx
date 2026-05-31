'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useTransition } from 'react';
import { LOCALE_QUERY_KEY, locales, type Locale } from '@/i18n/config';

export function LanguageSwitcher() {
  const t = useTranslations('languageSwitcher');
  const activeLocale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const switchTo = useCallback(
    (locale: Locale) => {
      if (locale === activeLocale) return;

      const params = new URLSearchParams(searchParams.toString());
      params.set(LOCALE_QUERY_KEY, locale);

      startTransition(() => {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      });
    },
    [activeLocale, pathname, router, searchParams],
  );

  return (
    <div
      className="fixed right-4 top-4 z-50 flex items-center gap-1 rounded-full border border-white/15 bg-black/40 p-1 backdrop-blur-md"
      role="group"
      aria-label={t('label')}
    >
      {locales.map((locale) => {
        const isActive = locale === activeLocale;
        return (
          <button
            key={locale}
            type="button"
            onClick={() => switchTo(locale)}
            disabled={isPending}
            aria-pressed={isActive}
            aria-label={t(locale)}
            className={`cursor-pointer rounded-full px-3 py-1 text-[13px] font-semibold uppercase transition-all duration-300 ${
              isActive
                ? 'bg-orange-400 text-(--background-primary)'
                : 'text-white/70 hover:text-white'
            }`}
          >
            {locale}
          </button>
        );
      })}
    </div>
  );
}
