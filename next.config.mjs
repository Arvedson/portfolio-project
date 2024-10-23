export const i18n = {
  locales: ['en', 'es'],  // Idiomas soportados
  defaultLocale: 'en',    // Idioma predeterminado
  localeDetection: false, // Cambiamos a 'false' o puedes eliminarlo si no es necesario
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n, // Añadir la configuración de internacionalización
};

export default nextConfig;
