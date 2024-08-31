import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { format } from 'date-fns';
import AnimatedPaper from '@/app/components/ui/AnimatedPaper/AnimatedPaper';
import { certificates } from './constants';
import styles from './Courses.module.css';
import Link from 'next/link';
import Button from '@/app/components/ui/Button/Button';

const Courses = () => {
  const t = useTranslations('Courses');

  return (
    <AnimatedPaper
      delay={0.1}
      title={t('title').toLocaleUpperCase()}
      link={'/courses'}
    >
      <div className={styles.cardsGrid}>
        {certificates.slice(0, 2).map((certificate) => (
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
      <Link className={styles.moreLink} href={'/courses'}>
        <Button className={styles.link}>See more by link</Button>
      </Link>
    </AnimatedPaper>
  );
};

export default Courses;
