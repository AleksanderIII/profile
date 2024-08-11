'use client';

import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

import styles from './SidebarSection.module.css';

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
    <Box
      style={{ borderColor: dividerColor }}
      className={styles.sectionContainer}
    >
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
    </Box>
  );
};

export default SidebarSection;
