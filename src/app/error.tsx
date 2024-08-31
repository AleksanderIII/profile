'use client';

import { useRouter } from 'next/navigation';
import Button from './components/ui/Button/Button';

const ErrorPage = ({ error }: { error: Error }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <span>Some error</span>
      <span>{error.message}</span>
      <Button onClick={handleGoBack}>Back</Button>
    </div>
  );
};

export default ErrorPage;
