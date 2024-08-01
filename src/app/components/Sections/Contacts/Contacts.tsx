import { useState } from 'react';
import axios from 'axios';
import {
  Box,
  Button,
  Flex,
  Heading,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import AnimatedPaper from '@/app/components/AnimatedPaper/AnimatedPaper';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { HiLocationMarker } from 'react-icons/hi';
import styles from './Contacts.module.css'; // Подключаем CSS Module

const contactData = {
  location: 'Minsk, Belarus',
  phone: '+375298212056',
  emails: ['alex-llewton@mail.ru', 'alexllewton1991@gmail.com'],
};

const Contacts = () => {
  const t = useTranslations('Contact');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('/api/sendEmail', { email, message });
      setSubmitted(true);
      toast({
        title: t('emailSent'),
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('emailError'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <AnimatedPaper
      delay={0.1}
      className={styles.contactPaper} // Используем класс из CSS Module
    >
      <>
        <Heading as='h2' size='lg' mb={6} className={styles.title}>
          {t('title')}
        </Heading>
        <Stack spacing={6} direction={{ base: 'column', md: 'row' }}>
          <Stack spacing={4} flex={1}>
            {/* Блок "Location" */}
            <Box className={styles.infoBlock}>
              <Flex align='center' mb={2}>
                <HiLocationMarker className={styles.icon} />
                <Text className={styles.infoLabel}>{t('location')}</Text>
              </Flex>
              <Text className={styles.infoText}>{contactData.location}</Text>
            </Box>

            {/* Блок "Phone" */}
            <Box className={styles.infoBlock}>
              <Flex align='center' mb={2}>
                <PhoneIcon className={styles.icon} />
                <Text className={styles.infoLabel}>{t('phone')}</Text>
              </Flex>
              <Text className={styles.infoText}>{contactData.phone}</Text>
            </Box>

            {/* Блок "Emails" */}
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
          </Stack>

          <Box className={styles.formBlock}>
            <Heading as='h3' size='md' mb={4} className={styles.formTitle}>
              {t('sendMessage')}
            </Heading>
            <form onSubmit={handleSubmit} className={styles.form}>
              <FormControl mb={4}>
                <FormLabel htmlFor='email'>{t('email')}</FormLabel>
                <Input
                  id='email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor='message'>{t('message')}</FormLabel>
                <Textarea
                  id='message'
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={styles.textarea}
                />
              </FormControl>
              <Button
                type='submit'
                colorScheme='teal'
                isDisabled={submitted}
                className={styles.submitButton}
              >
                {submitted ? t('submitted') : t('submit')}
              </Button>
              {submitted && (
                <Text className={styles.thankYouMessage}>
                  {t('thankYouMessage')}
                </Text>
              )}
            </form>
          </Box>
        </Stack>
      </>
    </AnimatedPaper>
  );
};

export default Contacts;
