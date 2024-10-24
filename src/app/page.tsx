'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Technologies from './components/Technologies';
import Image from 'next/image'; // Importar el componente Image de Next.js

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
<div className="flex flex-col justify-center items-center min-h-screen">
  <div className="container mx-auto py-12 lg:py-16 px-4 lg:px-20 md:px-8 flex flex-col lg:flex-row items-center justify-between">
    {/* Texto */}
    <div className="text-center lg:text-left lg:w-2/3 mb-8 lg:mb-0 lg:pr-8">
      <h1 className="text-4xl font-bold mb-4 leading-tight sm:text-5xl lg:text-6xl font-poppins text-gradient shadow-text">
        {t('home')}
      </h1>
      <p className="text-lg mb-4 sm:text-xl lg:text-2xl font-inter">
        {t('home_intro')}
      </p>

      <h1 className="text-lg mb-8 lg:text-2xl font-inter">{t('another_section')}</h1>
    </div>

    {/* Imagen en el lado derecho */}
    <div className="lg:w-1/3 flex justify-center lg:justify-end">
      <Image
        src="/pp.jpeg" 
        alt="Your Name"
        width={200} 
        height={200}
        className="rounded-full shadow-lg" 
        style={{
          border: '4px solid var(--foreground)', 
          aspectRatio: '1 / 1.5',
        }}
      />
    </div>
  </div>

  {/* Technologies */}
  <Technologies />
</div>

  );
}
