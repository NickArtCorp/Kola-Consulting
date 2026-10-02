import { PhoneCall, Mail, Target, Award, CheckCircle2 } from 'lucide-react';
import Navbar from '../Home/Navbar';
import Footer4 from '../Home/Footer4';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';

const KolaConsulting = () => {
  const { t } = useTranslation('translation');
  const shouldReduceMotion = useReducedMotion();

  const services = [
    { color: 'bg-[#35a8df]', text: t('service1_small') || 'Administration et Secrétariat de Projets' },
    { color: 'bg-[#93bf21]', text: t('service2_small') || 'Représentation' },
    { color: 'bg-[#c71c50]', text: t('service3_small') || 'Actions de terrain' },
    { color: 'bg-[#27215c]', text: t('service4_small') || 'Audit des Demandes de Financement ou de Sponsoring' },
    { color: 'bg-[#c79c67]', text: t('service5_small') || 'Régie Opérationnelle' },
    { color: 'bg-[#941a7f]', text: t('service6_small') || 'Montage de Projets' },
    { color: 'bg-[#f09300]', text: t('service7_small') || 'Intermédiation' },
  ];

  const targets = [
    { fr: t('institutions') || 'Institutions' },
    { fr: t('intlOrgs') || 'Organisations internationales et régionales' },
    { fr: t('localGovs') || 'Collectivités territoriales décentralisées' },
    { fr: t('diplomaticMissions') || 'Représentations diplomatiques' },
    { fr: t('foundations') || 'Fondations' },
    { fr: t('proOrgs') || 'Associations et organisations professionnelles' },
    { fr: t('companies') || 'Entreprises' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <main className="flex-1 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 sm:pb-20">
        {/* Header */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>À Propos de nous</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            KOLA CONSULTING S.A.R.L
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#e32c66] font-medium mt-3 leading-relaxed">
            {t('cabinet') || "Cabinet d’intermédiation et d’accompagnement de projets"}
          </p>
        </motion.div>

        {/* Services Showcase */}
        <div className="mb-14 sm:mb-16">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#e32c66]" />
            <span>Nos Domaines de Compétence</span>
          </h2>
          <div className="space-y-3 sm:space-y-3.5">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`${s.color} text-white py-3.5 px-5 sm:px-6 rounded-xl sm:rounded-r-full shadow-xs hover:shadow-md transition-all duration-300 flex items-center min-h-[54px]`}
              >
                <div className="font-semibold text-sm sm:text-base leading-snug">{s.text}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Targets Section */}
        <div className="mb-14 sm:mb-16">
          <div className="bg-[#d46286] text-white font-bold px-6 py-2.5 w-fit rounded-xl sm:rounded-t-xl shadow-xs mb-6 flex items-center gap-2">
            <Target className="w-5 h-5" />
            <span>{t('target') || 'NOS CIBLES'}</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {targets.map((target, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/70 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#e32c66] shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-gray-800 dark:text-gray-200 font-medium leading-snug">
                  {target.fr}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Contact Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/70 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-gray-700 flex items-center justify-center text-[#e32c66] shrink-0">
              <PhoneCall className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Ligne directe & WhatsApp</div>
              <div className="font-semibold text-gray-900 dark:text-white">
                (237) 699 93 24 89 / 671 15 42 74
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-red-50 dark:bg-gray-700 flex items-center justify-center text-[#e32c66] shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Courriel officiel</div>
              <a href="mailto:gregnickyatch@gmail.com" className="font-semibold text-gray-900 dark:text-white hover:text-[#e32c66] transition-colors">
                gregnickyatch@gmail.com
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer4 />
    </div>
  );
};

export default KolaConsulting;
