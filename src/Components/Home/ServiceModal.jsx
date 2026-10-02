import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { X, CheckCircle2 } from 'lucide-react';

const ServiceModal = ({ isOpen, onClose, title, description, points }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg bg-white dark:bg-gray-850 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-200/80 dark:border-gray-700/80 z-10 max-h-[85vh] flex flex-col font-sans"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Fermer le modal"
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-750 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e32c66]"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Title */}
            <div className="pr-8 mb-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#e32c66] block mb-1">
                Kola Consulting
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                {title}
              </h2>
            </div>

            {/* Modal Body with smooth scrolling */}
            <div className="overflow-y-auto space-y-4 pr-1">
              {description && (
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {description}
                </p>
              )}

              {/* Detailed Points */}
              {points && points.length > 0 && (
                <div className="space-y-3 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                    Champs d’intervention :
                  </h4>
                  <ul className="space-y-2.5">
                    {points.map((point, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm sm:text-base text-gray-700 dark:text-gray-200">
                        <CheckCircle2 className="w-5 h-5 text-[#e32c66] shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-750 flex justify-end">
              <button
                onClick={onClose}
                className="px-5 py-2.5 text-sm font-semibold text-white bg-[#e32c66] hover:bg-[#c92457] rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e32c66]"
              >
                Compris
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

ServiceModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  points: PropTypes.arrayOf(PropTypes.string),
};

export default ServiceModal;
