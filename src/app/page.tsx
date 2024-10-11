'use client';

import { Button } from '@/components/ui/button';
import { Authenticated, Unauthenticated, useConvexAuth } from 'convex/react';
import { LoaderIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Home() {
  const t = useTranslations();
  const router = useRouter();

  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="h-full flex-col content-center">
        <div className="container mx-auto flex flex-1 items-center justify-center py-2.5">
          <div className="flex flex-col items-center gap-2 text-center">
            <LoaderIcon className="size-10 animate-spin text-slate-800" />
          </div>
        </div>
      </div>
    );
  }

  if (!isLoading && isAuthenticated) {
    router.replace('/app');
    return null;
  }

  return (
    <div className="h-full flex-col content-center">
      <div className="container mx-auto flex flex-1 items-center justify-center py-2.5">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">
            {t('Common.title')}
          </h1>

          <p className="mb-5 italic text-gray-500">{t('Home.desc')}</p>

          <Authenticated>
            <Button asChild variant="link">
              <Link href={'/app'}>Go to your panel</Link>
            </Button>
          </Authenticated>
          <Unauthenticated>
            <Button asChild variant="link">
              <Link href={'/signin/'}>Sign in</Link>
            </Button>
          </Unauthenticated>
        </div>
      </div>
    </div>
  );
}
