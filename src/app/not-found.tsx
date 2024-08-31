import Link from 'next/link';
import Button from './components/ui/Button/Button';

export default function GlobalNotFound() {
  return (
    <div>
      <div>
        <h1>Page Not Found</h1>
        <Link href='/' passHref>
          <Button>Back to Home</Button>
        </Link>
      </div>
    </div>
  );
}
