import { getUserLocale } from '@/services/locale';
import { getRequestConfig } from 'next-intl/server';

export type Locale = (typeof LOCALES)[number];

export const LOCALES = ['es', 'en'] as const;
export const DEFAULT_LOCALE: Locale = 'es';

export default getRequestConfig(async () => {
  let locale = await getUserLocale();

  if (!(LOCALES as unknown as string[]).includes(locale)) {
    locale = DEFAULT_LOCALE;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
