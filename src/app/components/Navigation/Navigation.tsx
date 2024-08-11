import { Box } from '@chakra-ui/react';
import NavItem from './NavItem/NavItem';
import styles from './Navigation.module.css';

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
  return (
    <Box
      className={`${styles.navContainer} ${
        mobileView ? styles.mobileView : ''
      }`}
    >
      {items.map((item) => (
        <NavItem
          key={item.link}
          item={item}
          isActive={false}
          mobileView={mobileView}
        />
      ))}
    </Box>
  );
};

export default Navigation;
