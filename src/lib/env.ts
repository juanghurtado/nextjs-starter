import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const ENV = createEnv({
  server: {
    BETTERSTACK_SOURCE_TOKEN: z.string().optional(),
    CONVEX_SITE_URL: z.string(),
    CLERK_ISSUER_URL: z.string(),
    CLERK_SECRET_KEY: z.string()
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_CONVEX_URL: z.string(),
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string()
  },
  shared: {
    NODE_ENV: z
      .enum(['test', 'development', 'production'])
      .optional()
      .default('development')
  },

  runtimeEnv: {
    // Server
    BETTERSTACK_SOURCE_TOKEN: process.env.BETTERSTACK_SOURCE_TOKEN,
    CONVEX_SITE_URL: process.env.CONVEX_SITE_URL,
    CLERK_ISSUER_URL: process.env.CLERK_ISSUER_URL,
    CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,

    // Client
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY:
      process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,

    // Shared
    NODE_ENV: process.env.NODE_ENV
  }
});
