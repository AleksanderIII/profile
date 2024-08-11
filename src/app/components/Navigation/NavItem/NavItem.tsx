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

const NavItem = ({ item, isActive, mobileView = false }: NavItemProps) => {
  return (
    <Box
      mx={1}
      className={`${styles.navItem} ${isActive ? styles.active : ''}`}
      width='100%'
    >
      <Link href={item.link}>
        <Flex align='center' className={styles.navLink}>
          <Text ml={1}>{item.name}</Text>
        </Flex>
      </Link>
    </Box>
  );
};

export default NavItem;
