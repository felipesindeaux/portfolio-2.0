import '../styles/globals.css';
import type { Metadata } from 'next';
import { getLocale, getTranslations } from 'next-intl/server';
import { Suspense } from 'react';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { LocaleProvider } from '@/components/LocaleProvider';
import { resolveLocale } from '@/i18n/config';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');
  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: [
      'developer',
      'freelancer',
      'react',
      'next',
      'nextjs',
      'html',
      'css',
      'javascript',
      'typescript',
      'ts',
      'js',
      'modern-ui',
      'modern-ux',
      'framer-motion',
      '3d-website',
      'particle-effect',
    ],
    authors: [{ name: 'Felipe Sindeaux' }],
    icons: { icon: '/icon.png' },
    themeColor: '#121214',
    openGraph: {
      title: 'Felipe Sindeaux',
      description,
      images: ['https://avatars.githubusercontent.com/u/89540255?v=4'],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = resolveLocale(await getLocale());

  return (
    <html lang={locale}>
      <body className="antialiased" suppressHydrationWarning>
        <Suspense>
          <LocaleProvider initialLocale={locale}>
            <LanguageSwitcher />
            {children}
          </LocaleProvider>
        </Suspense>
      </body>
    </html>
  );
}
