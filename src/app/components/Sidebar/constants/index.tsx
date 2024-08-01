import {
  FaLinkedin,
  FaTelegramPlane,
  FaFacebook,
  FaGithub,
} from 'react-icons/fa';

export const socialMedias = (size: number) => {
  return [
    {
      name: 'linkedin',
      icon: <FaLinkedin size={size} />,
      title: 'linkedin',
      link: 'https://www.linkedin.com/in/alexmatyushik/',
    },
    {
      name: 'telegram',
      icon: <FaTelegramPlane size={size} />,
      link: 'https://t.me/Aleksander_Matyushik',
    },
    {
      name: 'facebook',
      icon: <FaFacebook size={size} />,
      link: 'https://www.facebook.com/alex.llewton',
    },
    {
      name: 'github',
      icon: <FaGithub size={size} />,
      link: 'https://github.com/AleksanderIII',
    },
  ];
};

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
