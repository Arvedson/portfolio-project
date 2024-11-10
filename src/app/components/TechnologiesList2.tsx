"use client";

import React from "react";
import { useTranslation } from "react-i18next";
import { Technologies } from "../../types/technology";

// Importación de React Icons (Simple Icons)
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiPrisma,
  SiTailwindcss,
  SiFormik,
  SiFramer,
  SiChartdotjs,
} from "react-icons/si";

// Importación de Iconify para los iconos que no están en React Icons
import { Icon } from "@iconify/react";

const icons: { 
    [key: string]: 
      | React.ComponentType<{ size?: number; className?: string }>
      | { icon: string; component: typeof Icon }
  } = {
    "nextjs-icon": SiNextdotjs,
    "react-icon": SiReact,
    "typescript-icon": SiTypescript,
    "prisma-icon": SiPrisma,
    "tailwind-icon": SiTailwindcss,
    "formik-icon": SiFormik,
    "framer-motion-icon": SiFramer,
    "chartjs-icon": SiChartdotjs,
    "shadcn-icon": { icon: "mdi:palette-outline", component: Icon },
    "zod-icon": { icon: "mdi:check-decagram", component: Icon },
    "nextauth-icon": { icon: "mdi:shield-lock", component: Icon },
    "default-icon": { icon: "mdi:account-circle", component: Icon },
    "tesseract-icon": { icon: "mdi:text-recognition", component: Icon }, // Icono para Tesseract,
    "vercel-analytics-icon": { icon: "simple-icons:vercel", component: Icon }, // Icono para Vercel Analytics de Iconify
    "echarts-icon": { icon: "mdi:chart-bar", component: Icon },
    "react-admin-icon": { icon: "mdi:account-cog-outline", component: Icon },
  };
  

const TechnologiesList2 = () => {
  const { t } = useTranslation("common");

  // Obtener el objeto de tecnologías desde los archivos de traducción
  const technologies: Technologies = t("todoapp2.technologies.items", { returnObjects: true }) as Technologies;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {Object.entries(technologies).map(([name, tech]) => {
        const iconEntry = icons[tech.icon] || icons["default-icon"];

        // Determinar si el icono es de React Icons o de Iconify
        const isIconify = typeof iconEntry === "object";

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
    bg-[rgba(255, 255, 255, 0.8)]  /* Fondo blanco con 80% de opacidad */
    dark:bg-[rgba(0, 0, 0, 0)]    /* Fondo negro con 60% de opacidad para el tema oscuro */
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
            <p className="text-[var(--tertiary)]">
              <strong>{t("use")}</strong> {tech.usage}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default TechnologiesList2;
