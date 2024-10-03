'use client';

import { useTranslations } from 'next-intl';

export default function ClientComponent() {
  const t = useTranslations('HomePage');

  return <p>{t('client-component')}</p>;
}
