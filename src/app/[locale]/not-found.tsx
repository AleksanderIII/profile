import { Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <Container maxW='container.lg' p={4}>
      <Box textAlign='center'>
        <Heading as='h1' size='2xl'>
          {t('title')}
        </Heading>
        <Text fontSize='xl'>{t('description')}</Text>
        <Link href='/' passHref>
          <Button mt={4}> {t('backToHome')}</Button>
        </Link>
      </Box>
    </Container>
  );
}
