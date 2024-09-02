import Accordion from '@/app/components/ui/Accordion/Accordion';
import { getSkills } from '@/lib/skills';

const SkillsPage = async () => {
  const { hardSkills, softSkills } = await getSkills();
  return (
    <>
      <Accordion key='hard' header='Hard Skills' data={hardSkills} />
      <Accordion key='soft' header='Soft Skills' data={softSkills} />
    </>
  );
};

export default SkillsPage;
