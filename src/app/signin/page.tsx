'use client';

import { GoogleLogo } from '@/components/icons/google-logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Logger } from '@/lib/logger';
import { useAuthActions } from '@convex-dev/auth/react';
import { SiGithub } from '@icons-pack/react-simple-icons';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

export default function LoginPage() {
  const t = useTranslations('Signin');
  const router = useRouter();

  const { signIn } = useAuthActions();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    try {
      setIsSubmitting(true);

      await signIn('password', formData);
      router.replace('/app');
    } catch (error) {
      Logger.error({
        context: '/signin',
        message: 'Failed to sign in',
        error: error as Error
      });

      toast.error(t('error'), {
        important: true,
        richColors: true
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleLogin = () => {
    setIsSubmitting(true);
    signIn('google');
  };

  const handleGithubLogin = () => {
    setIsSubmitting(true);
    signIn('github');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-2">
      <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-md md:p-8">
        <h1 className="mb-6 text-center text-2xl font-bold">{t('title')}</h1>

        <p className="text-center text-sm text-gray-600">
          {t('no-account')}{' '}
          <Link className="font-bold underline hover:text-black" href="/signup">
            {t('register')}
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input id="flow" name="flow" type="hidden" value="signIn" />

          <div className="space-y-2">
            <Label htmlFor="email">{t('email')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('email-placeholder')}
              required
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">{t('password')}</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder={t('password-placeholder')}
              required
              minLength={3}
              autoComplete="password"
            />
          </div>

          <Button type="submit" className="w-full">
            {t('login')}
          </Button>
        </form>

        <Separator className="my-8" />

        <div className="space-y-4">
          <Button
            variant="outline"
            className="flex w-full items-center justify-center space-x-2"
            onClick={handleGoogleLogin}
            disabled={isSubmitting}
          >
            <GoogleLogo className="h-6 w-6" />
            <span>{t('signin-google')}</span>
          </Button>

          <Button
            variant="outline"
            className="flex w-full items-center justify-center space-x-2"
            onClick={handleGithubLogin}
            disabled={isSubmitting}
          >
            <SiGithub />
            <span>{t('signin-github')}</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
