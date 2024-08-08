import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import AnimatedPaper from '../../../AnimatedPaper/AnimatedPaper';

import styles from './Introduction.module.css';

const Introduction: React.FC = () => {
  const translation = useTranslations('introduction');

  return (
    <AnimatedPaper delay={0.1}>
      <Box className='container'>
        <Heading as='h1' size='lg' mb={4}>
          {translation.rich('message', {
            name: (chunks) => (
              <strong className={styles.highlight}>{chunks}</strong>
            ),
          })}
        </Heading>
      </Box>
    </AnimatedPaper>
  );
};

export default Introduction;
