import Image from 'next/image';
import { unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

import styles from './page.module.css';

const EducationPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  const translation = useTranslations('Education');
  const keys = ['university', 'magistracy', 'school'] as const;

  return (
    <div className={styles.container}>
      <div>
        <div>
          {keys.map((educationKey) => (
            <div key={educationKey} className={styles.item}>
              <Image
                src={`/education/${translation(`${educationKey}.logo`)}`}
                alt={`${translation(`${educationKey}.name`)} logo`}
                className={styles.logo}
                width={50}
                height={50}
              />
              <div>
                <h3>{translation(`${educationKey}.name`)}</h3>
                <span>
                  {`${translation(`${educationKey}.degree`)} (${translation(
                    `${educationKey}.year`
                  )})`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EducationPage;
