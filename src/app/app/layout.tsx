import { useTranslations } from 'next-intl';

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const t = useTranslations('Common');

  return (
    <div className="h-full bg-slate-50">
      <header className="border-b-slate-500 bg-white py-2.5 shadow-sm">
        <div className="container mx-auto">
          <h1 className="text-xl font-extrabold tracking-tight">
            {t('title')}
          </h1>
        </div>
      </header>

      <div className="container mx-auto py-2.5">{children}</div>
    </div>
  );
}
