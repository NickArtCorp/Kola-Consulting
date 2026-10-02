import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Layers, ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import image1a from '../../Images/Hero_Images/photo_3.jpg';
import image1b from '../../Images/Hero_Images/photo_1.jpg';
import image2a from '../../Images/Hero_Images/photo_4.jpg';
import image2b from '../../Images/Hero_Images/photo_2.jpg';

const RealisationMini = () => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation');
  const shouldReduceMotion = useReducedMotion();

  const card1Slides = [
    {
      image: image1a,
      title: 'Accompagnement Stratégique',
      subtitle: 'Campagne Institutionnelle & Marque',
      tag: 'Stratégie',
    },
    {
      image: image1b,
      title: 'Engagement & Visibilité',
      subtitle: 'Croissance de communauté et partenariats',
      tag: 'Relations Publiques',
    },
  ];

  const card2Slides = [
    {
      image: image2a,
      title: 'Coordination Opérationnelle',
      subtitle: 'Optimisation de projets terrain',
      tag: 'Gestion de Projet',
    },
    {
      image: image2b,
      title: 'Déploiement Institutionnel',
      subtitle: 'Intermédiation & Représentation',
      tag: 'Intermédiation',
    },
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || shouldReduceMotion) return;

    const interval = setInterval(() => {
      setIndex1((prev) => (prev + 1) % card1Slides.length);
    }, 4500);

    const interval2 = setInterval(() => {
      setIndex2((prev) => (prev + 1) % card2Slides.length);
    }, 5500);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [isHovered, shouldReduceMotion, card1Slides.length, card2Slides.length]);

  const handleExplore = () => {
    navigate('/Kola-consulting/Realisation');
  };

  const currentSlide1 = card1Slides[index1];
  const currentSlide2 = card2Slides[index2];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-gray-100/70 dark:from-gray-900 dark:to-gray-850 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Descriptive Info */}
          <motion.div 
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20">
              <Layers className="w-3.5 h-3.5" />
              <span>{t('realisation') || 'Nos Réalisations'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-[1.2]">
              {t('explore') || 'Découvrez nos réalisations d’impact'}
            </h2>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('exploreText') || 
                "Découvrez comment nous accompagnons institutions, entreprises et organisations internationales dans la concrétisation et l'évaluation de leurs projets à fort impact."}
            </p>

            <div>
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.025, x: 2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleExplore}
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#e32c66] hover:bg-[#c92457] rounded-full shadow-md hover:shadow-lg hover:shadow-[#e32c66]/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e32c66]"
              >
                <span>{t('exploreButton') || 'Explorer tous nos projets'}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Responsive Dual Showcase Cards */}
          <div 
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Card 1 */}
            <div 
              onClick={handleExplore}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-500 border border-black/5 dark:border-white/10 h-72 sm:h-80"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide1.image}
                  src={currentSlide1.image}
                  alt={currentSlide1.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent pointer-events-none" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white shadow-xs backdrop-blur-md">
                  {currentSlide1.tag}
                </span>
              </div>

              {/* Content & Hover Indicator */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex justify-between items-end">
                <div className="space-y-1 pr-2">
                  <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#e32c66] transition-colors line-clamp-1">
                    {currentSlide1.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                    {currentSlide1.subtitle}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-[#e32c66] transition-colors">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Slide Switcher Dots */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                {card1Slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIndex1(i);
                    }}
                    aria-label={`Slide ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index1 === i ? 'bg-[#e32c66] w-4' : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div 
              onClick={handleExplore}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-gray-900 shadow-md hover:shadow-2xl transition-all duration-500 border border-black/5 dark:border-white/10 h-72 sm:h-80"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentSlide2.image}
                  src={currentSlide2.image}
                  alt={currentSlide2.title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </AnimatePresence>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-transparent pointer-events-none" />

              {/* Category Pill */}
              <div className="absolute top-4 left-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-white/90 dark:bg-gray-900/90 text-gray-900 dark:text-white shadow-xs backdrop-blur-md">
                  {currentSlide2.tag}
                </span>
              </div>

              {/* Content & Hover Indicator */}
              <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white flex justify-between items-end">
                <div className="space-y-1 pr-2">
                  <h3 className="font-bold text-lg sm:text-xl text-white group-hover:text-[#e32c66] transition-colors line-clamp-1">
                    {currentSlide2.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 line-clamp-2">
                    {currentSlide2.subtitle}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:bg-[#e32c66] transition-colors">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Slide Switcher Dots */}
              <div className="absolute top-4 right-4 flex gap-1.5">
                {card2Slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation();
                      setIndex2(i);
                    }}
                    aria-label={`Slide ${i + 1}`}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index2 === i ? 'bg-[#e32c66] w-4' : 'bg-white/60 hover:bg-white'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default RealisationMini;
