'use client';

import { Box, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

const FooterCopyright: React.FC = () => {
  const t = useTranslations('Footer');
  const commonTranslate = useTranslations('common');

  return (
    <Box textAlign='center' mt={4}>
      <Text fontSize='sm'>
        &copy; {new Date().getFullYear()} {commonTranslate('name')}
        {'. '}
        {t('allRightsReserved')}
      </Text>
    </Box>
  );
};

export default FooterCopyright;
