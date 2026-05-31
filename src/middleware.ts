import { NextRequest, NextResponse } from 'next/server';
import {
  LOCALE_HEADER,
  LOCALE_QUERY_KEY,
  detectLocale,
  isLocale,
} from './i18n/config';

export function middleware(request: NextRequest) {
  const langParam = request.nextUrl.searchParams.get(LOCALE_QUERY_KEY);
  const locale = isLocale(langParam)
    ? langParam
    : detectLocale(request.headers.get('accept-language'));

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(LOCALE_HEADER, locale);

  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
