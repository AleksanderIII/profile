import Link from 'next/link';

import styles from './SidebarSection.module.css';

interface SidebarSectionProps {
  title?: string;
  children?: React.ReactNode;
  link?: string;
}

const SidebarSectionTitle = ({
  title,
  link,
}: {
  title?: string;
  link?: string;
}) => {
  if (link) {
    return (
      <Link className={styles.title} href={link}>
        <h3>{title?.toUpperCase()}</h3>
      </Link>
    );
  } else if (title) {
    return <h3 className={styles.title}>{title?.toUpperCase()}</h3>;
  } else {
    return <></>;
  }
};

const SidebarSection: React.FC<SidebarSectionProps> = ({
  title,
  children,
  link,
}) => {
  return (
    <div className={`${styles.sectionContainer} divider`}>
      <SidebarSectionTitle title={title} link={link} />
      {children}
    </div>
  );
};

export default SidebarSection;
