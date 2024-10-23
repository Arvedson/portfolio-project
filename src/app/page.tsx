'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Technologies from './components/Technologies';

export default function Home() {
  const { t } = useTranslation('common');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col ">
      <h1 className="text-4xl font-bold mb-4">{t('home')}</h1>
      <p className="text-lg">
        {t('home_intro')}
      </p>
      <Technologies/>
    </div>
  );
}
