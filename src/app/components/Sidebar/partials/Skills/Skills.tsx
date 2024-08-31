import Accordion from '@/app/components/ui/Accordion/Accordion';
import { hardSkills, softSkills } from '../../constants';

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill={filled ? 'orange' : 'gray'}
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
  <div>
    <span>{skill.name}</span>
    <div>
      {[...Array(5)].map((_, index) => (
        <Star key={index} filled={skill.rating > index} />
      ))}
    </div>
  </div>
);

const SkillCategory = ({ category }: { category: SubCategory }) => (
  <div>
    <div>
      <div>
        <span>{category.name.toUpperCase()}</span>
      </div>
      <div />
    </div>
    <div>
      <div>
        {category.data.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  </div>
);

const SkillsPage = () => {
  return (
    <div>
      <Accordion header='Hard Skills' data={hardSkills} />
      <Accordion header='Soft Skills' data={softSkills} />
    </div>
  );
};

export default SkillsPage;
