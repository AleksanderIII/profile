'use client';

import { Box, Divider, Heading } from '@chakra-ui/react';
import Link from 'next/link';

interface SidebarSectionProps {
  title?: string;
  children?: React.ReactNode;
  link?: string;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
  link,
}) => {
  return (
    <Box>
      {link ? (
        <Link href={link}>
          <Heading as='h2' size='md' mb={8}>
            {title}
          </Heading>
        </Link>
      ) : (
        <Heading as='h2' size='md' mb={8}>
          {title}
        </Heading>
      )}
      {children}
      <Divider my={20} style={{ border: '1px solid black' }} />
    </Box>
  );
};

export default SidebarSection;
