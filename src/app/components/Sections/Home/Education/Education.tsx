import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedPaper from '../../../ui/AnimatedPaper/AnimatedPaper';
import styles from './Education.module.css';

const Education: React.FC = () => {
  const translation = useTranslations('Education');
  const keys = ['university', 'magistracy', 'school'] as const;

  return (
    <AnimatedPaper
      title={translation('title').toLocaleUpperCase()}
      link='/education'
      delay={0.1}
    >
      <div>
        {keys.map((educationKey) => (
          <div key={educationKey} className={`${styles.item} divider`}>
            <Image
              src={`/education/${translation(`${educationKey}.logo`)}`}
              alt={`${translation(`${educationKey}.name`)} logo`}
              className={styles.logo}
              width={50}
              height={50}
            />
            <div>
              <p className={styles.name}>
                {translation(`${educationKey}.name`)}
              </p>
              <p className={styles.details}>
                {`${translation(`${educationKey}.degree`)} (${translation(
                  `${educationKey}.year`
                )})`}
              </p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedPaper>
  );
};

export default Education;
