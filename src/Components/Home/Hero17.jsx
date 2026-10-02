import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './hero17.css';

import img1 from '../../Images/Hero_Images/photo_1.jpg';
import img2 from '../../Images/Hero_Images/photo_2.jpg';
import img3 from '../../Images/Hero_Images/photo_3.jpg';
import img4 from '../../Images/Hero_Images/photo_4.jpg';
import img5 from '../../Images/Hero_Images/photo_5.jpg';
import img6 from '../../Images/Hero_Images/photo_6.jpg';
import img7 from '../../Images/Hero_Images/photo_7.jpg';
import img8 from '../../Images/Hero_Images/photo_8.jpg';
import img9 from '../../Images/Hero_Images/photo_9.jpg';
import img10 from '../../Images/Hero_Images/photo_10.jpg';
import img11 from '../../Images/Hero_Images/photo_11.jpg';
import img12 from '../../Images/Hero_Images/photo_12.jpg';
import img13 from '../../Images/Hero_Images/photo_13.jpg';
import img14 from '../../Images/Hero_Images/photo_14.jpg';
import img15 from '../../Images/Hero_Images/photo_15.jpg';
import img16 from '../../Images/Hero_Images/photo_16.jpg';
import img17 from '../../Images/Hero_Images/photo_17.jpg';
import img18 from '../../Images/Hero_Images/photo_18.jpg';
import img19 from '../../Images/Hero_Images/photo_19.jpg';
import img20 from '../../Images/Hero_Images/photo_20.jpg';

const Hero17 = ({
  heading1,
  content1,
  action1,
  action2,
  image1Src = img1,
  image2Src = img2,
  image3Src = img3,
  image4Src = img4,
  image5Src = img5,
  image6Src = img6,
  image7Src = img7,
  image8Src = img8,
  image9Src = img9,
  image10Src = img10,
  image11Src = img11,
  image12Src = img12,
  image13Src = img13,
  image14Src = img14,
  image15Src = img15,
  image16Src = img16,
  image17Src = img17,
  image18Src = img18,
  image19Src = img19,
  image20Src = img20,
  image1Alt = 'Projet Kola Consulting',
  image2Alt = 'Projet Kola Consulting',
  image3Alt = 'Projet Kola Consulting',
  image4Alt = 'Projet Kola Consulting',
  image5Alt = 'Projet Kola Consulting',
  image6Alt = 'Projet Kola Consulting',
  image7Alt = 'Projet Kola Consulting',
  image8Alt = 'Projet Kola Consulting',
  image9Alt = 'Projet Kola Consulting',
  image10Alt = 'Projet Kola Consulting',
  image11Alt = 'Projet Kola Consulting',
  image12Alt = 'Projet Kola Consulting',
  image13Alt = 'Projet Kola Consulting',
  image14Alt = 'Projet Kola Consulting',
  image15Alt = 'Projet Kola Consulting',
  image16Alt = 'Projet Kola Consulting',
  image17Alt = 'Projet Kola Consulting',
  image18Alt = 'Projet Kola Consulting',
  image19Alt = 'Projet Kola Consulting',
  image20Alt = 'Projet Kola Consulting',
}) => {
  const { t } = useTranslation('translation');
  const shouldReduceMotion = useReducedMotion();

  const handleGetStarted = (e) => {
    e?.preventDefault?.();
    const target = document.getElementById('ready');
    if (target) {
      const navOffset = 85;
      const targetY = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  const handleLearnMore = (e) => {
    e?.preventDefault?.();
    const target = document.getElementById('discover');
    if (target) {
      const navOffset = 85;
      const targetY = target.getBoundingClientRect().top + window.pageYOffset - navOffset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  // 20 representative curated images from Kola Consulting's portfolio
  const uniqueImages = [
    { src: image1Src, alt: image1Alt },
    { src: image2Src, alt: image2Alt },
    { src: image3Src, alt: image3Alt },
    { src: image4Src, alt: image4Alt },
    { src: image5Src, alt: image5Alt },
    { src: image6Src, alt: image6Alt },
    { src: image7Src, alt: image7Alt },
    { src: image8Src, alt: image8Alt },
    { src: image9Src, alt: image9Alt },
    { src: image10Src, alt: image10Alt },
    { src: image11Src, alt: image11Alt },
    { src: image12Src, alt: image12Alt },
    { src: image13Src, alt: image13Alt },
    { src: image14Src, alt: image14Alt },
    { src: image15Src, alt: image15Alt },
    { src: image16Src, alt: image16Alt },
    { src: image17Src, alt: image17Alt },
    { src: image18Src, alt: image18Alt },
    { src: image19Src, alt: image19Alt },
    { src: image20Src, alt: image20Alt },
  ];

  // Concatenate for seamless continuous 50% translation infinite loop
  const imagesToDisplay = [...uniqueImages, ...uniqueImages];

  return (
    <section className="relative w-full overflow-hidden pt-8 pb-16 font-sans">
      {/* Subtle background ambient glow (subtle, matching brand colors) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-x-0 -top-20 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-32"
      >
        <div 
          className="relative left-[calc(50%-18rem)] aspect-[1155/678] w-[42rem] -translate-x-1/2 rotate-[25deg] bg-gradient-to-tr from-[#e32c66]/15 to-[#1e3a8a]/10 opacity-70 sm:left-[calc(50%-25rem)] sm:w-[68rem]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Cinematic Eyebrow Pill */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 dark:border-gray-700/80 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-xs mb-6 text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e32c66] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e32c66]"></span>
          </span>
          <span>{t('cabinet') || "Cabinet d’intermédiation et d’accompagnement de projets"}</span>
          <Sparkles className="w-3.5 h-3.5 text-[#e32c66]" />
        </motion.div>

        {/* Hero Title with Subtle Cinematic Entrance */}
        <motion.h1
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 22 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white max-w-4xl leading-[1.15]"
        >
          {heading1 ?? (
            <span className="font-sans">{t('welcome')}</span>
          )}
        </motion.h1>

        {/* Hero Description */}
        <motion.p
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl font-normal leading-relaxed"
        >
          {content1 ?? (
            <span className="font-sans">{t('empower')}</span>
          )}
        </motion.p>

        {/* Action Buttons with Interactive Micro-states */}
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto"
        >
          {/* Primary Button */}
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={handleGetStarted}
            className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-7 py-3.5 text-sm md:text-base font-semibold text-white bg-gradient-to-r from-[#e32c66] to-[#C34C5B] rounded-full shadow-md hover:shadow-lg hover:shadow-[#e32c66]/25 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e32c66]"
          >
            <span>{action1 ?? t('getStarted')}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={shouldReduceMotion ? {} : { scale: 1.025, y: -2 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            onClick={handleLearnMore}
            className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-7 py-3.5 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-200 bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-50 dark:hover:bg-gray-750 hover:border-gray-400 dark:hover:border-gray-600 shadow-xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e32c66]"
          >
            <Compass className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:text-[#e32c66] transition-colors" />
            <span>{action2 ?? t('learnMore')}</span>
          </motion.button>
        </motion.div>
      </div>

      {/* 60fps Infinite Cinematic Marquee with Pause on Hover and Gradient Edge Masks */}
      <motion.div
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.45 }}
        className="mt-14 sm:mt-16 w-full hero-marquee-viewport"
      >
        <div className="hero-marquee-track py-2">
          {imagesToDisplay.map((img, index) => (
            <div
              key={`${img.src}-${index}`}
              className="group relative flex-shrink-0 mx-2.5 sm:mx-3.5 w-60 h-60 sm:w-72 sm:h-72 rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 shadow-xs hover:shadow-xl transition-all duration-500 border border-black/5 dark:border-white/10"
            >
              <img
                src={img.src}
                alt={img.alt || `Kola Consulting projet ${index + 1}`}
                loading={index > 4 ? "lazy" : "eager"}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

Hero17.propTypes = {
  image1Src: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image4Src: PropTypes.string,
  image5Src: PropTypes.string,
  image6Src: PropTypes.string,
  image7Src: PropTypes.string,
  image8Src: PropTypes.string,
  image9Src: PropTypes.string,
  image10Src: PropTypes.string,
  image11Src: PropTypes.string,
  image12Src: PropTypes.string,
  image13Src: PropTypes.string,
  image14Src: PropTypes.string,
  image15Src: PropTypes.string,
  image16Src: PropTypes.string,
  image17Src: PropTypes.string,
  image18Src: PropTypes.string,
  image19Src: PropTypes.string,
  image20Src: PropTypes.string,

  image1Alt: PropTypes.string,
  image2Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image4Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  image6Alt: PropTypes.string,
  image7Alt: PropTypes.string,
  image8Alt: PropTypes.string,
  image9Alt: PropTypes.string,
  image10Alt: PropTypes.string,
  image11Alt: PropTypes.string,
  image12Alt: PropTypes.string,
  image13Alt: PropTypes.string,
  image14Alt: PropTypes.string,
  image15Alt: PropTypes.string,
  image16Alt: PropTypes.string,
  image17Alt: PropTypes.string,
  image18Alt: PropTypes.string,
  image19Alt: PropTypes.string,
  image20Alt: PropTypes.string,

  action2: PropTypes.any,
  action1: PropTypes.any,
  heading1: PropTypes.any,
  content1: PropTypes.any,
};

export default Hero17;
