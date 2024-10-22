import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import commonEn from '../../public/locales/en/common.json';
import commonEs from '../../public/locales/es/common.json';

// Detectamos el idioma preferido desde localStorage
const savedLanguage = typeof window !== 'undefined' ? localStorage.getItem('language') || 'es' : 'es';

// Cargar las traducciones usando import
export const resources = {
  en: {
    common: commonEn,
  },
  es: {
    common: commonEs,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources, // Traducciones cargadas
    fallbackLng: 'es', // Idioma predeterminado si no se encuentra otro
    lng: savedLanguage, // Idioma inicial basado en localStorage
    interpolation: {
      escapeValue: false, // React ya se encarga de esto
    },
  });

export default i18n;
