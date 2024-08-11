'use client';

import { Box, Heading, useColorModeValue } from '@chakra-ui/react';

interface FooterSectionProps {
  title: string;
  children?: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  const backgroundColor = useColorModeValue(
    'light.background',
    'dark.background'
  );
  const textColor = useColorModeValue('light.text', 'dark.text');
  return (
    <Box mb={10} bg={backgroundColor} color={textColor}>
      <Heading as='h3' size='md' mb={5}>
        {title}
      </Heading>
      {children}
    </Box>
  );
};

export default FooterSection;
