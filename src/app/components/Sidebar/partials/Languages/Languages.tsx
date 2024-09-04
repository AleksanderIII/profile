import React from 'react';
import { useTranslations } from 'next-intl';

import { TiStarFullOutline } from 'react-icons/ti';
import styles from './Languages.module.css';
import { Levels, levelToStars } from './constants';

const Languages = () => {
  const t = useTranslations('Languages');

  const languages = [
    { name: t('english'), level: Levels.B2 },
    { name: t('russian'), level: Levels.C2 },
    { name: t('belarusian'), level: Levels.C2 },
    { name: t('polish'), level: Levels.A1 },
  ];

  return (
    <div className={styles.languagesContainer}>
      <div>
        {languages.map((language) => (
          <div key={language.name} className={styles.languageItem}>
            <span className={styles.languageName}>{language.name}</span>
            <div title={language.level} className={styles.stars}>
              {Array.from({ length: levelToStars(language.level) }, (_, i) => (
                <TiStarFullOutline key={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
