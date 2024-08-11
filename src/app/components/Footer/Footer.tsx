'use client';

import {
  Box,
  Container,
  Grid,
  useColorModeValue,
  useTheme,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import FooterSection from './partials/FooterSection';
import FooterSocialMedia from './partials/FooterSocialMedia';
import FooterCopyright from './partials/FooterCopyright';
import FooterContact from './partials/FooterContact';
import styles from './Footer.module.css';

const Footer = () => {
  const t = useTranslations('Footer');
  const backgroundColor = useColorModeValue(
    'light.background',
    'dark.background'
  );
  const textColor = useColorModeValue('light.text', 'dark.text');

  return (
    <Box
      as='footer'
      className={styles.footer}
      bg={backgroundColor}
      color={textColor}
    >
      <Container
        maxW={{ base: 'container.md', lg: 'container.lg', xl: 'container.xl' }}
      >
        <Grid className={styles.grid}>
          <FooterSection title={t('aboutMe')}>
            {t('aboutMeDescription')}
          </FooterSection>
          <FooterSection title={t('followMe')}>
            <FooterSocialMedia />
          </FooterSection>
          <FooterSection title={t('contacts')}>
            <FooterContact />
          </FooterSection>
        </Grid>
        <FooterCopyright />
      </Container>
    </Box>
  );
};

export default Footer;
