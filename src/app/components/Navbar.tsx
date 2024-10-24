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

  // Nos aseguramos de que el componente esté montado antes de cambiar el idioma
  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem('language'); // Cargamos el idioma desde localStorage
    if (storedLang) {
      i18next.changeLanguage(storedLang); // Aplicamos el idioma almacenado
    }

    // Cargar el tema desde localStorage
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  }, []);

  // Función para cambiar el idioma y persistirlo en localStorage
  const changeLanguage = (lang: string) => {
    i18next.changeLanguage(lang)
      .then(() => {
        localStorage.setItem('language', lang); // Guardamos el idioma en localStorage
        router.refresh(); // Refrescamos la página para aplicar el cambio
      })
      .catch((error) => {
        console.error('Error al cambiar el idioma:', error);
      });
  };

  // Función para alternar el tema entre claro y oscuro
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Guardamos el tema en localStorage
    document.documentElement.setAttribute('data-theme', newTheme); // Aplicamos el nuevo tema
  };

  if (!mounted) {
    return null; // Aseguramos que el componente esté montado antes de renderizar
  }

  return (
    <nav className="navbar  sticky top-0 bg-navbar-bg opacity-95 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold">MyPortfolio</div>

        {/* Botón hamburguesa para pantallas pequeñas */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white"
          >
            {isOpen ? (
              <XMarkIcon className="h-8 w-8" />
            ) : (
              <Bars3Icon className="h-8 w-8" />
            )}
          </button>
        </div>

        {/* Links para pantallas grandes */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a href="/" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              {t('home')}
            </a>
          </li>
          <li>
            <a href="/blog" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              {t('blog')}
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              {t('projects')}
            </a>
          </li>
          <li>
            <a href="/about" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              {t('about')}
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">
              {t('contact')}
            </a>
          </li>
        </ul>

        {/* Botón para alternar entre temas para pantallas grandes */}
        <button
          onClick={toggleTheme}
          className="text-white ml-4 hidden md:inline-block"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <MoonIcon className="h-6 w-6" />
          ) : (
            <SunIcon className="h-6 w-6" />
          )}
        </button>

        {/* Menú de cambio de idioma para pantallas grandes */}
        <Menu as="div" className="relative inline-block text-left hidden md:inline-block">
          <Menu.Button className="language-button">
            {t('change-language')}
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
            <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1 ">
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
                      className={`${active ? 'bg-gray-100' : ''} block  text-left px-4 py-2 text-sm text-gray-700` }
                    >
                      Español
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>

      {/* Menú móvil (Hamburguesa) */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="space-y-4">
            <li>
              <a href="/" className="block text-white px-3 py-2 rounded-md text-sm font-medium">
                {t('home')}
              </a>
            </li>
            <li>
              <a href="/blog" className="block text-white px-3 py-2 rounded-md text-sm font-medium">
                {t('blog')}
              </a>
            </li>
            <li>
              <a href="/projects" className="block text-white px-3 py-2 rounded-md text-sm font-medium">
                {t('projects')}
              </a>
            </li>
            <li>
              <a href="/about" className="block text-white px-3 py-2 rounded-md text-sm font-medium">
                {t('about')}
              </a>
            </li>
            <li>
              <a href="/contact" className="block text-white px-3 py-2 rounded-md text-sm font-medium">
                {t('contact')}
              </a>
            </li>

            {/* Menú de cambio de idioma para pantallas pequeñas */}
            <li className="mt-4">
              <Menu as="div" className="relative inline-block text-left">
                <Menu.Button className="language-button block w-full text-center">
                  {t('change-language')}
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
                  <Menu.Items className="absolute left-0 mt-2  bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            </li>

            {/* Botón para alternar entre temas para pantallas pequeñas */}
            <li className="mt-2">
              <button
                onClick={toggleTheme}
                className="text-white block w-full text-center"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <MoonIcon className="h-6 w-6 mx-auto" />
                ) : (
                  <SunIcon className="h-6 w-6 mx-auto" />
                )}
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
