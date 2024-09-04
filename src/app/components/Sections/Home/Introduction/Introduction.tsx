import { useTranslations } from 'next-intl';

import styles from './Introduction.module.css';
import Image from 'next/image';
import Button from '@/app/components/ui/Button/Button';
import SocialMediaIcon from '@/app/components/ui/SocialMediaIcon/SocialMediaIcon';
import { socialMedias } from '@/app/components/Sidebar/constants';

const ICON_SIZE = 30;

const Introduction: React.FC = () => {
  const translation = useTranslations('introduction');

  return (
    <section className={styles.section}>
      <div className={styles.left}>
        <h1 className={styles.heading}>
          {translation.rich('me', {
            name: (chunks) => (
              <strong className={styles.highlight}>{chunks}</strong>
            ),
          })}
        </h1>
        <p className={styles.text}>{translation('specialization')}</p>
        <Button>Contact me</Button>
      </div>
      <div className={styles.right}>
        <div className={styles.avatarWrapper}>
          <Image
            src='/avatar-bw.png'
            alt='Avatar'
            height={350}
            width={350}
            className={`${styles.avatar} avatar`}
          />
        </div>
        <div className={styles.socialMediaIcons}>
          <hr className={styles.divider} />
          {socialMedias(ICON_SIZE).map((media) => (
            <SocialMediaIcon key={media.name} {...media} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Introduction;
