import React from 'react';
import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { socialMedias } from '../../constants';

import styles from './Intro.module.css';
import SocialMediaIcon from '@/app/components/SocialMediaIcon/SocialMediaIcon';

const Intro = () => {
  const t = useTranslations('SideSummary');
  const ICON_SIZE = 30;

  return (
    <Box pt={2} className={styles.introContainer}>
      <Image
        src='/avatar.png'
        alt='Avatar'
        height={150}
        width={140}
        className={`${styles.avatar} avatar`}
      />
      <Text className={styles.name}>{t('name')}</Text>
      <Text className={styles.title}>{t('title')}</Text>
      <Stack direction='row' spacing={8} className={styles.socialMediaIcons}>
        {socialMedias(ICON_SIZE).map((media) => (
          <SocialMediaIcon key={media.name} {...media} />
        ))}
      </Stack>
    </Box>
  );
};

export default Intro;
