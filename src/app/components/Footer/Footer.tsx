'use client';

import { Box, Container, Grid } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import FooterSection from './partials/FooterSection';
import FooterSocialMedia from './partials/FooterSocialMedia';
import FooterCopyright from './partials/FooterCopyright';
import FooterContact from './partials/FooterContact';
import styles from './Footer.module.css';

interface FooterProps {
  backgroundColor: string;
  textColor: string;
}

const Footer: React.FC<FooterProps> = ({ backgroundColor, textColor }) => {
  const t = useTranslations('Footer');

  return (
    <Box
      as='footer'
      className={`${styles.footer} ${styles[backgroundColor]} ${styles[textColor]}`}
    >
      <Container>
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
