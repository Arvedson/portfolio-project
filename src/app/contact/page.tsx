'use client'; // Aseguramos que se ejecute en el cliente

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next'; // Usa `react-i18next` en lugar de `next-i18next`
import i18next from 'i18next';
  

export default function Contact() {
  const { t } = useTranslation('common');

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Asegura que el componente se ha montado antes de interactuar con localStorage
    const storedLang = localStorage.getItem('language'); // Cargamos el idioma desde localStorage
    if (storedLang) {
      i18next.changeLanguage(storedLang); // Aplicamos el idioma almacenado
    }
  }, []);



  if (!mounted) {
    return null; // Aseguramos que el componente esté montado antes de renderizar
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{t('contact')}</h1> {/* Traducción del título */}
      <p className="text-lg">
        {t('contact_intro')} {/* Traducción del párrafo */}
      </p>


    </div>
  );
}
