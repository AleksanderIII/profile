'use client';

import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Textarea,
  useColorModeValue,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import axios from 'axios';

import styles from './page.module.css';

const contactData = {
  location: '6 Yana Checheta, Minsk, Belarus',
  phone: '+375298212056',
  emails: ['alex-llewton@mail.ru', 'alexllewton1991@gmail.com'],
};

const ContactsPage = () => {
  const containerBg = useColorModeValue('light.background', 'dark.background');
  const textColor = useColorModeValue('light.text', 'dark.text');
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
    <Container maxW='container.xl'>
      <Box m={20} p={10} bg={containerBg} color={textColor}>
        <Box className={styles.contactsWrapper}>
          <Box>
            <Box className={styles.infoBlock}>
              <Heading as='h3' size='md' className={styles.infoLabel}>
                {t('location')}
              </Heading>
              <Text className={styles.infoText}>{contactData.location}</Text>
            </Box>

            <Box className={styles.infoBlock}>
              <Heading as='h3' size='md' className={styles.infoLabel}>
                {t('phone')}
              </Heading>
              <Text className={styles.infoText}>{contactData.phone}</Text>
            </Box>

            <Box className={styles.infoBlock}>
              <Heading as='h3' size='md' className={styles.infoLabel}>
                {t('emails')}
              </Heading>
              {contactData.emails.map((email, index) => (
                <Text key={index} className={styles.infoText}>
                  {email}
                </Text>
              ))}
            </Box>
          </Box>

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
        </Box>
      </Box>
    </Container>
  );
};
export default ContactsPage;
