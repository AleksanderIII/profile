'use client';

import { useColorMode } from '@chakra-ui/react';

import { IconButton } from '@chakra-ui/react';
import styles from './ThemeSwitcher.module.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const ThemeSwitcher = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div className={styles.switcherContainer} onClick={toggleColorMode}>
      <IconButton
        className={styles.themeItem}
        aria-label='Toggle Theme'
        icon={
          colorMode === 'light' ? (
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
