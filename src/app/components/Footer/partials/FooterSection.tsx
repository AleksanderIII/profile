'use client';

import { Box, Heading, Text } from '@chakra-ui/react';

interface FooterSectionProps {
  title: string;
  children?: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <Box mb={20} p={20}>
      <Heading as='h3' size='md' mb={10}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default FooterSection;
