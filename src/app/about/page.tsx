'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import i18next from 'i18next';
import { FaGuitar, FaGamepad, FaNewspaper, FaBrain } from 'react-icons/fa';

// Define la interfaz AboutContent correctamente
interface AboutContent {
  introduction: {
    name: string;
    profession: string;
    summary: string;
  };
  autobiography: {
    title: string;
    content: string[];
  }[];
  personal_interests: {
    hobbies: string[];
    values: string;
    unique_details: string;
  };
  call_to_action: {
    message: string;
    contact_methods: {
      email: string;
      phone: string;
    };
  };
}

// Define el valor predeterminado de aboutContent como una constante independiente
const defaultAboutContent: AboutContent = {
  introduction: {
    name: '',
    profession: '',
    summary: ''
  },
  autobiography: [
    {
      title: '',
      content: ['']
    }
  ],
  personal_interests: {
    hobbies: [],
    values: '',
    unique_details: ''
  },
  call_to_action: {
    message: '',
    contact_methods: {
      email: '',
      phone: ''
    }
  }
};

export default function About() {
  const { t } = useTranslation('common');
  const [mounted, setMounted] = useState(false);
  const [containerHeight, setContainerHeight] = useState('80vh'); // Estado para el tamaño dinámico del contenedor

  useEffect(() => {
    // Detectar el tema actual
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDarkTheme(theme === 'dark');

    // Ajustar la altura del contenedor según el tamaño de la pantalla
    const adjustContainerHeight = () => {
      const screenHeight = window.innerHeight;
      let calculatedHeight = '63vh';

      if (screenHeight > 1000) {
        calculatedHeight = '90vh';
      } else if (screenHeight < 600) {
        calculatedHeight = '70vh';
      }

      setContainerHeight(calculatedHeight);
    };

    adjustContainerHeight(); // Ajuste inicial
    window.addEventListener('resize', adjustContainerHeight); // Ajuste al cambiar el tamaño de la ventana

    // Limpiar el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', adjustContainerHeight);
  }, []);

  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    setIsDarkTheme(theme === 'dark');

    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute('data-theme');
      setIsDarkTheme(newTheme === 'dark');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  const [isOpen, setIsOpen] = useState({
    introduction: false,
    autobiography: false,
    personal_interests: false,
    call_to_action: false
  });

  const iconMap: { [key: string]: JSX.Element } = {
    "Tocar blues": <FaGuitar />,
    "Playing blues": <FaGuitar />,
    "Video Juegos": <FaGamepad />,
    "Video Games": <FaGamepad />,
    "Noticias": <FaNewspaper />,
    "News": <FaNewspaper />,
    "Aprender": <FaBrain />,
    "Learning": <FaBrain />
  };

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

  const aboutContent: AboutContent = (t('about2', { returnObjects: true }) as AboutContent) || defaultAboutContent;

  const toggleSection = (section: keyof typeof isOpen) => {
    setIsOpen(prevState => ({ ...prevState, [section]: !prevState[section] }));
  };

  return (
    <div className="flex flex-col" style={{ minHeight: containerHeight }}>
      {/* Contenedor principal */}
      <main className="container mx-auto px-4 py-8 flex-1">
        
        {/* Introducción */}
        <div className="container mx-auto px-4 py-6 max-w-screen-lg">
          <button
            className={`w-full text-left text-2xl font-bold py-2 border-b ${
              isDarkTheme ? 'border-white' : 'border-black'
            }`}
            onClick={() => toggleSection('introduction')}
          >
            {t('introduction2')}
          </button>

          <div
            className={`${
              isOpen.introduction ? 'max-h-[1000px]' : 'max-h-0'
            } overflow-hidden transition-all duration-500 ease-in-out`}
          >
            <div className="card-style3 mt-4">
              <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-y-6 md:gap-x-20">
                <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left h-full">
                  <h1 className="text-4xl font-bold mb-1">{aboutContent.introduction.name}</h1>
                  <h2 className="text-2xl mb-1">{aboutContent.introduction.profession}</h2>
                  <p className="text-lg">{aboutContent.introduction.summary}</p>
                </div>
                <div>
                  <Image
                    src="/pp.png"
                    alt="Profile Picture"
                    width={130}
                    height={130}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Autobiografía */}
        <div className="container mx-auto px-4 py-6 max-w-screen-lg">
          <button
            className={`w-full text-left text-2xl font-bold py-2 border-b ${
              isDarkTheme ? 'border-white' : 'border-black'
            }`}
            onClick={() => toggleSection('autobiography')}
          >
            {t('autobiography')}
          </button>

          <div
            className={`transition-all duration-500 ease-in-out ${
              isOpen.autobiography ? 'max-h-[20000px]' : 'max-h-0'
            } overflow-hidden`}
          >
            <div className="card-style3 mt-4">
              {aboutContent.autobiography.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mt-4 mb-4">{section.title}</h3>
                  {section.content.map((paragraph, idx) => (
                    <p key={idx} className="text-lg mb-3">{paragraph}</p>
                  ))}
                </div>
              ))}
              <div className="mt-8 flex justify-center">
                <Image
                  src="/solar.jpeg"
                  alt="Tomas Arvedson"
                  width={1600}
                  height={1600}
                  className="rounded-lg shadow-lg z-10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Intereses Personales */}
        <div className="container mx-auto px-4 py-6 max-w-screen-lg">
          <button
            className={`w-full text-left text-2xl font-bold py-2 border-b ${
              isDarkTheme ? 'border-white' : 'border-black'
            }`}
            onClick={() => toggleSection('personal_interests')}
          >
            {t('personal_interests')}
          </button>

          <div
            className={`transition-all duration-500 ease-in-out ${
              isOpen.personal_interests ? 'max-h-[8000px]' : 'max-h-0'
            } overflow-hidden`}
          >
            <div className="card-style3">
              <p className="text-lg font-semibold">{t('hobbies')}</p>
              <ul className="list-disc list-inside mb-2">
                {aboutContent.personal_interests.hobbies.map((hobby, index) => (
                  <li key={index} className="text-lg flex items-center">
                    <span className="mr-2">{iconMap[hobby] || null}</span>
                    {hobby}
                  </li>
                ))}
              </ul>
              <p className="text-lg font-semibold">{t('values')}</p>
              <p className="text-lg mb-2">{aboutContent.personal_interests.values}</p>
              <p className="text-lg font-semibold">{t('unique_details')}</p>
              <p className="text-lg mb-6">{aboutContent.personal_interests.unique_details}</p>
            </div>
          </div>
        </div>

        {/* Llamado a la Acción */}
        <div className="container mx-auto px-4 py-6 max-w-screen-lg">
          <button
            className={`w-full text-left text-2xl font-bold py-2 border-b ${
              isDarkTheme ? 'border-white' : 'border-black'
            }`}
            onClick={() => toggleSection('call_to_action')}
          >
            {t('get_in_touch')}
          </button>

          <div
            className={`transition-all duration-500 ease-in-out ${
              isOpen.call_to_action ? 'max-h-[8000px]' : 'max-h-0'
            } overflow-hidden`}
          >
            <div className="card-style3">
              <p className="text-lg mb-4">{aboutContent.call_to_action.message}</p>
              <div className="text-lg">
                <p><strong>{t('email')}:</strong> {aboutContent.call_to_action.contact_methods.email}</p>
                <p><strong>{t('phone')}:</strong> {aboutContent.call_to_action.contact_methods.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
