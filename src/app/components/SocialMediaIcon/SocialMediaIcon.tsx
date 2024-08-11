import { Box } from '@chakra-ui/react';

import styles from './SocialMediaIcon.module.css';

interface ISocialMediaProps {
  name: string;
  icon: React.JSX.Element;
  link: string;
  title?: string;
}

const SocialMediaIcon = ({ name, link, icon }: ISocialMediaProps) => {
  return (
    <Box key={name} as='a' href={link} className={styles.socialLink}>
      {icon}
    </Box>
  );
};
export default SocialMediaIcon;
