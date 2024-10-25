'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function TutorialPage() {
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

  return (
    <div className="container mx-auto px-4 py-12 space-y-12" >
      
      {/* Sección del título principal del tutorial */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white p-8 rounded-lg shadow-md mb-24 lg:mx-[200px] items-center">
        <h1 className="text-5xl font-bold mb-4 text-center">{t('tutorial_title')}</h1>
        <p className="text-xl text-center max-w-3xl mx-auto">{t('tutorial_intro')}</p>
      </section>

      {/* ¿Por qué elegir Next.js? */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('section_1_title')}</h2>
        <p>{t('section_1_intro')}</p>
        <ul className="list-disc list-inside space-y-2">
          <li>{t('point_1_bullet_1')}</li>
          <li>{t('point_1_bullet_2')}</li>
          <li>{t('point_1_bullet_3')}</li>
        </ul>
      </section>

      {/* Requisitos Previos */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('section_2_title')}</h2>
        <p>{t('section_2_intro')}</p>
        <ul className="list-disc list-inside space-y-2">
          <li>{t('point_2_bullet_1')}</li>
        </ul>
      </section>

      {/* Iniciar el Proyecto */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('section_3_title')}</h2>
        <p>{t('section_3_step_1')}</p>
        <p>{t('section_3_instruction_1')}</p>

        {/* Bloque de código: Inicializar el proyecto */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="language-bash">{t('section_3_code_1')}</code>
          </pre>
        </div>

        <p>{t('section_3_step_2')}</p>

        {/* Bloque de código: Navegar a la carpeta */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="language-bash">{t('section_3_code_2')}</code>
          </pre>
        </div>
      </section>

      {/* Iniciar el Servidor de Desarrollo */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('section_4_title')}</h2>
        <p>{t('section_4_intro')}</p>

        {/* Bloque de código: Ejecutar el servidor */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="language-bash">{t('section_4_code')}</code>
          </pre>
        </div>

        <p>{t('section_4_result')}</p>
      </section>

      {/* Configurar Tailwind CSS */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('section_5_title')}</h2>
        <p>{t('section_5_step_1')}</p>
        <p>{t('section_5_instruction_1')}</p>

        {/* Bloque de código: Instalar Tailwind CSS */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="language-bash">{t('section_5_code_1')}</code>
          </pre>
        </div>

        <p>{t('section_5_step_2')}</p>
        <p>{t('section_5_instruction_2')}</p>

        {/* Bloque de código: Configurar Tailwind en Next.js */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="language-js">{t('section_5_code_2')}</code>
          </pre>
        </div>

        <p>{t('section_5_instruction_3')}</p>

        {/* Bloque de código: Directivas de Tailwind */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="language-css">{t('section_5_code_3')}</code>
          </pre>
        </div>
      </section>

      {/* Creación de Páginas y Rutas */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('section_6_title')}</h2>
        <p>{t('section_6_intro')}</p>
        <p>{t('section_6_step_1')}</p>
        <p>{t('section_6_instruction_1')}</p>

        {/* Bloque de código: Página de inicio */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="language-jsx">{t('section_6_code')}</code>
          </pre>
        </div>
      </section>

      {/* Creación de una API */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('section_7_title')}</h2>
        <p>{t('section_7_intro')}</p>
        <p>{t('section_7_step_1')}</p>
        <p>{t('section_7_instruction_1')}</p>

        {/* Bloque de código: Crear un endpoint API */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="language-js">{t('section_7_code')}</code>
          </pre>
        </div>

        <p>{t('section_7_result')}</p>
      </section>

      {/* Compartir el proyecto */}
      <section className="prose prose-lg overflow-x-auto dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold ">{t('section_8_title')}</h2>
        <p>{t('section_8_intro')}</p>
        <p>{t('section_8_step_1')}</p>

        {/* Bloque de código: Enlace para compartir */}
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code className="language-jsx">{t('section_8_code')}</code>
          </pre>
        </div>
      </section>

      {/* Conclusión */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] text-white p-8 rounded-lg shadow-md mt-12">
        <h2 className="text-3xl font-bold mb-4">{t('tutorial_conclusion')}</h2>
        <p>{t('tutorial_end')}</p>
      </section>
    </div>
  );
}
