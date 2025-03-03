import "./ServiceSection.css";
import React, { useState } from "react";
import { Folder, Camera, Activity, FileSearch, Settings, LayoutTemplate, Handshake } from "lucide-react";
import { motion } from "framer-motion";
import ServiceModal from "./ServiceModal";
import "../../style.css";
import { useTranslation } from "react-i18next";


const ServiceSection = () => {
  const {t} = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ title: "", description: "", points: [] });

  const openModal = (title, description, points) => {
    setSelectedCard({ title, description, points });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 5px 15px rgba(0,0,0,0.1)",
      transition: {
        duration: 0.2
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 font-sans">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container mx-auto px-4 font-sans">
        <motion.h1 
          className="text-center text-3xl font-bold mb-12 font-sans"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {t("my")}<span className="text-red-500  font-sans ml-3">{t("service")}</span>
        </motion.h1>


        {/* Service Grid */}
       <motion.div className="service-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        
        >
          {/* First Row (2 Cards) */}
          <div className="service-row font-sans">
            <motion.div
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              variants={cardVariants}
              onClick={() =>
                openModal(
                  t('service1'),
                  "",
                  [
                    "Gestion administrative quotidienne des projets",
                    "Organisation et suivi des réunions",
                    "Rédaction et archivage des documents",
                    "Coordination avec les différentes parties prenantes"
                  ]
                )
              }
            >
              <div className="flex justify-center">
                <div className="p-3 rounded border border-red-200">
                  <Folder className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mt-4 font-sans">{t('service1')}</h3>
              
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              variants={cardVariants}
              onClick={() =>
                openModal(
                  t('service2'), 
                  "",
                  [
                    t('service2_subtext1'),
                    t('service2_subtext2'),
                    t('service2_subtext3'),
                    t('service2_subtext4')
                  ]
                )
              }
            >
              <div className="flex justify-center">
                <div className="p-3 rounded border border-red-200">
                  <Camera className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mt-4">{t('service2')}</h3>
              
            </motion.div>
          </div>

          {/* Second Row (3 Cards) */}
          <div className="service-row">
            <motion.div
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              variants={cardVariants}
              onClick={() =>
                openModal(
                  t('service3'), 
                  "",
                  [
                    t('service3_subtext1'),
                    t('service3_subtext2'),
                    t('service3_subtext3'),
                    t('service3_subtext4')
                  ]
                )
              }
            >
              <div className="flex justify-center">
                <div className="p-3 rounded border border-red-200">
                  <Activity className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mt-4">{t('service3')}</h3>
              
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              variants={cardVariants}
              onClick={() =>
                openModal(
                  t('service4'),
                  "",
                  [
                    t('service4_subtext1'),
                    t('service4_subtext2'),
                    t('service4_subtext3'),
                    t('service4_subtext4')
                  ]
                )
              }
            >
              <div className="flex justify-center">
                <div className="p-3 rounded border border-red-200">
                  <FileSearch className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mt-4">{t('service4')}</h3>
              
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              variants={cardVariants}
              onClick={() =>
                openModal(
                  t('service5'), 
                  "",
                  [
                    t('service5_subtext1'),
                    t('service5_subtext2'),
                    t('service5_subtext3'),
                    t('service5_subtext4')
                  ]
                )
              }
            >
              <div className="flex justify-center">
                <div className="p-3 rounded border border-red-200">
                  <Settings className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mt-4">{t('service5')}</h3>
              
            </motion.div>
          </div>

          {/* Third Row (2 Cards) */}
          <div className="service-row">
            <motion.div
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              variants={cardVariants}
              onClick={() =>
                openModal(
                  t('service6'), 
                  "",
                  [
                    t('service6_subtext1'),
                    t('service6_subtext2'),
                    t('service6_subtext3'),
                    t('service6_subtext4')
                  ]
                )
              }
            >
              <div className="flex justify-center">
                <div className="p-3 rounded border border-red-200">
                  <LayoutTemplate className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mt-4">{t('service6')}</h3>
              
            </motion.div>

            <motion.div
              className="p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              variants={cardVariants}
              onClick={() =>
                openModal(
                  t('service7'), 
                  "",
                  [
                    t('service7_subtext1'),
                    t('service7_subtext2'),
                    t('service7_subtext3'),
                    t('service7_subtext4')
                  ]
                )
              }
            >
              <div className="flex justify-center">
                <div className="p-3 rounded border border-red-200">
                  <Handshake className="w-6 h-6 text-red-500" />
                </div>
              </div>
              <h3 className="text-center text-lg font-semibold mt-4">{t('service7')}</h3>
              
            </motion.div>
          </div>
        </motion.div>
        

        {/* Modal */}
        <ServiceModal
          isOpen={isModalOpen}
          onClose={closeModal}
          title={selectedCard.title}
          description={selectedCard.description}
          points={selectedCard.points}
        />
      </div>
    </section>
  );
};

export default ServiceSection;