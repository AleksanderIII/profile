import { Box, Container, Heading, Text, Avatar, Stack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

import styles from './page.module.css';

const Profile = () => {
  const t = useTranslations('home');
  return (
    <Container maxW='container.lg' p={4}>
      <Box textAlign='center'>
        <Heading as='h1' size='2xl'>
          {t('heading')}
        </Heading>
        <Text fontSize='xl'>home.description</Text>
      </Box>
    </Container>
  );
};

export default Profile;
