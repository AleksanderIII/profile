import { useTranslations } from 'next-intl';
import AnimatedPaper from '@/app/components/ui/AnimatedPaper/AnimatedPaper';

import styles from './Contacts.module.css';

const contactData = {
  location: 'Minsk, Belarus',
  phone: '+375298212056',
  emails: ['alex-llewton@mail.ru', 'alexllewton1991@gmail.com'],
};

const Contacts = () => {
  const t = useTranslations('Contact');

  return (
    <AnimatedPaper delay={0.1} title={t('title').toLocaleUpperCase()}>
      <div className={styles.contactsWrapper}>
        <div className={styles.infoBlock}>
          <p className={styles.infoLabel}>{t('location')}</p>
          <span className={styles.infoText}>{contactData.location}</span>
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.infoLabel}>{t('phone')}</p>
          <span className={styles.infoText}>{contactData.phone}</span>
        </div>

        <div className={styles.infoBlock}>
          <p className={styles.infoLabel}>{t('emails')}</p>
          {contactData.emails.map((email, index) => (
            <span key={index} className={styles.infoText}>
              {email}
            </span>
          ))}
        </div>
      </div>
    </AnimatedPaper>
  );
};

export default Contacts;
