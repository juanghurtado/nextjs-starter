import { useTranslations } from 'next-intl';
import ClientComponent from './ClientComponent';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <>
      <h1>{t('title')}</h1>

      <ClientComponent />
    </>
  );
}
