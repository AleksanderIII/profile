import { Box, Container, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';

export default function GlobalNotFound() {
  return (
    <Container maxW='container.lg' p={4}>
      <Box textAlign='center'>
        <Heading as='h1' size='2xl'>
          Page Not Found
        </Heading>
        <Link href='/' passHref>
          <Button mt={4}>Back to Home</Button>
        </Link>
      </Box>
    </Container>
  );
}
