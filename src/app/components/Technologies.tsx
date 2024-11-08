'use client'; 

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'; 
import { 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript, 
  SiPython, 
  SiMongodb, 
  SiPostgresql, 
  SiPrisma, 
  SiCss3, 
  SiFigma, 
  SiTypescript,
  SiGooglecloud,
  SiVercel
} from 'react-icons/si'; // Añadimos SiGooglecloud y SiVercel

import { Icon } from '@iconify/react'; // Importación de Iconify para NextAuth.js

const Technologies = () => {
    const { t } = useTranslation('common');
    const [mounted, setMounted] = useState(false);
    const [selectedTech, setSelectedTech] = useState<string | null>(null); 
    const [progress, setProgress] = useState(0);

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
      { name: 'React', icon: <FaReact className="text-blue-500" />, description: t('react_description'), level: 90 },
      { name: 'Next.js', icon: <SiNextdotjs style={{ color: 'var(--foreground)' }} />, description: t('nextjs_description'), level: 80 },
      { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, description: t('nodejs_description'), level: 80 },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" />, description: t('tailwindcss_description'), level: 85 },
      { name: 'GitHub', icon: <FaGithub style={{ color: 'var(--foreground)' }} />, description: t('github_description'), level: 90 },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" />, description: t('javascript_description'), level: 85 },
      { name: 'Python', icon: <SiPython className="text-blue-600" />, description: t('python_description'), level: 57 },
      { name: 'MongoDB', icon: <SiMongodb className="text-green-700" />, description: t('mongodb_description'), level: 62 },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" />, description: t('postgresql_description'), level: 75 },
      { name: 'Prisma', icon: <SiPrisma style={{ color: 'var(--foreground)' }} />, description: t('prisma_description'), level: 80 },
      { name: 'CSS3', icon: <SiCss3 className="text-blue-500" />, description: t('css_description'), level: 90 },
      { name: 'Figma', icon: <SiFigma className="text-pink-600" />, description: t('figma_description'), level: 80 },
      { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, description: t('typescript_description'), level: 80 },
      { 
        name: 'Google Cloud', 
        icon: <SiGooglecloud className="text-yellow-500" />, 
        description: t('googlecloud_description'), 
        level: 70 
      },
      { 
        name: 'Vercel', 
        icon: <SiVercel style={{ color: 'var(--foreground)' }} />, 
        description: t('vercel_description'), 
        level: 80 
      },
      { 
        name: 'NextAuth.js', 
        icon: <Icon icon="mdi:shield-lock" width="48" height="48" className="text-purple-500 transition-transform duration-300 group-hover:scale-110" aria-label="NextAuth.js icon" />, 
        description: t('nextauth_description'), 
        level: 75 
      },
      { 
        name: 'Neon Tech', 
        icon: <Icon icon="mdi:database" width="48" height="48" className="text-green-500 transition-transform duration-300 group-hover:scale-110" aria-label="Neon Tech icon" />, 
        description: t('neontech_description'), 
        level: 70 
      }
    ];
    

    const handleIconClick = (techName: string, techLevel: number) => {
      if (selectedTech === techName) {
        setSelectedTech(null); // Deselect the technology
        setProgress(0); // Reseteamos el progreso
      } else {
        setSelectedTech(techName); 
        setProgress(0); // Reseteamos el progreso antes de llenarlo
        setTimeout(() => setProgress(techLevel), 100); // Llenamos la barra con una pequeña demora
      }
    };

    return (
      <div className="container px-4 lg:px-12 py-8  py-0">
      <h3 className="text-lg lg:text-2xl font-inter pb-8 mb-8 lg:mx-1 text-center lg:text-left lg:px-7">{t('tecnologies')}</h3>
      
      {/* Grid responsivo */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-12">
        {technologies.map((tech, index) => (
          <div 
            key={index} 
            className={`flex flex-col items-center hover:scale-110 transition-transform cursor-pointer 
            ${selectedTech === tech.name ? 'selected-tech' : ''}`} 
            onClick={() => handleIconClick(tech.name, tech.level)}
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
                  border: '1px solid var(--foreground)'
                }}
              >
                <p className="text-xs mb-2">{tech.description}</p>
                
                {/* Barra de lvl */}
                <div className="progress-container">
                  <div 
                    className="progress-bar" 
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-xs mt-2">{`${tech.level}% `}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
    );
};

export default Technologies;
