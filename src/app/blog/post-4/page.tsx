'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';



export default function Postpage4() {

  const [mounted, setMounted] = useState(false);
  const { t, i18n } = useTranslation('common');
  const [dataTypes, setDataTypes] = useState({});

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }
  }, []);


  useEffect(() => {
    const loadLocaleData = (lang: string) => {
      if (lang) {
        fetch(`/locales/${lang}/common.json`)
          .then((response) => response.json())
          .then((data) => {
            
            const types = data?.javascriptContent?.javascriptFundamentals?.basicConcepts?.dataTypes?.examples?.primitives?.types;
            if (types) {
              setDataTypes(types);
            } else {
              console.error('Unexpected data structure:', data);
              setDataTypes({});
            }
          })
          .catch((error) => console.error('Error loading the data:', error));
      }
    };

    loadLocaleData(i18n.language);

    i18n.on('languageChanged', loadLocaleData);
    return () => i18n.off('languageChanged', loadLocaleData);
  }, [i18n]);





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
  useEffect(() => {
    const hash = window.location.hash;
  
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        observer.disconnect();
      }
    }, {
      rootMargin: '0px',
      threshold: 1
    });
  
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        observer.observe(element);
      }
    }
  
    return () => observer.disconnect();
  }, []);



    // Prevent rendering until component is mounted to ensure access to browser APIs
    if (!mounted) {
        return null;
      }



  return (
    <div className="container mx-auto px-4 py-12 space-y-12" >
      
      <section>
        <h2 className="pb-6 text-3xl font-bold">{t('BasicConcepts')}</h2>
        <article className="space-y-4">
            <h3 className="text-2xl font-semibold">{t('Variables')}</h3>
            <p>{t('javascriptContent.javascriptFundamentals.basicConcepts.variables.description')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.basicConcepts.variables.example')}</code>
            </div>

            <h3 className="text-2xl font-semibold">{t('Data-Types')}</h3>
            <p>{t('javascriptContent.javascriptFundamentals.basicConcepts.dataTypes.description')}</p>

            <ul className="list-disc pl-6">
              {Object.entries(dataTypes).map(([type, description]) => (
                <li key={type}>{`${type.charAt(0).toUpperCase() + type.slice(1)}: ${description}`}</li>
              ))}
            </ul>


            <p>{t('javascriptContent.javascriptFundamentals.basicConcepts.dataTypes.examples.objects')}</p>
        </article>
    </section>


    <section>
        <h2 className="text-3xl font-bold pb-6">{t('seccionoperators')}</h2>
        <article id="javascriptFundamentalsroute"className="space-y-4">
       
            <p>{t('javascriptContent.javascriptFundamentals.basicConcepts.operators.description')}</p>
            <p>{t('Arithmetic')}: {t('javascriptContent.javascriptFundamentals.basicConcepts.operators.types.arithmetic')}</p>
            <p>{t('Comparison')}: {t('javascriptContent.javascriptFundamentals.basicConcepts.operators.types.comparison')}</p>
            <p>{t('Logical')}: {t('javascriptContent.javascriptFundamentals.basicConcepts.operators.types.logical')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.basicConcepts.operators.example')}</code>
            </div>

            <h3 className="text-2xl font-semibold">{t('Control-Structures')}</h3>
            <p>{t('javascriptContent.javascriptFundamentals.basicConcepts.controlStructures.description')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.basicConcepts.controlStructures.example')}</code>
            </div>
        </article>
    </section>


    <section>
        <h2 className="pb-4 text-3xl font-bold">{t('Functionss')}</h2>
        <article className="space-y-4">
          
            <p>{t('javascriptContent.javascriptFundamentals.functions.functionDeclarations.description')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.functions.functionDeclarations.example')}</code>
            </div>
            <p>{t('javascriptContent.javascriptFundamentals.functions.functionExpressions.description')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.functions.functionExpressions.example')}</code>
            </div>
            <p>{t('javascriptContent.javascriptFundamentals.functions.arrowFunctions.description')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.functions.arrowFunctions.example')}</code>
            </div>

            <h3 className="text-2xl font-semibold">{t('Beyond')}</h3>
            <p>{t('javascriptContent.javascriptFundamentals.es6AndBeyond.features.letAndConst')}</p>
            <p>{t('javascriptContent.javascriptFundamentals.es6AndBeyond.features.templateLiterals.description')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.es6AndBeyond.features.templateLiterals.example')}</code>
            </div>
            <p>{t('javascriptContent.javascriptFundamentals.es6AndBeyond.features.spreadAndRest.spread.description')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.es6AndBeyond.features.spreadAndRest.spread.example')}</code>
            </div>
            <p>{t('javascriptContent.javascriptFundamentals.es6AndBeyond.features.spreadAndRest.rest.description')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.es6AndBeyond.features.spreadAndRest.rest.example')}</code>
            </div>
            <p>{t('javascriptContent.javascriptFundamentals.es6AndBeyond.features.destructuring.description')}</p>
            <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
                <code>{t('javascriptContent.javascriptFundamentals.es6AndBeyond.features.destructuring.example')}</code>
            </div>
        </article>
    </section>


    <section id="javascriptTipsAndTricksroute">
  <h2 className="text-3xl font-bold pb-6">{t('javascriptContent.javascriptTipsAndTricks.title')}</h2>
  <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptTipsAndTricks.lessKnownOperators.title')}</h3>
  <article className="space-y-4">
    <p>{t('javascriptContent.javascriptTipsAndTricks.lessKnownOperators.nullishCoalescingOperator.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.lessKnownOperators.nullishCoalescingOperator.example.initialNullValue.code')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.lessKnownOperators.nullishCoalescingOperator.example.assignedValue.code')}</code></pre>
    </div>

    <p>{t('javascriptContent.javascriptTipsAndTricks.lessKnownOperators.optionalChainingOperator.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.lessKnownOperators.optionalChainingOperator.example.withoutOptionalChaining.code')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.lessKnownOperators.optionalChainingOperator.example.withOptionalChaining.code')}</code></pre>
    </div>

    <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptTipsAndTricks.designPatterns.title')}</h3>
    <p>{t('javascriptContent.javascriptTipsAndTricks.designPatterns.singletonPattern.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.designPatterns.singletonPattern.example.code')}</code></pre>
    </div>
    <p>{t('javascriptContent.javascriptTipsAndTricks.designPatterns.factoryPattern.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.designPatterns.factoryPattern.example.code')}</code></pre>
    </div>
    <p>{t('javascriptContent.javascriptTipsAndTricks.designPatterns.observerPattern.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.designPatterns.observerPattern.example.code')}</code></pre>
    </div>

    <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptTipsAndTricks.errorHandling.title')}</h3>
    <p>{t('javascriptContent.javascriptTipsAndTricks.errorHandling.tryCatch.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.errorHandling.tryCatch.example.code')}</code></pre>
    </div>

    <p>{t('javascriptContent.javascriptTipsAndTricks.errorHandling.promiseErrorHandling.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.errorHandling.promiseErrorHandling.example.code')}</code></pre>
    </div>
    <p>{t('javascriptContent.javascriptTipsAndTricks.errorHandling.asyncAwaitErrorHandling.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptTipsAndTricks.errorHandling.asyncAwaitErrorHandling.example.code')}</code></pre>
    </div>
  </article>
</section>


<section id="javascriptCuriositiesroute">
  <h2 className="text-3xl font-bold pb-6">{t('javascriptContent.javascriptCuriosities.title')}</h2>
  
  <h3 className="pb-4 text-2xl font-semibold">{t('javascriptContent.javascriptCuriosities.historyOfJavaScript.title')}</h3>
  <article className="space-y-4">
    <p>{t('javascriptContent.javascriptCuriosities.historyOfJavaScript.description')}</p>
    <p>{t('javascriptContent.javascriptCuriosities.historyOfJavaScript.evolution')}</p>

    <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptCuriosities.uniqueFeatures.title')}</h3>
    
    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptCuriosities.uniqueFeatures.typeCoercion.title')}</h4>
    <p>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.typeCoercion.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.typeCoercion.examples.additionExample')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.typeCoercion.examples.subtractionExample')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.typeCoercion.examples.booleanTrueExample')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.typeCoercion.examples.booleanFalseExample')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.typeCoercion.examples.comparisonExample')}</code></pre>
    </div>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptCuriosities.uniqueFeatures.hoisting.title')}</h4>
    <p>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.hoisting.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.hoisting.examples.variableHoisting')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.hoisting.examples.functionHoisting')}</code></pre>
    </div>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptCuriosities.uniqueFeatures.eventLoopAndSingleThreadedNature.title')}</h4>
    <p>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.eventLoopAndSingleThreadedNature.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptCuriosities.uniqueFeatures.eventLoopAndSingleThreadedNature.example.eventLoopExample')}</code></pre>
    </div>

    <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptCuriosities.historicalAnecdotesAndIssues.title')}</h3>
    
    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptCuriosities.historicalAnecdotesAndIssues.y2kBug.title')}</h4>
    <p>{t('javascriptContent.javascriptCuriosities.historicalAnecdotesAndIssues.y2kBug.description')}</p>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptCuriosities.historicalAnecdotesAndIssues.arraySortQuirk.title')}</h4>
    <p>{t('javascriptContent.javascriptCuriosities.historicalAnecdotesAndIssues.arraySortQuirk.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptCuriosities.historicalAnecdotesAndIssues.arraySortQuirk.example.arraySortExample')}</code></pre>
    </div>

    <p className="text-lg font-medium">{t('javascriptContent.javascriptCuriosities.conclusion')}</p>
  </article>
</section>



<section id="javascriptBestPracticesroute">
  <h2 className="pb-6 text-3xl font-bold">{t('javascriptContent.javascriptBestPractices.title')}</h2>

  <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.title')}</h3>
  <article className="space-y-4">
    <p>{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.description')}</p>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.codeOrganization.title')}</h4>
    <p>{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.codeOrganization.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.codeOrganization.example.badExample')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.codeOrganization.example.goodExample')}</code></pre>
    </div>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.consistentNaming.title')}</h4>
    <p>{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.consistentNaming.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.consistentNaming.example.badExample')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.cleanAndMaintainableCode.consistentNaming.example.goodExample')}</code></pre>
    </div>

    <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptBestPractices.performance.title')}</h3>
    <p>{t('javascriptContent.javascriptBestPractices.performance.description')}</p>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptBestPractices.performance.loopOptimization.title')}</h4>
    <p>{t('javascriptContent.javascriptBestPractices.performance.loopOptimization.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.performance.loopOptimization.example.badExample')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.performance.loopOptimization.example.goodExample')}</code></pre>
    </div>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptBestPractices.performance.efficientMemoryManagement.title')}</h4>
    <p>{t('javascriptContent.javascriptBestPractices.performance.efficientMemoryManagement.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.performance.efficientMemoryManagement.example.code')}</code></pre>
    </div>

    <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptBestPractices.security.title')}</h3>
    <p>{t('javascriptContent.javascriptBestPractices.security.description')}</p>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptBestPractices.security.preventingXSS.title')}</h4>
    <p>{t('javascriptContent.javascriptBestPractices.security.preventingXSS.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.security.preventingXSS.example.badExample')}</code></pre>
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.security.preventingXSS.example.goodExample')}</code></pre>
    </div>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptBestPractices.security.contentSecurityPolicy.title')}</h4>
    <p>{t('javascriptContent.javascriptBestPractices.security.contentSecurityPolicy.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptBestPractices.security.contentSecurityPolicy.example.htmlSnippet')}</code></pre>
    </div>

    <p className="text-lg font-medium">{t('javascriptContent.javascriptBestPractices.conclusion')}</p>
  </article>
</section>


<section id="javascriptResourcesAndToolsROUTE">
  <h2 className="pb-6 text-3xl font-bold">{t('javascriptContent.javascriptResourcesAndTools.title')}</h2>

  <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.title')}</h3>
  <article className="space-y-4">
    <p>{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.description')}</p>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.react.title')}</h4>
    <p>{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.react.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.react.example.code')}</code></pre>
    </div>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.angular.title')}</h4>
    <p>{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.angular.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.angular.example.code')}</code></pre>
    </div>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.vue.title')}</h4>
    <p>{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.vue.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptResourcesAndTools.librariesAndFrameworks.vue.example.code')}</code></pre>
    </div>

    <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.developmentEnvironments.title')}</h3>
    <p>{t('javascriptContent.javascriptResourcesAndTools.developmentEnvironments.description')}</p>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.developmentEnvironments.nodeJs.title')}</h4>
    <p>{t('javascriptContent.javascriptResourcesAndTools.developmentEnvironments.nodeJs.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptResourcesAndTools.developmentEnvironments.nodeJs.example.code')}</code></pre>
    </div>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.developmentEnvironments.deno.title')}</h4>
    <p>{t('javascriptContent.javascriptResourcesAndTools.developmentEnvironments.deno.description')}</p>
    <div className="bg-[var(--background)] text-[var(--foreground)] p-4 rounded-lg shadow-md border border-[var(--secondary)]">
      <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('javascriptContent.javascriptResourcesAndTools.developmentEnvironments.deno.example.code')}</code></pre>
    </div>

    <h3 className="text-2xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.communitiesAndBlogs.title')}</h3>
    <p>{t('javascriptContent.javascriptResourcesAndTools.communitiesAndBlogs.description')}</p>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.communitiesAndBlogs.stackOverflow.title')}</h4>
    <p>{t('javascriptContent.javascriptResourcesAndTools.communitiesAndBlogs.stackOverflow.description')}</p>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.communitiesAndBlogs.github.title')}</h4>
    <p>{t('javascriptContent.javascriptResourcesAndTools.communitiesAndBlogs.github.description')}</p>

    <h4 className="text-xl font-semibold">{t('javascriptContent.javascriptResourcesAndTools.communitiesAndBlogs.specializedBlogs.title')}</h4>
    <p>{t('javascriptContent.javascriptResourcesAndTools.communitiesAndBlogs.specializedBlogs.description')}</p>

    <p className="text-lg font-medium">{t('javascriptContent.javascriptResourcesAndTools.conclusion')}</p>
  </article>
</section>





    </div>
  );
}
