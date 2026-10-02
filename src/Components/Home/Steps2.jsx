import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Search, Lightbulb, Palette, Rocket } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Steps2 = ({
  step1Title,
  step1Description,
  step2Title,
  step2Description,
  step3Title,
  step3Description,
  step4Title,
  step4Description,
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation');
  const shouldReduceMotion = useReducedMotion();

  const handleServicesClick = () => {
    navigate('/Kola-consulting/Services');
  };

  const steps = [
    {
      number: '01',
      icon: Search,
      title: step1Title || t('research') || 'Recherche & Diagnostic',
      description: step1Description || t('researchText') || 'Discussion approfondie et brief pour comprendre vos besoins et objectifs stratégiques.',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: step2Title || t('ideation') || 'Idéation & Stratégie',
      description: step2Description || t('ideationText') || 'Élaboration de différentes approches et concepts à forte valeur ajoutée.',
    },
    {
      number: '03',
      icon: Palette,
      title: step3Title || t('creation') || 'Création & Cadrage',
      description: step3Description || t('creationText') || 'Visualisation du projet, calendrier des activités et chiffrage budgétaire précis.',
    },
    {
      number: '04',
      icon: Rocket,
      title: step4Title || t('implementation') || 'Déploiement & Impact',
      description: step4Description || t('implementationText') || 'Exécution rigoureuse, suivi des performances et accompagnement de terrain.',
    },
  ];

  return (
    <section id="discover" className="relative py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 overflow-hidden font-sans">
      {/* Background soft ambient accents */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 -z-10 flex justify-center overflow-hidden"
      >
        <div className="w-[60rem] h-[30rem] bg-gradient-to-b from-[#e32c66]/5 via-transparent to-transparent blur-3xl opacity-60 dark:opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20 mb-3.5"
          >
            {t('powerOfService') || 'Notre Méthodologie'}
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {t('powerOfServiceText') || 'Un accompagnement structuré pour transformer vos ambitions'}
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300"
          >
            {t('inthe')}
            <span className="font-semibold text-gray-900 dark:text-white">
              {t('to_adapt')}
            </span>
          </motion.p>
        </div>

        {/* Steps Grid: 1 col on mobile, 2 cols on tablet, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gray-50/80 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/70 shadow-xs hover:shadow-lg hover:border-[#e32c66]/30 dark:hover:border-[#e32c66]/40 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-gray-700 shadow-xs flex items-center justify-center text-[#e32c66] group-hover:bg-[#e32c66] group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black tracking-tight text-gray-300 dark:text-gray-600 group-hover:text-[#e32c66]/40 transition-colors duration-300">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2.5 group-hover:text-[#e32c66] transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Subtle Accent Bottom Line */}
                <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-700/50 flex items-center justify-between text-xs font-semibold text-[#e32c66]">
                  <span>Étape {step.number}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA to explore all services */}
        <div className="mt-12 text-center">
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.025 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            onClick={handleServicesClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#e32c66] bg-[#e32c66]/10 hover:bg-[#e32c66] hover:text-white rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e32c66]"
          >
            <span>{t('ourServices') || 'Découvrir tous nos services'}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

Steps2.propTypes = {
  step1Title: PropTypes.any,
  step1Description: PropTypes.any,
  step2Title: PropTypes.any,
  step2Description: PropTypes.any,
  step3Title: PropTypes.any,
  step3Description: PropTypes.any,
  step4Title: PropTypes.any,
  step4Description: PropTypes.any,
};

export default Steps2;
