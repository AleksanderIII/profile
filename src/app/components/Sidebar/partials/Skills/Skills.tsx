import { Box, Text, Stack, Flex, Divider } from '@chakra-ui/react';

export const hardSkills = [
  {
    name: 'Frontend',
    id: 'Frontend',
    data: [
      { name: 'React', rating: 5 },
      { name: 'Javascript', rating: 5 },
      { name: 'Typescript', rating: 5 },
      { name: 'Angular', rating: 3 },
      { name: 'Next.js', rating: 3 },
    ],
  },
  {
    name: 'Styling',
    id: 'Styling',
    data: [
      { name: 'CSS', rating: 5 },
      { name: 'LESS', rating: 5 },
      { name: 'Tailwind', rating: 3 },
    ],
  },
  {
    name: 'Backend',
    id: 'Backend',
    data: [
      { name: 'Node.js', rating: 4 },
      { name: 'Express.js', rating: 4 },
      { name: 'MongoDB', rating: 3 },
      { name: 'PostgreSQL', rating: 3 },
    ],
  },
  {
    name: 'Other',
    id: 'Other',
    data: [
      { name: 'Redux.js', rating: 5 },
      { name: 'Redux Thunk', rating: 5 },
      { name: 'Unit Testing (Jest)', rating: 4 },
      { name: 'HTML', rating: 5 },
      { name: 'Webpack', rating: 5 },
      { name: 'Clean Coding', rating: 4 },
      { name: 'REST', rating: 5 },
      { name: 'Debugging', rating: 5 },
      { name: 'Gitlab', rating: 5 },
      { name: 'Prettier', rating: 5 },
      { name: 'Highcharts', rating: 5 },
      { name: 'ESLint', rating: 5 },
      { name: 'Date-fns', rating: 4 },
      { name: 'Moment.js', rating: 4 },
      { name: 'PDF.js', rating: 4 },
      { name: 'D3.js', rating: 3 },
      { name: 'GraphQL', rating: 4 },
      { name: 'NgRx', rating: 3 },
      { name: 'Video.js', rating: 3 },
      { name: 'Chart.js', rating: 4 },
      { name: 'jQuery', rating: 1 },
      { name: 'Docker', rating: 1 },
      { name: 'AWS', rating: 1 },
    ],
  },
];

export const softSkills = [
  {
    name: 'Management',
    id: 'Management',
    data: [
      { name: 'Teamwork', rating: 5 },
      { name: 'Business English', rating: 5 },
      { name: 'Scrum', rating: 5 },
      { name: 'Kanban', rating: 5 },
      { name: 'Project Management', rating: 3 },
    ],
  },
  {
    name: 'Personal',
    id: 'Personal',
    data: [
      { name: 'Mentoring', rating: 4 },
      { name: 'Presentation Skills', rating: 4 },
      { name: 'Problem Solving', rating: 4 },
      { name: 'Organization', rating: 5 },
      { name: 'Decision Making', rating: 4 },
    ],
  },
];

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
        <Star key={index} filled={skill.rating > index} />
      ))}
    </Box>
  </Flex>
);

const SkillCategory = ({ category }: { category: SubCategory }) => (
  <Box mb={6}>
    <Text fontWeight='bold' fontSize='xl' mb={4}>
      {category.name.toUpperCase()}
    </Text>
    <Stack spacing={4}>
      {category.data.map((skill) => (
        <SkillItem key={skill.name} skill={skill} />
      ))}
    </Stack>
  </Box>
);

const SkillsPage = () => {
  return (
    <Box p={4}>
      <Box mb={6}>
        <Text fontWeight='bold' fontSize='2xl' mb={4}>
          Hard Skills
        </Text>
        {hardSkills.map((category) => (
          <SkillCategory key={category.id} category={category} />
        ))}
      </Box>
      <Divider my={6} />
      <Box mb={6}>
        <Text fontWeight='bold' fontSize='2xl' mb={4}>
          Soft Skills
        </Text>
        {softSkills.map((category) => (
          <SkillCategory key={category.id} category={category} />
        ))}
      </Box>
    </Box>
  );
};

export default SkillsPage;
