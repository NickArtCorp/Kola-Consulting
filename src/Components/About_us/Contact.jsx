import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../Home/Navbar";
import Spinner from "../../Spinner";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const {t} = useTranslation();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("contact"); // 'contact' ou 'need'

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Navbar />
      <section className="py-16">
        <br />
        <br />
        <br />
        <div className="container mx-auto px-4">
          <h1 className="text-center text-3xl font-bold mb-12">
            Here to <span className="text-red-500">help</span>
          </h1>

          {/* TOGGLE BUTTONS */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveSection("contact")}
              className={`px-6 py-2 rounded-full ${
                activeSection === "contact" ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
            >
              {t('contactUs')}
            </button>
            <button
              onClick={() => setActiveSection("need")}
              className={`px-6 py-2 rounded-full ${
                activeSection === "need" ? "bg-red-500 text-white" : "bg-gray-200"
              }`}
            >
              {t('yourNeed')}
            </button>
          </div>

          {/* SECTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeSection === "contact" ? (
              // Contact Us Section
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-4">{t('contactUs')}</h2>
                <form>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium">
                       {t('fullName')}*
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-[500px] px-4 py-3 rounded-md bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder= {t('fullNamePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        {t('email')}*
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder={t('emailPlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        {t('contactNumber')}*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder= {t('contactNumberPlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        {t('message')}*
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                        placeholder={t('messagePlaceholder')}
                      />
                    </div><button className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md w-full">
                      {t('sendMessage')} →
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              // Your Need Section
              <div className="bg-white rounded-lg shadow-sm p-8">
                <h2 className="text-2xl font-bold mb-4">{t('yourNeed')}</h2>
                <p className="text-gray-600">
                  {t('yourNeedText')}
                </p>
                <div className="mt-4 space-y-4">
                  <textarea
                    className="w-full px-4 py-3 rounded-md bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-500"
                    placeholder={t('yourNeedPlaceholder')}
                    rows={5}
                  />
                  <button className="px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-md w-full">
                    {t('submit')} →
                  </button>
                </div>
              </div>
            )}

            {/* Contact Info Section */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold mb-4">{t('alternatively')}</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-red-500" />
                  <span>info@kolaconsulting.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-red-500" />
                  <span>+237 (0)710 791303</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-red-500" />
                  <span>House of Yatch<br />P.O. Box 12113, Douala-Deido, Cameroon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;