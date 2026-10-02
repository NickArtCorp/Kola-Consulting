import { useState, useEffect } from "react";
import Spinner from "../../Spinner";
import { Clock, Globe, Users, Rocket, Award, ChevronRight } from 'lucide-react';
import Navbar from "../Home/Navbar";
import Footer4 from "../Home/Footer4";
import kolaImg from "../../Images/KolaConsulting.jpg";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";

const History = () => {
  const { t } = useTranslation('translation');
  const [loading, setLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const milestones = [
    {
      year: "2015",
      title: "Genèse et Fondation",
      desc: "Création de Kola Consulting avec l'ambition de devenir un acteur majeur de l'intermédiation et du conseil en gestion de projets en Afrique centrale.",
      icon: Clock,
    },
    {
      year: "2018",
      title: "Structuration & Grands Comptes",
      desc: "Développement d'un réseau d'experts associés de haut rang et signature des premiers partenariats institutionnels et d'entreprises.",
      icon: Users,
    },
    {
      year: "2021",
      title: "Expansion Régionale",
      desc: "Accompagnement de projets structurants pour des organisations internationales, des collectivités décentralisées et des représentations diplomatiques.",
      icon: Globe,
    },
    {
      year: "Aujourd'hui",
      title: "Excellence & Impact Durable",
      desc: "Un portefeuille de réalisations diversifié couvrant le lobbying, l'audit financier, la régie opérationnelle et la valorisation culturelle et économique.",
      icon: Rocket,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Notre Trajectoire</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Notre Histoire & Vision
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            De nos débuts fondateurs à notre rayonnement actuel, notre parcours est guidé par l'exigence méthodologique, le dévouement de terrain et l'intégrité déontologique.
          </p>
        </div>

        {/* Responsive Timeline */}
        <div className="relative mb-20">
          {/* Vertical central line on desktop / left line on mobile */}
          <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 w-0.5 bg-gray-200 dark:bg-gray-700 transform sm:-translate-x-1/2" />

          <div className="space-y-10 sm:space-y-12">
            {milestones.map((item, idx) => {
              const Icon = item.icon;
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content Box */}
                  <div className={`w-full pl-16 sm:pl-0 sm:w-1/2 ${
                    isEven ? 'sm:pl-10 text-left' : 'sm:pr-10 sm:text-right text-left'
                  }`}>
                    <div className="p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/70 shadow-xs hover:shadow-md transition-all">
                      <span className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#e32c66]/10 text-[#e32c66] mb-2">
                        {item.year}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Icon Node */}
                  <div className="absolute left-6 sm:left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-[#e32c66] text-white flex items-center justify-center shadow-md ring-4 ring-white dark:ring-gray-900 shrink-0 z-10">
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Empty counterpart spacer on desktop */}
                  <div className="hidden sm:block sm:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Narrative Feature Card */}
        <div className="rounded-3xl bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/70 p-6 sm:p-10 lg:p-12 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <img
                src={kolaImg}
                alt="Cabinet Kola Consulting"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-md border border-gray-100 dark:border-gray-700"
              />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                Un Engagement Pérenne aux Côtés des Décideurs
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Notre cabinet s’appuie sur une équipe permanente pluridisciplinaire et un panel d’experts associés dans les domaines financier, juridique, foncier et commercial.
              </p>
              <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                Nous nous engageons à offrir une confidentialité absolue, une réactivité opérationnelle et une valeur ajoutée mesurable sur chaque mission.
              </p>
              <div className="pt-2">
                <Link
                  to="/Kola-consulting/Contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[#e32c66] hover:bg-[#c92457] shadow-sm transition-colors"
                >
                  <span>Échanger avec notre équipe</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </main>

      <Footer4 />
    </div>
  );
};

export default History;
