'use client';

import { Box } from '@chakra-ui/react';

import SocialMediaIcon from '../../SocialMediaIcon/SocialMediaIcon';
import { socialMedias } from '../../Sidebar/constants';

const ICON_SIZE = 30;

const FooterSocialMedia: React.FC = () => {
  return (
    <Box display='flex' gap={4}>
      {socialMedias(ICON_SIZE).map((media) => (
        <SocialMediaIcon key={media.name} {...media} />
      ))}
    </Box>
  );
};

export default FooterSocialMedia;
