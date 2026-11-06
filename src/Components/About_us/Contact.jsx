import { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, XCircle, ArrowRight, FileText } from "lucide-react";
import Navbar from "../Home/Navbar";
import Spinner from "../../Spinner";
import Footer4 from "../Home/Footer4";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";

// MessageModal Component
const MessageModal = ({ message, type, onClose, mailtoUrl, whatsappUrl }) => {
  const { t } = useTranslation('translation');
  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 max-w-md w-full border border-gray-100 dark:border-gray-700 text-center"
      >
        <div className="flex flex-col items-center">
          {isSuccess ? (
            <CheckCircle2 className="h-14 w-14 text-green-500 mb-4" />
          ) : (
            <XCircle className="h-14 w-14 text-red-500 mb-4" />
          )}
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {isSuccess ? (t("success") || "Succès") : (t("error") || "Information")}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{message}</p>

          {!isSuccess && mailtoUrl && (
            <div className="w-full space-y-2 mb-4">
              <a
                href={mailtoUrl}
                className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl w-full font-semibold text-white bg-[#e32c66] hover:bg-[#c92457] transition-colors text-sm shadow-md"
              >
                <Mail className="w-4 h-4" />
                <span>Ouvrir dans ma messagerie (Email direct)</span>
              </a>
              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl w-full font-semibold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-sm shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Envoyer via WhatsApp</span>
                </a>
              )}
            </div>
          )}

          <button
            onClick={onClose}
            className={`px-6 py-2.5 rounded-xl w-full font-semibold transition-colors duration-200 text-sm ${
              isSuccess 
                ? "bg-green-600 hover:bg-green-700 text-white" 
                : "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200"
            }`}
          >
            {t("close") || "Fermer"}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const Contact = () => {
  const { t } = useTranslation('translation');
  const form = useRef();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("contact"); // 'contact' or 'need'
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [messageType, setMessageType] = useState("");
  const [fallbackLinks, setFallbackLinks] = useState({ mailto: "", whatsapp: "" });

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 250);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const mailtoSubject = encodeURIComponent(`Contact Kola Consulting - ${formData.user_name || "Nouveau message"}`);
    const mailtoBody = encodeURIComponent(
      `Nom: ${formData.user_name}\nEmail: ${formData.user_email}\nTéléphone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:kolaconsulting.cabinet@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    const whatsappText = encodeURIComponent(
      `Bonjour Kola Consulting,\nJe m'appelle ${formData.user_name} (${formData.user_email}${formData.phone ? ` / ${formData.phone}` : ""}).\n\n${formData.message}`
    );
    const whatsappLink = `https://wa.me/237699932489?text=${whatsappText}`;

    setFallbackLinks({ mailto: mailtoLink, whatsapp: whatsappLink });

    try {
      await emailjs.sendForm('service_82djl0l', 'template_7t0hohp', form.current, {
        publicKey: 'rOsbdat5MN0Z0yzsI',
      });
      setIsSubmitting(false);
      setStatusMessage(t("messageSentSuccess") || "Votre message a été envoyé avec succès.");
      setMessageType("success");
      setShowMessage(true);
      setFormData({
        user_name: "",
        user_email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setIsSubmitting(false);
      const errDetail = error?.text || error?.message || "";
      console.warn('Email service notice:', errDetail);

      setStatusMessage(
        "Le service de messagerie automatique rencontre une maintenance. Vous pouvez transmettre directement votre message pré-rempli à kolaconsulting.cabinet@gmail.com ou par WhatsApp :"
      );
      setMessageType("error");
      setShowMessage(true);
    }
  };

  const handleCloseModal = () => {
    setShowMessage(false);
    setStatusMessage("");
    setMessageType("");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50/50 dark:bg-gray-900 font-sans text-gray-900 dark:text-gray-100 transition-colors">
      <Navbar />

      <main className="flex-1 pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#e32c66]/10 text-[#e32c66] dark:bg-[#e32c66]/20 mb-3">
            <span>Contactez le Cabinet</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            {t("contactUs") || "Contactez-nous"}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Notre équipe est disponible pour échanger sur vos projets, convenir d’un rendez-vous ou étudier une opportunité de partenariat.
          </p>
        </div>

        {/* Section Toggle Pill */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-full bg-gray-200/80 dark:bg-gray-800 border border-gray-300/60 dark:border-gray-700/60 shadow-xs">
            <button
              onClick={() => setActiveSection("contact")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                activeSection === "contact"
                  ? "bg-[#e32c66] text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {t("contactUs") || "Formulaire direct"}
            </button>
            <button
              onClick={() => setActiveSection("need")}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 focus:outline-none ${
                activeSection === "need"
                  ? "bg-[#e32c66] text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              {t("yourNeed") || "Expression de besoin"}
            </button>
          </div>
        </div>

        {/* Main Content Grid: 12 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left / Primary Column (7 cols) */}
          <div className="lg:col-span-7">
            {activeSection === "contact" ? (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xs border border-gray-200/80 dark:border-gray-700/70 p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                  {t("contactUs") || "Envoyez-nous un message"}
                </h2>

                <form ref={form} onSubmit={sendEmail} className="space-y-4 sm:space-y-5">
                  <input type="hidden" name="reply_to" value={formData.user_email} />
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      {t("fullName") || "Nom complet"}*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="user_name"
                      required
                      value={formData.user_name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-650 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e32c66] text-sm sm:text-base transition-all"
                      placeholder={t("fullNamePlaceholder") || "Votre nom et prénom"}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                        {t("email") || "Courriel"}*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        required
                        value={formData.user_email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-650 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e32c66] text-sm sm:text-base transition-all"
                        placeholder={t("emailPlaceholder") || "votre.email@exemple.com"}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                        {t("contactNumber") || "Téléphone"}*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-650 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e32c66] text-sm sm:text-base transition-all"
                        placeholder={t("contactNumberPlaceholder") || "+237 ..."}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-2">
                      {t("message") || "Message"}*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-750 border border-gray-200 dark:border-gray-650 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e32c66] text-sm sm:text-base transition-all resize-y"
                      placeholder={t("messagePlaceholder") || "Détaillez vos besoins ou la nature de votre projet..."}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#e32c66] hover:bg-[#c92457] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'Envoi en cours...' : (t("sendMessage") || "Envoyer le message")}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xs border border-gray-200/80 dark:border-gray-700/70 p-6 sm:p-8 space-y-6">
                <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-gray-700 flex items-center justify-center text-[#e32c66]">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
                  {t("yourNeed") || "Cadrage préliminaire de votre besoin"}
                </h2>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {t("yourNeedText") || "Pour une prise en charge rapide et un dimensionnement sur-mesure de nos interventions, vous pouvez également renseigner notre questionnaire d'expression de besoins en ligne."}
                </p>
                <div className="pt-2">
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdJlMOlPV3mNmLKj0B-cRFmjWnITciXb6c6qSVhsjPVerf0EA/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#e32c66] hover:bg-[#c92457] text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all w-full sm:w-auto"
                  >
                    <span>{t("fill") || "Remplir le questionnaire"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Contact Coordinates & Hours (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xs border border-gray-200/80 dark:border-gray-700/70 p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-6">
                {t("alternatively") || "Coordonnées du Cabinet"}
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-gray-700 text-[#e32c66] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Courriel
                    </span>
                    <a href="mailto:kolaconsulting.cabinet@gmail.com" className="text-sm sm:text-base font-medium text-gray-900 dark:text-white hover:text-[#e32c66] transition-colors">
                      kolaconsulting.cabinet@gmail.com
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-gray-700 text-[#e32c66] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Téléphone & WhatsApp
                    </span>
                    <a href="tel:+237699932489" className="text-sm sm:text-base font-medium text-gray-900 dark:text-white hover:text-[#e32c66] transition-colors">
                      +237 699 93 24 89
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-50 dark:bg-gray-700 text-[#e32c66] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Siège Social & Bureaux
                    </span>
                    <p className="text-sm sm:text-base font-medium text-gray-900 dark:text-white leading-snug">
                      House of Yatch<br />
                      P.O. Box 12113, Douala-Deido & Bastos, Yaoundé<br />
                      Cameroun
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </main>

      <Footer4 />

      {/* Status Modal */}
      <AnimatePresence>
        {showMessage && (
          <MessageModal
            message={statusMessage}
            type={messageType}
            mailtoUrl={fallbackLinks.mailto}
            whatsappUrl={fallbackLinks.whatsapp}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
