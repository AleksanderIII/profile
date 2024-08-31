import styles from './NavItem.module.css';
import Link from 'next/link';

interface NavItemProps {
  item: {
    name: string;
    icon: string;
    link: string;
  };
  isActive: boolean;
  mobileView?: boolean;
}

const NavItem = ({ item, isActive, mobileView = false }: NavItemProps) => {
  return (
    <div className={`${styles.navItem} ${isActive ? styles.active : ''}`}>
      <Link href={item.link}>
        <div className={styles.navLink}>
          <span>{item.name}</span>
        </div>
      </Link>
    </div>
  );
};

export default NavItem;
