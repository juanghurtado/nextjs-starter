'use client';

import { Button } from '@/components/ui/button';
import { useLoggedUser } from '@/hooks/use-logged-user';
import { useAuthActions } from '@convex-dev/auth/react';
import { Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'use-intl';

export default function App() {
  const t = useTranslations();
  const router = useRouter();

  const { loggedUser, isLoading } = useLoggedUser();
  const { signOut } = useAuthActions();

  if (isLoading) {
    return <Loader className="size-4 animate-spin" />;
  }

  if (!loggedUser) {
    router.replace('/');

    return null;
  }

  return (
    <p className="flex items-center gap-2.5">
      {t('Dashboard.welcome', { name: loggedUser.name || loggedUser.email })}

      <Button
        onClick={async () => {
          await signOut();
          router.replace('/');
        }}
      >
        {t('Common.logout')}
      </Button>
    </p>
  );
}
