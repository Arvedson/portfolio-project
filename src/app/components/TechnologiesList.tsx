"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Technologies } from '../../types/technology'; 

// Importación de React Icons (Simple Icons)
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPrisma,
  SiPostgresql,
  SiGooglecloud,
  SiTailwindcss,
  SiDotenv, 
  SiGithub,
  SiVercel,
  SiGit,
  SiYarn,
  SiCoder
} from 'react-icons/si';

// Importación de Iconify
import { Icon } from '@iconify/react';

// Mapeo de iconos corregido
const icons: { 
  [key: string]: 
    | React.ComponentType<{ size?: number; className?: string }>
    | { icon: string; component: typeof Icon }
} = {
  'nextjs-icon': SiNextdotjs,
  'react-icon': SiReact,
  'typescript-icon': SiTypescript,
  'prisma-icon': SiPrisma,
  'prisma-nextauth-icon': SiPrisma, 
  'postgresql-icon': SiPostgresql,
  'google-cloud-icon': SiGooglecloud,
  'tailwind-icon': SiTailwindcss,
  'env-variables-icon': SiDotenv, 
  'prisma-client-icon': SiPrisma, 
  'github-icon': SiGithub,
  'vercel-icon': SiVercel,
  'git-icon': SiGit,
  'npm-yarn-icon': SiYarn, 
  'default-icon': SiCoder,
  
  // Iconos de Iconify
  'nextauth-icon': { icon: 'mdi:shield-lock', component: Icon },
  'neon-tech-icon': { icon: 'mdi:database', component: Icon },
  'api-routes-icon': { icon: 'mdi:api', component: Icon },
  'image-component-icon': { icon: 'mdi:image', component: Icon },
};

const TechnologiesList: React.FC = () => {
  const { t } = useTranslation('common');

  // Obtener el objeto de tecnologías desde los archivos de traducción
  const technologies: Technologies = t('todoapp.technologies.items', { returnObjects: true }) as Technologies;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(technologies).map(([name, tech]) => {
        const iconEntry = icons[tech.icon] || icons['default-icon'];
        
        // Determinar si el icono es de React Icons o de Iconify
        const isIconify = typeof iconEntry === 'object';

        // Renderizar el icono correspondiente
        const IconComponent = isIconify 
          ? () => (
              <iconEntry.component 
                icon={iconEntry.icon} 
                width={48} 
                height={48} 
                className="text-[var(--accent)] transition-transform duration-300 group-hover:scale-110" 
                aria-label={`${name} icon`} 
              />
            )
          : () => (
              React.createElement(iconEntry as React.ComponentType<{ size?: number; className?: string }>, {
                size: 48,
                className: "text-[var(--accent)] transition-transform duration-300 group-hover:scale-110",
              
              })
            );

        // Depuración: Verificar si el icono está definido
        if (!icons[tech.icon]) {
          console.warn(`Icon "${tech.icon}" for technology "${name}" is not defined. Using default icon.`);
        }

        return (
          <div
            key={name}
            className="
              p-4
              border
              rounded-lg
              flex
              flex-col
              bg-[var(--background)]
              text-[var(--foreground)]
              border-[var(--secondary)]
              hover:border-[var(--primary)]
              transition-colors
              duration-300
              shadow-sm
              hover:shadow-md
              group
            "
          >
            {/* Contenedor del Icono */}
            <div className="mb-4 flex items-center justify-center">
              <IconComponent />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[var(--tertiary)]">{name}</h3>
            <p className="text-[var(--secondary)] mb-1">{tech.description}</p>
            <p className="text-[var(--tertiary)]"><strong>{t('use')}</strong> {tech.usage}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologiesList;
