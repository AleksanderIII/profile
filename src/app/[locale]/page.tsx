'use client';

import { Box, Container, useDisclosure, IconButton } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';

import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Sections/Home';

import styles from './page.module.css';

const Profile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW='container.xl' p={0} className={styles.container}>
      {isOpen ? null : (
        <IconButton
          aria-label='Open Menu'
          icon={<ChevronRightIcon boxSize={30} />}
          onClick={isOpen ? onClose : onOpen}
          className={styles.menuButton}
        />
      )}

      <Box display='flex'>
        <Box
          as='aside'
          className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        >
          <Sidebar onClose={onClose} />
        </Box>

        <Box flex='1' p={4} className={styles.mainContent}>
          <Main />
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
