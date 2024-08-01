import React from 'react';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import CircleProgress from '../../../CircleProgress/CircleProgress';

import styles from './Languages.module.css';
import { Levels, levelToProgress } from './constants';

const Languages = () => {
  const t = useTranslations('Languages');

  const languages = [
    { name: t('english'), level: Levels.B2, flag: './flags/gb.jpeg' },
    { name: t('russian'), level: Levels.C2, flag: './flags/ru.jpeg' },
    { name: t('belarusian'), level: Levels.C2, flag: './flags/by.png' },
    { name: t('polish'), level: Levels.A1, flag: './flags/pl.png' },
  ];

  return (
    <Box className={styles.languagesContainer}>
      <List spacing={4}>
        {languages.map((language) => (
          <ListItem key={language.name} className={styles.languageItem}>
            <Text className={styles.languageName}>{language.name}</Text>
            <Text className={styles.languageLevel}>{`${t('level')}: ${
              language.level
            }`}</Text>
            <CircleProgress
              progress={levelToProgress(language.level)}
              backgroundUrl={language.flag}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Languages;
