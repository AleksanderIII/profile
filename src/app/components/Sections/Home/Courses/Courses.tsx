import {
  Box,
  Text,
  Card,
  CardBody,
  Heading,
  useColorModeValue,
  Button,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { format } from 'date-fns';
import AnimatedPaper from '@/app/components/AnimatedPaper/AnimatedPaper';
import { certificates } from './constants';
import styles from './Courses.module.css';
import Link from 'next/link';

const Courses = () => {
  const t = useTranslations('Courses');
  const cardBg = useColorModeValue(
    'light.cardBackground',
    'dark.cardBackground'
  );

  return (
    <AnimatedPaper
      delay={0.1}
      title={t('title').toLocaleUpperCase()}
      link={'/courses'}
      className={styles.paper}
    >
      <Box className={styles.cardsGrid}>
        {certificates.slice(0, 2).map((certificate) => (
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
      </Box>
      <Link
        style={{
          display: 'block',
          position: 'relative',
          marginTop: '1rem',
        }}
        href={'/courses'}
      >
        <ChakraLink className={styles.link} as={Button} variant='outline'>
          See more by link
        </ChakraLink>
      </Link>
    </AnimatedPaper>
  );
};

export default Courses;
