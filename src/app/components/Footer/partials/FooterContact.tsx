'use client';

import { useTranslations } from 'next-intl';
import styles from '../Footer.module.css';

const FooterContact: React.FC = () => {
  const t = useTranslations('Footer');

  return (
    <div className={styles.mb4}>
      <span className={`${styles.textMedium} ${styles.textBold}`}>
        {t('emailTitle')}:
      </span>
      <div>
        <span className={styles.textMedium}>
          <a href={`mailto:${t('mail')}`} className={styles.contactDetail}>
            {t('mail')}
          </a>
        </span>
        <span className={styles.textMedium}>
          <a href={`mailto:${t('gmail')}`} className={styles.contactDetail}>
            {t('gmail')}
          </a>
        </span>
      </div>

      <span className={`${styles.textMedium} ${styles.textBold}`}>
        {t('phoneTitle')}:
      </span>
      <div>
        <span className={styles.textMedium}>{t('phone')}</span>
      </div>

      <span className={`${styles.textMedium} ${styles.textBold}`}>
        {t('addressTitle')}:
      </span>
      <div>
        <span className={styles.textMedium}>{t('address')}</span>
      </div>
    </div>
  );
};

export default FooterContact;
