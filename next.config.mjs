import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/lib/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,

  eslint: {
    dirs: ['.']
  },

  experimental: {
    typedRoutes: true,

    serverComponentsExternalPackages: ['pino', 'pino-pretty']
  }
};

export default withNextIntl(nextConfig);
