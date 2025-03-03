import React, { useState, useEffect } from 'react';
import { Lightbulb, Settings, Rocket, Users } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../Home/Navbar';
import Spinner from '../../Spinner';
import '../../home.css';
import { useTranslation } from 'react-i18next';

const Insights = () => {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('methodology');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const methodologyCards = [
    {
      icon: <Settings className="w-12 h-12 text-blue-500 cursor-pointer font-sans" />,
      title: t('methodology1'),
      description: t('methodology1Text')
    },
    {
      icon: <Rocket className="w-12 h-12 text-green-500 cursor-pointer" />,
      title: t('methodology2'),
      description: t('methodology2Text')
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-red-500 cursor-pointer" />,
      title: t('methodology3'),
      description: t('methodology3Text')
    },
    {
      icon: <Users className="w-12 h-12 text-amber-700 cursor-pointer" />,
      title: t('methodology4'),
      description: t('methodology4Text')
    }
  ];

  const resultCards = [
    {
      title: "EXPERTISE",
      value: "94%",
      description: "Satisfaction rate across projects"
    },
    {
      title: "TRANSPARENCE",
      value: "150%",
      description: "Average return on investment"
    },
    {
      title: "FLEXIBILITE",
      value: "500+",
      description: "Successfully completed"
    }
  ];

  // Animation variants
  const containerVariants = {
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  const numberVariants = {
    initial: {
      opacity: 0,
      scale: 0
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <>
      <Navbar />
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto px-4 min-h-[500px] pt-24"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center text-3xl mb-12 font-bold"
        >
          {t('insights2')}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mb-8"
        >
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('methodology')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeSection === 'methodology'
                  ? 'bg-[#C34C5B] text-white'
                  : 'bg-white text-gray-600 hover:bg-red-100'
              }`}
            >
              {t('ourMethodology')}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveSection('results')}
              className={`px-6 py-2 rounded-full transition-colors duration-300 ${
                activeSection === 'results'
                  ? 'bg-[#C34C5B] text-white'
                  : 'bg-white text-gray-600 hover:bg-red-100'
              }`}
            >
              {t('results')}
            </motion.button>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {activeSection === 'methodology' && (
            <motion.div
              key="methodology"
              variants={containerVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {methodologyCards.map((card, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    {card.icon}
                  </motion.div>
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    {card.description}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          )}
       
          
       {activeSection === 'results' && (
  <>
    {/* Texte stylisé avec animation */}
    <motion.div
      className="bg-gray rounded-2xl shadow-lg p-6 mt-6 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-lg text-gray-700 leading-relaxed">
        Notre <span className="font-bold text-red-500">expertise</span>, notre <span className="font-bold text-blue-500">dévouement</span>, notre <span className="font-bold text-green-500">transparence</span> dans l’exécution de vos projets et notre
        <span className="font-bold text-yellow-500"> flexibilité</span> à nous adapter à vos besoins, nous donnent les meilleurs atouts pour vous accompagner dans le renforcement du lien avec vos publics cibles et l’atteinte de vos objectifs.
      </p>
    </motion.div>

    {/* Cartes de résultats animées */}
    <motion.div
      key="results"
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
    >
     
    </motion.div>
  </>
)}
</AnimatePresence>
      </motion.div>
    </>
  );
};

export default Insights;