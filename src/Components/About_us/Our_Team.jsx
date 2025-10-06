import { useState, useEffect } from 'react';
import Navbar from '../Home/Navbar';
import Spinner from '../../Spinner';
import { Card } from 'flowbite-react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import image from '../../Images/profile.jpeg';
import image1 from '../../Images/Michel_Ndoh.jpeg';
import image2 from '../../Images/Yatchokeu_Lucas.jpeg';
import image3 from '../../Images/Rostand_Taguela.jpeg';
import image4 from '../../Images/Aimé_Saidou.png';
import image5 from '../../Images/Claude_Tchaya.jpg';
import image6 from '../../Images/Blaise_Etoa.png';
import image7 from '../../Images/Teguia_Joseph_Richard.jpg';
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
        name: "",
        role: "",
        image: image2,
        linkedin: "#",
        email: "sarah@company.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hidden: true,
      },
      {
        id: 2,
        name: "Yatchokeu Lucas",
        role: t("manager"),
        image: image2,
        linkedin: "#",
        email: "sarah@company.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        id: 3,
        name: "Rostand Taguela",
        role: "",
        image: image3,
        linkedin: "#",
        email: "sarah@company.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        hidden: true,
      },
      {
        id: 4,
        name: "Michel Ndoh",
        role: t("ho"),
        image: image1,
        linkedin: "#",
        email: "sarah@company.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 5,
        name: "Aimé Saidou",
        role: t("charge"),
        image: image4,
        linkedin: "#",
        email: " ",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        
      },
      {
        id: 6,
        name: "Rostand Taguela",
        role: t("secretariat"),
        image: image3,
        linkedin: "#",
        email: "",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      }
    ],
    associate: [
      {
        id: 1,
        name: "Maurice Charles Elame",
        role: "Commercial Leadership Expert",
        image: image,
        linkedin: "#",
        email: "john@company.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 2,
        name: "Blaise Etoa",
        role: "Expert en communication marketing et gestion de projets",
        image: image6,
        linkedin: "#",
        email: "john@company.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 3,
        name: "Claude Roger Tchaya",
        role: "Expert Foncier",
        image: image5,
        linkedin: "#",
        email: "john@company.com",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        id: 4,
        name: "Teguia Joseph Richard",
        role: "Expert comptable et Audit",
        image: image7,
        linkedin: "#",
        email: "john@company.com",
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
        <div className="container mx-auto px-4 max-w-full">
          <h1 className="text-center text-3xl font-bold mb-12">
            {t("our")} <span className="text-[#e32c66]">{t("team")}</span>
          </h1>

          {/* Tabs */}
          <div className="flex justify-center mb-8 ">
            <div className="flex space-x-4">
              <button
                onClick={() => setActiveTab('main')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === 'main' ? 'bg-[#e32c66] text-white' : 'bg-white text-gray-600 hover:bg-red-100'
                }`}
              >
                {t('mainTeam')}
              </button>
              <button
                onClick={() => setActiveTab('associate')}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeTab === 'associate' ? 'bg-[#e32c66] text-white' : 'bg-white text-gray-600 hover:bg-red-100'
                }`}
              >
                {t('associateExperts')}
              </button>
            </div>
          </div>

          {/* Team Grid */}
          <div className= {`grid gap-6 mx-auto ${
    activeTab === 'main'
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl'
      : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-w-7xl'
  }`}>


            {teamData[activeTab].map((member) => (
              <div key={member.id} className="team-card-animate">
                <Card
                  className={`hover:shadow-lg transition-shadow duration-300 ${
                    member.hidden ? 'invisible' : ''
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div className="mb-4 relative overflow-hidden rounded-full image-container">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-39 h-40  object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <h5 className="text-xl font-bold tracking-tight text-gray-900">
                      {member.name}
                    </h5>
                    <span className="text-[#e32c66] font-medium mb-4 h-9 text-center">
                      {member.role}
                    </span>
                    
                    <div className="flex space-x-4">
                      <a href={member.linkedin} className="hover:text-red-500 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${member.email}`} className="hover:text-red-500 transition-colors">
                        <Mail className="w-5 h-5" />
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
