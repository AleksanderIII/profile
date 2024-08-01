import React from 'react';
import { Box, Heading } from '@chakra-ui/react';
import styles from './AnimatedPaper.module.css';

interface AnimatedPaperProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const AnimatedPaper: React.FC<AnimatedPaperProps> = ({
  delay = 0,
  children,
  className,
  title,
}) => {
  return (
    <Box
      className={`${styles.paper} ${className}`}
      style={{ transitionDelay: `${delay}s` }}
      _hover={{ className: styles.paperHover }}
    >
      <Heading as='h2' size='md' mb={20}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default AnimatedPaper;
