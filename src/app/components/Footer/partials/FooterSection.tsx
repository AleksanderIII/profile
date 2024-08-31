import styles from '../Footer.module.css';

interface FooterSectionProps {
  title: string;
  children?: React.ReactNode;
}

const FooterSection: React.FC<FooterSectionProps> = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default FooterSection;
