import { FaGlobe, FaGraduationCap } from 'react-icons/fa';
import { unstable_setRequestLocale } from 'next-intl/server';

import Sidebar from '../components/Sidebar/Sidebar';
import Main from '../components/Sections/Home';

import styles from './page.module.css';
import Image from 'next/image';

const Profile = ({ params: { locale } }: { params: { locale: string } }) => {
  unstable_setRequestLocale(locale);
  return (
    <div className='container'>
      <Main />
    </div>
  );
};

export default Profile;
