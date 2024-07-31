'use client';

import { Box, Heading, Text } from '@chakra-ui/react';

interface FooterSectionProps {
  title: string;
  children?: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <Box mb={4} p={20}>
      <Heading as='h3' size='md' mb={6}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default FooterSection;
