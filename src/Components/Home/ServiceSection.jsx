import { useState } from "react";
import { Folder, Camera, Activity, FileSearch, Settings, LayoutTemplate, Handshake, ChevronRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import ServiceModal from "./ServiceModal";
import { useTranslation } from "react-i18next";

const ServiceSection = () => {
  const { t } = useTranslation('translation');
  const shouldReduceMotion = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ title: "", description: "", points: [] });

  const openModal = (title, description, points) => {
    setSelectedCard({ title, description, points });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const servicesList = [
    {
      id: 1,
      icon: Folder,
      title: t('service1'),
      subtextKey: 'service1',
      points: [
        t('service1_subtext1'),
        t('service1_subtext2'),
        t('service1_subtext3'),
        t('service1_subtext4'),
      ],
    },
    {
      id: 2,
      icon: Camera,
      title: t('service2'),
      subtextKey: 'service2',
      points: [
        t('service2_subtext1'),
        t('service2_subtext2'),
        t('service2_subtext3'),
        t('service2_subtext4'),
      ],
    },
    {
      id: 3,
      icon: Activity,
      title: t('service3'),
      subtextKey: 'service3',
      points: [
        t('service3_subtext1'),
        t('service3_subtext2'),
        t('service3_subtext3'),
        t('service3_subtext4'),
      ],
    },
    {
      id: 4,
      icon: FileSearch,
      title: t('service4'),
      subtextKey: 'service4',
      points: [
        t('service4_subtext1'),
        t('service4_subtext2'),
        t('service4_subtext3'),
        t('service4_subtext4'),
      ],
    },
    {
      id: 5,
      icon: Settings,
      title: t('service5'),
      subtextKey: 'service5',
      points: [
        t('service5_subtext1'),
        t('service5_subtext2'),
        t('service5_subtext3'),
        t('service5_subtext4'),
      ],
    },
    {
      id: 6,
      icon: LayoutTemplate,
      title: t('service6'),
      subtextKey: 'service6',
      points: [
        t('service6_subtext1'),
        t('service6_subtext2'),
        t('service6_subtext3'),
        t('service6_subtext4'),
      ],
    },
    {
      id: 7,
      icon: Handshake,
      title: t('service7'),
      subtextKey: 'service7',
      points: [
        t('service7_subtext1'),
        t('service7_subtext2'),
        t('service7_subtext3'),
        t('service7_subtext4'),
      ],
    },
  ];

  return (
    <section className="pt-24 pb-20 sm:pt-28 sm:pb-24 px-4 sm:px-6 lg:px-8 font-sans bg-gray-50/60 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20 mb-3"
          >
            <span>Kola Consulting Expertise</span>
          </motion.div>

          <motion.h1
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            {t("OUR")} <span className="text-[#e32c66]">{t("service")}</span>
          </motion.h1>

          <motion.p
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            {t('powerOfServiceText') || 
              "Une offre complète d’intermédiation, d’audit, de structuration et de gestion opérationnelle pour sécuriser la réussite de vos initiatives."}
          </motion.p>
        </div>

        {/* Responsive Service Grid: 1 col (mobile), 2 cols (tablet), 3 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {servicesList.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={shouldReduceMotion ? {} : { y: -4 }}
                onClick={() => openModal(service.title, "", service.points)}
                className="group relative flex flex-col justify-between p-7 sm:p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xs hover:shadow-xl border border-gray-200/80 dark:border-gray-700/70 cursor-pointer transition-all duration-300"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-red-50 dark:bg-gray-700/80 border border-red-100 dark:border-red-900/30 flex items-center justify-center text-[#e32c66] mb-5 group-hover:bg-[#e32c66] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white leading-snug group-hover:text-[#e32c66] transition-colors mb-3">
                    {service.title}
                  </h3>

                  {/* Preview Points */}
                  <ul className="space-y-1.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                    {service.points.slice(0, 2).map((point, pIdx) => (
                      <li key={pIdx} className="line-clamp-1 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e32c66]/60 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Link */}
                <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between text-xs font-semibold text-[#e32c66]">
                  <span>{t('learnMore') || 'Détails du service'}</span>
                  <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedCard.title}
          description={selectedCard.description}
          points={selectedCard.points}
        />
      </div>
    </section>
  );
};

export default ServiceSection;
