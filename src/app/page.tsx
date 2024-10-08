'use client';

import { Button } from '@/components/ui/button';
import { useLoggedUser } from '@/use-logged-user';
import { useAuthActions } from '@convex-dev/auth/react';
import { useTranslations } from 'next-intl';
import ClientComponent from './ClientComponent';

export default function Home() {
  const t = useTranslations('HomePage');
  const { loggedUser } = useLoggedUser();
  const { signIn } = useAuthActions();

  return (
    <>
      <h1>{t('title')}</h1>

      <ClientComponent />

      {loggedUser && <p>User: {loggedUser.name}</p>}
      {!loggedUser && (
        <p>
          <Button onClick={() => signIn('github', { redirectTo: '/app' })}>
            Sign in with GitHub
          </Button>
        </p>
      )}
    </>
  );
}
