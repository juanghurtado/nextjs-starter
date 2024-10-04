import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const ENV = createEnv({
  server: {
    BETTERSTACK_SOURCE_TOKEN: z.string().optional()
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional()
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

    // Client
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,

    // Shared
    NODE_ENV: process.env.NODE_ENV
  }
});
