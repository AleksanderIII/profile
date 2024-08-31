'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import axios from 'axios';

import styles from './page.module.css';
import Button from '@/app/components/ui/Button/Button';
import Input from '@/app/components/ui/Input/Input';
import Label from '@/app/components/ui/Label/Label';
import Textarea from '@/app/components/ui/Textarea/Textarea';

const contactData = {
  location: '6 Yana Checheta, Minsk, Belarus',
  phone: '+375298212056',
  emails: ['alex-llewton@mail.ru', 'alexllewton1991@gmail.com'],
};

const ContactsPage = () => {
  const t = useTranslations('Contact');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await axios.post('/api/sendEmail', { email, message });
      setSubmitted(true);
      /*toast({
        title: t('emailSent'),
        status: 'success',
        duration: 5000,
        isClosable: true,
      });*/
    } catch (error) {
      console.error('Error sending email:', error);
      /* toast({
        title: t('emailError'),
        status: 'error',
        duration: 5000,
        isClosable: true,
      });*/
    }
  };

  return (
    <div>
      <div className={styles.contactsWrapper}>
        <div className={styles.infoSection}>
          <div className={styles.infoBlock}>
            <h3 className={styles.infoLabel}>{t('location')}</h3>
            <span className={styles.infoText}>{contactData.location}</span>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoLabel}>{t('phone')}</h3>
            <span className={styles.infoText}>{contactData.phone}</span>
          </div>

          <div className={styles.infoBlock}>
            <h3 className={styles.infoLabel}>{t('emails')}</h3>
            {contactData.emails.map((email, index) => (
              <span key={index} className={styles.infoText}>
                {email}
              </span>
            ))}
          </div>
        </div>

        <div className={styles.formBlock}>
          <h3 className={styles.formTitle}>{t('sendMessage')}</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div>
              <Label htmlFor='email'>{t('email')}</Label>
              <Input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
            <div>
              <Label htmlFor='message'>{t('message')}</Label>
              <Textarea
                id='message'
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={styles.textarea}
              />
            </div>
            <Button className={styles.submitButton}>
              {submitted ? t('submitted') : t('submit')}
            </Button>
            {submitted && (
              <span className={styles.thankYouMessage}>
                {t('thankYouMessage')}
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactsPage;
