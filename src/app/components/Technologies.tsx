'use client'; 

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'; 
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiPython, SiMongodb, SiPostgresql, SiPrisma, SiCss3, SiFigma } from 'react-icons/si'; // Añadimos SiFigma

const Technologies = () => {
    const { t } = useTranslation('common');
    const [mounted, setMounted] = useState(false);
    const [selectedTech, setSelectedTech] = useState<string | null>(null); // Estado para la tecnología seleccionada

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

    const technologies = [
      { name: 'React', icon: <FaReact className="text-blue-500" />, description: t('react_description') },
      { name: 'Next.js', icon: <SiNextdotjs style={{ color: 'var(--foreground)' }} />, description: t('nextjs_description') },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, description: t('nodejs_description') },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" />, description: t('tailwindcss_description') },
      { name: 'GitHub', icon: <FaGithub style={{ color: 'var(--foreground)' }} />, description: t('github_description') },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, description: t('javascript_description') },
      { name: 'Python', icon: <SiPython className="text-blue-600" />, description: t('python_description') },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" />, description: t('mongodb_description') },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" />, description: t('postgresql_description') },
      { name: 'Prisma', icon: <SiPrisma style={{ color: 'var(--foreground)' }} />, description: t('prisma_description') },
      { name: 'CSS3', icon: <SiCss3 className="text-blue-500" />, description: t('css_description') },
      { name: 'Figma', icon: <SiFigma className="text-pink-600" />, description: t('figma_description') }, // Añadimos Figma
    ];

    const handleIconClick = (techName: string) => {
      setSelectedTech(techName === selectedTech ? null : techName); // Alterna el estado de la tecnología seleccionada
    };

    return (
      <div className="container px-4 lg:px-12 py-8 lg:py-16">
        <h3 className="text-lg lg:text-2xl font-inter pb-8 mb-8 text-center lg:text-left lg:px-7">{t('tecnologies')}</h3>
        
        {/* Grid responsivo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-12">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center hover:scale-110 transition-transform cursor-pointer 
              ${selectedTech === tech.name ? 'selected-tech' : ''}`} // Clase condicional para el seleccionado
              onClick={() => handleIconClick(tech.name)}
            >
              <div className="text-5xl mb-2">{tech.icon}</div>
              <p className="text-sm font-medium">{tech.name}</p>

              {/* Mostrar descripción solo si esta tecnología está seleccionada */}
              {selectedTech === tech.name && (
                <div 
                  className="mt-4 p-4 rounded shadow-lg text-center description-box"
                  style={{
                    backgroundColor: 'var(--background)', 
                    color: 'var(--foreground)',
                    border: '1px solid var(--foreground)' // Añade un borde para destacar
                  }}
                >
                  <p className="text-xs">{tech.description}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
};

export default Technologies;
