import { Box, Flex, Text } from '@chakra-ui/react';
import {
  FaHome,
  FaSchool,
  FaBriefcase,
  FaEnvelope,
  FaCertificate,
} from 'react-icons/fa';
import styles from './NavItem.module.css';

interface NavItemProps {
  item: {
    name: string;
    icon: string;
    link: string;
  };
  isActive: boolean;
  onClick: () => void;
  mobileView?: boolean;
}

const iconMap: { [key: string]: JSX.Element } = {
  home: <FaHome />,
  school: <FaSchool />,
  briefcase: <FaBriefcase />,
  envelope: <FaEnvelope />,
  certificate: <FaCertificate />,
};

const NavItem = ({
  item,
  isActive,
  onClick,
  mobileView = false,
}: NavItemProps) => {
  return (
    <Box
      className={`${styles.navItem} ${isActive ? styles.active : ''}`}
      onClick={onClick}
      width='100%'
    >
      <Flex align='center' className={styles.navLink}>
        {iconMap[item.icon]}
        <Text ml={1}>{item.name}</Text>
      </Flex>
    </Box>
  );
};

export default NavItem;
