'use client';

import { Box } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import Navigation from '../Navigation/Navigation';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import { Locale, locales, localeNames } from '../../../i18n.config';
import { useLocale } from 'next-intl';

import styles from './Header.module.css';

const Header = ({
  mobileView = false,
  onLinkClick,
}: {
  mobileView?: boolean;
  onLinkClick?: () => void;
}) => {
  const t = useTranslations('Navigation');
  const locale = useLocale() as Locale;
  const [activeSection, setActiveSection] = useState<string>('');

  const handleClick = (link: string) => {
    setActiveSection(link);
    if (onLinkClick) onLinkClick();
  };

  const navigationItems = [
    { name: t('titles.home'), icon: 'home', link: 'home' },
    { name: t('titles.education'), icon: 'school', link: 'education' },
    { name: t('titles.work'), icon: 'briefcase', link: 'work' },
    { name: t('titles.courses'), icon: 'certificate', link: 'courses' },
    { name: t('titles.contacts'), icon: 'envelope', link: 'contact' },
  ];

  return (
    <Box
      className={`${styles.headerContainer} ${
        mobileView ? styles.mobileView : ''
      }`}
    >
      <Navigation
        items={navigationItems}
        activeSection={activeSection}
        onClick={handleClick}
        mobileView={mobileView}
      />
      <LocaleSwitcher locale={locale} />
    </Box>
  );
};

export default Header;
