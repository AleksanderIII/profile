'use client';

import { FormControl, useColorModeValue, Button } from '@chakra-ui/react';
import {
  useRouter,
  localeNames,
  locales,
  Locale,
  usePathname,
} from '@/i18n.config';
import styles from './LocaleSwitcher.module.css';

const LocaleSwitcher = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  const bg = useColorModeValue('light.cardBackground', 'dark.cardBackground');

  const changeLocale = (loc: Locale) => {
    router.replace(pathname, { locale: loc });
  };

  return (
    <FormControl className={styles.formControl}>
      <div className={styles.switcher}>
        {locales.map((loc) => (
          <Button
            key={loc}
            bg={bg}
            onClick={() => changeLocale(loc)}
            className={`${styles.button} ${
              locale === loc ? styles.active : ''
            }`}
          >
            {localeNames[loc]}
          </Button>
        ))}
      </div>
    </FormControl>
  );
};

export default LocaleSwitcher;
