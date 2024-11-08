'use client'; 

import { useEffect, useState, Fragment } from 'react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation';
import i18next from 'i18next';
import { Menu, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'; 

const Navbar = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }

    // Cargar el tema desde localStorage o aplicar 'light' por defecto
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.setAttribute('data-theme', storedTheme);
  }, []);

  // Función para cambiar el idioma y persistirlo en localStorage
  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang)
      .then(() => {
        localStorage.setItem('language', lang); // Guardar idioma en localStorage
        router.refresh(); // Refrescar la página para aplicar el cambio
      })
      .catch((error) => {
        console.error('Error al cambiar el idioma:', error);
      });
  };

  // Función para alternar el tema entre claro y oscuro
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Guardar tema en localStorage
    document.documentElement.setAttribute('data-theme', newTheme); // Aplicar el nuevo tema
  };

  if (!mounted) {
    return null; // Asegurar que el componente esté montado antes de renderizar
  }

  return (
    <nav className="navbar sticky top-0 bg-navbar-bg opacity-95 z-50">
      <div className="flex justify-between items-center px-4 lg:px-12 py-4">
        {/* Logo */}
        <div className="text-lg font-semibold text-white">
          MyPortfolio
        </div>

        {/* Links para pantallas grandes */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-white">
              {t('home')}
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-white">
              {t('blog')}
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-white">
              {t('projects')}
            </a>
          </li>
          <li>
            <a href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-white">
              {t('about')}
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium text-white">
              {t('contact')}
            </a>
          </li>
        </ul>

        {/* Botones de cambio de tema y cambio de idioma  */}
        <div className="flex items-center space-x-4">
          {/* Botón para alternar entre temas */}
          <button
            onClick={toggleTheme}
            className="text-white focus:outline-none h-8 w-8 flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <MoonIcon className="h-6 w-6" />
            ) : (
              <SunIcon className="h-6 w-6" />
            )}
          </button>

          {/* Menú de cambio de idioma */}
          <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="language-button text-white h-8 w-8 flex items-center justify-center px-2 py-1 rounded-md text-sm font-medium hover:bg-gray-700 focus:outline-none">
              {t('language_short')} 
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => changeLanguage('en')}
                        className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm text-gray-700`}
                      >
                        English
                      </button>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => changeLanguage('es')}
                        className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm text-gray-700`}
                      >
                        Español
                      </button>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>

          {/* Botón hamburguesa para pantallas pequeñas */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none h-8 w-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil (Hamburguesa) con animación */}
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-300 transform"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-200 transform"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="md:hidden px-4 pb-4 bg-navbar-bg">
          <ul className="space-y-4">
            <li>
              <a href="/" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                {t('home')}
              </a>
            </li>
            <li>
              <a href="/blog" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                {t('blog')}
              </a>
            </li>
            <li>
              <a href="/projects" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                {t('projects')}
              </a>
            </li>
            <li>
              <a href="/about" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                {t('about')}
              </a>
            </li>
            <li>
              <a href="/contact" className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700">
                {t('contact')}
              </a>
            </li>
          </ul>
        </div>
      </Transition>
    </nav>
  );
};

export default Navbar;
