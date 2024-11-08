// pages/Projects.js

'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
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

  const projects = [
    {
      id: 'todo-app',
      title: t('todo_app_title'),
      description: t('todo_app_short_description'),
      imageLight: '/backgroundlight.png', // Imagen para el tema claro
      imageDark: '/backgrounddark.png',   // Imagen para el tema oscuro
      url: '/projects/todo-app'
    },

  ];

  return (
    <div className="container mx-auto px-4 py-8">
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
    </div>
  );
}
