'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

export default function Post2Page() {
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
      threshold: 1.0
    });
  
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        observer.observe(element);
      }
    }
  
    return () => observer.disconnect();
  }, []);
  

  if (!mounted) {
    return null;
  }



  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <section className="bg-gradient-to-r from-[var(--secondary-light)] to-[var(--primary)] text-white p-8 rounded-lg shadow-md mb-24 lg:mx-[200px] items-center">
        <h1 className="text-5xl font-bold mb-4 text-center">{t('post2_title')}</h1>
        <p className="text-xl text-center max-w-3xl mx-auto">{t('post2_intro')}</p>
      </section>

      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('functionalVsClass_title')}</h2>
        <p>{t('functionalVsClass_intro')}</p>
        <h3>{t('functionalVsClass_class.title')}</h3>
        <p id="functional-vs-class">{t('functionalVsClass_class.description')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('functionalVsClass_class.inefficiency_example')}</code></pre>
        </div>
        <h3>{t('functionalVsClass_functional.title')}</h3>
        <p>{t('functionalVsClass_functional.description')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('functionalVsClass_functional.efficiency_example')}</code></pre>
        </div>
      </section>
 
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 id="reactMemo_usage" className="font-bold">{t('reactMemo_usage.title')}</h2>
        <p>{t('reactMemo_usage.description')}</p>
        <h3>{t('reactMemo_without_title')}</h3>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('reactMemo_usage.example_without_memo')}</code></pre>
        </div>
        <h3>{t('reactMemo_with_title')}</h3>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('reactMemo_usage.example_with_memo')}</code></pre>
        </div>
      </section>

      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <p>{t('memo_practical_use.description')}</p>
        <p>{t('memo_practical_use.inefficiency_consequences')}</p>
      </section>

        {/* New section for Render Optimization */}
        <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('renderOptimization_title')}</h2>
        <p>{t('renderOptimization_goal')}</p>

        <h3 className="font-semibold">{t('inefficientRendering_title')}</h3>
        <p>{t('inefficientRendering_problem')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('inefficientCode_example')}</code></pre>
        </div>
        <p>{t('inefficientRendering_description')}</p>

        <h3 className="font-semibold">{t('efficientRendering_title')}</h3>
        <p>{t('efficientRendering_solution')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('efficientCode_example')}</code></pre>
        </div>
        <p>{t('efficientRendering_description')}</p>
      </section>

        {/* New section for Efficient State Management */}
        <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('stateManagement_title')}</h2>
        <p id="stateManagement_goalroute">{t('stateManagement_goal')}</p>

        <h3>{t('stateInefficiency_title')}</h3>
        <p>{t('stateInefficiency_problem')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('inefficientCode_example3')}</code></pre>
        </div>
        <p>{t('stateInefficiency_description')}</p>

        <h3>{t('stateEfficiency_title')}</h3>
        <p>{t('stateEfficiency_solution')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('efficientCode_example3')}</code></pre>
        </div>
        <p>{t('stateEfficiency_description')}</p>
      </section>

       

      {/* New section for Lazy Loading and Code Splitting */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('lazyLoading_title')}</h2>
        <p>{t('lazyLoading_intro')}</p>
        
        <h3>{t('lazyLoading_definition')}</h3>
        <h3>{t('codeSplitting_definition')}</h3>
        
        <h3 className="font-semibold">{t('inefficientExample_title')}</h3>
        <p>{t('inefficientExample_description')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('inefficientExample_code')}</code></pre>
        </div>

        <h3 className="font-semibold">{t('efficientExample_title')}</h3>
        <p>{t('efficientExample_description')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('efficientExample_code')}</code></pre>
        </div>

        <h3>{t('bestPractices_title')}</h3>
        <p>{t('bestPractices_details')}</p>
        <p>{t('performanceImpact_description')}</p>
      </section>

       {/* New section for Using Fragments to Reduce the DOM */}
       <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 id="fragmentsUsage_titleroute" className="font-bold">{t('fragmentsUsage_title')}</h2>
        <p>{t('fragmentsConcept_description')}</p>
        <p>{t('fragmentsImportance_description')}</p>
        <p>{t('fragmentsFunctionality_description')}</p>

        <h3 className="font-semibold">{t('exampleWithoutFragments_title')}</h3>
        <p>{t('exampleWithoutFragments_implication')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('exampleWithoutFragments_code')}</code></pre>
        </div>

        <h3 className="font-semibold">{t('exampleWithFragments_title')}</h3>
        <p>{t('exampleWithFragments_implication')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('exampleWithFragments_code')}</code></pre>
        </div>

        <h3>{t('fragmentsBenefits_title')}</h3>
        <p>{t('fragmentsBenefits_details')}</p>

        <h3>{t('fragmentsConsiderations_title')}</h3>
        <p>{t('fragmentsConsiderations_details')}</p>

        <p>{t('fragmentsSummary_description')}</p>
      </section>

      {/* New section for List Optimization and Keys */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('listOptimization_title')}</h2>
        <p>{t('keysConcept_description')}</p>
        <p>{t('keysImportance_description')}</p>

        <h3 className="font-semibold">{t('indicesIssues_title')}</h3>
        <p>{t('indicesIssues_description')}</p>

        <h3 className="font-semibold">{t('inefficientKeysExample_title')}</h3>
        <p>{t('inefficientKeysExample_implication')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('inefficientKeysExample_code')}</code></pre>
        </div>

        <h3 className="font-semibold">{t('efficientKeysExample_title')}</h3>
        <p>{t('efficientKeysExample_description')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
          <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('efficientKeysExample_code')}</code></pre>
        </div>

        <h3>{t('keysBestPractices_title')}</h3>
        <p>{t('keysBestPractices_details')}</p>
        <p>{t('keysSummary_description')}</p>
      </section>

      {/* New section for Use of Development Tools */}
      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('devToolsUsage_title')}</h2>
        
        <h3>{t('profilerConcept_title')}</h3>
        <p>{t('profilerConcept_description')}</p>
        <p>{t('profilerImportance_description')}</p>
        
        <h3 className="font-semibold">{t('profilerExample_title')}</h3>
        <p>{t('profilerExample_description')}</p>
        
        <h3>{t('lighthouseConcept_title')}</h3>
        <p>{t('lighthouseConcept_description')}</p>
        <p>{t('lighthouseImportance_description')}</p>
        
        <h3 className="font-semibold">{t('lighthouseExample_title')}</h3>
        <p>{t('lighthouseExample_description')}</p>
        
        <h3>{t('devToolsBestPractices_title')}</h3>
        <p>{t('devToolsBestPractices_description')}</p>
      </section>

      <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
      <h2 className="font-bold">{t('imageOptimizationImportance.title')}</h2>
      <p>{t('imageOptimizationImportance.content.0')}</p>

      <h3>{t('imageOptimizationToolsTechniques.title')}</h3>
      <p>{t('imageOptimizationToolsTechniques.content.0')}</p>
      <p>{t('imageOptimizationToolsTechniques.content.1')}</p>
      <p>{t('imageOptimizationToolsTechniques.content.2')}</p>
      
      <h3>{t('imageOptimizationToolsTechniques.content.3')}</h3>
      <p>{t('imageOptimizationToolsTechniques.content.4')}</p>
      <p>{t('imageOptimizationToolsTechniques.content.5')}</p>

      <h3>{t('automationWithNodejs.title')}</h3>
      <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
        <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('automationWithNodejs.codeExample')}</code></pre>
      </div>

      <h3>{t('realWorldExamples.title')}</h3>
      <p>{t('realWorldExamples.content.0')}</p>
      <p>{t('realWorldExamples.content.1')}</p>
      <p>{t('realWorldExamples.content.2')}</p>

      <h3>{t('conclusion.title')}</h3>
      <p>{t('conclusion.content.0')}</p>
    </section>


          {/* New section for HTTP/2 and Modern Servers */}
          <section className="prose prose-lg dark:prose-dark max-w-3xl mx-auto mb-12 space-y-6">
        <h2 className="font-bold">{t('http2ModernServers.title')}</h2>
        <p>{t('http2ModernServers.introduction')}</p>
        
        <h3>{t('http2ModernServers.mainFeatures.title')}</h3>
        <p>{t('http2ModernServers.mainFeatures.multiplexing')}</p>
        <p>{t('http2ModernServers.mainFeatures.headerCompression')}</p>
        <p>{t('http2ModernServers.mainFeatures.resourcePrioritization')}</p>
        <p>{t('http2ModernServers.mainFeatures.serverPush')}</p>
        
        <h3>{t('http2ModernServers.httpHeadersCacheConfiguration.title')}</h3>
        <p>{t('http2ModernServers.httpHeadersCacheConfiguration.introduction')}</p>
        <p>{t('http2ModernServers.httpHeadersCacheConfiguration.cacheControl')}</p>
        <p>{t('http2ModernServers.httpHeadersCacheConfiguration.etag')}</p>
        
        <h3>{t('http2ModernServers.impactExamples.title')}</h3>
        <p>{t('http2ModernServers.impactExamples.withHttp2.multiplexing')}</p>
        <p>{t('http2ModernServers.impactExamples.withHttp2.headerCompression')}</p>
        <p>{t('http2ModernServers.impactExamples.withoutHttp2.multipleConnections')}</p>
        <p>{t('http2ModernServers.impactExamples.withoutHttp2.largeRepeatedHeaders')}</p>
        
        <h3 className="font-semibold">{t('http2ModernServers.practicalExample.title')}</h3>
        <p>{t('http2ModernServers.practicalExample.description')}</p>
        <div className="p-4 rounded-lg shadow-md" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)', border: '1px solid var(--secondary)' }}>
        <pre className="whitespace-pre-wrap overflow-x-auto"><code>{t('http2ModernServers.practicalExample.code')}</code></pre>

        </div>
       
        <p>{t('http2ModernServers.practicalExample.outcome')}</p>
        
        <h3>{t('http2ModernServers.conclusion')}</h3>
        <p>{t('http2ModernServers.conclusion')}</p>
      </section>
        {/* Conclusión */}
      <section className="bg-gradient-to-r from-[var(--primary)] to-[var(--secondary-light)] text-white p-8 rounded-lg shadow-md mt-12">
            <h2 className="text-3xl font-bold mb-4">{t('post2_conclusion2')}</h2>
            <p>{t('post2_end')}</p>
      </section>

    </div>
  );
}
