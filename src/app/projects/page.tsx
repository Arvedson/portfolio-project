// pages/Projects.js

'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const { t } = useTranslation('common');
  const [mounted, setMounted] = useState(false);
  const [containerHeight, setContainerHeight] = useState('80vh'); // Estado para el tamaño dinámico del contenedor 

  useEffect(() => {
    setMounted(true);
    
    // Ajuste de idioma almacenado
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }

    // Ajustar la altura del contenedor según el tamaño de la pantalla para tener el footer en el lugar esteticamente correcto.
    const adjustContainerHeight = () => {
      const screenHeight = window.innerHeight;
      let calculatedHeight = '65vh';

      if (screenHeight > 1000) {
        calculatedHeight = '95vh';
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

  if (!mounted) {
    return null;
  }

  const projects = [
    {
      id: 'todo-app',
      title: t('todo_app_title'),
      description: t('todo_app_short_description'),
      imageLight: '/backgroundlight.png',
      imageDark: '/backgrounddark.png',
      url: '/projects/todo-app'
    },
    {
      id: 'ququlkan',
      title: t('ququlkan_title'),
      description: t('ququlkan_desc'),
      imageLight: '/ququlkanimage.png',
      imageDark: '/ququlkanimage.png',
      url: '/projects/ququlkan-webapp'
    },
  ];

  return (
    <div className="flex flex-col" style={{ minHeight: containerHeight }}>
      <main className="container mx-auto px-4 py-8 flex-1">
        <h1 className="text-4xl font-bold mb-4">{t('projects')}</h1>
        <p className="text-lg mb-8">{t('projects_intro')}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imageLight={project.imageLight}
              imageDark={project.imageDark}
              url={project.url}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
