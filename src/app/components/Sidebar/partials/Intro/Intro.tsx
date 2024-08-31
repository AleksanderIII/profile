import { useTranslations } from 'next-intl';
import { socialMedias } from '../../constants';

import styles from './Intro.module.css';
import SocialMediaIcon from '@/app/components/ui/SocialMediaIcon/SocialMediaIcon';
import Image from 'next/image';

const Intro = () => {
  const t = useTranslations('SideSummary');
  const ICON_SIZE = 30;

  return (
    <div className={styles.introContainer}>
      <Image
        src='/avatar.png'
        alt='Avatar'
        height={150}
        width={140}
        className={`${styles.avatar} avatar`}
      />
      <span className={styles.name}>{t('name')}</span>
      <span className={styles.title}>{t('title')}</span>
      <div className={styles.socialMediaIcons}>
        {socialMedias(ICON_SIZE).map((media) => (
          <SocialMediaIcon key={media.name} {...media} />
        ))}
      </div>
    </div>
  );
};

export default Intro;
