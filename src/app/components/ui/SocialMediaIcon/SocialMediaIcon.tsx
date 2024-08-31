import styles from './SocialMediaIcon.module.css';

interface ISocialMediaProps {
  name: string;
  icon: React.JSX.Element;
  link: string;
  title?: string;
}

const SocialMediaIcon = ({ name, link, icon }: ISocialMediaProps) => {
  return (
    <a key={name} href={link} className={styles.socialLink}>
      {icon}
    </a>
  );
};
export default SocialMediaIcon;
