import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter } from 'next/font/google';

import Header from '../components/shared/Header/Header';
import Footer from '../components/Footer/Footer';

import '../globals.css';

import styles from './page.module.css';
import { locales } from '@/i18n.config';
import { unstable_setRequestLocale } from 'next-intl/server';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Portfolio showcasing the work and experience of Aleksandr Matyushik',
  keywords: [
    'Aleksandr Matyushik',
    'Portfolio',
    'Software Developer',
    'Experience',
  ],
  icons: {
    icon: '/logo.png',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
          <Header />
          <main className={styles.main}>{children}</main>
          <Footer />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
