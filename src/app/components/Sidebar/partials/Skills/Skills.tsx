import React from 'react';
import {
  Box,
  Text,
  Stack,
  Flex,
  Divider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { hardSkills, softSkills } from '../../constants';

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill={filled ? 'yellow' : 'gray'}
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' />
  </svg>
);

interface Skill {
  name: string;
  rating: number;
}

interface SubCategory {
  id: string;
  name: string;
  data: Skill[];
}

const SkillItem = ({ skill }: { skill: Skill }) => (
  <Flex align='center' justify='space-between'>
    <Text fontWeight='medium'>{skill.name}</Text>
    <Box display='flex'>
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={skill.rating > index} />
      ))}
    </Box>
  </Flex>
);

const SkillCategory = ({ category }: { category: SubCategory }) => (
  <AccordionItem>
    <AccordionButton>
      <Box flex='1' textAlign='left'>
        <Text fontWeight='bold' fontSize='md'>
          {category.name.toUpperCase()}
        </Text>
      </Box>
      <AccordionIcon />
    </AccordionButton>
    <AccordionPanel pb={4}>
      <Stack spacing={4}>
        {category.data.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </Stack>
    </AccordionPanel>
  </AccordionItem>
);

const SkillsPage = () => {
  return (
    <Box p={4}>
      <Box mb={6}>
        <Text fontWeight='bold' fontSize='lg' mb={4}>
          Hard Skills
        </Text>
        <Accordion allowToggle>
          {hardSkills.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </Accordion>
      </Box>
      <Divider my={6} />
      <Box mb={6}>
        <Text fontWeight='bold' fontSize='lg' mb={4}>
          Soft Skills
        </Text>
        <Accordion allowToggle>
          {softSkills.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}
        </Accordion>
      </Box>
    </Box>
  );
};

export default SkillsPage;
