'use client';

import { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

import styles from './Accordion.module.css';

interface IAccordionProps {
  header: string;
  data: {
    name: string;
    id: string;
    data: { name: string; rating: number }[];
  }[];
}

const getBgColor = (rating: number) => {
  switch (rating) {
    case 5:
      return styles['skill--perfect'];
    case 4:
      return styles['skill--good'];
    case 3:
      return styles['skill--normal'];
    case 2:
      return styles['skill--low'];
    case 1:
      return styles['skill--nothing'];
  }
};

const Accordion = ({ header, data }: IAccordionProps) => {
  const [openCategory, setOpenCategory] = useState<string>('');
  return (
    <div>
      <h4 className={styles.header}>{header}</h4>
      {data.map((category) => (
        <>
          <h5
            className={styles.category}
            key={category.id}
            onClick={() =>
              setOpenCategory((value) => {
                if (value === category.id) {
                  return '';
                } else {
                  return category.id;
                }
              })
            }
          >
            {category.name}
            <span>
              {openCategory === category.id ? (
                <IoIosArrowDown />
              ) : (
                <IoIosArrowForward />
              )}
            </span>
          </h5>
          {openCategory === category.id
            ? category.data.map((skill) => (
                <div
                  className={`${styles.skill} ${getBgColor(skill.rating)}`}
                  key={skill.name}
                >
                  <span>{skill.name}</span>
                  <span>{skill.rating}</span>
                </div>
              ))
            : null}
        </>
      ))}
    </div>
  );
};

export default Accordion;
