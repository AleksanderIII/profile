export interface ISkill {
  id: number;
  name: string;
  rating: number;
  subCategory: string;
}

export interface ISubCategory {
  name: string;
  data: Omit<ISkill, 'subCategory'>[];
}

export interface ISkillsBySubCategories {
  [key: string]: ISubCategory;
}
