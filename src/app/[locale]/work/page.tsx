'use client';

import { Box, Container, useColorModeValue } from '@chakra-ui/react';

const WorkPage = () => {
  const containerBg = useColorModeValue('light.background', 'dark.background');
  const textColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Container maxW='container.xl'>
      <Box bg={containerBg} color={textColor}>
        WorkPage
      </Box>
    </Container>
  );
};
export default WorkPage;
