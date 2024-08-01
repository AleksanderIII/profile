'use client';

import { Box, Divider, Heading } from '@chakra-ui/react';

interface SidebarSectionProps {
  title?: string;
  children?: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <Box>
      <Heading as='h2' size='md' mb={8}>
        {title}
      </Heading>
      {children}
      <Divider my={20} style={{ border: '1px solid black' }} />
    </Box>
  );
};

export default SidebarSection;
