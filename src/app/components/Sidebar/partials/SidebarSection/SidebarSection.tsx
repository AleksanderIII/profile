'use client';

import { Box, Divider, Heading, useColorModeValue } from '@chakra-ui/react';
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
  const dividerColor = useColorModeValue('light.divider', 'dark.divider');

  return (
    <Box px={8}>
      {link ? (
        <Link href={link}>
          <Heading as='h2' size='md' mb={8}>
            {title?.toUpperCase()}
          </Heading>
        </Link>
      ) : (
        <Heading as='h2' size='md' mb={8}>
          {title}
        </Heading>
      )}
      {children}
      <Divider my={10} color={dividerColor} style={{ border: '1px solid' }} />
    </Box>
  );
};

export default SidebarSection;
