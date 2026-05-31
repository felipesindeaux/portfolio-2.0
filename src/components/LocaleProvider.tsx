'use client';

import { NextIntlClientProvider } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import en from '@/i18n/messages/en.json';
import pt from '@/i18n/messages/pt.json';
import { LOCALE_QUERY_KEY, resolveLocale, type Locale } from '@/i18n/config';

const messages = { pt, en } as const;

interface LocaleProviderProps {
  initialLocale: Locale;
  children: React.ReactNode;
}

export function LocaleProvider({ initialLocale, children }: LocaleProviderProps) {
  const searchParams = useSearchParams();
  const locale = resolveLocale(
    searchParams.get(LOCALE_QUERY_KEY),
    initialLocale,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages[locale]}
      timeZone="America/Sao_Paulo"
    >
      {children}
    </NextIntlClientProvider>
  );
}
