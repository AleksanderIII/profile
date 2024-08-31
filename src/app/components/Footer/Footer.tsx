'use client';

import { useTranslations } from 'next-intl';
import FooterSection from './partials/FooterSection';
import FooterSocialMedia from './partials/FooterSocialMedia';
import FooterCopyright from './partials/FooterCopyright';
import FooterContact from './partials/FooterContact';
import styles from './Footer.module.css';

const Footer = () => {
  const t = useTranslations('Footer');

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles.grid}>
          <FooterSection title={t('aboutMe')}>
            {t('aboutMeDescription')}
          </FooterSection>
          <FooterSection title={t('followMe')}>
            <FooterSocialMedia />
          </FooterSection>
          <FooterSection title={t('contacts')}>
            <FooterContact />
          </FooterSection>
        </div>
        <FooterCopyright />
      </div>
    </footer>
  );
};

export default Footer;
