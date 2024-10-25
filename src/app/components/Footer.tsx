'use client'; // Aseguramos que el footer funcione en el cliente

import { useEffect, useState, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, Transition, MenuItem } from '@headlessui/react'; // Importamos MenuItem en lugar de Menu.Item
import { ChevronDownIcon } from '@heroicons/react/24/outline'; // Icono para el desplegable

const Footer = () => {
  const { t } = useTranslation('common'); // Para traducción de textos
  const [mounted, setMounted] = useState(false); // Estado para verificar si el componente está montado

  useEffect(() => {
    setMounted(true); // Aseguramos que el componente esté montado
  }, []);

  if (!mounted) {
    return null; // Retornamos null mientras el componente no esté montado
  }

  return (
    <footer className="py-16 mt-16 ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Enlaces rápidos */}
        <div className="mb-4 md:mb-0">
          {/* Solo mostrar el menú desplegable en pantallas pequeñas */}
          <div className="md:hidden">
            <Menu as="div" className="relative">
              <Menu.Button className="inline-flex justify-between items-center bg-secondary px-4 py-2 font-medium text-sm rounded-md hover:bg-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
                {t('quick_links')}
                <ChevronDownIcon className="ml-2 h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items
                  className="absolute left-0 mt-2 w-48 origin-top-left divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                  style={{
                    backgroundColor: 'var(--background)',
                    color: 'var(--foreground)',
                  }}
                >
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="/"
                          className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}
                          style={{ backgroundColor: active ? 'var(--primary)' : 'transparent', color: active ? 'var(--foreground)' : 'var(--foreground)' }}
                        >
                          {t('home')}
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="/blog"
                          className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}
                          style={{ backgroundColor: active ? 'var(--primary)' : 'transparent', color: active ? 'var(--foreground)' : 'var(--foreground)' }}
                        >
                          {t('blog')}
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="/projects"
                          className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}
                          style={{ backgroundColor: active ? 'var(--primary)' : 'transparent', color: active ? 'var(--foreground)' : 'var(--foreground)' }}
                        >
                          {t('projects')}
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="/about"
                          className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}
                          style={{ backgroundColor: active ? 'var(--primary)' : 'transparent', color: active ? 'var(--foreground)' : 'var(--foreground)' }}
                        >
                          {t('about')}
                        </a>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <a
                          href="/contact"
                          className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm`}
                          style={{ backgroundColor: active ? 'var(--primary)' : 'transparent', color: active ? 'var(--foreground)' : 'var(--foreground)' }}
                        >
                          {t('contact')}
                        </a>
                      )}
                    </MenuItem>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Enlaces para pantallas grandes */}
          <div className=" flex-col hidden md:block mt-14">
            <h3 className="font-semibold text-lg mb-2 ">{t('quick_links')}</h3>
            <ul className=" grid grid-cols-2 gap-4 justify-center">
             
              <li><a href="/blog" className="hover:text-primary">{t('blog')}</a></li>
              <li><a href="/contact" className="hover:text-primary">{t('contact')}</a></li>
              <li><a href="/projects" className="hover:text-primary">{t('projects')}</a></li>
              <li><a href="/about" className="hover:text-primary">{t('about')}</a></li>
         
              <li><a href="/" className="hover:text-primary text-right">{t('home')}</a></li>
            </ul>
          </div>
        </div>

        {/* Información de contacto */}
        <div className="mb-4 md:mb-0">
          <h3 className="font-semibold text-lg mb-2">{t('contact_info')}</h3>
          <p>Email: <a href="mailto:contact@arvedson.com" className="hover:text-primary">contact@arvedson.com</a></p>
          <p>{t('location')}: México</p>
        </div>

        {/* Redes sociales */}
        <div className="flex space-x-4">
          <a href="https://github.com/Arvedson" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {/* Icono de GitHub SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.302 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.2c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.086-.744.084-.729.084-.729 1.2.084 1.833 1.234 1.833 1.234 1.068 1.83 2.805 1.301 3.492.994.108-.775.417-1.301.76-1.601-2.665-.3-5.467-1.332-5.467-5.931 0-1.309.468-2.381 1.234-3.221-.123-.303-.534-1.521.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.98-.398 3-.404 1.02.006 2.043.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.655.242 2.873.12 3.176.768.84 1.233 1.912 1.233 3.221 0 4.61-2.807 5.628-5.48 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.217.694.825.577 4.765-1.587 8.2-6.084 8.2-11.385 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/arvedson" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
            {/* Icono de LinkedIn SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-6 w-6"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zm-1.78-13c-1.13 0-2.04-.91-2.04-2.04s.91-2.04 2.04-2.04 2.04.91 2.04 2.04-.92 2.04-2.04 2.04zm15.35 13h-3.56v-5.65c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99v5.75H9.6V9h3.42v1.56h.05c.48-.91 1.66-1.87 3.42-1.87 3.66 0 4.34 2.41 4.34 5.53v6.23z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} Tomas Arvedson. {t('all_rights_reserved')}</p>
      </div>
    </footer>
  );
};

export default Footer;
