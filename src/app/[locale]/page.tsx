'use client';

import {
  Box,
  Container,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGlobe, FaGraduationCap } from 'react-icons/fa';

import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Sections/Home';

import styles from './page.module.css';
import Image from 'next/image';

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const sidebarBg = useColorModeValue(
    'light.mainBackground',
    'dark.mainBackground'
  );
  const borderColor = useColorModeValue('light.border', 'dark.border');

  return (
    <Container maxW='container.xl' p={0} className={styles.container}>
      {isOpen ? null : (
        <Box
          className={styles.sidePanel}
          borderColor={borderColor}
          onClick={isOpen ? onClose : onOpen}
        >
          <Image
            className={styles.avatar}
            src='/avatar.png'
            alt='Avatar'
            height={50}
            width={50}
          />
          <FaGraduationCap className='icon' />
          <FaGlobe className='icon' />
        </Box>
      )}

      <Box display='flex' bg={sidebarBg}>
        <Box
          as='aside'
          className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        >
          <Sidebar onClose={onClose} />
        </Box>

        <Box flex='1' className={styles.mainContent}>
          <Main />
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
