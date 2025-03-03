import React, { useState, useEffect } from 'react';
import Navbar from '../Home/Navbar';
import Spinner from '../../Spinner';
import { Card } from 'flowbite-react';
import { Mail, Phone, Linkedin } from 'lucide-react'; // Fixed LinkedIn import
import image from '../../Images/profile.jpeg'
import './OurTeam.css';
import { useTranslation } from 'react-i18next';

const OurTeam = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('main');

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const teamData = {
    main: [
      {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: image, // Use actual image path
        linkedin: "#",
        email: "sarah@company.com",
        phone: "+1234567890",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },

      {
        id: 2,
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: image, // Use actual image path
        linkedin: "#",
        email: "sarah@company.com",
        phone: "+1234567890",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },

      {
        id: 3,
        name: "Sarah Johnson",
        role: "CEO & Founder",
        image: image, // Use actual image path
        linkedin: "#",
        email: "sarah@company.com",
        phone: "+1234567890",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },

      
    ],
    associate: [
      {
        id: 1,
        name: "John Smith",
        role: "External Consultant",
        image: image, // Use actual image path
        linkedin: "#",
        email: "john@company.com",
        phone: "+1234567891",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 2,
        name: "John Smith",
        role: "External Consultant",
        image: image, // Use actual image path
        linkedin: "#",
        email: "john@company.com",
        phone: "+1234567891",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 3,
        name: "John Smith",
        role: "External Consultant",
        image: image, // Use actual image path
        linkedin: "#",
        email: "john@company.com",
        phone: "+1234567891",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
    ]
  };

  if (loading) return <Spinner />;

  return (
    <>
      <Navbar />
      <section className="py-16 bg-gray-50">
      <br />
      <br />
      <br />
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-bold mb-12">
            {t("our")} <span className="text-red-500 ">{t("team")}</span>
          </h1>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('main')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === 'main' ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-100'
                }`}
              >
                {t('mainTeam')}
              </button>
              <button
                onClick={() => setActiveTab('associate')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === 'associate' ? 'bg-red-500 text-white' : 'bg-white text-gray-600 hover:bg-red-100'
                }`}
              >
                {t('associateExperts')}
              </button>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData[activeTab].map((member) => (
              <div key={member.id} className="team-card-animate">
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col items-center">
                    <div className="mb-4 relative overflow-hidden rounded-full image-container">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-32 h-32 rounded-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900">
                      {member.name}
                    </h5>
                    <span className="text-red-500 font-medium mb-4">{member.role}</span>
                    <p className="text-gray-600 text-center mb-4">{member.bio}</p>
                    
                    {/* Social Links */}
                    <div className="flex space-x-4">
                      <a href={member.linkedin} className="hover:text-red-500 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${member.email}`} className="hover:text-red-500 transition-colors">
                        <Mail className="w-5 h-5" />
                      </a>
                      <a href={`tel:${member.phone}`} className="hover:text-red-500 transition-colors">
                        <Phone className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;