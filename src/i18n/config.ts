export const locales = ['pt', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export const LOCALE_HEADER = 'x-lang';

export const LOCALE_QUERY_KEY = 'lang';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && locales.includes(value as Locale);
}

export function resolveLocale(
  value: unknown,
  fallback: Locale = defaultLocale,
): Locale {
  return isLocale(value) ? value : fallback;
}

export function detectLocale(acceptLanguage?: string | null): Locale {
  return acceptLanguage?.trim().toLowerCase().startsWith('pt') ? 'pt' : 'en';
}
