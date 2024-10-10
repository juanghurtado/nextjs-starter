'use client';

import { Button } from '@/components/ui/button';
import { LogInIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations();

  return (
    <div className="h-full flex-col content-center bg-slate-50">
      <div className="container mx-auto flex flex-1 items-center justify-center py-2.5">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">
            {t('Common.title')}
          </h1>

          <p className="mb-5 italic text-gray-500">{t('Home.desc')}</p>

          <p>
            <Button asChild variant="link">
              <Link href="/signin" className="flex gap-2">
                <LogInIcon />
                {t('Home.register')}
              </Link>
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
}
