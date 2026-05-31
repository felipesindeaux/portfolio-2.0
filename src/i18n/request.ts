import { getRequestConfig } from 'next-intl/server';
import { headers } from 'next/headers';
import { LOCALE_HEADER, resolveLocale } from './config';

export default getRequestConfig(async () => {
  const headerList = await headers();
  const locale = resolveLocale(headerList.get(LOCALE_HEADER));

  return {
    locale,
    timeZone: 'America/Sao_Paulo',
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
