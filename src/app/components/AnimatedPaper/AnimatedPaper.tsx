import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import styles from './AnimatedPaper.module.css';
import Link from 'next/link';

interface AnimatedPaperProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
  title?: string;
  link?: string;
}

const AnimatedPaper: React.FC<AnimatedPaperProps> = ({
  delay = 0,
  children,
  link,
  className,
  title,
}) => {
  return (
    <Box
      className={`${styles.paper} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      _hover={{ className: styles.paperHover }}
    >
      {link ? (
        <Link href={link}>
          <Heading as='h2' size='md' mb={20}>
            {title}
          </Heading>
        </Link>
      ) : (
        <Heading as='h2' size='md' mb={20}>
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );
};

export default AnimatedPaper;
