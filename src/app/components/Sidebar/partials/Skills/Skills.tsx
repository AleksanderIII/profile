'use client';

import React from 'react';
import {
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Stack,
  Divider,
  Flex,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { hardSkills, softSkills } from '../../constants';

// Компонент для отображения одного навыка
const SkillItem = ({ skill }) => (
  <Flex
    align='center'
    justify='space-between'
    py={2}
    px={4}
    borderBottomWidth='1px'
    borderColor='gray.200'
  >
    <Text fontWeight='medium'>{skill.name}</Text>
    <Box>
      {[...Array(5)].map((_, index) => (
        <StarIcon
          key={index}
          color={skill.rating > index ? 'yellow.400' : 'gray.300'}
        />
      ))}
    </Box>
  </Flex>
);

// Компонент для отображения подкатегории
const SkillSubCategory = ({ subCategory }) => (
  <AccordionItem key={subCategory.id} border='none' mb={4}>
    {({ isExpanded }) => (
      <>
        <AccordionButton
          _expanded={{ bg: 'gray.100', borderColor: 'gray.200' }}
          p={4}
          borderRadius='md'
          _hover={{ bg: 'gray.50' }}
        >
          <Box flex='1' textAlign='left'>
            <Text fontWeight='medium' fontSize='lg'>
              {subCategory.name.toUpperCase()}
            </Text>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel
          p={4}
          borderTopWidth='1px'
          borderColor='gray.200'
          display={isExpanded ? 'block' : 'none'}
        >
          <Stack spacing={4}>
            {subCategory.data.map((skill) => (
              <SkillItem key={skill.name} skill={skill} />
            ))}
          </Stack>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>
);

// Компонент для отображения категории
const SkillCategory = ({ category }) => (
  <Accordion
    key={category.id}
    allowToggle
    borderRadius='md'
    overflow='hidden'
    mb={4}
  >
    <AccordionItem border='none'>
      {({ isExpanded }) => (
        <>
          <AccordionButton
            _expanded={{ bg: 'gray.100' }}
            p={4}
            borderRadius='md'
            _hover={{ bg: 'gray.50' }}
          >
            <Box flex='1' textAlign='left'>
              <Text fontWeight='bold' fontSize='xl'>
                {category.name.toUpperCase()}
              </Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel p={0}>
            <Stack spacing={0}>
              {category.subCategories.map((subCategory) => (
                <SkillSubCategory
                  key={subCategory.id}
                  subCategory={subCategory}
                />
              ))}
            </Stack>
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  </Accordion>
);

// Основной компонент
const Skills = () => (
  <Box
    p={4}
    borderWidth='1px'
    borderRadius='md'
    borderColor='gray.200'
    boxShadow='md'
    mb={4}
  >
    <Flex align='center' mb={4}>
      <Text fontSize='2xl' fontWeight='bold'>
        Skills
      </Text>
    </Flex>
    <Divider mb={4} />
    <SkillCategory
      category={{
        name: 'Hard Skills',
        id: 'hardSkills',
        subCategories: hardSkills,
      }}
    />
    <SkillCategory
      category={{
        name: 'Soft Skills',
        id: 'softSkills',
        subCategories: softSkills,
      }}
    />
  </Box>
);

export default Skills;
