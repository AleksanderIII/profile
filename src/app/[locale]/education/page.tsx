import { Box, Container, Heading, Stack, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import styles from './page.module.css';

const EducationPage = () => {
  const translation = useTranslations('Education');
  const keys = ['university', 'magistracy', 'school'] as const;

  return (
    <Container maxW='container.xl' className={styles.container}>
      <Box>
        <Stack spacing={4}>
          {keys.map((educationKey) => (
            <Box key={educationKey} className={styles.item}>
              <Image
                src={`/education/${translation(`${educationKey}.logo`)}`}
                alt={`${translation(`${educationKey}.name`)} logo`}
                className={styles.logo}
                width={50}
                height={50}
              />
              <Box>
                <Heading as='h3' size='md'>
                  {translation(`${educationKey}.name`)}
                </Heading>
                <Text>
                  {`${translation(`${educationKey}.degree`)} (${translation(
                    `${educationKey}.year`
                  )})`}
                </Text>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};
export default EducationPage;
