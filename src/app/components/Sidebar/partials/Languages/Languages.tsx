import React from 'react';
import { useTranslations } from 'next-intl';
import CircleProgress from '../../../ui/CircleProgress/CircleProgress';

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
    <div className={styles.languagesContainer}>
      <div>
        {languages.map((language) => (
          <div key={language.name} className={styles.languageItem}>
            <span className={styles.languageName}>{language.name}</span>
            <span className={styles.languageLevel}>{`${t('level')}: ${
              language.level
            }`}</span>
            <CircleProgress
              progress={levelToProgress(language.level)}
              backgroundUrl={language.flag}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
