'use client';

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiCss3 } from 'react-icons/si';
import { Icon } from '@iconify/react';

const icons = {
  'nextjs-icon': SiNextdotjs,
  'react-icon': SiReact,
  'tailwind-icon': SiTailwindcss,
  'typescript-icon': SiTypescript,
  'sendgrid-icon': { icon: 'mdi:email-send', component: Icon },
  'css-icon': SiCss3,
  'default-icon': SiCss3,
};

const PortfolioTechnologiesList: React.FC = () => {
  const { t } = useTranslation('common');

  // Obtiene los datos de tecnologías desde los archivos de traducción
  const technologies = t('portfolio_technologies', { returnObjects: true }) as Record<
    string,
    { icon: string; description: string; usage: string }
  >;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Object.entries(technologies).map(([name, tech]) => {
        const iconEntry = icons[tech.icon as keyof typeof icons] || icons['default-icon'];

        const isIconify = typeof iconEntry === 'object';

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
          : () =>
              React.createElement(iconEntry as React.ComponentType<{ size?: number; className?: string }>, {
                size: 48,
                className: "text-[var(--accent)] transition-transform duration-300 group-hover:scale-110",
              });

        return (
          <div
            key={name}
            className="
               
              p-4
              border
              rounded-lg
              flex
              flex-col
              bg-[rgba(255, 255, 255, 0.8)]  
              dark:bg-[rgba(0, 0, 0, 0.6)]    
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

export default PortfolioTechnologiesList;
