import { Element } from 'react-scroll';
import { Box, Text, Card, CardBody, Heading } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { format } from 'date-fns';
import AnimatedPaper from '@/app/components/AnimatedPaper/AnimatedPaper';
import { certificates } from './constants';
import styles from './Courses.module.css';

export const Courses = () => {
  const t = useTranslations('Courses');

  return (
    <Element name='coursesAndCertificates'>
      <AnimatedPaper
        delay={0.1}
        title={t('title').toLocaleUpperCase()}
        className={styles.paper}
      >
        <div className={styles.cardsGrid}>
          {certificates.map((certificate) => (
            <Box key={certificate.id} className={styles.card}>
              <Image
                alt={certificate.title}
                src={certificate.image}
                layout='responsive'
                width={300}
                height={200}
                className={styles.cardImage}
              />
              <Card>
                <CardBody className={styles.cardContent}>
                  <Heading as='h3' size='md'>
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
      </AnimatedPaper>
    </Element>
  );
};
