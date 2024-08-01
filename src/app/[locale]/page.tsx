'use client';

import { Box, Container, Stack, Button, useDisclosure } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import styles from './page.module.css';
import Introduction from '../components/Sections/Introduction/Introduction';
import Education from '../components/Sections/Education/Education';
import WorkExperience from '../components/Sections/WorkExperience/WorkExperience';
import { Courses } from '../components/Sections/Courses/Courses';
import Contacts from '../components/Sections/Contacts/Contacts';
import Sidebar from '../components/Sidebar/Sidebar';

const Profile = () => {
  const t = useTranslations('home');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW='container.xl' p={0} className={styles.container}>
      <Box display='flex'>
        {/* Mobile Menu Button */}
        <Button
          display={{ base: 'block', md: 'none' }}
          position='absolute'
          top={4}
          left={4}
          onClick={isOpen ? onClose : onOpen}
          className={styles.menuButton}
        >
          {isOpen ? 'Close' : 'Menu'}
        </Button>

        <Box
          as='aside'
          className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ''}`}
        >
          <Stack spacing={4} align='center'>
            <Sidebar />
          </Stack>
        </Box>

        <Box flex='1' p={4} className={styles.mainContent}>
          <Introduction />
          <Education />
          <WorkExperience />
          <Courses />
          <Contacts />
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
