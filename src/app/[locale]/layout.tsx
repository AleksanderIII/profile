import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Inter } from 'next/font/google';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '../globals.css';
import { Providers } from '../Providers';

import styles from './page.module.css';

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

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <body className={inter.className}>
          <Providers>
            <Header />
            <main className={styles.main}>{children}</main>
            <Footer />
          </Providers>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
