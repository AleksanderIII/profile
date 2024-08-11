'use client';

import { certificates } from '@/app/components/Sections/Home/Courses/constants';
import {
  Box,
  Card,
  CardBody,
  Container,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './page.module.css';

const CoursesPage = () => {
  const t = useTranslations('Courses');
  const containerBg = useColorModeValue('light.background', 'dark.background');
  const textColor = useColorModeValue('light.text', 'dark.text');
  const cardBg = useColorModeValue(
    'light.cardBackground',
    'dark.cardBackground'
  );

  return (
    <Container maxW='container.xl'>
      <Box bg={containerBg} color={textColor}>
        <div className={styles.cardsGrid}>
          {certificates.map((certificate) => (
            <Box bg={cardBg} key={certificate.id} className={styles.card}>
              <Image
                alt={certificate.title}
                src={certificate.image}
                layout='responsive'
                width={300}
                height={200}
                className={styles.cardImage}
              />
              <Card
                borderRadius='none'
                style={{
                  height: 'calc(100% - 200px)',
                  border: 'none',
                  boxShadow: 'none',
                  width: '100%',
                }}
              >
                <CardBody bg={cardBg} className={styles.cardContent}>
                  <Heading as='h3' mb={1} size='md'>
                    {t(certificate.title)}
                  </Heading>
                  <Text className={styles.cardSubtitle}>
                    {t('date')}
                    {': '}
                    {format(new Date(certificate.date), 'MMMM d, yyyy')}
                  </Text>
                  <Text className={styles.cardSubtitle}>
                    {t('instructor')}: {certificate.instructor}
                  </Text>
                  <Text className={styles.cardSubtitle}>
                    {t('platform')}: {certificate.platform.name}
                  </Text>
                </CardBody>
              </Card>
            </Box>
          ))}
        </div>
      </Box>
    </Container>
  );
};
export default CoursesPage;
