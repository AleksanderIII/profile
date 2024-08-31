import { certificates } from '@/app/components/Sections/Home/Courses/constants';

import { format } from 'date-fns';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './page.module.css';
import { unstable_setRequestLocale } from 'next-intl/server';

const CoursesPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('Courses');

  return (
    <div>
      <div>
        <div className={styles.cardsGrid}>
          {certificates.map((certificate) => (
            <div key={certificate.id} className={styles.card}>
              <Image
                alt={certificate.title}
                src={certificate.image}
                layout='responsive'
                width={300}
                height={200}
                className={styles.cardImage}
              />
              <div
                style={{
                  height: 'calc(100% - 200px)',
                  border: 'none',
                  boxShadow: 'none',
                  width: '100%',
                }}
              >
                <div className={styles.cardContent}>
                  <h3>{t(certificate.title)}</h3>
                  <span className={styles.cardSubtitle}>
                    {t('date')}
                    {': '}
                    {format(new Date(certificate.date), 'MMMM d, yyyy')}
                  </span>
                  <span className={styles.cardSubtitle}>
                    {t('instructor')}: {certificate.instructor}
                  </span>
                  <span className={styles.cardSubtitle}>
                    {t('platform')}: {certificate.platform.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CoursesPage;
