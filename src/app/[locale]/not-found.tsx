import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Button from '../components/ui/Button/Button';

export default function NotFound() {
  const t = useTranslations('notFound');

  return (
    <div>
      <div>
        <h1>{t('title')}</h1>
        <span>{t('description')}</span>
        <Link href='/' passHref>
          <Button>{t('backToHome')}</Button>
        </Link>
      </div>
    </div>
  );
}
