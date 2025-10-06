import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import image1a from '../../Images/Hero_Images/photo_3.jpg';
import image1b from '../../Images/Hero_Images/photo_1.jpg';
import image2a from '../../Images/Hero_Images/photo_4.jpg';
import image2b from '../../Images/Hero_Images/photo_2.jpg';
import { useTranslation } from 'react-i18next';

const RealisationMini = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const card1Slides = [
    {
      image: image1a,
      title: 'Social Media Success',
      subtitle: 'Brand Awareness Campaign',
      link: '/Kola-consulting/Realisation/1',
    },
    {
      image: image1b,
      title: 'Online Engagement',
      subtitle: 'Community Growth',
      link: '/Kola-consulting/Realisation/2',
    },
  ];

  const card2Slides = [
    {
      image: image2a,
      title: 'Marketing Strategy',
      subtitle: 'Conversion Optimization',
      link: '/Kola-consulting/Realisation/3',
    },
    {
      image: image2b,
      title: 'Product Launch',
      subtitle: 'Go-to-Market Plan',
      link: '/Kola-consulting/Realisation/4',
    },
  ];

  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const [fade1, setFade1] = useState(true);
  const [fade2, setFade2] = useState(true);

  useEffect(() => {
    const interval1 = setInterval(() => {
      setFade1(false);
      setTimeout(() => {
        setIndex1((prev) => (prev + 1) % card1Slides.length);
        setFade1(true);
      }, 500);
    }, 3000);

    const interval2 = setInterval(() => {
      setFade2(false);
      setTimeout(() => {
        setIndex2((prev) => (prev + 1) % card2Slides.length);
        setFade2(true);
      }, 500);
    }, 4500);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, []);

  const handleExplore = () => {
    navigate('/Kola-consulting/Realisation');
  };

  return (
    <section className="bg-gradient-to-r from-gray-50 to-[#e32c662f] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight">
              {t('explore')}
            </h2>

            <p className="text-[17px] text-gray-600 leading-relaxed">
              <br />
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleExplore}
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#e32c66] hover:bg-[#c12657] transition-colors duration-200 transform hover:scale-105"
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

          {/* Cards with separate fade transitions */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <a
              href={card1Slides[index1].link}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 block"
            >
              <img
                src={card1Slides[index1].image}
                alt={card1Slides[index1].title}
                className={`w-full h-48 object-cover transform group-hover:scale-105 transition-all duration-700 ease-in-out ${
                  fade1 ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-semibold text-lg">{card1Slides[index1].title}</h3>
                <p className="text-blue-200 text-sm">{card1Slides[index1].subtitle}</p>
              </div>
            </a>

            {/* Card 2 */}
            <a
              href={card2Slides[index2].link}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 block"
            >
              <img
                src={card2Slides[index2].image}
                alt={card2Slides[index2].title}
                className={`w-full h-48 object-cover transform group-hover:scale-105 transition-all duration-700 ease-in-out ${
                  fade2 ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-white font-semibold text-lg">{card2Slides[index2].title}</h3>
                <p className="text-blue-200 text-sm">{card2Slides[index2].subtitle}</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealisationMini;
