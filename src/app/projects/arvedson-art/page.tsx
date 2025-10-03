"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import ArvedsonArtTechnologiesList from "@/app/components/ArvedsonArtTechnologiesList";

export default function ArvedsonArtProject() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("language");
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
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 500);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      {/* Introducción */}
      <section className="max-w-4xl mx-auto mb-12">
        <div className="card-style2">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full mb-4">
                <svg
                  className="w-10 h-10 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
                  />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] bg-clip-text text-transparent">
                {t("arvedson_art_title")}
              </h1>
              <p className="text-xl leading-relaxed">
                {t("arvedson_art_hero_description")}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="px-4 py-2 bg-[var(--primary)] bg-opacity-20 rounded-full border border-[var(--primary)]">
                <span className="text-sm font-medium">E-commerce</span>
              </div>
              <div className="px-4 py-2 bg-[var(--accent)] bg-opacity-20 rounded-full border border-[var(--accent)]">
                <span className="text-sm font-medium">Next.js</span>
              </div>
              <div className="px-4 py-2 bg-[var(--secondary)] bg-opacity-20 rounded-full border border-[var(--secondary)]">
                <span className="text-sm font-medium">Stripe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Descripción General */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_overview_title")}</h2>
        <p>{t("arvedson_art_overview")}</p>
      </section>

      {/* Arquitectura del Proyecto */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_architecture_title")}</h2>
        <p>{t("arvedson_art_architecture_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_architecture_code")}</code>
          </pre>
        </div>
      </section>

      {/* Configuración de Base de Datos con Prisma */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_database_title")}</h2>
        <p>{t("arvedson_art_database_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_database_schema")}</code>
          </pre>
        </div>
      </section>

      {/* Integración Completa de Stripe para Pagos */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_stripe_title")}</h2>
        <p>{t("arvedson_art_stripe_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_stripe_code")}</code>
          </pre>
        </div>
      </section>

      {/* Webhooks de Stripe */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-bold text-2xl">
          {t("arvedson_art_stripe_webhook_title")}
        </h3>
        <p>{t("arvedson_art_stripe_webhook_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_stripe_webhook_code")}</code>
          </pre>
        </div>
      </section>

      {/* Características de Stripe Implementadas */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-bold text-2xl">
          {t("arvedson_art_stripe_features_title")}
        </h3>
        <p>{t("arvedson_art_stripe_features_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_stripe_features")}</code>
          </pre>
        </div>
      </section>

      {/* Sistema de Autenticación */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_auth_title")}</h2>
        <p>{t("arvedson_art_auth_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_auth_code")}</code>
          </pre>
        </div>
      </section>

      {/* Gestión de Estado y Carrito de Compras */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_cart_title")}</h2>
        <p>{t("arvedson_art_cart_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_cart_code")}</code>
          </pre>
        </div>
      </section>

      {/* Optimización de Imágenes y Performance */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_performance_title")}</h2>
        <p>{t("arvedson_art_performance_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_performance_code")}</code>
          </pre>
        </div>
      </section>

      {/* Diseño Responsivo y UX */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_responsive_title")}</h2>
        <p>{t("arvedson_art_responsive_description")}</p>
      </section>

      {/* Despliegue y CI/CD */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_deployment_title")}</h2>
        <p>{t("arvedson_art_deployment_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_deployment_config")}</code>
          </pre>
        </div>
      </section>

      {/* Tecnologías Expandidas */}
      <section className="max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t("arvedson_art_technologies_title")}</h2>
        <p>{t("arvedson_art_technologies_description")}</p>
      </section>

      {/* Frontend y UI/UX */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-bold text-2xl">
          {t("arvedson_art_tech_frontend_title")}
        </h3>
        <p>{t("arvedson_art_tech_frontend_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_tech_frontend_technologies")}</code>
          </pre>
        </div>
      </section>

      {/* Backend y APIs */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-bold text-2xl">
          {t("arvedson_art_tech_backend_title")}
        </h3>
        <p>{t("arvedson_art_tech_backend_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_tech_backend_technologies")}</code>
          </pre>
        </div>
      </section>

      {/* Gestión de Estado y Datos */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-bold text-2xl">
          {t("arvedson_art_tech_state_title")}
        </h3>
        <p>{t("arvedson_art_tech_state_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_tech_state_technologies")}</code>
          </pre>
        </div>
      </section>

      {/* Despliegue y DevOps */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-bold text-2xl">
          {t("arvedson_art_tech_deployment_title")}
        </h3>
        <p>{t("arvedson_art_tech_deployment_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_tech_deployment_technologies")}</code>
          </pre>
        </div>
      </section>

      {/* Herramientas de Desarrollo */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-bold text-2xl">
          {t("arvedson_art_tech_tools_title")}
        </h3>
        <p>{t("arvedson_art_tech_tools_description")}</p>
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{t("arvedson_art_tech_tools_technologies")}</code>
          </pre>
        </div>
      </section>

      {/* Componente de Tecnologías Visual */}
      <section className="max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-bold text-2xl">Tecnologías Visuales</h3>
        <p>
          Representación visual de las tecnologías utilizadas en el proyecto:
        </p>
        <ArvedsonArtTechnologiesList />
      </section>

      {/* Conclusion */}
      <section className="max-w-4xl mx-auto mb-12 space-y-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4">
            {t("arvedson_art_conclusion_title")}
          </h2>
          <p className="text-lg text-[var(--secondary)] max-w-2xl mx-auto">
            {t("arvedson_art_conclusion_description")}
          </p>
        </div>

        {/* GitHub Link Repo */}
        <div className="card-style2">
          <div className="text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3">
                {t("arvedson_art_card_title")}
              </h3>
              <p className="text-[var(--secondary)] mb-6 max-w-xl mx-auto">
                {t("arvedson_art_card_description")}
              </p>
            </div>

            {/* Contenedor para ambos botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/Arvedson/Arvedson-Art"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[var(--secondary)] hover:scale-105 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                {t("arvedson_art_github_button")}
              </a>

              <a
                href="https://arvedson-art.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-semibold transition-all duration-300 hover:bg-[var(--primary)] hover:scale-105 hover:shadow-lg"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                {t("arvedson_art_demo_button")}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
