import React from 'react';
import { Box } from '@chakra-ui/react';

interface AnimatedPaperProps {
  delay?: number;
  children: React.ReactNode;
  className?: string;
}

const AnimatedPaper: React.FC<AnimatedPaperProps> = ({
  delay = 0,
  children,
  className,
}) => {
  return (
    <Box
      className={className}
      p={4}
      borderRadius='md'
      boxShadow='md'
      transition={`transform 0.3s ease-in-out ${delay}s`}
      transform='translateY(0)'
      _hover={{ transform: 'translateY(-10px)' }}
    >
      {children}
    </Box>
  );
};

export default AnimatedPaper;
