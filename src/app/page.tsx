"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Technologies from "./components/Technologies";
import SVGParallaxBackground from "./components/SVGParallaxBackground";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Home() {
  const { t } = useTranslation("common");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem("language");
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section con Fondo SVG Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fondo base con gradiente */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"></div>

        {/* Fondo SVG con efecto parallax */}
        <SVGParallaxBackground
          speed={0.8}
          opacity={0.15}
          className="text-blue-600 dark:text-blue-400"
        />

        {/* Fondo SVG adicional con diferente velocidad */}
        <SVGParallaxBackground
          speed={1.2}
          opacity={0.08}
          className="text-purple-600 dark:text-purple-400"
        />

        {/* Partículas flotantes sutiles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-40"></div>
          <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
          <div className="absolute top-60 right-40 w-1 h-1 bg-yellow-400 rounded-full animate-pulse opacity-30"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 lg:px-20 py-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Contenido de texto */}
            <div className="text-center lg:text-left lg:w-2/3 space-y-8">
              {/* Saludo animado */}
              <div className="animate-fadeInUp">
                <p className="text-lg text-[var(--secondary)] mb-2 font-medium">
                  {t("home_intro")}
                </p>
              </div>

              {/* Nombre principal */}
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.2s" }}
              >
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight font-poppins text-gradient shadow-text">
                  {t("home")}
                </h1>
              </div>

              {/* Subtítulo */}
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.4s" }}
              >
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-[var(--secondary)] font-medium">
                  {t("hero_subtitle")}
                </h2>
              </div>

              {/* Descripción */}
              <div
                className="animate-fadeInUp"
                style={{ animationDelay: "0.6s" }}
              >
                <p className="text-lg lg:text-xl text-[var(--secondary)] leading-relaxed max-w-2xl">
                  {t("hero_description")}
                </p>
              </div>

              {/* Botones de acción */}
              <div
                className="flex flex-col sm:flex-row gap-4 animate-fadeInUp"
                style={{ animationDelay: "0.8s" }}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[var(--primary)] text-white font-semibold rounded-lg hover:bg-[var(--primary)]/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <FaEnvelope className="mr-2" />
                  {t("contact_me")}
                </Link>

                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] font-semibold rounded-lg hover:bg-[var(--primary)] hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  <FaGithub className="mr-2" />
                  {t("view_projects")}
                </Link>
              </div>

              {/* Redes sociales */}
              <div
                className="flex justify-center lg:justify-start space-x-6 animate-fadeInUp"
                style={{ animationDelay: "1s" }}
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors duration-300 transform hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors duration-300 transform hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="text-[var(--secondary)] hover:text-[var(--primary)] transition-colors duration-300 transform hover:scale-110"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>

            {/* Imagen mejorada */}
            <div
              className="lg:w-1/3 flex justify-center lg:justify-end animate-fadeInRight"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="relative">
                {/* Círculo de fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] to-purple-500 rounded-full animate-pulse opacity-20 scale-110"></div>

                {/* Imagen principal */}
                <div className="relative z-10">
                  <Image
                    src="/pp.jpeg"
                    alt="Tomas Arvedson - Desarrollador Full Stack"
                    width={300}
                    height={300}
                    className="rounded-full shadow-2xl border-4 border-[var(--primary)] hover:scale-105 transition-transform duration-500"
                    style={{
                      aspectRatio: "1 / 1",
                    }}
                  />
                </div>

                {/* Elementos decorativos flotantes */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de tecnologías */}
      <Technologies />
    </div>
  );
}
