'use client';

import {
  Box,
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
import { HamburgerIcon } from '@chakra-ui/icons';
import Navigation from '../Navigation/Navigation';
import LocaleSwitcher from '../LocaleSwitcher/LocaleSwitcher';
import { Locale } from '../../../i18n.config';
import { useLocale } from 'next-intl';
import styles from './Header.module.css';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Header = () => {
  const t = useTranslations('Navigation');
  const locale = useLocale() as Locale;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isMobile] = useMediaQuery('(max-width: 700px)');

  const navigationItems = [
    { name: t('titles.home'), icon: 'home', link: '/' },
    { name: t('titles.education'), icon: 'school', link: '/education' },
    { name: t('titles.work'), icon: 'briefcase', link: '/work' },
    { name: t('titles.courses'), icon: 'certificate', link: '/courses' },
    { name: t('titles.contacts'), icon: 'envelope', link: '/contacts' },
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
            <Navigation items={navigationItems} mobileView={isMobile} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      {!isMobile && (
        <Navigation items={navigationItems} mobileView={isMobile} />
      )}
      <Box display='flex' alignItems={'center'}>
        <ThemeSwitcher />
        <LocaleSwitcher locale={locale} />
      </Box>
    </Box>
  );
};

export default Header;
