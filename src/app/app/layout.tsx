'use client';

import { UserButton } from '@clerk/nextjs';
import { Authenticated, AuthLoading } from 'convex/react';
import { LoaderIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations('Common');

  return (
    <>
      <header className="border-b-slate-500 bg-white py-2.5 shadow-sm">
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-extrabold tracking-tight">
              {t('title')}
            </h1>

            <AuthLoading>
              <LoaderIcon className="size-4 animate-spin" />
            </AuthLoading>
            <Authenticated>
              <UserButton />
            </Authenticated>
          </div>
        </div>
      </header>

      <div className="container mx-auto py-2.5">{children}</div>
    </>
  );
}
