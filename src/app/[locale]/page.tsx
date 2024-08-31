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
      {/*isOpen ? null : (
        <div className={styles.sidePanel} onClick={isOpen ? onClose : onOpen}>
          <Image
            className={`${styles.avatar} avatar`}
            src='/avatar.png'
            alt='Avatar'
            height={50}
            width={50}
          />
          <FaGraduationCap className='icon' />
          <FaGlobe className='icon' />
        </div>
      )*/}

      <div className={styles.content}>
        <aside className={`${styles.sidebar} ${styles.sidebarOpen}`}>
          <Sidebar />
        </aside>

        <div className={styles.mainContent}>
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Profile;
