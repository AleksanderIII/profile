import { Box, Flex, Text } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import AnimatedPaper from '@/app/components/AnimatedPaper/AnimatedPaper';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { HiLocationMarker } from 'react-icons/hi';

import styles from './Contacts.module.css';

const contactData = {
  location: 'Minsk, Belarus',
  phone: '+375298212056',
  emails: ['alex-llewton@mail.ru', 'alexllewton1991@gmail.com'],
};

const Contacts = () => {
  const t = useTranslations('Contact');

  return (
    <AnimatedPaper
      delay={0.1}
      title={t('title').toLocaleUpperCase()}
      className={styles.contactPaper}
    >
      <Box className={styles.contactsWrapper}>
        <Box className={styles.infoBlock}>
          <Flex align='center' mb={2}>
            <HiLocationMarker className={styles.icon} />
            <Text className={styles.infoLabel}>{t('location')}</Text>
          </Flex>
          <Text className={styles.infoText}>{contactData.location}</Text>
        </Box>

        <Box className={styles.infoBlock}>
          <Flex align='center' mb={2}>
            <PhoneIcon className={styles.icon} />
            <Text className={styles.infoLabel}>{t('phone')}</Text>
          </Flex>
          <Text className={styles.infoText}>{contactData.phone}</Text>
        </Box>

        <Box className={styles.infoBlock}>
          <Flex align='center' mb={2}>
            <EmailIcon className={styles.icon} />
            <Text className={styles.infoLabel}>{t('emails')}</Text>
          </Flex>
          {contactData.emails.map((email, index) => (
            <Text key={index} className={styles.infoText}>
              {email}
            </Text>
          ))}
        </Box>
      </Box>
    </AnimatedPaper>
  );
};

export default Contacts;
