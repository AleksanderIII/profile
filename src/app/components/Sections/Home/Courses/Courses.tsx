import { Element } from 'react-scroll';
import {
  Box,
  Text,
  Card,
  CardBody,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { format } from 'date-fns';
import AnimatedPaper from '@/app/components/AnimatedPaper/AnimatedPaper';
import { certificates } from './constants';
import styles from './Courses.module.css';

const Courses = () => {
  const t = useTranslations('Courses');
  const cardBg = useColorModeValue(
    'light.cardBackground',
    'dark.cardBackground'
  );

  return (
    <Element name='coursesAndCertificates'>
      <AnimatedPaper
        delay={0.1}
        title={t('title').toLocaleUpperCase()}
        link={'/courses'}
        className={styles.paper}
      >
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
      </AnimatedPaper>
    </Element>
  );
};

export default Courses;
