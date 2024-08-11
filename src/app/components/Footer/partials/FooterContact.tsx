'use client';

import { Box, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import styles from '../Footer.module.css';

const FooterContact: React.FC = () => {
  const t = useTranslations('Footer');

  return (
    <Box className={styles.mb4}>
      <Text
        className={`${styles.textMedium} ${styles.textBold}`}
        mb={styles.mb6}
      >
        {t('emailTitle')}:
      </Text>
      <Box mb={4}>
        <Text className={styles.textMedium}>
          <a href={`mailto:${t('mail')}`} className={styles.contactDetail}>
            {t('mail')}
          </a>
        </Text>
        <Text className={styles.textMedium}>
          <a href={`mailto:${t('gmail')}`} className={styles.contactDetail}>
            {t('gmail')}
          </a>
        </Text>
      </Box>

      <Text className={`${styles.textMedium} ${styles.textBold}`}>
        {t('phoneTitle')}:
      </Text>
      <Box mb={4}>
        <Text className={styles.textMedium}>{t('phone')}</Text>
      </Box>

      <Text className={`${styles.textMedium} ${styles.textBold}`}>
        {t('addressTitle')}:
      </Text>
      <Box>
        <Text className={styles.textMedium}>{t('address')}</Text>
      </Box>
    </Box>
  );
};

export default FooterContact;
