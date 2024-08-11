import React from 'react';
import { Box, Text, Stack, useColorModeValue } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { format } from 'date-fns';
import Image from 'next/image';

import { workExperience } from './constants';

import styles from './WorkExperience.module.css';
import AnimatedPaper from '@/app/components/AnimatedPaper/AnimatedPaper';

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
  const dividerColor = useColorModeValue('light.divider', 'dark.divider');

  const renderContractor = (
    contractor: IPosition,
    isLastContactor: boolean
  ) => (
    <Text key={contractor.company} as='span' fontSize='sm'>
      {t(contractor.company)}
      {isLastContactor ? '' : ','}{' '}
    </Text>
  );

  const renderPosition = (position: IPosition) => (
    <Box
      key={position.company}
      className={`${styles.position}`}
      style={{ borderBottomColor: dividerColor }}
    >
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
          {position.contractor.map((item, index) =>
            renderContractor(
              item,
              position.contractor
                ? index === position.contractor?.length - 1
                : true
            )
          )}
        </Box>
      )}
    </Box>
  );

  return (
    <AnimatedPaper
      title={t('title').toLocaleUpperCase()}
      delay={0.1}
      className={styles.paper}
      link='/work'
    >
      <Stack>
        {Object.entries(workExperience).map(([key, work]) => (
          <Box key={key} className={styles.listItem}>
            {renderPosition(work)}
            {work.contactor && work.contactor.length > 0 && (
              <Box className={styles.contractorPositions}>
                <Text fontSize='sm' fontWeight='bold'>
                  {t('contractorPositions').toLocaleUpperCase()}
                </Text>
                {work.contactor.map((contactorWork, index) =>
                  renderContractor(
                    contactorWork,
                    index === work.contactor.length - 1
                  )
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
