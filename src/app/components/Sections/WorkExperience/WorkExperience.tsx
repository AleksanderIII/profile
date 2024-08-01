import React from 'react';
import { Box, Heading, Text, Stack, Divider } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { format } from 'date-fns';
import Image from 'next/image';

import AnimatedPaper from '../../AnimatedPaper/AnimatedPaper';
import { workExperience } from './constants';

import styles from './WorkExperience.module.css';

interface IPosition {
  company: string;
  position: string;
  start: Date;
  end: Date;
  location: string;
  logo: string;
  size: { width: number; height: number };
  contractor?: IPosition[];
}

const WorkExperience: React.FC = () => {
  const t = useTranslations('WorkExperience');

  const renderContractor = (contractor: IPosition) => (
    <Box key={contractor.company} className={styles.contractor}>
      <Image
        src={contractor.logo}
        alt={`${t(contractor.company)} logo`}
        width={contractor.size.width * 0.5}
        height={contractor.size.height * 0.5}
        className={styles.contractorLogo}
      />
      <Box className={styles.contractorText}>
        <Text fontSize='sm'>
          {`${t(contractor.position)} at ${t(contractor.company)}`}
        </Text>
        <Text fontSize='xs' color='gray.500'>
          {`${format(contractor.start, 'MMMM yyyy')} - ${format(
            contractor.end,
            'MMMM yyyy'
          )}`}
        </Text>
        <Text fontSize='xs' color='gray.500'>
          {t(contractor.location)}
        </Text>
      </Box>
    </Box>
  );

  const renderPosition = (position: IPosition) => (
    <Box key={position.company} className={styles.position}>
      <Box display='flex' alignItems='start' className={styles.positionContent}>
        <Image
          src={position.logo}
          alt={`${t(position.company)} logo`}
          width={position.size.width * 0.6}
          height={position.size.height * 0.6}
          className={styles.positionLogo}
        />
        <Box className={styles.positionText}>
          <Text fontSize='md' fontWeight='bold'>
            {`${t(position.position)} at ${t(position.company)}`}
          </Text>
          <Text fontSize='sm' color='gray.500'>
            {`${format(position.start, 'MMMM yyyy')} - ${format(
              position.end,
              'MMMM yyyy'
            )}`}
          </Text>
          <Text fontSize='sm' color='gray.500'>
            {t(position.location)}
          </Text>
        </Box>
      </Box>
      {position.contractor && position.contractor.length > 0 && (
        <Box className={styles.contractorPositions}>
          <Text fontSize='sm' fontWeight='bold'>
            {t('contractorPositions').toLocaleUpperCase()}
          </Text>
          {position.contractor.map(renderContractor)}
        </Box>
      )}
      <Divider my={20} style={{ border: '1px solid black' }} />
    </Box>
  );

  return (
    <AnimatedPaper
      title={t('title').toLocaleUpperCase()}
      delay={0.1}
      className={styles.paper}
    >
      <Stack spacing={4}>
        {Object.entries(workExperience).map(([key, work]) => (
          <Box key={key} className={styles.listItem}>
            {renderPosition(work)}
            {work.contactor && work.contactor.length > 0 && (
              <Box className={styles.contractorPositions}>
                <Text fontSize='sm' fontWeight='bold'>
                  {t('contractorPositions').toLocaleUpperCase()}
                </Text>
                {work.contactor.map((contactorWork) =>
                  renderContractor(contactorWork)
                )}
              </Box>
            )}
          </Box>
        ))}
      </Stack>
    </AnimatedPaper>
  );
};

export default WorkExperience;
