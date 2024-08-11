'use client';

import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

const FooterCopyright: React.FC = () => {
  const t = useTranslations('Footer');
  const commonTranslate = useTranslations('common');
  const backgroundColor = useColorModeValue(
    'light.background',
    'dark.background'
  );
  const textColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Box textAlign='center' bg={backgroundColor} color={textColor}>
      <Text fontSize='sm'>
        &copy; {new Date().getFullYear()} {commonTranslate('name')}
        {'. '}
        {t('allRightsReserved')}
      </Text>
    </Box>
  );
};

export default FooterCopyright;
