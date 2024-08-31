'use client';

import NavItem from './NavItem/NavItem';
import styles from './Navigation.module.css';
import { usePathname } from '@/i18n.config';

interface NavigationItem {
  name: string;
  icon: string;
  link: string;
}

interface NavigationProps {
  items: NavigationItem[];
  mobileView?: boolean;
}

const Navigation = ({ items, mobileView = false }: NavigationProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`${styles.navContainer} ${
        mobileView ? styles.mobileView : ''
      }`}
    >
      {items.map((item) => (
        <NavItem
          key={item.link}
          item={item}
          isActive={pathname === item.link}
          mobileView={mobileView}
        />
      ))}
    </div>
  );
};

export default Navigation;
