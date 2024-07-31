'use client';

import { Box, IconButton } from '@chakra-ui/react';
import { socialMedias } from '../constants/socialMediaData';
import {
  FaLinkedin,
  FaTelegramPlane,
  FaFacebook,
  FaGithub,
} from 'react-icons/fa';

const getSocialMediaIcon = (name: string) => {
  switch (name) {
    case 'linkedin':
      return <FaLinkedin />;
    case 'telegram':
      return <FaTelegramPlane />;
    case 'facebook':
      return <FaFacebook />;
    case 'github':
      return <FaGithub />;
    default:
      return null;
  }
};

const FooterSocialMedia: React.FC = () => {
  return (
    <Box display='flex' gap={8}>
      {socialMedias.map((media) => (
        <IconButton
          key={media.name}
          as='a'
          href={media.link}
          aria-label={media.name}
          icon={getSocialMediaIcon(media.name)!}
          variant='ghost'
          colorScheme='teal'
          sx={{ fontSize: '30px' }}
        />
      ))}
    </Box>
  );
};

export default FooterSocialMedia;
