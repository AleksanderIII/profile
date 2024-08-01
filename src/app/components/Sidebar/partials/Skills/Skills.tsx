import React, { useState } from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Stack,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { hardSkills, softSkills } from '../../constants';

import styles from './Skills.module.css';

const Skills = () => {
  const t = useTranslations('Skills');

  const [expandedHardSkills, setExpandedHardSkills] = useState(true);
  const [expandedSoftSkills, setExpandedSoftSkills] = useState(true);

  const renderSkillSubCategory = (subCategory) => (
    <AccordionItem key={subCategory.id}>
      <AccordionButton>
        <Box flex='1' textAlign='left'>
          <Text fontWeight='medium'>{subCategory.name.toUpperCase()}</Text>
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel>
        <Stack spacing={4}>
          {subCategory.data.map((skill) => (
            <Box key={skill.name} className={styles.skillItem}>
              <Text>{skill.name}</Text>
              <Box className={styles.skillRating}>
                <Text>{skill.rating}</Text>
              </Box>
            </Box>
          ))}
        </Stack>
      </AccordionPanel>
    </AccordionItem>
  );

  const renderSkillCategory = (category, expanded, setExpanded) => (
    <Accordion
      key={category.id}
      allowToggle
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
    >
      <AccordionItem>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            <Text fontWeight='bold'>{category.name.toUpperCase()}</Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Stack spacing={4}>
            {category.subCategories.map((subCategory) =>
              renderSkillSubCategory(subCategory)
            )}
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );

  return (
    <Box className={styles.skillsContainer}>
      {renderSkillCategory(
        { name: t('hardSkills'), id: 'hardSkills', subCategories: hardSkills },
        expandedHardSkills,
        setExpandedHardSkills
      )}
      {renderSkillCategory(
        { name: t('softSkills'), id: 'softSkills', subCategories: softSkills },
        expandedSoftSkills,
        setExpandedSoftSkills
      )}
    </Box>
  );
};

export default Skills;
