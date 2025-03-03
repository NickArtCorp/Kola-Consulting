import React from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../../Images/profile.jpeg';
import { useTranslation } from 'react-i18next';

const RealisationMini = () => {
  const navigate = useNavigate();
  const {t} = useTranslation();

  const handleClick = () => {
    navigate('/Kola-consulting/Realisation');
  };

  return (
    <section className="bg-gradient-to-r from-gray-50 to-red-100 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
              {t('explore')}
            </h2>
            
            <p className="text-[17px] text-gray-600 leading-relaxed">
              {t('exploreText')}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleClick}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-colors duration-200 transform hover:scale-105"
              >
                {t('exploreButton')}
                <svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M17 8l4 4m0 0l-4 4m4-4H3" 
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 gap-4">
            {/* Preview Cards */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image}
                alt="Social Media Case Study"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-semibold text-lg">Social Media Success</h3>
                <p className="text-blue-200 text-sm">Brand Awareness Campaign</p>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={image} 
                alt="Marketing Strategy"
                className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-semibold text-lg">Marketing Strategy</h3>
                <p className="text-blue-200 text-sm">Conversion Optimization</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealisationMini;