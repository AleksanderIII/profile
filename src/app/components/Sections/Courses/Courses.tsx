import { useState } from 'react';
import { Element } from 'react-scroll';
import {
  Box,
  Heading,
  Text,
  Stack,
  Button,
  Card,
  CardBody,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { format } from 'date-fns';
import AnimatedPaper from '@/app/components/AnimatedPaper/AnimatedPaper';
import Image from 'next/image';
import { certificates } from './constants';

import styles from './Courses.module.css';

export const Courses = () => {
  const t = useTranslations('Courses');
  const [showAll, setShowAll] = useState(false);
  const visibleCertificates = showAll ? certificates : certificates.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <Element name='coursesAndCertificates'>
      <AnimatedPaper
        delay={0.1}
        className={styles.paper} // Применяем стили из CSS Module
      >
        <>
          <Heading as='h2' size='lg' className={styles.title}>
            {t('title')}
          </Heading>
          <Stack spacing={4}>
            {visibleCertificates.map((certificate) => (
              <Box key={certificate.id} className={styles.card}>
                <Link href={`/certificates/${certificate.id}`} passHref>
                  <Image
                    alt={certificate.title}
                    src={certificate.image}
                    layout='responsive'
                    width={200} // Убираем адаптивность на уровне CSS
                    height={100} // Убираем адаптивность на уровне CSS
                    className={styles.cardImage} // Применяем стили из CSS Module
                  />
                </Link>
                <Card>
                  <CardBody className={styles.cardContent}>
                    <Text
                      className={styles.cardTitle} // Применяем стили из CSS Module
                    >
                      {t(certificate.title)}
                    </Text>
                    <Text
                      className={styles.cardSubtitle} // Применяем стили из CSS Module
                    >
                      Date: {format(new Date(certificate.date), 'MMMM d, yyyy')}
                    </Text>
                    <Text
                      className={styles.cardSubtitle} // Применяем стили из CSS Module
                    >
                      Instructor: {certificate.instructor}
                    </Text>
                    <Text
                      className={styles.cardSubtitle} // Применяем стили из CSS Module
                    >
                      Platform: {certificate.platform.name}
                    </Text>
                  </CardBody>
                </Card>
              </Box>
            ))}
          </Stack>
          {certificates.length > 3 && (
            <Box display='flex' justifyContent='center'>
              <Button
                variant='solid'
                colorScheme='red'
                onClick={toggleShowAll}
                className={`${styles.button} ${
                  showAll ? styles.buttonHover : ''
                }`} // Применяем стили из CSS Module
              >
                {showAll ? t('showLess') : t('showMore')}
              </Button>
            </Box>
          )}
        </>
      </AnimatedPaper>
    </Element>
  );
};
