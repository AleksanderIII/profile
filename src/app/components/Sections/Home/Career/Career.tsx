import { useTranslations } from 'next-intl';
import { format } from 'date-fns';
import Image from 'next/image';

import { workExperience } from './constants';

import styles from './Career.module.css';
import AnimatedPaper from '@/app/components/ui/AnimatedPaper/AnimatedPaper';

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

const WorkExperience: React.FC = () => {
  const t = useTranslations('WorkExperience');

  const renderContractor = (
    contractor: IPosition,
    isLastContactor: boolean
  ) => (
    <span key={contractor.company}>
      {t(contractor.company)}
      {isLastContactor ? '' : ','}{' '}
    </span>
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
          <p>{`${t(position.position)} at ${t(position.company)}`}</p>
          <p>
            {`${format(position.start, 'MMMM yyyy')} - ${format(
              position.end,
              'MMMM yyyy'
            )}`}
          </p>
          <p>{t(position.location)}</p>
        </div>
      </div>
      {position.contractor && position.contractor.length > 0 && (
        <div className={styles.contractorPositions}>
          <span>{t('contractorPositions').toLocaleUpperCase()}</span>
          {position.contractor.map((item, index) =>
            renderContractor(
              item,
              position.contractor
                ? index === position.contractor?.length - 1
                : true
            )
          )}
        </div>
      )}
    </div>
  );

  return (
    <AnimatedPaper
      title={t('title').toLocaleUpperCase()}
      delay={0.1}
      link='/work'
    >
      <div>
        {Object.entries(workExperience).map(([key, work]) => (
          <div key={key} className={`${styles.listItem} divider`}>
            {renderPosition(work)}
            {work.contactor && work.contactor.length > 0 && (
              <div className={styles.contractorPositions}>
                <span>{t('contractorPositions').toLocaleUpperCase()}: </span>
                {work.contactor.map((contactorWork, index) =>
                  renderContractor(
                    contactorWork,
                    index === work.contactor.length - 1
                  )
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </AnimatedPaper>
  );
};

export default WorkExperience;
