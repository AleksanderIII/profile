import React from 'react';
import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
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
  const backgroundColor = useColorModeValue(
    'light.background',
    'dark.background'
  );
  const textColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Box
      className={className}
      style={{ transitionDelay: `${delay}s` }}
      p={4}
      m={4}
      borderRadius='md'
      boxShadow='md'
      bg={backgroundColor}
      color={textColor}
    >
      {link ? (
        <Link href={link}>
          <Heading as='h2' size='md' mb={4}>
            {title}
          </Heading>
        </Link>
      ) : (
        <Heading as='h2' size='md' mb={4}>
          {title}
        </Heading>
      )}
      {children}
    </Box>
  );
};

export default AnimatedPaper;
