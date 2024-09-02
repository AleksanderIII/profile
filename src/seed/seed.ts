const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const skills: {
  name: string;
  rating: number;
  category: string;
  subCategory: string;
}[] = [
  { name: 'React', rating: 5, category: 'hard', subCategory: 'Frontend' },
  { name: 'Javascript', rating: 5, category: 'hard', subCategory: 'Frontend' },
  { name: 'Typescript', rating: 5, category: 'hard', subCategory: 'Frontend' },
  { name: 'Angular', rating: 3, category: 'hard', subCategory: 'Frontend' },
  { name: 'Next.js', rating: 3, category: 'hard', subCategory: 'Frontend' },
  { name: 'CSS', rating: 5, category: 'hard', subCategory: 'Styling' },
  { name: 'LESS', rating: 5, category: 'hard', subCategory: 'Styling' },
  { name: 'Tailwind', rating: 3, category: 'hard', subCategory: 'Styling' },
  { name: 'Node.js', rating: 4, category: 'hard', subCategory: 'Backend' },
  { name: 'Express.js', rating: 4, category: 'hard', subCategory: 'Backend' },
  { name: 'MongoDB', rating: 3, category: 'hard', subCategory: 'Backend' },
  { name: 'PostgreSQL', rating: 3, category: 'hard', subCategory: 'Backend' },
  { name: 'Redux.js', rating: 5, category: 'hard', subCategory: 'Other' },
  { name: 'Redux Thunk', rating: 5, category: 'hard', subCategory: 'Other' },
  {
    name: 'Unit Testing (Jest)',
    rating: 4,
    category: 'hard',
    subCategory: 'Other',
  },
  { name: 'HTML', rating: 5, category: 'hard', subCategory: 'Other' },
  { name: 'Webpack', rating: 5, category: 'hard', subCategory: 'Other' },
  { name: 'Clean Coding', rating: 4, category: 'hard', subCategory: 'Other' },
  { name: 'REST', rating: 5, category: 'hard', subCategory: 'Other' },
  { name: 'Debugging', rating: 5, category: 'hard', subCategory: 'Other' },
  { name: 'Gitlab', rating: 5, category: 'hard', subCategory: 'Other' },
  { name: 'Prettier', rating: 5, category: 'hard', subCategory: 'Other' },
  { name: 'Highcharts', rating: 5, category: 'hard', subCategory: 'Other' },
  { name: 'ESLint', rating: 5, category: 'hard', subCategory: 'Other' },
  { name: 'Date-fns', rating: 4, category: 'hard', subCategory: 'Other' },
  { name: 'Moment.js', rating: 4, category: 'hard', subCategory: 'Other' },
  { name: 'PDF.js', rating: 4, category: 'hard', subCategory: 'Other' },
  { name: 'D3.js', rating: 3, category: 'hard', subCategory: 'Other' },
  { name: 'GraphQL', rating: 4, category: 'hard', subCategory: 'Other' },
  { name: 'NgRx', rating: 3, category: 'hard', subCategory: 'Other' },
  { name: 'Video.js', rating: 3, category: 'hard', subCategory: 'Other' },
  { name: 'Chart.js', rating: 4, category: 'hard', subCategory: 'Other' },
  { name: 'jQuery', rating: 1, category: 'hard', subCategory: 'Other' },
  { name: 'Docker', rating: 1, category: 'hard', subCategory: 'Other' },
  { name: 'AWS', rating: 1, category: 'hard', subCategory: 'Other' },
  { name: 'Teamwork', rating: 5, category: 'soft', subCategory: 'Management' },
  {
    name: 'Business English',
    rating: 5,
    category: 'soft',
    subCategory: 'Management',
  },
  { name: 'Scrum', rating: 5, category: 'soft', subCategory: 'Management' },
  { name: 'Kanban', rating: 5, category: 'soft', subCategory: 'Management' },
  {
    name: 'Project Management',
    rating: 3,
    category: 'soft',
    subCategory: 'Management',
  },
  { name: 'Mentoring', rating: 4, category: 'soft', subCategory: 'Personal' },
  {
    name: 'Presentation Skills',
    rating: 4,
    category: 'soft',
    subCategory: 'Personal',
  },
  {
    name: 'Problem Solving',
    rating: 4,
    category: 'soft',
    subCategory: 'Personal',
  },
  {
    name: 'Organization',
    rating: 5,
    category: 'soft',
    subCategory: 'Personal',
  },
  {
    name: 'Decision Making',
    rating: 4,
    category: 'soft',
    subCategory: 'Personal',
  },
];

async function main() {
  const deleteResult = await prisma.skill.deleteMany();
  console.log(`Deleted ${deleteResult.count} records from skill table.`);

  for (const skill of skills) {
    const { name } = await prisma.skill.create({
      data: skill,
    });
    console.log(`added ${name}`);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
