'use client'; 

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { FaReact, FaNodeJs, FaGithub } from 'react-icons/fa'; 
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiPython, SiMongodb, SiPostgresql, SiPrisma } from 'react-icons/si'; 

const Technologies = () => {

    const { t } = useTranslation('common');
    const [mounted, setMounted] = useState(false);
  
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
    { name: 'React', icon: <FaReact className="text-blue-500" /> },
    { name: 'Next.js', icon: <SiNextdotjs style={{ color: 'var(--foreground)' }} /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-blue-400" /> },
    { name: 'GitHub', icon: <FaGithub style={{ color: 'var(--foreground)' }} /> },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" /> },
    { name: 'Python', icon: <SiPython className="text-blue-600" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-600" /> },
    { name: 'Prisma', icon: <SiPrisma style={{ color: 'var(--foreground)' }} /> },

  ];

  return (
    <div className="container  py-20">
      <h2 className="text-2xl font-bold mb-4 text-center pb-10">{t('tecnologies')}</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {technologies.map((tech, index) => (
          <div key={index} className="flex flex-col items-center hover:scale-110 transition-transform">
            <div className="text-6xl mb-2">{tech.icon}</div>
            <p className="text-sm font-medium">{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
