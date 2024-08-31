import React from 'react';
import { useTranslations } from 'next-intl';

import Button from '../ui/Button/Button';

import Intro from './partials/Intro/Intro';
import Languages from './partials/Languages/Languages';
import Skills from './partials/Skills/Skills';
import SidebarSection from './partials/SidebarSection/SidebarSection';

import styles from './Sidebar.module.css';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  const languageTranslations = useTranslations('Languages');
  const skillsTranslations = useTranslations('Skills');
  const commonTranslations = useTranslations('common');

  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarContent}>
        <Button className={styles.closeButton}>
          {commonTranslations('close')}
        </Button>
        <SidebarSection>
          <Intro />
        </SidebarSection>
        <SidebarSection title={languageTranslations('title')}>
          <Languages />
        </SidebarSection>
        <SidebarSection title={skillsTranslations('title')} link='/skills'>
          <Skills />
        </SidebarSection>
      </div>
    </div>
  );
};

export default Sidebar;
