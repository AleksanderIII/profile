import Link from 'next/link';

import styles from './AnimatedPaper.module.css';

interface AnimatedPaperProps {
  delay?: number;
  children: React.ReactNode;
  title?: string;
  link?: string;
}

const PaperTitle = ({ link, title }: { link?: string; title?: string }) => {
  if (link) {
    return (
      <Link className={styles.title} href={link}>
        <h2>{title}</h2>
      </Link>
    );
  } else if (title) {
    return <h2 className={styles.title}>{title}</h2>;
  } else {
    return <></>;
  }
};

const AnimatedPaper: React.FC<AnimatedPaperProps> = ({
  delay = 0,
  children,
  link,
  title,
}) => {
  return (
    <div className={styles.paper}>
      <PaperTitle title={title} link={link} />
      {children}
    </div>
  );
};

export default AnimatedPaper;
