import {
  ISkill,
  ISkillsBySubCategories,
  ISubCategory,
} from '@/app/models/skills';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getCategorySkills = async (category: string): Promise<ISkill[]> => {
  return await prisma.skill.findMany({
    where: { category },
    select: {
      id: true,
      name: true,
      rating: true,
      subCategory: true,
    },
  });
};

const groupBySubCategory = (skills: ISkill[]): ISkillsBySubCategories => {
  return skills.reduce((acc: ISkillsBySubCategories, skill: ISkill) => {
    const subCategory = skill.subCategory;
    if (!acc[subCategory]) {
      acc[subCategory] = {
        name: subCategory,
        data: [],
      };
    }
    acc[subCategory].data.push({
      id: skill.id,
      name: skill.name,
      rating: skill.rating,
    });
    return acc;
  }, {});
};

export async function getSkills(): Promise<{
  hardSkills: ISubCategory[];
  softSkills: ISubCategory[];
}> {
  const hardSkills = await getCategorySkills('hard');
  const softSkills = await getCategorySkills('soft');

  return {
    hardSkills: Object.values(groupBySubCategory(hardSkills)),
    softSkills: Object.values(groupBySubCategory(softSkills)),
  };
}
