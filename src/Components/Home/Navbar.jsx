import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, Menu, X, Users, BookOpen, UserCheck, Mail, Sparkles, ArrowRight } from "lucide-react";
import Logo from "../../Images/KolaConsulting.jpg";
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";
import '../../i18n';

const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // High-performance passive scroll listener for dynamic navbar compression & glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 16;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  // Close dropdown on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Close mobile menu upon navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const currentPath = location.pathname;
  const isHome = currentPath === "/" || currentPath === "/Kola-consulting" || currentPath === "/Kola-consulting/";
  const isAboutActive = ["/whoWeAre", "/Insights", "/Our_Team", "/Contact"].some(
    p => currentPath.includes(p)
  );
  const isServicesActive = currentPath.includes("Services");
  const isRealisationActive = currentPath.includes("Realisation");

  const aboutSublinks = [
    {
      to: "/Kola-consulting/whoWeAre",
      label: t('whoWeAre'),
      desc: t('cabinet') || "Notre vision, mission et valeurs fondamentales",
      icon: Users,
    },
    {
      to: "/Kola-consulting/Insights",
      label: t('insights'),
      desc: "Analyses stratégiques et perspectives sectorielles",
      icon: BookOpen,
    },
    {
      to: "/Kola-consulting/Our_Team",
      label: t('ourTeam'),
      desc: "Experts permanents et partenaires associés",
      icon: UserCheck,
    },
    {
      to: "/Kola-consulting/Contact",
      label: t('contactUs'),
      desc: "Échanger avec nos conseillers sur votre projet",
      icon: Mail,
    },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200/70 dark:border-gray-800/70 py-2.5"
          : "bg-white/75 dark:bg-gray-900/75 backdrop-blur-sm border-b border-gray-100/50 dark:border-gray-800/50 py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo with subtle hover spring */}
        <Link
          to="/"
          id="nav-brand-logo"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e32c66] rounded-xl"
          aria-label="Kola Consulting Accueil"
        >
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="overflow-hidden rounded-xl bg-white p-0.5 shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <img
              src={Logo}
              alt="Kola Consulting Logo"
              className={`transition-all duration-300 object-contain ${
                isScrolled ? "h-11 md:h-12" : "h-12 md:h-14"
              }`}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Navigation principale">
          {/* Home Link */}
          <Link
            to="/Kola-consulting/"
            id="nav-link-home"
            className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
              isHome
                ? "text-[#e32c66] font-semibold"
                : "text-gray-700 dark:text-gray-200 hover:text-[#e32c66] dark:hover:text-[#e32c66] hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
            }`}
          >
            {t('home')}
            {isHome && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 rounded-full bg-[#e32c66]/10 dark:bg-[#e32c66]/20 -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* About Us Dropdown with Framer Motion */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button
              id="mega-menu-full-dropdown-button"
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              className={`relative flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e32c66] ${
                isAboutActive
                  ? "text-[#e32c66] font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:text-[#e32c66] dark:hover:text-[#e32c66] hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
              }`}
            >
              <span>{t('aboutUs')}</span>
              <motion.div
                animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-3.5 h-3.5" />
              </motion.div>
              {isAboutActive && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute inset-0 rounded-full bg-[#e32c66]/10 dark:bg-[#e32c66]/20 -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  id="mega-menu-full-dropdown"
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.97 }}
                  animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 }}
                  exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full pt-2 w-[340px] z-50 origin-top-left"
                >
                  <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 p-2.5 space-y-1">
                    <div className="px-3 py-1.5 mb-1 border-b border-gray-100 dark:border-gray-800/70 flex items-center justify-between">
                      <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                        {t('aboutUs')}
                      </span>
                      <Sparkles className="w-3.5 h-3.5 text-[#e32c66]" />
                    </div>
                    {aboutSublinks.map((sublink) => {
                      const Icon = sublink.icon;
                      const isActive = currentPath.includes(sublink.to.split('/').pop());
                      return (
                        <Link
                          key={sublink.to}
                          to={sublink.to}
                          className={`group flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            isActive
                              ? "bg-[#e32c66]/10 dark:bg-[#e32c66]/20 text-[#e32c66]"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800/80 text-gray-700 dark:text-gray-200"
                          }`}
                        >
                          <div className={`mt-0.5 p-2 rounded-lg transition-colors ${
                            isActive
                              ? "bg-[#e32c66] text-white"
                              : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-[#e32c66]/10 group-hover:text-[#e32c66]"
                          }`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-sm font-semibold flex items-center justify-between">
                              <span className="group-hover:text-[#e32c66] transition-colors">{sublink.label}</span>
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#e32c66]" />
                            </div>
                            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 mt-0.5">
                              {sublink.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Link */}
          <Link
            to="/Kola-consulting/Services"
            id="nav-link-services"
            className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
              isServicesActive
                ? "text-[#e32c66] font-semibold"
                : "text-gray-700 dark:text-gray-200 hover:text-[#e32c66] dark:hover:text-[#e32c66] hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
            }`}
          >
            {t('services')}
            {isServicesActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 rounded-full bg-[#e32c66]/10 dark:bg-[#e32c66]/20 -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* Realisation Link */}
          <Link
            to="/Kola-consulting/Realisation"
            id="nav-link-realisation"
            className={`relative px-3.5 py-2 text-sm font-medium rounded-full transition-colors ${
              isRealisationActive
                ? "text-[#e32c66] font-semibold"
                : "text-gray-700 dark:text-gray-200 hover:text-[#e32c66] dark:hover:text-[#e32c66] hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
            }`}
          >
            {t('realisation')}
            {isRealisationActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 rounded-full bg-[#e32c66]/10 dark:bg-[#e32c66]/20 -z-10"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>
        </nav>

        {/* Right side controls: Language Switcher + Contact CTA + Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />

          {/* Desktop Quick Contact Pill */}
          <motion.div
            whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
            whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
            className="hidden lg:block"
          >
            <Link
              to="/Kola-consulting/Contact"
              id="nav-contact-cta"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-[#e32c66] to-[#C34C5B] rounded-full shadow-sm hover:shadow-md hover:brightness-105 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#e32c66]"
            >
              <span>{t('contactUs')}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.92 }}
            type="button"
            id="mobile-menu-toggle-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e32c66]"
            aria-controls="mobile-navigation"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/80 dark:border-gray-800/80 px-4 pt-2 pb-6 overflow-hidden"
          >
            <div className="space-y-1 pt-2">
              <Link
                to="/Kola-consulting/"
                className={`block py-2.5 px-3.5 rounded-xl text-base font-medium transition-colors ${
                  isHome
                    ? "bg-[#e32c66]/10 text-[#e32c66] font-semibold"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t('home')}
              </Link>

              {/* Submenu About Accordion */}
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center justify-between w-full py-2.5 px-3.5 rounded-xl text-base font-medium text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <span>{t('aboutUs')}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180 text-[#e32c66]" : "text-gray-400"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 pr-1 py-1 space-y-1 overflow-hidden"
                    >
                      {aboutSublinks.map((sublink) => {
                        const Icon = sublink.icon;
                        return (
                          <Link
                            key={sublink.to}
                            to={sublink.to}
                            className="flex items-center gap-2.5 py-2 px-3 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:text-[#e32c66] hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
                          >
                            <Icon className="w-4 h-4 text-[#e32c66]" />
                            <span>{sublink.label}</span>
                          </Link>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                to="/Kola-consulting/Services"
                className={`block py-2.5 px-3.5 rounded-xl text-base font-medium transition-colors ${
                  isServicesActive
                    ? "bg-[#e32c66]/10 text-[#e32c66] font-semibold"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t('services')}
              </Link>

              <Link
                to="/Kola-consulting/Realisation"
                className={`block py-2.5 px-3.5 rounded-xl text-base font-medium transition-colors ${
                  isRealisationActive
                    ? "bg-[#e32c66]/10 text-[#e32c66] font-semibold"
                    : "text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {t('realisation')}
              </Link>

              <div className="pt-4 mt-2 border-t border-gray-100 dark:border-gray-800">
                <Link
                  to="/Kola-consulting/Contact"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#e32c66] to-[#C34C5B] shadow-md hover:brightness-105"
                >
                  <Mail className="w-4 h-4" />
                  <span>{t('contactUs')}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
