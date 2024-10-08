'use client';

import { Button } from '@/components/ui/button';
import { useLoggedUser } from '@/use-logged-user';
import { useAuthActions } from '@convex-dev/auth/react';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function App() {
  const { loggedUser, isLoading } = useLoggedUser();
  const { signOut } = useAuthActions();
  const router = useRouter();

  if (isLoading) {
    return <Loader className="size-4 animate-spin" />;
  }

  if (!loggedUser) {
    return null;
  }

  return (
    <>
      <p>
        Welcome {loggedUser.name}!{' '}
        <Button
          onClick={async () => {
            await signOut();
            router.replace('/');
          }}
        >
          Logout
        </Button>
      </p>
    </>
  );
}
