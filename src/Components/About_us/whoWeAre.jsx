import { PhoneCall, Mail } from 'lucide-react';
import Navbar from '../Home/Navbar';
import Footer4 from '../Home/Footer4';
import { useTranslation } from 'react-i18next';

const KolaConsulting = () => {
  const { t } = useTranslation();

  const services = [
    { color: 'bg-[#35a8df]', text: t('service1_small') },
    { color: 'bg-[#93bf21]', text: t('service2_small') },
    { color: 'bg-[#c71c50]', text: t('service3_small') },
    { color: 'bg-[#27215c]', text: t('service4_small') },
    { color: 'bg-[#c79c67]', text: t('service5_small') },
    { color: 'bg-[#941a7f]', text: t('service6_small') },
    { color: 'bg-[#f09300]', text: t('service7_small') },
  ];

  const targets = [
    { fr: t('institutions') },
    { fr: t('intlOrgs') },
    { fr: t('localGovs')},
    { fr: t('diplomaticMissions') },
    { fr: t('foundations') },
    { fr: t('proOrgs') },
    { fr: t('companies') },
  ];

  return (
    <>
      <Navbar />

      <div className="bg-white text-gray-900 font-sans p-6 max-w-4xl w-[48em] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 mt-20">
          <h1 className="text-4xl font-bold">KOLA CONSULTING S.A.R.L</h1>
          <p className="text-[#e32c66] font-medium mt-2">
            {t('cabinet')}
          </p>
        </div>

        {/* Services */}
        <div className="space-y-4 mb-10">
          {services.map((s, i) => (
            <div
              key={i}
              className={`${s.color} text-white py-2 px-4 rounded-r-full shadow-md h-[60px]`}
            >
              <div className="font-semibold">{s.text}</div>
              {s.sub && <div className="italic text-sm">{s.sub}</div>}
            </div>
          ))}
        </div>

        {/* Targets */}
        <div className="mb-10">
          <div className="bg-[#d46286] text-white font-bold px-6 py-2 w-fit mx-auto rounded-t-lg shadow-md h-[60px]">
            {t('target')}
          </div>
          <ul className="list-disc list-inside mt-4 space-y-2 px-4 text-gray-800">
            {targets.map((target, index) => (
              <li key={index}>
                {target.fr}
                {target.en && (
                  <span className="italic text-sm text-gray-600"> {target.en}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="border-t pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-700">
          <div className="flex items-center space-x-2">
            <PhoneCall className="w-4 h-4" />
            <span>(237) 699 93 24 89 (WhatsApp) / 671 15 42 74</span>
          </div>
          <div className="flex items-center space-x-2 mt-2 md:mt-0">
            <Mail className="w-4 h-4" />
            <span>kolaconsulting.cabinet@gmail.com</span>
          </div>
        </div>

        <Footer4 />
      </div>
    </>
  );
};

export default KolaConsulting;
