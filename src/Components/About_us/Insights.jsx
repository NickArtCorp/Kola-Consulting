import { useState, useEffect } from 'react';
import { Lightbulb, Settings, Rocket, Users, TrendingUp, Award } from 'lucide-react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Navbar from '../Home/Navbar';
import Spinner from '../../Spinner';
import Footer4 from '../Home/Footer4';
import { useTranslation } from 'react-i18next';

const Insights = () => {
  const { t } = useTranslation('translation');
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('methodology');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const methodologyCards = [
    {
      icon: Settings,
      color: 'text-blue-500 bg-blue-50 dark:bg-blue-900/20',
      title: t('research') || 'Recherche & Diagnostic',
      description: t("researchText") || 'Analyse approfondie de vos enjeux et cadrage préliminaire.'
    },
    {
      icon: Lightbulb,
      color: 'text-[#e32c66] bg-red-50 dark:bg-red-900/20',
      title: t('ideation') || 'Idéation & Stratégie',
      description: t('ideationText') || 'Conception des leviers tactiques et des approches innovantes.'
    },
    {
      icon: Rocket,
      color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-900/20',
      title: t('creation') || 'Création & Cadrage',
      description: t('creationText') || 'Modélisation, planning opérationnel et estimation budgétaire.'
    },
    {
      icon: Users,
      color: 'text-amber-500 bg-amber-50 dark:bg-amber-900/20',
      title: t('implementation') || 'Déploiement & Suivi',
      description: t('implementationText') || 'Mise en œuvre rigoureuse sur le terrain et mesure d’impact.'
    }
  ];

  const resultCards = [
    {
      title: t("expertise") || "EXPERTISE",
      value: "94%",
      description: "Taux de satisfaction global de nos clients et partenaires",
      color: "text-[#e32c66]"
    },
    {
      title: t("transparency") || "TRANSPARENCE",
      value: "100%",
      description: "Conformité déontologique et rigueur d'audit",
      color: "text-blue-500"
    },
    {
      title: t("flexibility") || "FLEXIBILITÉ",
      value: "50+",
      description: "Projets stratégiques accompagnés avec succès",
      color: "text-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20 mb-3">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Perspectives & Méthodes</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {t('insights2') || 'Notre Approche & Résultats'}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Comprendre notre cadre opératoire et les indicateurs qui attestent de la qualité de nos interventions.
          </p>
        </div>

        {/* Tab Toggle */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-gray-200/80 dark:bg-gray-800 border border-gray-300/60 dark:border-gray-700/60 shadow-xs">
            <button
              onClick={() => setActiveSection('methodology')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                activeSection === 'methodology'
                  ? 'bg-[#e32c66] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t('ourMethodology') || 'Notre Méthodologie'}
            </button>
            <button
              onClick={() => setActiveSection('results')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                activeSection === 'results'
                  ? 'bg-[#e32c66] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t('results') || 'Nos Valeurs & Résultats'}
            </button>
          </div>
        </div>

        {/* Content Tabs */}
        <AnimatePresence mode="wait">
          {activeSection === 'methodology' ? (
            <motion.div
              key="methodology"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {methodologyCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/70 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col"
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${card.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              {/* Core Philosophy Banner */}
              <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/70 shadow-xs text-center max-w-3xl mx-auto">
                <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed font-medium">
                  {t("our")}{" "}
                  <span className="font-bold text-[#e32c66]">{t("expertise")}</span>,{" "}
                  {t("ourrr")}{" "}
                  <span className="font-bold text-blue-500">{t("dedication")}</span>,{" "}
                  {t("ourrr")}{" "}
                  <span className="font-bold text-emerald-500">{t("transparency")}</span>{" "}
                  {t("inthe")}{" "}
                  <span className="font-bold text-amber-500">{t("flexibility")}</span>{" "}
                  {t("to_adapt")}
                </p>
              </div>

              {/* Metric Cards: 1 col (mobile), 3 cols (desktop) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {resultCards.map((card, index) => (
                  <div
                    key={index}
                    className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/70 shadow-xs text-center"
                  >
                    <div className={`text-4xl sm:text-5xl font-black mb-2 ${card.color}`}>
                      {card.value}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                      {card.title}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <Footer4 />
    </div>
  );
};

export default Insights;
