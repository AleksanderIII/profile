import Accordion from '@/app/components/ui/Accordion/Accordion';
import { getSkills } from '@/lib/skills';

const SkillsPage = async () => {
  const { hardSkills, softSkills } = await getSkills();
  return (
    <div>
      <Accordion header='Hard Skills' data={hardSkills} />
      <Accordion header='Soft Skills' data={softSkills} />
    </div>
  );
};

export default SkillsPage;
