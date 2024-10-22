export const i18n = {
    locales: ['en', 'es'], // Idiomas soportados
    defaultLocale: 'en',   // Idioma predeterminado
    localeDetection: true, // Permite a Next.js detectar automáticamente el idioma del usuario
  };
  
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    i18n, // Añadir la configuración de internacionalización
  };
  
  export default nextConfig;
  