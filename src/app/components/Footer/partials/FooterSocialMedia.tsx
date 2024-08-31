'use client';

import SocialMediaIcon from '../../ui/SocialMediaIcon/SocialMediaIcon';
import { socialMedias } from '../../Sidebar/constants';

const ICON_SIZE = 30;

const FooterSocialMedia: React.FC = () => {
  return (
    <div>
      {socialMedias(ICON_SIZE).map((media) => (
        <SocialMediaIcon key={media.name} {...media} />
      ))}
    </div>
  );
};

export default FooterSocialMedia;
