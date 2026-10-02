import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Send, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const CTA26 = ({ heading1, content1, action1 }) => {
  const navigate = useNavigate();
  const { t } = useTranslation('translation');
  const shouldReduceMotion = useReducedMotion();

  const handleClick = () => {
    navigate('/Kola-consulting/Contact');
  };

  return (
    <section id="ready" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 dark:from-gray-800 dark:via-gray-850 dark:to-gray-900 text-white shadow-2xl border border-gray-800/80 dark:border-gray-700/60 p-8 sm:p-12 lg:p-16"
        >
          {/* Subtle Ambient Decorative Gradients */}
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#e32c66]/20 rounded-full blur-3xl opacity-70"
          />
          <div 
            aria-hidden="true" 
            className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 bg-[#35a8df]/15 rounded-full blur-3xl opacity-60"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 text-center lg:text-left">
            
            {/* Text Content */}
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/10 text-white backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#e32c66]" />
                <span>Kola Consulting</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-[1.2]">
                {heading1 ?? t('ready') ?? 'Prêt à faire passer votre projet au niveau supérieur ?'}
              </h2>

              <p className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed font-normal">
                {content1 ?? t('readyText') ?? 'Contactez-nous aujourd’hui pour une consultation et découvrez comment notre équipe peut vous accompagner.'}
              </p>
            </div>

            {/* Action Button */}
            <div className="shrink-0 w-full sm:w-auto">
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.03, y: -2 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                onClick={handleClick}
                className="group relative inline-flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#e32c66] to-[#C34C5B] rounded-full shadow-lg hover:shadow-xl hover:shadow-[#e32c66]/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 focus-visible:ring-[#e32c66]"
              >
                <span>{action1 ?? t('getInTouch') ?? 'Contactez-nous'}</span>
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

CTA26.propTypes = {
  heading1: PropTypes.any,
  content1: PropTypes.any,
  action1: PropTypes.any,
};

export default CTA26;
