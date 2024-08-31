import { useTranslations } from 'next-intl';
import Image from 'next/image';

import styles from './page.module.css';
import { format } from 'date-fns';
import { unstable_setRequestLocale } from 'next-intl/server';
import { workExperience } from '@/app/components/Sections/Home/Career/constants';

interface IPosition {
  company: string;
  position: string;
  start: Date;
  end: Date;
  location: string;
  logo: string;
  size: { width: number; height: number };
  contractor?: IPosition[];
}

const WorkPage = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  const t = useTranslations('WorkExperience');

  const renderContractor = (contractor: IPosition) => (
    <div key={contractor.company} className={styles.contractor}>
      <Image
        src={contractor.logo}
        alt={`${t(contractor.company)} logo`}
        width={contractor.size.width * 0.5}
        height={contractor.size.height * 0.5}
        className={styles.contractorLogo}
      />
      <div className={styles.contractorText}>
        <span>{`${t(contractor.position)} at ${t(contractor.company)}`}</span>
        <span>
          {`${format(contractor.start, 'MMMM yyyy')} - ${format(
            contractor.end,
            'MMMM yyyy'
          )}`}
        </span>
        <span>{t(contractor.location)}</span>
      </div>
    </div>
  );

  const renderPosition = (position: IPosition) => (
    <div key={position.company} className={`${styles.position}`}>
      <div className={styles.positionContent}>
        <Image
          src={position.logo}
          alt={`${t(position.company)} logo`}
          width={position.size.width * 0.6}
          height={position.size.height * 0.6}
          className={styles.positionLogo}
        />
        <div className={styles.positionText}>
          <span>{`${t(position.position)} at ${t(position.company)}`}</span>
          <span>
            {`${format(position.start, 'MMMM yyyy')} - ${format(
              position.end,
              'MMMM yyyy'
            )}`}
          </span>
          <span>{t(position.location)}</span>
        </div>
      </div>
      {position.contractor && position.contractor.length > 0 && (
        <div className={styles.contractorPositions}>
          <span>{t('contractorPositions').toLocaleUpperCase()}</span>
          {position.contractor.map(renderContractor)}
        </div>
      )}
    </div>
  );
  return (
    <div>
      <div>
        <div>
          {Object.entries(workExperience).map(([key, work]) => (
            <div key={key} className={styles.listItem}>
              {renderPosition(work)}
              {work.contactor && work.contactor.length > 0 && (
                <div className={styles.contractorPositions}>
                  <span>{t('contractorPositions').toLocaleUpperCase()}</span>
                  {work.contactor.map((contactorWork) =>
                    renderContractor(contactorWork)
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WorkPage;
