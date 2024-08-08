import React from 'react';
import { Box, Image, Text, Stack } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { socialMedias } from '../../constants';

import styles from './Intro.module.css';

const Intro = () => {
  const t = useTranslations('SideSummary');
  const ICON_SIZE = 30;

  return (
    <Box className={styles.introContainer}>
      <Image
        src='/avatar.png'
        alt='Avatar'
        height={150}
        width={150}
        className={styles.avatar}
      />
      <Text className={styles.name}>{t('name')}</Text>
      <Text className={styles.title}>{t('title')}</Text>
      <Stack direction='row' spacing={8} className={styles.socialMediaIcons}>
        {socialMedias(ICON_SIZE).map((media) => (
          <Box
            key={media.name}
            as='a'
            href={media.link}
            className={styles.socialLink}
          >
            {media.icon}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Intro;
