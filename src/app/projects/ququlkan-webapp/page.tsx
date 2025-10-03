"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import Image from "next/image";
import TechnologiesList2 from "../../components/TechnologiesList2";

interface KeyConcept {
  abstractData: string;
  crudOperations: string;
  responseStandardization: string;
}

interface MethodImplementation {
  [key: string]: string;
}

interface MethodConsiderations {
  [key: string]: string;
}

interface ImplementationMethod {
  title: string;
  purpose: string;
  implementation?: MethodImplementation;
  note?: string;
  considerations?: MethodConsiderations;
}

interface ImplementationDetails {
  summary: string;
  methods: Record<string, ImplementationMethod>;
  integration?: string;
}

interface HighlightedAspect {
  modularityAndCodeReuse: string;
  typescriptUsage: string;
  queryHandling: string;
  errorManagementAndValidation: string;
  reactAdminToolsIntegration: string;
  scalabilityPreparation: string;
}

interface CustomDataProviderImportance {
  nonRestfulApi: string;
  additionalFunctionality: string;
  performanceOptimization: string;
}

interface Conclusion {
  skillsDemonstrated: string[];
  impact: string;
}

interface DataProviderDocumentation {
  title1: string;
  introduction: string;
  keyConcepts: KeyConcept;
  implementationDetails: ImplementationDetails;
  highlightedAspectsAndSkills: HighlightedAspect;
  importanceOfCustomDataProvider: CustomDataProviderImportance;
  conclusion2: Conclusion;
  codeExamples: Record<string, string>;
}

interface Obstaculo {
  titulo: string;
  descripcion: string;
}

interface Metodo {
  nombre: string;
  enfoque: string;
  problema: string;
}

interface AnalisisDetalle {
  patron: string;
  significado: string;
  funcion: string;
  detalle?: string[];
}

interface RazonFuncionamiento {
  titulo: string;
  descripcion: string;
}

interface Paso {
  titulo: string;
  descripcion: string | string[];
}

interface DesafioEncontrado {
  desafio: string;
  problema: string;
  solucion: string;
}

interface PuntoImpacto {
  titulo: string;
  descripcion: string;
}

// Definición de interfaces
interface PortfolioSectionData {
  title: string;
  introduction: string;
  sections: Section[];
  impact: string;
  finalComment: string;
}

interface Section {
  number: number;
  title: string;
  description: string;
  reasons?: Reason[];
  advantages?: Advantage[];
  codeExample?: CodeExample;
  codeDescription?: CodeDescription;
}

interface Reason {
  title: string;
  description: string;
}

interface Advantage {
  title: string;
  description: string;
}

interface CodeExample {
  language: string;
  code: string;
}

interface CodeDescription {
  importations?: Importation[];
  function?: FunctionDescription;
}

interface Importation {
  module: string;
  item: string;
  description: string;
}

interface FunctionDescription {
  name: string;
  purpose: string;
  process: ProcessSteps;
}

interface ProcessSteps {
  [stepKey: string]:
    | string
    | {
        description: string;
        substeps: {
          [subStepKey: string]: string;
        };
      };
}

export default function TutorialPage() {
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

  const portfolioData = t("portfolioData", {
    returnObjects: true,
  }) as PortfolioSectionData;

  const dataProviderDocumentation = t("dataProviderDocumentation", {
    returnObjects: true,
  }) as DataProviderDocumentation;
  const obstaculos = t("obstaculos", { returnObjects: true }) as Obstaculo[];
  const intentosIniciales = t("intentos_iniciales", {
    returnObjects: true,
  }) as {
    titulo: string;
    metodos: Metodo[];
  };
  const solucion = t("solucion", { returnObjects: true }) as {
    titulo: string;
    descripcion: string;
    expresion_regular: string;
    analisis_detallado: AnalisisDetalle[];
    ejemplos_capturados: string[];
    razones_por_que_funciona: RazonFuncionamiento[];
  };
  const procesoDeDesarrollo = t("proceso_de_desarrollo", {
    returnObjects: true,
  }) as {
    titulo: string;
    pasos: Paso[];
  };
  const implementacionEnCodigo = t("implementacion_en_codigo", {
    returnObjects: true,
  }) as {
    titulo: string;
    codigo: string;
    pasos_clave: Paso[];
  };
  const desafiosEncontrados = t("desafios_encontrados", {
    returnObjects: true,
  }) as {
    titulo: string;
    desafios: DesafioEncontrado[];
  };
  const impactoYValor = t("impacto_y_valor", { returnObjects: true }) as {
    titulo: string;
    puntos: PuntoImpacto[];
  };
  return (
    <div className="container mx-auto px-4 py-12 space-y-12 min-h-screen">
      <section className="introduction-section-ququlkan">
        <div className="introduction-content-ququlkan">
          <h1 className="introduction-title-ququlkan">
            {t("ququlkan_introduction_titulo")}
          </h1>
          <p className="introduction-text-ququlkan">
            {t("ququlkan_introduction_subtitulo")}
          </p>
        </div>
      </section>

      {/* Descripción General*/}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="text-3xl font-bold">{t("titulo descripcion")}</h2>
        <p>{t("descripcion del webapp")}</p>
      </section>

      {/* Sección de Funcionalidades */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-12 ">
        {/* Funcionalidad 1 */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl">
            {t("introququlkan.funcionalidad1.titulo")}
          </h3>
          <p>{t("introququlkan.funcionalidad1.descripcion")}</p>
          <Image
            src={t("introququlkan.funcionalidad1.imagen")}
            alt={t("introququlkan.funcionalidad1.titulo")}
            layout="responsive"
            width={700}
            height={475}
            className="border border-gray-300 rounded-lg"
          />
        </div>
        {/* Funcionalidad 2 */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl">
            {t("introququlkan.funcionalidad2.titulo")}
          </h3>
          <p>{t("introququlkan.funcionalidad2.descripcion")}</p>
          <Image
            src={t("introququlkan.funcionalidad2.imagen")}
            alt={t("introququlkan.funcionalidad2.titulo")}
            layout="responsive"
            width={700}
            height={475}
            className="border border-gray-300 rounded-lg"
          />
        </div>
        {/* Funcionalidad 3 */}
        <div className="space-y-6">
          <h3 className="font-bold text-2xl">
            {t("introququlkan.funcionalidad3.titulo")}
          </h3>
          <p>{t("introququlkan.funcionalidad3.descripcion")}</p>
          {/* Contenedor para las imágenes */}
          <div className="space-y-4">
            <Image
              src={t("introququlkan.funcionalidad3.imagen")}
              alt={`${t("introququlkan.funcionalidad3.titulo")} - Imagen 1`}
              layout="responsive"
              width={700}
              height={475}
              className="border border-gray-300 rounded-lg"
            />
            <Image
              src={t("introququlkan.funcionalidad3.imagen2")}
              alt={`${t("introququlkan.funcionalidad3.titulo")} - Imagen 2`}
              layout="responsive"
              width={700}
              height={475}
              className="border border-gray-300 rounded-lg"
            />
          </div>
        </div>
        {/* Llamado a la acción */}
        <div className="text-center mt-12 space-y-4">
          <p className="text-xl font-medium mb-6">{t("invitarVisita")}</p>
          <a
            href="https://ququlkan-solar.com/cotizar"
            target="_blank"
            rel="noopener noreferrer"
            className="border  border-[var(--border-color)] inline-block px-8 py-4 text-lg font-semibold text-[var(--foreground)] bg-[var(--primary)] rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-300 mt4"
          >
            {t("verWebApp")}
          </a>
        </div>
      </section>

      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-8">
        <h2 className="font-bold text-3xl">{t("desafio.titulo")}</h2>
        <Image
          src={t("imgreader")}
          alt={`${t("introququlkan.funcionalidad3.titulo")} - Imagen 1`}
          layout="responsive"
          width={700}
          height={475}
          className="border border-gray-300 rounded-lg"
        />
        <p>{t("desafio.descripcion")}</p>
        {/* Obstáculos */}
        <h3 className="font-semibold text-2xl">{t("Obstáculos")}</h3>
        <ul className="list-disc pl-5 space-y-4">
          {obstaculos.map((obstaculo, index) => (
            <li key={index}>
              <h4 className="font-semibold text-xl">{obstaculo.titulo}</h4>
              <p>{obstaculo.descripcion}</p>
            </li>
          ))}
        </ul>
        {/* Intentos Iniciales */}
        <h3 className="font-semibold text-2xl">{intentosIniciales.titulo}</h3>
        {intentosIniciales.metodos.map((metodo, index) => (
          <div key={index} className="space-y-2">
            <h4 className="font-semibold text-xl">{metodo.nombre}</h4>
            <p>
              <strong>{t("Enfoque:")}</strong> {metodo.enfoque}
            </p>
            <p>
              <strong>{t("Problema")}:</strong> {metodo.problema}
            </p>
          </div>
        ))}
        {/* Solución */}
        <h3 className="font-semibold text-2xl">{solucion.titulo}</h3>
        <p>{solucion.descripcion}</p>
        {/* Expresión Regular */}
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{solucion.expresion_regular}</code>
          </pre>
        </div>
        {/* Análisis Detallado de la Expresión Regular */}
        <h4 className="font-semibold text-xl">{t("Análisis")}</h4>
        <ul className="list-disc pl-5 space-y-4">
          {solucion.analisis_detallado.map((item, index) => (
            <li key={index}>
              <p>
                <strong>{t("Patrón")}</strong> {item.patron}
              </p>
              <p>
                <strong>{t("Significado")}</strong> {item.significado}
              </p>
              <p>
                <strong>{t("Función:")}</strong> {item.funcion}
              </p>
              {/* Detalles adicionales si existen */}
              {item.detalle && (
                <ul className="list-disc pl-5">
                  {item.detalle.map((detalle, idx) => (
                    <li key={idx}>{detalle}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        {/* Ejemplos de Montos que Captura */}
        <h4 className="font-semibold text-xl">{t("Ejemplos")}</h4>
        <ul className="list-disc pl-5">
          {solucion.ejemplos_capturados.map((ejemplo, index) => (
            <li key={index}>{ejemplo}</li>
          ))}
        </ul>
        {/* Razones por las que Funciona */}
        <h4 className="font-semibold text-xl">{t("Expresión")}</h4>
        <ul className="list-disc pl-5 space-y-2">
          {solucion.razones_por_que_funciona.map((razon, index) => (
            <li key={index}>
              <h5 className="font-semibold">{razon.titulo}</h5>
              <p>{razon.descripcion}</p>
            </li>
          ))}
        </ul>
        {/* Proceso de Desarrollo y Lógica Detrás de la Solución */}
        <h3 className="font-semibold text-2xl">{procesoDeDesarrollo.titulo}</h3>
        <ul className="list-decimal pl-5 space-y-4">
          {procesoDeDesarrollo.pasos.map((paso, index) => (
            <li key={index}>
              <h4 className="font-semibold text-xl">{paso.titulo}</h4>
              {Array.isArray(paso.descripcion) ? (
                <ul className="list-disc pl-5">
                  {paso.descripcion.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p>{paso.descripcion}</p>
              )}
            </li>
          ))}
        </ul>
        <h3 className="font-semibold text-2xl">
          {implementacionEnCodigo.titulo}
        </h3>
        {/* Código */}
        <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
          <pre className="whitespace-pre-wrap overflow-x-auto">
            <code>{implementacionEnCodigo.codigo}</code>
          </pre>
        </div>
        {/* Pasos Clave */}
        <h4 className="font-semibold text-xl">{t("Pasos")}</h4>
        <ul className="list-decimal pl-5 space-y-4">
          {implementacionEnCodigo.pasos_clave.map((paso, index) => (
            <li key={index}>
              <h5 className="font-semibold">{paso.titulo}</h5>
              {Array.isArray(paso.descripcion) ? (
                <ul className="list-disc pl-5">
                  {paso.descripcion.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              ) : (
                <p>{paso.descripcion}</p>
              )}
            </li>
          ))}
        </ul>
        {/* Desafíos Encontrados y Soluciones Aplicadas */}
        <h3 className="font-semibold text-2xl">{desafiosEncontrados.titulo}</h3>
        <ul className="list-disc pl-5 space-y-4">
          {desafiosEncontrados.desafios.map((desafio, index) => (
            <li key={index}>
              <h4 className="font-semibold text-xl">{desafio.desafio}</h4>
              <p>
                <strong>{t("Problema2")}:</strong> {desafio.problema}
              </p>
              <p>
                <strong>{t("Solución:")}</strong> {desafio.solucion}
              </p>
            </li>
          ))}
        </ul>
        {/* Impacto y Valor Agregado de Esta Solución */}
        <h3 className="font-semibold text-2xl">{impactoYValor.titulo}</h3>
        <ul className="list-disc pl-5 space-y-4">
          {impactoYValor.puntos.map((punto, index) => (
            <li key={index}>
              <h4 className="font-semibold text-xl">{punto.titulo}</h4>
              <p>{punto.descripcion}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Invitación a Revisar el Código */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-semibold text-2xl ">{t("exploreCodeTitle")}</h3>
        <div className="flex flex-row gap-5 ">
          <a
            href="https://github.com/Arvedson/Solar/blob/main/src/app/api/ocr/route.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--border-color)] inline-block px-8 py-4 text-lg font-semibold text-[var(--foreground)] bg-[var(--primary)] rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-300 overflow-hidden overflow-x-auto "
          >
            {t("ocrApiLinkText")}
          </a>
          <a
            href="https://github.com/Arvedson/Solar/blob/main/src/components/app/ImageReader.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="overflow-x-auto border border-[var(--border-color)] inline-block px-8 py-4 text-lg font-semibold text-[var(--foreground)] bg-[var(--primary)] rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-300"
          >
            {t("imageReaderLinkText")}
          </a>
        </div>
      </section>

      {/* Sección del DataProvider */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-8 space-y-6">
        <h3 className="font-bold text-3xl">{t("title1")}</h3>
        <p>{t("introduction")}</p>

        <h3 className="font-bold text-2xl">{t("keyConcepts")}</h3>
        <ul className="list-disc pl-5 space-y-4">
          <li>
            <h4 className="font-semibold text-xl">{t("abstractData")}</h4>
            <p>{dataProviderDocumentation.keyConcepts.abstractData}</p>
          </li>
          <li>
            <h4 className="font-semibold text-xl">{t("crudOperations")}</h4>
            <p>{dataProviderDocumentation.keyConcepts.crudOperations}</p>
          </li>
          <li>
            <h4 className="font-semibold text-xl">
              {t("responseStandardization")}
            </h4>
            <p>
              {dataProviderDocumentation.keyConcepts.responseStandardization}
            </p>
          </li>
        </ul>
        <h3 className="font-bold text-2xl">{t("implementationDetails")}</h3>
        <p>{dataProviderDocumentation.implementationDetails.summary}</p>
        <ul className="list-disc pl-5 space-y-5">
          {Object.entries(
            dataProviderDocumentation.implementationDetails.methods
          ).map(([key, method]) => (
            <div key={key}>
              <li className="space-y-2">
                <h4 className="font-semibold text-xl">{method.title}</h4>
                {method.purpose && <p>{method.purpose}</p>}
                {method.implementation && (
                  <ul className="list-disc pl-5 space-y-2">
                    {Object.entries(method.implementation).map(
                      ([stepKey, stepValue]) => (
                        <li key={stepKey}>
                          <strong>{stepKey}:</strong> {stepValue}
                        </li>
                      )
                    )}
                  </ul>
                )}
                {method.note && (
                  <p>
                    <strong>{t("note")}</strong> {method.note}
                  </p>
                )}
                {method.considerations && (
                  <ul className="list-disc pl-5 space-y-2">
                    {Object.entries(method.considerations).map(
                      ([considerationKey, considerationValue]) => (
                        <li key={considerationKey}>
                          <strong>{considerationKey}:</strong>{" "}
                          {considerationValue}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
              {dataProviderDocumentation.codeExamples?.[key] && (
                <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)] my-4">
                  <pre className="whitespace-pre-wrap overflow-x-auto">
                    <code>
                      {t(`dataProviderDocumentation.codeExamples.${key}`)}
                    </code>
                  </pre>
                </div>
              )}
            </div>
          ))}
        </ul>
        <h3 className="font-bold text-2xl">{t("highlightedAspects")}</h3>
        <ul className="list-disc pl-5 space-y-4">
          {Object.entries(
            dataProviderDocumentation.highlightedAspectsAndSkills
          ).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        <h3 className="font-bold text-2xl">
          {t("customDataProviderImportance")}
        </h3>
        <ul className="list-disc pl-5 space-y-4">
          {Object.entries(
            dataProviderDocumentation.importanceOfCustomDataProvider
          ).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
        <h3 className="font-bold text-2xl">{t("Conclusionn")}</h3>
        <ul className="list-disc pl-5 space-y-4">
          <ul className="list-disc pl-5 space-y-2">
            {dataProviderDocumentation.conclusion2.skillsDemonstrated.map(
              (skill, index) => (
                <li key={index}>{skill}</li>
              )
            )}
          </ul>
          <li>
            <strong>Impact:</strong>{" "}
            {dataProviderDocumentation.conclusion2.impact}
          </li>
        </ul>
      </section>

      {/* Invitación a Revisar el Código */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-semibold text-2xl ">{t("exploreCodeTitle")}</h3>
        <div className="flex flex-row gap-5 ">
          <a
            href="https://github.com/Arvedson/Solar/tree/main/src/dataProvider"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--border-color)] inline-block px-8 py-4 text-lg font-semibold text-[var(--foreground)] bg-[var(--primary)] rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-300 overflow-hidden overflow-x-auto "
          >
            {t("dataProvider")}
          </a>
        </div>
      </section>

      {/*Gestión de Solicitudes */}

      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-8 space-y-6">
        <h3 className="font-bold text-2xl pb-2">{portfolioData.title}</h3>
        <p className="pb-1">{portfolioData.introduction}</p>

        {portfolioData.sections && portfolioData.sections.length > 0 ? (
          portfolioData.sections.map((section) => (
            <div className="" key={section.number}>
              <h3 className="font-bold text-2xl pb-6">
                {section.number}. {section.title}
              </h3>
              <p className="pb-1">{section.description}</p>

              {section.reasons && section.reasons.length > 0 && (
                <ul className="list-disc pl-5 space-y-4">
                  {section.reasons.map((reason, index) => (
                    <li className="pt-3" key={index}>
                      <strong>{reason.title}:</strong> {reason.description}
                    </li>
                  ))}
                </ul>
              )}

              {section.advantages && section.advantages.length > 0 && (
                <ul className="list-disc pl-5 space-y-4">
                  {section.advantages.map((advantage, index) => (
                    <li key={index}>
                      <strong>{advantage.title}:</strong>{" "}
                      {advantage.description}
                    </li>
                  ))}
                </ul>
              )}

              {section.codeExample && section.codeExample.code && (
                <div className="mt-4">
                  <h4 className="font-semibold text-xl">{t("codeExample")}</h4>

                  <pre
                    className={`bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)] my-4 whitespace-pre-wrap overflow-x-auto language-${section.codeExample.language}`}
                  >
                    <code>{section.codeExample.code}</code>
                  </pre>
                </div>
              )}

              {section.codeDescription && (
                <div className="mt-4">
                  <h4 className="font-semibold text-xl pb-4">
                    {t("codeDescription")}
                  </h4>

                  {section.codeDescription.importations &&
                    section.codeDescription.importations.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold">{t("importations")}</h5>
                        <ul className="list-disc pl-5 space-y-4">
                          {section.codeDescription.importations.map(
                            (imp, index) => (
                              <li className="pt-2" key={index}>
                                <strong>
                                  {imp.item} / &#39;{imp.module}&#39;:
                                </strong>{" "}
                                {imp.description}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                  {section.codeDescription.function && (
                    <div>
                      <h5 className="font-semibold pb-4">
                        {t("functionLabel")}{" "}
                        {section.codeDescription.function.name}:
                      </h5>
                      <p className="pb-2">
                        <strong>{t("purpose")}</strong>{" "}
                        {section.codeDescription.function.purpose}
                      </p>

                      <ol className="list-decimal pl-5 space-y-2">
                        {Object.entries(
                          section.codeDescription.function.process
                        ).map(([key, value]) => (
                          <li className="pb-1" key={key}>
                            {typeof value === "string"
                              ? value
                              : value.description}
                            {typeof value !== "string" && value.substeps && (
                              <ul className="list-disc pl-5 space-y-4 pt-4">
                                {Object.entries(value.substeps).map(
                                  ([subKey, subValue]) => (
                                    <li key={subKey}>{subValue}</li>
                                  )
                                )}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p>{t("noSectionsAvailable")}</p>
        )}
      </section>

      {/* Invitación a Revisar el Código */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-semibold text-3x2 ">{t("exploreCodeTitle")}</h3>
        <div className="flex flex-row gap-5 ">
          <a
            href="https://github.com/Arvedson/Solar/blob/main/src/app/api/sendgrid/route.tsx"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--border-color)] inline-block px-8 py-4 text-lg font-semibold text-[var(--foreground)] bg-[var(--primary)] rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-300 overflow-hidden overflow-x-auto "
          >
            {t("ejemplodeuso")}
          </a>
        </div>
      </section>

      <section className=" max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold text-2xl">{t("technologies")}</h2>

        <TechnologiesList2 />
      </section>

      {/* Conclusion */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto space-y-6 ">
        <h2 className="font-bold text-3x1 ">{t("todoapp.conclusion.title")}</h2>
        <p className="">{t("ququlkanapp.conclusion.description")}</p>
        {/* GitHub Link Repo */}
      </section>

      {/* Invitación a Revisar el Código */}
      <div className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h3 className="font-semibold text-2xl ">{t("exploreCodeTitle")}</h3>
        <div className="flex flex-row gap-5 ">
          <a
            href="https://github.com/Arvedson/Solar/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[var(--border-color)] inline-block px-8 py-4 text-lg font-semibold text-[var(--foreground)] bg-[var(--primary)] rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-300 overflow-hidden overflow-x-auto "
          >
            {t("codeinviteququlkan")}
          </a>
        </div>
      </div>
    </div>
  );
}
