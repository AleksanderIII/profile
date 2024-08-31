'use client';

import { useRouter } from 'next/navigation';
import { Locale, localeNames, locales, usePathname } from '@/i18n.config';
import styles from './LocaleSwitcher.module.css';

const LocaleSwitcher = ({ locale }: { locale: Locale }) => {
  const pathname = usePathname();
  const router = useRouter();

  const changeLocale = (loc: Locale) => {
    const newPathname = `/${loc}${pathname.substring(
      pathname.indexOf('/', 1)
    )}`;
    router.replace(newPathname);
  };

  return (
    <div className={styles.formControl}>
      <div className={styles.switcher}>
        {locales.map((loc) => (
          <button
            key={loc}
            onClick={() => changeLocale(loc)}
            className={`${styles.button} ${
              locale === loc ? styles.active : ''
            }`}
          >
            {localeNames[loc]}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocaleSwitcher;
