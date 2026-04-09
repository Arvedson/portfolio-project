"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react"; // Optional: to render real icons if mapped
import Image from "next/image";
import { SiPython, SiAmazon } from "react-icons/si";

interface Technology {
  icon: string;
  description: string;
  usage: string;
}

interface Challenge {
  problem: string;
  solution: string;
}

export default function BarTerrainProjectPage() {
  const { t } = useTranslation("common");
  // Extracción profunda del JSON
  const tvLossSnippet = t("bar_terrain_wgan.snippets.tv_loss", { defaultValue: "" });
  const technologiesObject = t("bar_terrain_wgan.technologies", { returnObjects: true }) as Record<string, Technology>;
  const keyFeaturesItems = t("bar_terrain_wgan.caracteristicas_clave.items", { returnObjects: true }) as string[];
  const challengesItems = t("bar_terrain_wgan.desafios_y_soluciones.challenges", { returnObjects: true }) as Challenge[];
  const galleryData = [
    { id: "0000", xRay: "/generated_0000_preview.png", render: "/generated_0000.png" },
    { id: "0001", xRay: "/generated_0001_preview.png", render: "/generated_0001.png" },
    { id: "0002", xRay: "/generated_0002_preview.png", render: "/generated_0002.png" },
    { id: "0003", xRay: "/generated_0003_preview.png", render: "/generated_0003.png" },
    { id: "0013", xRay: "/generated_0013_preview.png", render: "/generated_0013.png" },
  ];

  const [activeViews, setActiveViews] = React.useState<Record<string, 'xray' | 'render'>>(
    galleryData.reduce((acc, curr) => ({ ...acc, [curr.id]: 'render' }), {})
  );

  const toggleView = (id: string) => {
    setActiveViews(prev => ({
      ...prev,
      [id]: prev[id] === 'render' ? 'xray' : 'render'
    }));
  };

  // Helper function to map icons securely
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "python-icon":
        return <SiPython size={24} className="text-[#3776AB]" />;
      case "aws-icon":
        return <SiAmazon size={24} className="text-[#FF9900]" />;
      default:
        return <Icon icon="mdi:code-tags" width={24} height={24} className="text-gray-500" />;
    }
  };

  return (
    <main className="min-h-screen py-16 px-4 sm:px-8 max-w-5xl mx-auto transition-colors duration-300">
      
      {/* Wrapper de Diseño Fluido y Lectura */}
      <article className="prose prose-lg dark:prose-invert max-w-3xl mx-auto space-y-10 text-[var(--foreground)]">
        
        {/* Encabezado */}
        <header className="mb-14 text-center">
          <div className="inline-block bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm font-semibold tracking-wide mb-6 shadow-sm">
            AI & Procedural Generation
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[var(--foreground)] leading-tight">
            {t("bar_terrain_wgan.introduccion.title")}
          </h1>
          <p className="text-xl text-[var(--secondary)] font-light max-w-2xl mx-auto opacity-80">
            {t("bar_terrain_wgan.introduccion.subtitle")}
          </p>
        </header>
        {/* Introducción */}
        <section>
          <p className="leading-relaxed text-[var(--foreground)] text-lg opacity-90">
            {t("bar_terrain_wgan.introduccion.description")}
          </p>
        </section>
        
        {/* Arquitectura */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold border-b pb-2 border-gray-200 dark:border-gray-800 text-[var(--foreground)] mb-6">
            {t("bar_terrain_wgan.arquitectura.title")}
          </h2>
          <p className="leading-relaxed text-[var(--foreground)] opacity-90">
            {t("bar_terrain_wgan.arquitectura.description")}
          </p>
        </section>
        {/* Características Clave - Renderizado de Lista Segura */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold border-b pb-2 border-gray-200 dark:border-gray-800 text-[var(--foreground)] mb-6">
            {t("bar_terrain_wgan.caracteristicas_clave.title")}
          </h2>
          <ul className="list-disc list-outside ml-6 space-y-3 text-[var(--foreground)] opacity-90 marker:text-[var(--primary)]">
             {Array.isArray(keyFeaturesItems) && keyFeaturesItems.map((item, index) => (
                <li key={index} className="pl-2 leading-relaxed">{item}</li>
             ))}
          </ul>
        </section>
        {/* Desafíos Técnicos y Resoluciones */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold border-b pb-2 border-gray-200 dark:border-gray-800 text-[var(--foreground)] mb-6">
            {t("bar_terrain_wgan.desafios_y_soluciones.title")}
          </h2>
          <div className="space-y-6">
             {Array.isArray(challengesItems) && challengesItems.map((challenge, index) => (
                <div 
                  key={index} 
                  className="bg-white/80 dark:bg-[#1a1a1c]/50 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-gray-100 dark:border-gray-800/50 hover:shadow-xl transition-all duration-300 flex flex-col group shadow-sm"
                >
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-[var(--primary)] dark:text-[var(--primary)] flex items-center gap-3">
                    <span className="bg-[var(--primary)] text-white w-8 h-8 rounded-full flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
                      {index + 1}
                    </span>
                    {challenge.problem}
                  </h3>
                  <p className="text-[var(--foreground)] opacity-80 leading-relaxed max-w-full">
                    <strong className="font-semibold text-[var(--foreground)] block mb-1">
                      Resolución Crítica:
                    </strong> 
                    {challenge.solution}
                  </p>
                </div>
             ))}
          </div>
        </section>
        {/* Snippet Code Block */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold border-b pb-2 border-gray-200 dark:border-gray-800 text-[var(--foreground)] mb-6">
            {t("bar_terrain_wgan.snippets.title")}
          </h2>
          <div className="bg-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl border border-gray-800 flex flex-col max-w-full">
            <div className="flex items-center px-4 py-3 bg-[#2d2d2d] flex-shrink-0">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-inner"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-inner"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-inner"></div>
              </div>
              <span className="ml-4 text-xs font-medium text-gray-400 font-mono tracking-wider text-opacity-80">
                loss_functions.py
              </span>
            </div>
            <pre className="p-6 overflow-x-auto max-w-full">
              <code className="text-sm md:text-base font-mono text-blue-300 whitespace-pre">
                {tvLossSnippet}
              </code>
            </pre>
          </div>
        </section>
        {/* Galería de Samples */}
        <section className="mt-20 scroll-mt-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[var(--foreground)] mb-4">
              {t("bar_terrain_wgan.samples_gallery.title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {t("bar_terrain_wgan.samples_gallery.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryData.map((sample) => (
              <div 
                key={sample.id} 
                className="group relative bg-white/40 dark:bg-[#1a1a1c]/40 backdrop-blur-md rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl"
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-gray-900">
                  <Image
                    src={activeViews[sample.id] === 'xray' ? sample.xRay : sample.render}
                    alt={`Generated Terrain Sample ${sample.id}`}
                    fill
                    className="object-cover transition-all duration-700 ease-in-out group-hover:scale-110"
                  />
                  
                  {/* Overlay Labels */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                      ID: {sample.id}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 animate-pulse">
                     <span className={`px-3 py-1 bg-[var(--primary)] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg`}>
                        {activeViews[sample.id] === 'xray' ? t("bar_terrain_wgan.samples_gallery.xray_label") : t("bar_terrain_wgan.samples_gallery.result_label")}
                     </span>
                  </div>
                </div>

                {/* Interaction Bar */}
                <div className="p-5 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">
                      {t("bar_terrain_wgan.samples_gallery.compare_label")}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => toggleView(sample.id)}
                    className="relative w-12 h-6 bg-gray-200 dark:bg-gray-800 rounded-full transition-colors focus:outline-none"
                  >
                    <div className={`absolute top-1 left-1 w-4 h-4 rounded-full transition-all duration-300 shadow-sm ${
                      activeViews[sample.id] === 'xray' 
                        ? 'translate-x-6 bg-[var(--primary)]' 
                        : 'translate-x-0 bg-white dark:bg-gray-400'
                    }`} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Tutorial / View More Hint */}
          <div className="mt-12 flex justify-center">
             <div className="flex items-center gap-2 text-gray-400 text-sm italic">
                <Icon icon="mdi:gesture-swipe-horizontal" className="animate-bounce" />
                {t("bar_terrain_wgan.samples_gallery.view_more")}
             </div>
          </div>
        </section>

        {/* Stack Tecnológico */}
        <section className="mt-16 pb-16">
           <h2 className="text-3xl font-bold border-b pb-2 border-gray-200 dark:border-gray-800 text-[var(--foreground)] mb-8">
             System Stack
           </h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technologiesObject && Object.entries(technologiesObject).map(([techName, techDetails], index) => (
               <div 
                  key={index} 
                  className="flex flex-col gap-3 p-5 bg-white/80 dark:bg-[#1a1a1c]/60 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md max-w-full"
               >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-white/50 dark:bg-[#0f0f11]/50 border border-gray-200 dark:border-gray-800 rounded-xl">
                      {renderIcon(techDetails.icon)}
                    </div>
                    <h4 className="font-extrabold text-lg text-[var(--foreground)] font-mono">
                      {techName}
                    </h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-sm text-[var(--foreground)] font-medium leading-relaxed">
                      {techDetails.description}
                    </p>
                    <div className="bg-white/30 dark:bg-[#0f0f11]/30 rounded-lg p-3 border-l-2 border-[var(--primary)] max-w-full">
                      <p className="text-xs text-[var(--foreground)] italic font-medium opacity-80 leading-relaxed">
                        {techDetails.usage}
                      </p>
                    </div>
                  </div>
               </div>
             ))}
           </div>
        </section>

        {/* Call to Action - Invitación Final */}
        <section className="mt-24 mb-16 p-8 md:p-12 bg-white/90 dark:bg-[#1a1a1c]/70 backdrop-blur-xl rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-2xl text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">
               {t("bar_terrain_wgan.cta.title")}
            </h2>
            <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto mb-10 opacity-100 leading-relaxed font-medium">
               {t("bar_terrain_wgan.cta.description")}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
               <a 
                  href="https://bar-map-generator.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-[var(--primary)] text-white font-bold rounded-2xl hover:bg-[var(--primary)]/90 transition-all transform hover:scale-105 shadow-lg shadow-[var(--primary)]/20"
               >
                  <Icon icon="mdi:rocket-launch" width={24} height={24} />
                  {t("bar_terrain_wgan.cta.visit_website")}
               </a>
               
               <a 
                  href="https://github.com/Arvedson/bar-map-generator" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-gray-900 dark:bg-gray-800 text-white font-bold rounded-2xl hover:bg-black dark:hover:bg-gray-700 transition-all transform hover:scale-105 shadow-xl"
               >
                  <Icon icon="simple-icons:github" width={24} height={24} />
                  {t("bar_terrain_wgan.cta.view_repo")}
               </a>
            </div>
        </section>
      </article>
    </main>
  );
}
