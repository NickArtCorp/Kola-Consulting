import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Mail, Phone, MapPin, ArrowUp, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import kolaLogo from '../../Images/KolaConsulting.jpg';

const Footer4 = ({ id }) => {
  const { t } = useTranslation('translation');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id={id} className="w-full bg-gray-900 text-gray-300 font-sans border-t border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        
        {/* Main Footer Grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <img 
                src={kolaLogo} 
                alt="Kola Consulting Logo" 
                className="w-10 h-10 rounded-lg object-cover shadow-sm ring-1 ring-white/10" 
              />
              <span className="font-extrabold text-lg text-white tracking-wide">
                KOLA CONSULTING
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              {t('cabinet') || "Cabinet d’intermédiation et d’accompagnement de projets structurants en Afrique."}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-medium text-gray-400">
              <Globe className="w-4 h-4 text-[#e32c66]" />
              <span>Douala & Yaoundé, Cameroun</span>
            </div>
          </div>

          {/* Col 2: Navigation Rapide */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t('home') || 'Navigation'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  {t('home') || 'Accueil'}
                </Link>
              </li>
              <li>
                <Link to="/Kola-consulting/About_us" className="hover:text-white transition-colors">
                  {t('aboutUs') || 'À propos'}
                </Link>
              </li>
              <li>
                <Link to="/Kola-consulting/whoWeAre" className="hover:text-white transition-colors">
                  {t('whoWeAre') || 'Qui sommes-nous'}
                </Link>
              </li>
              <li>
                <Link to="/Kola-consulting/Our_Team" className="hover:text-white transition-colors">
                  {t('ourTeam') || 'Notre équipe'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services & Réalisations */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t('services') || 'Expertises'}
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/Kola-consulting/Services" className="hover:text-white transition-colors">
                  {t('services') || 'Nos Services'}
                </Link>
              </li>
              <li>
                <Link to="/Kola-consulting/Realisation" className="hover:text-white transition-colors">
                  {t('realisation') || 'Nos Réalisations'}
                </Link>
              </li>
              <li>
                <Link to="/Kola-consulting/Insights" className="hover:text-white transition-colors">
                  {t('insights') || 'Perspectives & Actualités'}
                </Link>
              </li>
              <li>
                <Link to="/Kola-consulting/Contact" className="hover:text-white transition-colors">
                  {t('contactUs') || 'Contact'}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t('contactUs') || 'Contact Direct'}
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e32c66] shrink-0 mt-0.5" />
                <span>Akwa, Douala & Bastos, Yaoundé, Cameroun</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#e32c66] shrink-0" />
                <a href="mailto:gregnickyatch@gmail.com" className="hover:text-white transition-colors">
                  gregnickyatch@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#e32c66] shrink-0" />
                <a href="tel:+237699000000" className="hover:text-white transition-colors">
                  +237 699 82 82 82
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            © {new Date().getFullYear()} Kola Consulting S.A.R.L. {t('allRightsReserved') || 'Tous droits réservés.'}
          </p>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Retour en haut"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 transition-colors focus:outline-none focus:ring-1 focus:ring-[#e32c66]"
          >
            <span>Haut de page</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};

Footer4.propTypes = {
  id: PropTypes.string,
};

export default Footer4;
