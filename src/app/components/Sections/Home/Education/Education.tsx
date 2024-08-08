import React from 'react';
import { Box, Heading, Text, Stack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import AnimatedPaper from '../../../AnimatedPaper/AnimatedPaper';
import styles from './Education.module.css';

const Education: React.FC = () => {
  const translation = useTranslations('Education');
  const keys = ['university', 'magistracy', 'school'] as const;

  return (
    <AnimatedPaper
      title={translation('title').toLocaleUpperCase()}
      link='/education'
      delay={0.1}
      className={styles.paper}
    >
      <Box>
        <Stack spacing={4}>
          {keys.map((educationKey) => (
            <Box key={educationKey} className={styles.item}>
              <Image
                src={`/education/${translation(`${educationKey}.logo`)}`}
                alt={`${translation(`${educationKey}.name`)} logo`}
                className={styles.logo}
                width={50} /* Ширина по умолчанию, будет переопределена в CSS */
                height={
                  50
                } /* Высота по умолчанию, будет переопределена в CSS */
              />
              <Box>
                <Text className={styles.name}>
                  {translation(`${educationKey}.name`)}
                </Text>
                <Text className={styles.details}>
                  {`${translation(`${educationKey}.degree`)} (${translation(
                    `${educationKey}.year`
                  )})`}
                </Text>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </AnimatedPaper>
  );
};

export default Education;
