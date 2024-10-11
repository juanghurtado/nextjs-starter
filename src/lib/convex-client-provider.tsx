'use client';

import { enUS, esES } from '@clerk/localizations';
import { ClerkProvider, useAuth } from '@clerk/nextjs';
import { ConvexReactClient } from 'convex/react';
import { ConvexProviderWithClerk } from 'convex/react-clerk';
import { ReactNode } from 'react';
import { ENV } from './env';

const convex = new ConvexReactClient(ENV.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({
  children,
  locale
}: {
  children: ReactNode;
  locale?: string;
}) {
  return (
    <ClerkProvider
      publishableKey={ENV.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
      localization={locale === 'es' ? esES : enUS}
    >
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
