import { useTranslations } from 'next-intl';

import styles from '../Footer.module.css';

const FooterCopyright: React.FC = () => {
  const t = useTranslations('Footer');
  const commonTranslate = useTranslations('common');

  return (
    <div className={styles.copyright}>
      <span>
        &copy; {new Date().getFullYear()} {commonTranslate('name')}
        {'. '}
        {t('allRightsReserved')}
      </span>
    </div>
  );
};

export default FooterCopyright;
