import { useTranslations } from 'next-intl';
import AnimatedPaper from '../../../ui/AnimatedPaper/AnimatedPaper';

import styles from './Introduction.module.css';

const Introduction: React.FC = () => {
  const translation = useTranslations('introduction');

  return (
    <AnimatedPaper delay={0.1}>
      <h1>
        {translation.rich('message', {
          name: (chunks) => (
            <strong className={styles.highlight}>{chunks}</strong>
          ),
        })}
      </h1>
    </AnimatedPaper>
  );
};

export default Introduction;
