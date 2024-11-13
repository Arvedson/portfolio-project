'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import PortfolioTechnologiesList from "../../components/PortfolioTechnologiesList";

interface PortfolioSection {
  number: number;
  title: string;
  description: string;
  reasons?: { title: string; description: string }[];
  advantages?: { title: string; description: string }[];
  codeExample?: { code: string; language: string };
  codeDescription?: {
    importations?: { item: string; module: string; description: string }[];
    function?: {
      name: string;
      purpose: string;
      process: {
        [key: string]: string | { description: string; substeps?: { [subkey: string]: string } };
      };
    };
  };
}

interface PortfolioData {
  title: string;
  introduction: { header: string; description: string };
  sections: PortfolioSection[];
}

export default function PortfolioPage() {
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

  const portfolioData = t('portfolio', { returnObjects: true }) as PortfolioData;
  const exploreLinks = [
    {
      url: 'https://github.com/Arvedson/portfolio-project/blob/main/src/app/projects/ququlkan-webapp/page.tsx',
      label: t('codeinvitesection'),
    },
    {
      url: 'https://github.com/Arvedson/portfolio-project/blob/main/src/app/globals.css',
      label: t('codeinvitesection2'),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 space-y-12 min-h-screen">
      {/* Main Section */}
      <section className="portfolio-header prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-12">
  <h3 className="font-bold text-2xl">{portfolioData.title}</h3>
  <p>{portfolioData.introduction.description}</p>
</section>


      {/* Loop through sections */}
      {portfolioData.sections.map((section, index) => (
        <section key={index} className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-12">
          <h3 className="font-bold text-2xl">
            {section.number}. {section.title}
          </h3>
          <p>{section.description}</p>

          {/* Reasons */}
          {section.reasons && (
            <ul className="list-disc pl-5 space-y-4">
              {section.reasons.map((reason, reasonIndex) => (
                <li key={reasonIndex}>
                  <h4 className="font-semibold text-xl">{reason.title}</h4>
                  <p>{reason.description}</p>
                </li>
              ))}
            </ul>
          )}

          {/* Advantages */}
          {section.advantages && (
            <ul className="list-disc pl-5 space-y-4">
              {section.advantages.map((advantage, advIndex) => (
                <li key={advIndex}>
                  <h4 className="font-semibold text-xl">{advantage.title}</h4>
                  <p>{advantage.description}</p>
                </li>
              ))}
            </ul>
          )}

          {/* Code Example */}
          {section.codeExample && (
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
              <pre className="whitespace-pre-wrap overflow-x-auto">
                <code>{section.codeExample.code}</code>
              </pre>
            </div>
          )}

          {/* Code Description */}
          {section.codeDescription && (
            <div className="mt-4">
              <h4 className="font-semibold text-xl pb-4">{t('codeDescription')}</h4>
              {section.codeDescription.importations && section.codeDescription.importations.length > 0 && (
                <div className="mb-4">
                  <h5 className="font-semibold">{t('importations')}</h5>
                  <ul className="list-disc pl-5 space-y-4">
                    {section.codeDescription.importations.map((imp, impIndex) => (
                      <li key={impIndex}>
                        <strong>{imp.item} / &apos;{imp.module}&apos;:</strong> {imp.description}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {section.codeDescription.function && (
                <div>
                  <h5 className="font-semibold pb-4">
                    {t('functionLabel')} {section.codeDescription.function.name}:
                  </h5>
                  <p className="pb-2">
                    <strong>{t('purpose')}</strong> {section.codeDescription.function.purpose}
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    {Object.entries(section.codeDescription.function.process).map(([key, value]) => (
                      <li key={key}>
                        {typeof value === 'string' ? value : value.description}
                        {typeof value !== 'string' && value.substeps && (
                          <ul className="list-disc pl-5 space-y-4 pt-4">
                            {Object.entries(value.substeps).map(([subKey, subValue]) => (
                              <li key={subKey}>{subValue}</li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          )}

          {/* Show the button after specific iterations */}
          {exploreLinks[index - 1] && (
            <div className="mt-8">
              <h3 className="font-semibold text-2xl">{t('exploreCodeTitle')}</h3>
              <div className="flex flex-row gap-5">
                <a
                  href={exploreLinks[index - 1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" mt-6 border border-[var(--border-color)] inline-block px-8 py-4 text-lg font-semibold text-[var(--foreground)] bg-[var(--primary)] rounded-md hover:bg-[var(--primary-hover)] transition-colors duration-300 overflow-hidden overflow-x-auto"
                >
                  {exploreLinks[index - 1].label}
                </a>
              </div>
            </div>
          )}

          {/* PortfolioTechnologiesList on the last iteration */}
          {index === portfolioData.sections.length - 1 && <PortfolioTechnologiesList />}
        </section>
      ))}
    </div>
  );
}
