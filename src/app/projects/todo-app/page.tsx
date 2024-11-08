'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import TechnologiesList from '@/app/components/TechnologiesList';







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

  useEffect(() => {
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 500); // Ajusta el tiempo según sea necesario
  }, []);

  if (!mounted) {
    return null;
  }
    return(
    <div className="container mx-auto px-4 py-12 space-y-12" >
      
      {/* introducción */}
      <section className="introduction-section">
        <div className="introduction-content">
          <h1 className="introduction-title">{t('todoapp.introduction.titulo')}</h1>
          <p className="introduction-text">{t('todoapp.introduction.subtitulo')}</p>
        </div>
      </section>


      {/* base de datos */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.database_connection.title')}</h2>
        <p>{t('todoapp.database_connection.description')}</p>
      </section>

      {/* crud_operations */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.crud_operations.title')}</h2>
        <p>{t('todoapp.crud_operations.description')}</p>
      </section>

      {/* nextauth_integration */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.nextauth_integration.title')}</h2>
        <p>{t('todoapp.nextauth_integration.description')}</p>

      </section>

      {/* google_cloud_local*/}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.google_cloud_local.title')}</h2>
        <p>{t('todoapp.google_cloud_local.description')}</p>
      </section>

      {/* prisma_adapter_nextauth */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.prisma_adapter_nextauth.title')}</h2>
        <p>{t('todoapp.prisma_adapter_nextauth.description')}</p>
       

      </section>

      {/* api_development */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.api_development.title')}</h2>
        <p>{t('todoapp.api_development.description')}</p>
      </section>

      {/* app_styling */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 id="section_7_titleroute" className="font-bold">{t('todoapp.app_styling.title')}</h2>
        <p>{t('todoapp.app_styling.description')}</p>
   
      </section>

      {/* auth_structure_nextauth */}
      <section className="prose prose-lg overflow-x-auto dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold ">{t('todoapp.auth_structure_nextauth.title')}</h2>
        <p>{t('todoapp.auth_structure_nextauth.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('todoapp.auth_structure_nextauth.files.authOptions.code')}</code></pre>
      </div>
      <p>{t('todoapp.auth_structure_nextauth.files.authHandler.description')}</p>
      <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('todoapp.auth_structure_nextauth.files.authHandler.code')}</code></pre>
      </div>
 
      </section>

      {/* session_management_protection */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 id="section_7_titleroute" className="font-bold">{t('todoapp.session_management_protection.title')}</h2>
        <p>{t('todoapp.session_management_protection.description')}</p>
      </section>

      {/* frontend_components */}
      <section className="prose prose-lg overflow-x-auto dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold ">{t('todoapp.frontend_components.title')}</h2>
        <p>{t('todoapp.frontend_components.description')}</p>
        <p>{t('todoapp.frontend_components.components.SessionWrapper.description')}</p>

        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
        <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('todoapp.frontend_components.components.SessionWrapper.code')}</code></pre>
      </div>
      <p>{t('todoapp.frontend_components.components.DashboardPage.description')}</p>

      <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
        <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('todoapp.frontend_components.components.DashboardPage.code')}</code></pre>
      </div>
      </section>

    {/* task_operations_api*/}
    <section className="prose prose-lg overflow-x-auto dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.task_operations_api.title')}</h2>
        <p>{t('todoapp.task_operations_api.description')}</p>

        <p>{t('todoapp.task_operations_api.operations.deleteTask.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
            <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t('todoapp.task_operations_api.operations.deleteTask.code')}</code>
            </pre>
        </div>

        <p>{t('todoapp.task_operations_api.operations.updateTask.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
            <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t('todoapp.task_operations_api.operations.updateTask.code')}</code>
            </pre>
        </div>
    </section>

    {/* prisma_models_definition*/}
    <section className="prose prose-lg overflow-x-auto dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.prisma_models_definition.title')}</h2>
        <p>{t('todoapp.prisma_models_definition.description')}</p>

        
        <p>{t('todoapp.prisma_models_definition.models.Task.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
            <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t('todoapp.prisma_models_definition.models.Task.code')}</code>
            </pre>
        </div>


        <p>{t('todoapp.prisma_models_definition.models.User.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
            <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t('todoapp.prisma_models_definition.models.User.code')}</code>
            </pre>
        </div>

        
        <p>{t('todoapp.prisma_models_definition.models.Account.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
            <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t('todoapp.prisma_models_definition.models.Account.code')}</code>
            </pre>
        </div>

        
        <p>{t('todoapp.prisma_models_definition.models.Session.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
            <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t('todoapp.prisma_models_definition.models.Session.code')}</code>
            </pre>
        </div>
    </section>



    {/* prisma_configuration_client */}
    <section className="prose prose-lg overflow-x-auto dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.prisma_configuration_client.title')}</h2>
        <p>{t('todoapp.prisma_configuration_client.description')}</p>

       
        <p>{t('todoapp.prisma_configuration_client.configuration.client.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
            <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t('todoapp.prisma_configuration_client.configuration.client.code')}</code>
            </pre>
        </div>

        
        <p>{t('todoapp.prisma_configuration_client.configuration.datasource.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
            <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t('todoapp.prisma_configuration_client.configuration.datasource.code')}</code>
            </pre>
        </div>
    </section>


     {/* frontend_session_management */}

     <section className="prose prose-lg overflow-x-auto dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.frontend_session_management.title')}</h2>
        <p>{t('todoapp.frontend_session_management.description')}</p>

       
        <p>{t('todoapp.frontend_session_management.session_provider.description')}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
            <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t('todoapp.frontend_session_management.session_provider.code')}</code>
            </pre>
        </div>
    </section>

    {/* ui_ux */}

    <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.ui_ux.title')}</h2>
        <p>{t('todoapp.ui_ux.description')}</p>
    </section>

    {/* error_handling_validation */}

    <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.error_handling_validation.title')}</h2>
        <p>{t('todoapp.error_handling_validation.description')}</p>
    </section>


    {/* deployment_testing */}

    <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.deployment_testing.title')}</h2>
        <p>{t('todoapp.deployment_testing.description')}</p>
    </section>


    {/* tecnologies */}
    <section className=" max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('todoapp.technologies.title')}</h2>
        <p>{t('todoapp.technologies.description')}</p>
        <TechnologiesList/>
    </section>
    




  {/* Conclusion */}
  <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
    <h2 className="font-bold ">{t('todoapp.conclusion.title')}</h2>
    <p className="">
        {t('todoapp.conclusion.description')}
    </p>
    <div style={{ height: '2rem' }}></div>
  {/* GitHub Link Repo */}
  
  <div className="card">
      <div className="card-content">
        <h3 className="card-title">
        {t('todoapp.card.title')}
        </h3>
        <p className="card-text">
        {t('todoapp.card.description')}
        </p>
      </div>

      {/* Contenedor para ambos botones */}
      <div className="button-container">
        <a
          href="https://github.com/Arvedson/todo-app"
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
        >
          {t('todoapp.card.githubButton')}
        </a>

        <a
          href="https://todo-app-eight-rho-95.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="card-button"
        >
          {t('todoapp.card.testButton')}
        </a>
      </div>
    </div>
  </section>

    </div>
  );
}
