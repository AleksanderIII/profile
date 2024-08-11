'use client';

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';
import Navigation from '../Navigation/Navigation';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import { Locale, locales, localeNames } from '../../../i18n.config';
import { useLocale } from 'next-intl';
import styles from './Header.module.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = ({ onLinkClick }: { onLinkClick?: () => void }) => {
  const t = useTranslations('Navigation');
  const locale = useLocale() as Locale;
  const [activeSection, setActiveSection] = useState<string>('');
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isMobile] = useMediaQuery('(max-width: 700px)');

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

  const headerBg = useColorModeValue('light.background', 'dark.background');
  const headerBorder = useColorModeValue('light.border', 'dark.border');
  const headerColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Box
      bg={headerBg}
      color={headerColor}
      borderColor={headerBorder}
      className={styles.headerContainer}
    >
      {isMobile && !isOpen && (
        <IconButton
          aria-label='Open Menu'
          icon={<HamburgerIcon boxSize={30} />}
          onClick={onOpen}
          className={styles.menuButton}
        />
      )}
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className={styles.mobileMenu}>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <Navigation
              items={navigationItems}
              activeSection={activeSection}
              onClick={handleClick}
              mobileView={isMobile}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {!isMobile && (
        <Navigation
          items={navigationItems}
          activeSection={activeSection}
          onClick={handleClick}
          mobileView={isMobile}
        />
      )}
      <Box display='flex' alignItems={'center'}>
        <ThemeSwitcher />
        <LocaleSwitcher locale={locale} />
      </Box>
    </Box>
  );
};

export default Header;
