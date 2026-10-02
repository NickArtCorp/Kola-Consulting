import { useState, useEffect } from 'react';
import Navbar from '../Home/Navbar';
import Footer4 from '../Home/Footer4';
import Spinner from '../../Spinner';
import { Mail, Linkedin } from 'lucide-react';
import image from '../../Images/profile.jpeg';
import image1 from '../../Images/Michel_Ndoh.jpeg';
import image2 from '../../Images/Yatchokeu_Lucas.jpeg';
import image3 from '../../Images/Rostand_Taguela.jpeg';
import image4 from '../../Images/Aimé_Saidou.png';
import image5 from '../../Images/Claude_Tchaya.jpg';
import image6 from '../../Images/Blaise_Etoa.png';
import image7 from '../../Images/Teguia_Joseph_Richard.jpg';
import { useTranslation } from 'react-i18next';
import { motion, useReducedMotion } from 'framer-motion';

const OurTeam = () => {
  const { t } = useTranslation('translation');
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('main');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 250);
    return () => clearTimeout(timer);
  }, []);

  const teamData = {
    main: [
      {
        id: 2,
        name: "Yatchokeu Lucas",
        role: t("manager") || "Directeur Général",
        image: image2,
        linkedin: "#",
        email: "contact@kola-consulting.com",
      },
      {
        id: 4,
        name: "Michel Ndoh",
        role: t("ho") || "Directeur des Opérations",
        image: image1,
        linkedin: "#",
        email: "contact@kola-consulting.com",
      },
      {
        id: 5,
        name: "Aimé Saidou",
        role: t("charge") || "Chargé de Mission",
        image: image4,
        linkedin: "#",
        email: "contact@kola-consulting.com",
      },
      {
        id: 6,
        name: "Rostand Taguela",
        role: t("secretariat") || "Secrétariat et Suivi de Projets",
        image: image3,
        linkedin: "#",
        email: "contact@kola-consulting.com",
      }
    ],
    associate: [
      {
        id: 1,
        name: "Maurice Charles Elame",
        role: t("Commercial_L") || "Expert en Leadership Commercial",
        image: image,
        linkedin: "#",
        email: "contact@kola-consulting.com",
      },
      {
        id: 2,
        name: "Blaise Etoa",
        role: "Expert Communication Marketing & Gestion de Projets",
        image: image6,
        linkedin: "#",
        email: "contact@kola-consulting.com",
      },
      {
        id: 3,
        name: "Claude Roger Tchaya",
        role: t("Land Expert") || "Expert Foncier",
        image: image5,
        linkedin: "#",
        email: "contact@kola-consulting.com",
      },
      {
        id: 4,
        name: "Teguia Joseph Richard",
        role: t("Ch_A") || "Expert-Comptable et Commissaire aux Comptes",
        image: image7,
        linkedin: "#",
        email: "contact@kola-consulting.com",
      },
    ]
  };

  if (loading) return <Spinner />;

  const activeMembers = teamData[activeTab];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20 mb-3">
            <span>Gouvernance & Talents</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {t("OUR")} <span className="text-[#e32c66]">{t("team")}</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300">
            Une équipe chevronnée associant expertise stratégique, vision de terrain et rigueur déontologique.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-full bg-gray-200/80 dark:bg-gray-800 border border-gray-300/60 dark:border-gray-700/60 shadow-xs">
            <button
              onClick={() => setActiveTab('main')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                activeTab === 'main'
                  ? 'bg-[#e32c66] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t('mainTeam') || 'Équipe Permanente'}
            </button>
            <button
              onClick={() => setActiveTab('associate')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                activeTab === 'associate'
                  ? 'bg-[#e32c66] text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              {t('associateExperts') || 'Experts Associés'}
            </button>
          </div>
        </div>

        {/* Team Grid: 1 col (mobile), 2 cols (tablet), 4 cols (desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {activeMembers.map((member, index) => (
            <motion.div
              key={`${activeTab}-${member.id}`}
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="group flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/80 dark:border-gray-700/70 shadow-xs hover:shadow-xl transition-all duration-300"
            >
              {/* Profile Image with subtle ring and zoom */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-5 ring-4 ring-gray-100 dark:ring-gray-700 group-hover:ring-[#e32c66]/40 transition-all duration-300 bg-gray-100 dark:bg-gray-700 shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Name & Role */}
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#e32c66] transition-colors">
                {member.name}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-[#e32c66] mt-1.5 mb-4 line-clamp-2 min-h-[36px]">
                {member.role}
              </p>

              {/* Social / Contact Icons */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-700/60 w-full justify-center text-gray-400 dark:text-gray-500">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Profil LinkedIn de ${member.name}`}
                    className="p-2 rounded-full hover:text-[#e32c66] hover:bg-red-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                )}
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    aria-label={`Envoyer un courriel à ${member.name}`}
                    className="p-2 rounded-full hover:text-[#e32c66] hover:bg-red-50 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <Footer4 />
    </div>
  );
};

export default OurTeam;
