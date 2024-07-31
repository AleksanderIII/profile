'use client';

import { FormControl, Select } from '@chakra-ui/react';
import {
  useRouter,
  localeNames,
  locales,
  Locale,
  usePathname,
} from '@/i18n.config';
import styles from './LocaleSwitcher.module.css'; // Импорт стилей

const LocaleSwitcher = ({ locale }: { locale: string }) => {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = event.target.value as Locale;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <FormControl className={styles.formControl}>
      <Select value={locale} onChange={changeLocale} className={styles.select}>
        {locales.map((loc) => (
          <option key={loc} value={loc} className={styles.option}>
            {localeNames[loc]}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default LocaleSwitcher;
