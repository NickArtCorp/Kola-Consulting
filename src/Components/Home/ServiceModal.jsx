import React from 'react';
import './ServiceModal.css';
import { AnimatePresence, motion } from 'framer-motion';

const ServiceModal = ({ isOpen, onClose, title, description, points }) => {
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.75,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.75,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        {/* Overlay - customize the bg-opacity here */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 transition-opacity"  
          onClick={onClose}
        />
        
        {/* Modal Content */}
        <motion.div className="modal-content relative bg-white rounded-lg p-6 max-w-[3000px] w-[600px] h-[400px] m-4 z-50"
         variants={modalVariants}
         initial="hidden"
         animate="visible"
         exit="exit"
        
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Title */}
          <h2 className="text-xl font-semibold mb-4 ml-10">{title}</h2>

          {/* Modal Description */}
          <div className="text-gray-600 ml-10">
            <p className="mb-4">{description}</p>
            
            {/* Detailed Points */}
            <ul className="list-disc pl-5 space-y-2">
              {points && points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          </motion.div>
        </div> 
      </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ServiceModal;