import { useState } from 'react';

import { IconButton } from '@chakra-ui/react';
import styles from './ThemeSwitcher.module.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((theme) => !theme);
  };

  return (
    <div className={styles.switcherContainer} onClick={toggleTheme}>
      <IconButton
        className={styles.themeItem}
        aria-label='Toggle Theme'
        icon={
          isDark ? (
            <FaMoon size={30} color='black' />
          ) : (
            <FaSun size={30} color='gray' />
          )
        }
      />
    </div>
  );
};

export default ThemeSwitcher;
