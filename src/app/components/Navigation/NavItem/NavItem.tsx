import { Box, Flex, Text } from '@chakra-ui/react';
import {
  FaHome,
  FaSchool,
  FaBriefcase,
  FaEnvelope,
  FaCertificate,
} from 'react-icons/fa';
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

const iconMap: { [key: string]: JSX.Element } = {
  home: <FaHome />,
  school: <FaSchool />,
  briefcase: <FaBriefcase />,
  envelope: <FaEnvelope />,
  certificate: <FaCertificate />,
};

const NavItem = ({ item, isActive, mobileView = false }: NavItemProps) => {
  return (
    <Box
      className={`${styles.navItem} ${isActive ? styles.active : ''}`}
      width='100%'
    >
      <Link href={item.link}>
        <Flex align='center' className={styles.navLink}>
          {iconMap[item.icon]}
          <Text ml={1}>{item.name}</Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default NavItem;
