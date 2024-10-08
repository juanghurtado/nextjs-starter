import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const ENV = createEnv({
  server: {
    BETTERSTACK_SOURCE_TOKEN: z.string().optional(),
    CONVEX_SITE_URL: z.string()
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
    NEXT_PUBLIC_CONVEX_URL: z.string()
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

    // Client
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_CONVEX_URL: process.env.NEXT_PUBLIC_CONVEX_URL,

    // Shared
    NODE_ENV: process.env.NODE_ENV
  }
});
