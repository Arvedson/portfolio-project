"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react"; // Optional: to render real icons if mapped
import Image from "next/image";
import { SiNextdotjs, SiPostgresql, SiGooglecloud } from "react-icons/si";

interface Technology {
  icon: string;
  description: string;
  usage: string;
}

interface Challenge {
  problem: string;
  solution: string;
}

export default function VitalGuardProjectPage() {
  const { t } = useTranslation("common");
  // Extracción profunda del JSON
  const tvLossSnippet = t("vital_guard.snippets.tv_loss", { defaultValue: "" });
  const technologiesObject = t("vital_guard.technologies", { returnObjects: true }) as Record<string, Technology>;
  const keyFeaturesItems = t("vital_guard.caracteristicas_clave.items", { returnObjects: true }) as string[];
  const challengesItems = t("vital_guard.desafios_y_soluciones.challenges", { returnObjects: true }) as Challenge[];
  const roadmapPhases = t("vital_guard.futuro_y_escalabilidad.phases", { returnObjects: true }) as { phase: string; details: string }[];
  const galleryData = [
    { id: "0001", xRay: "/vitaldoc1.png", render: "/vital1.png" },
    { id: "0002", xRay: "/vitaldoc2.png", render: "/vital2.png" },
    { id: "0003", xRay: "/vital3.png", render: "/vital5.png" }, // Additional comparative view
    { id: "0004", xRay: "/vital4.png", render: "/vital6.png" }, // Completing the last pair with vital6
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

  const [expandedImage, setExpandedImage] = React.useState<string | null>(null);

  // Helper function to map icons securely
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "nextjs-icon":
        return <SiNextdotjs size={24} className="text-white dark:text-white" />;
      case "postgresql-icon":
        return <SiPostgresql size={24} className="text-[#336791]" />;
      case "gemini-icon":
        return <SiGooglecloud size={24} className="text-[#4285F4]" />;
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
            HealthTech & AI
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-[var(--foreground)] leading-tight">
            {t("vital_guard.introduccion.title")}
          </h1>
          <p className="text-xl text-[var(--secondary)] font-light max-w-2xl mx-auto opacity-80">
            {t("vital_guard.introduccion.subtitle")}
          </p>
        </header>
        {/* Introducción */}
        <section>
          <p className="leading-relaxed text-[var(--foreground)] text-lg opacity-90">
            {t("vital_guard.introduccion.description")}
          </p>
        </section>
        
        {/* Arquitectura */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold border-b pb-2 border-gray-200 dark:border-gray-800 text-[var(--foreground)] mb-6">
            {t("vital_guard.arquitectura.title")}
          </h2>
          <p className="leading-relaxed text-[var(--foreground)] opacity-90">
            {t("vital_guard.arquitectura.description")}
          </p>
        </section>
        {/* Características Clave - Renderizado de Lista Segura */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold border-b pb-2 border-gray-200 dark:border-gray-800 text-[var(--foreground)] mb-6">
            {t("vital_guard.caracteristicas_clave.title")}
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
            {t("vital_guard.desafios_y_soluciones.title")}
          </h2>
          <div className="space-y-6">
             {Array.isArray(challengesItems) && challengesItems.map((challenge, index) => (
                <div 
                  key={index} 
                  className="bg-[var(--foreground)]/5 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-[var(--foreground)]/10 hover:shadow-2xl transition-all duration-500 flex flex-col group"
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
            {t("vital_guard.snippets.title")}
          </h2>
          <div className="bg-[#0f1115] rounded-xl overflow-hidden shadow-2xl border border-[#2d3139] flex flex-col max-w-full">
            <div className="flex items-center px-4 py-3 bg-[#2d2d2d] flex-shrink-0">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full shadow-inner"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-inner"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full shadow-inner"></div>
              </div>
              <span className="ml-4 text-xs font-medium text-gray-400 font-mono tracking-wider text-opacity-80">
                insights.ts
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
              {t("vital_guard.samples_gallery.title")}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
              {t("vital_guard.samples_gallery.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {galleryData.map((sample) => (
              <div 
                key={sample.id} 
                className="group relative bg-[var(--foreground)]/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-[var(--foreground)]/10 shadow-xl"
              >
                {/* Image Container */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden bg-gray-900/50 cursor-pointer group/img"
                  onClick={() => setExpandedImage(activeViews[sample.id] === 'xray' ? sample.xRay : sample.render)}
                >
                  <Image
                    src={activeViews[sample.id] === 'xray' ? sample.xRay : sample.render}
                    alt={`Generated Dashboard Sample ${sample.id}`}
                    fill
                    className="object-cover object-top transition-[transform,filter] duration-700 ease-in-out group-hover/img:scale-[1.03] group-hover/img:brightness-105"
                  />
                  
                  {/* Hover Overlay para Expandir */}
                  <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover/img:opacity-100 z-10">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white transform translate-y-4 group-hover/img:translate-y-0 transition-all duration-300 shadow-xl">
                      <Icon icon="mdi:magnify-plus-outline" width={32} height={32} />
                    </div>
                  </div>
                  
                  {/* Overlay Labels */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/10">
                      ID: {sample.id}
                    </span>
                  </div>

                  <div className="absolute bottom-4 right-4 animate-pulse">
                     <span className={`px-3 py-1 bg-[var(--primary)] text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-lg`}>
                        {activeViews[sample.id] === 'xray' ? t("vital_guard.samples_gallery.xray_label") : t("vital_guard.samples_gallery.result_label")}
                     </span>
                  </div>
                </div>

                {/* Interaction Bar */}
                <div className="p-5 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-[var(--foreground)] uppercase tracking-wider">
                      {t("vital_guard.samples_gallery.compare_label")}
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
                {t("vital_guard.samples_gallery.view_more")}
             </div>
          </div>
        </section>

        {/* Roadmap y Escalabilidad */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold border-b pb-2 border-gray-200 dark:border-gray-800 text-[var(--foreground)] mb-6">
            {t("vital_guard.futuro_y_escalabilidad.title")}
          </h2>
          <p className="leading-relaxed text-[var(--foreground)] opacity-90 mb-8">
            {t("vital_guard.futuro_y_escalabilidad.description")}
          </p>
          <div className="relative border-l-2 border-[var(--primary)] ml-3 md:ml-6 space-y-10 py-2">
             {Array.isArray(roadmapPhases) && roadmapPhases.map((item, index) => (
                <div key={index} className="relative pl-8 group">
                   <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[var(--primary)] shadow-[0_0_10px_var(--primary)] ring-4 ring-white dark:ring-[#1a1a1c] group-hover:scale-125 transition-transform duration-300"></div>
                   <h3 className="text-xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                     {item.phase}
                   </h3>
                   <p className="text-[var(--foreground)] opacity-80 leading-relaxed text-sm md:text-base">
                      {item.details}
                   </p>
                </div>
             ))}
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
                  className="flex flex-col gap-3 p-5 bg-[var(--foreground)]/5 backdrop-blur-md rounded-2xl border border-[var(--foreground)]/10 shadow-sm transition-all hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] max-w-full group"
               >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[var(--background)]/50 border border-[var(--foreground)]/10 rounded-xl shadow-inner group-hover:scale-110 transition-transform">
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
                    <div className="bg-[var(--background)]/40 rounded-lg p-3 border-l-2 border-[var(--primary)] max-w-full shadow-inner">
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
        <section className="mt-24 mb-16 p-8 md:p-12 bg-[var(--background)] backdrop-blur-2xl rounded-[2.5rem] border border-[var(--primary)]/30 shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_40px_rgba(255,255,255,0.05)] text-center relative overflow-hidden">
            {/* Subtle gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent pointer-events-none"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-[var(--foreground)] mb-6 tracking-tight">
                 {t("vital_guard.cta.title")}
              </h2>
              <p className="text-lg text-[var(--foreground)] max-w-2xl mx-auto mb-10 opacity-100 leading-relaxed font-medium">
                 {t("vital_guard.cta.description")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                 <a 
                    href="https://vital-guard-ai.vercel.app/es/vitals" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-[var(--primary)] text-white font-bold rounded-2xl hover:opacity-90 transition-all transform hover:scale-105 shadow-lg shadow-[var(--primary)]/20"
                 >
                    <Icon icon="mdi:rocket-launch" width={24} height={24} />
                    {t("vital_guard.cta.visit_website")}
                 </a>
                 
                 <a 
                    href="https://github.com/Arvedson/VitalGuard-AI" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 bg-[var(--foreground)] text-[var(--background)] font-bold rounded-2xl hover:opacity-90 transition-all transform hover:scale-105 shadow-xl"
                 >
                    <Icon icon="simple-icons:github" width={24} height={24} />
                    {t("vital_guard.cta.view_repo")}
                 </a>
              </div>
            </div>
        </section>
      </article>

      {/* Lightbox Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out transition-opacity duration-300"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative w-full max-w-7xl h-[90vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
             <img 
               src={expandedImage} 
               alt="Expanded Dashboard" 
               className="w-full h-full object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)]"
             />
             <button 
                className="absolute top-2 right-2 md:-top-10 md:-right-10 text-white/50 hover:text-white transition-colors bg-black/50 md:bg-transparent rounded-full p-1"
                onClick={() => setExpandedImage(null)}
             >
                <Icon icon="mdi:close-circle" width={40} height={40} />
             </button>
             <p className="absolute bottom-4 text-white/70 text-sm font-mono tracking-widest bg-black/50 px-4 py-1 rounded-full backdrop-blur-md pointer-events-none shadow-lg">
                View: {expandedImage.slice(1)}
             </p>
          </div>
        </div>
      )}
    </main>
  );
}
