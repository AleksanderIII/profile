'use client';

import { Box, Container, useColorModeValue } from '@chakra-ui/react';

const CoursesPage = () => {
  const containerBg = useColorModeValue('light.background', 'dark.background');
  const textColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Container maxW='container.xl'>
      <Box bg={containerBg} color={textColor}>
        Courses
      </Box>
    </Container>
  );
};
export default CoursesPage;
