'use client';

import { useTranslations } from 'next-intl';
import Navigation from '../../Navigation/Navigation';
import LocaleSwitcher from '../../LocaleSwitcher/LocaleSwitcher';
import { Locale } from '../../../../i18n.config';
import { useLocale } from 'next-intl';
import styles from './Header.module.css';

const Header = () => {
  const t = useTranslations('Navigation');
  const locale = useLocale() as Locale;

  const navigationItems = [
    { name: t('titles.home'), icon: 'home', link: '/' },
    { name: t('titles.education'), icon: 'school', link: '/education' },
    { name: t('titles.work'), icon: 'briefcase', link: '/work' },
    { name: t('titles.courses'), icon: 'certificate', link: '/courses' },
    { name: t('titles.contacts'), icon: 'envelope', link: '/contacts' },
  ];

  return (
    <div className={styles.headerContainer}>
      <div>A. M.</div>
      <Navigation items={navigationItems} />
      <div className={styles.switcherWrapper}>
        <LocaleSwitcher locale={locale} />
      </div>
    </div>
  );
};

export default Header;
