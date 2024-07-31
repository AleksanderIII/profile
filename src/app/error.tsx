'use client';

import { Box, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const ErrorPage = ({ error }: { error: Error }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      minHeight='100vh'
      padding='4'
      textAlign='center'
    >
      <Text fontSize='2xl' fontWeight='bold' mb='4'>
        Some error
      </Text>
      <Text mb='6'>{error.message}</Text>
      <Button onClick={handleGoBack} colorScheme='blue'>
        Back
      </Button>
    </Box>
  );
};

export default ErrorPage;
