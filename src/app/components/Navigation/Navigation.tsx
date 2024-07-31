import { Box } from '@chakra-ui/react';
import NavItem from './NavItem';
import NavigationLink from './NavigationLink';
import styles from './Navigation.module.css';

interface NavigationItem {
  name: string;
  icon: string; // Using a string to denote icon names
  link: string;
}

interface NavigationProps {
  items: NavigationItem[];
  activeSection: string;
  onClick: (link: string) => void;
  mobileView?: boolean;
}

const Navigation = ({
  items,
  activeSection,
  onClick,
  mobileView = false,
}: NavigationProps) => {
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
          isActive={activeSection === item.link}
          onClick={() => onClick(item.link)}
          mobileView={mobileView}
        />
      ))}
    </Box>
  );
};

export default Navigation;
