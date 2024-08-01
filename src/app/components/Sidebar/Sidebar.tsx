import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';

import Intro from './partials/Intro/Intro';
import Languages from './partials/Languages/Languages';
import Skills from './partials/Skills/Skills';
import SidebarSection from './partials/SidebarSection/SidebarSection';

import styles from './Sidebar.module.css';

interface SidebarProps {
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onClose }) => {
  const languageTranslations = useTranslations('Languages');
  const skillsTranslations = useTranslations('Skills');
  return (
    <Box className={styles.sidebarContainer}>
      <Box className={styles.sidebarContent}>
        <Button className={styles.closeButton} onClick={onClose}>
          Close
        </Button>
        <SidebarSection>
          <Intro />
        </SidebarSection>
        <SidebarSection title={languageTranslations('title')}>
          <Languages />
        </SidebarSection>
        <SidebarSection title={skillsTranslations('title')}>
          <Skills />
        </SidebarSection>
      </Box>
    </Box>
  );
};

export default Sidebar;
