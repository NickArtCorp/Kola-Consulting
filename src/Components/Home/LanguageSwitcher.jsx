import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation("translation");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  const currentLang = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('preferredLanguage', lng);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [i18n, isOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        whileHover={{ scale: 1.02 }}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-200/80 dark:border-gray-700/80 px-3.5 py-1.5 bg-white/80 dark:bg-gray-800/80 text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm hover:border-[#e32c66]/50 hover:bg-white dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e32c66] transition-colors"
        id="language-menu-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe className="w-4 h-4 text-gray-500 dark:text-gray-400" />
        <span className="flex items-center gap-1.5">
          <span>{currentLang.flag}</span>
          <span className="hidden sm:inline">{currentLang.label}</span>
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="origin-top-right absolute right-0 mt-2 w-48 rounded-xl shadow-xl bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-100 dark:border-gray-700/80 p-1.5 z-50 overflow-hidden"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="language-menu-button"
          >
            <div className="space-y-0.5" role="none">
              {languages.map((language) => {
                const isSelected = i18n.language === language.code;
                return (
                  <button
                    key={language.code}
                    onClick={() => changeLanguage(language.code)}
                    className={`flex items-center justify-between w-full px-3 py-2 text-xs md:text-sm rounded-lg transition-colors text-left ${
                      isSelected
                        ? 'text-[#e32c66] font-semibold bg-[#e32c66]/10 dark:bg-[#e32c66]/20'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100/80 dark:hover:bg-gray-700/60 hover:text-gray-900 dark:hover:text-white'
                    }`}
                    role="menuitem"
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-base">{language.flag}</span>
                      <span>{language.label}</span>
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[#e32c66]" />}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;