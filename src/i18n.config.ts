import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export type Locale = 'en' | 'ru';

export const locales: Locale[] = ['en', 'ru'];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ru: 'Russian',
};

export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation(
  { locales }
);
