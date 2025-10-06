import { Fragment, useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "../Home/Navbar";
import Spinner from "../../Spinner";
import Footer4 from "../Home/Footer4";
import emailjs from "@emailjs/browser";
import "../../style.css";
import "../../home.css";
import { useTranslation } from "react-i18next";
import { CheckCircle, XCircle } from "lucide-react"; // Import icons for success/error

// MessageModal Component
const MessageModal = ({ message, type, onClose }) => {
  const { t } = useTranslation();
  const isSuccess = type === "success";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl p-6 sm:p-8 max-w-sm w-full transform transition-all scale-100 opacity-100">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 focus:outline-none">
            <XCircle className="h-6 w-6" />
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          {isSuccess ? (
            <CheckCircle className="h-16 w-16 text-green-500 mb-4 animate-bounce-in" />
          ) : (
            <XCircle className="h-16 w-16 text-red-500 mb-4 animate-bounce-in" />
          )}
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {isSuccess ? t("success") : t("error")}
          </h3>
          <p className="text-gray-600 mb-6">{message}</p>
          <button
            onClick={onClose}
            className={`px-6 py-3 rounded-md w-full font-medium transition-colors duration-200 
              ${isSuccess ? "bg-green-600 hover:bg-green-700 text-white" : "bg-red-600 hover:bg-red-700 text-white"}`}
          >
            {t("close")}
          </button>
        </div>
      </div>
    </div>
  );
};


const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("contact"); // 'contact' or 'need'
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone: "",
    message: "",
  });
  // State to hold the status message (success or error)
  const [statusMessage, setStatusMessage] = useState("");
  // State to control the visibility of the status message
  const [showMessage, setShowMessage] = useState(false);
  // State to determine the type of message (success or error)
  const [messageType, setMessageType] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Send email using EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_82djl0l', 'template_7t0hohp', form.current, {
        publicKey: 'rOsbdat5MN0Z0yzsI',
      })
      .then(
        () => {
          // On success, set the status message, type, and show it
          setStatusMessage(t("messageSentSuccess"));
          setMessageType("success");
          setShowMessage(true);
          // Clear the form fields
          setFormData({
            user_name: "",
            user_email: "",
            phone: "",
            message: "",
          });
          // No need for a timeout here, as the user will close the modal
        },
        (error) => {
          // On error, set an error status message, type, and show it
          console.log('FAILED...', error.text);
          setStatusMessage(t("messageSentError"));
          setMessageType("error");
          setShowMessage(true);
          // No need for a timeout here, as the user will close the modal
        },
      );
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setShowMessage(false);
    setStatusMessage("");
    setMessageType("");
  };

  return (
    <main className="font-sans">
      <Navbar />
      <section className="py-16">
        <br />
        <br />
        <br />
        
        <div className="container mx-auto px-4">

          {/* TOGGLE BUTTONS */}
          <div className="flex justify-center space-x-4 mb-8">
            <button
              onClick={() => setActiveSection("contact")}
              className={`px-6 py-2 rounded-full ${
                activeSection === "contact" ? "bg-[#e32c66] text-white" : "bg-gray-200"
              }`}
            >
              {t("contactUs")}
            </button>
            <button
              onClick={() => setActiveSection("need")}
              className={`px-6 py-2 rounded-full ${
                activeSection === "need" ? "bg-[#e32c66] text-white" : "bg-gray-200"
              }`}
            >
              {t("yourNeed")}
            </button>
          </div>
          <br />

          {/* SECTIONS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 ">
            {activeSection === "contact" ? (
              // Contact Us Section
              <div className="bg-white rounded-lg shadow-sm p-8 ">
                <h2 className="text-2xl font-bold mb-4">{t("contactUs")}</h2>
                <form ref={form} onSubmit={sendEmail}>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="user_name" className="block mb-2 font-medium">
                        {t("fullName")}*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="user_name"
                        value={formData.user_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e32c66]"
                        placeholder={t("fullNamePlaceholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium">
                        {t("email")}*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="user_email"
                        value={formData.user_email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e32c66]"
                        placeholder={t("emailPlaceholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block mb-2 font-medium">
                        {t("contactNumber")}*
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e32c66]"
                        placeholder={t("contactNumberPlaceholder")}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block mb-2 font-medium">
                        {t("message")}*
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md bg-gray-100 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#e32c66]"
                        placeholder={t("messagePlaceholder")}
                      />
                    </div>
                    <button type="submit" className="px-4 py-3 bg-[#e32c66] hover:bg-[#c12959] text-white rounded-md w-full">
                      {t("sendMessage")} →
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              // Your Need Section
              
              <div className="bg-white rounded-lg shadow-sm p-8 max-w-lg mx-auto">
              
                <h2 className="text-2xl font-bold mb-4">{t("yourNeed")}</h2>
                <p className="text-gray-600">{t("yourNeedText")}</p>
                <div className="mt-4 space-y-4 ">
                    <center className="updown">👇</center>
                  <br />
                  <button className="px-4 py-3 bg-[#e32c66] hover:bg-[#c92a5c] text-white rounded-md w-full" >
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJlMOlPV3mNmLKj0B-cRFmjWnITciXb6c6qSVhsjPVerf0EA/viewform?usp=header">
                    {t("fill")} →
                    </a>
                  </button>
                  
                </div>
              </div>
            )}

            {/* Contact Info Section */}
            <div className="bg-white rounded-lg shadow-sm p-8 ">
              <h2 className="text-2xl font-bold mb-4">{t("alternatively")}</h2>
              <ul className="space-y-4 text-gray-600">
                <li className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#e32c66]" />
                  <span>info@kolaconsulting.com</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#e32c66]" />
                  <span>+237 (0)710 791303</span>
                </li>
                <li className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#e32c66]" />
                  <span>House of Yatch<br />P.O. Box 12113, Douala-Deido, Cameroon</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer4
        id="discover"
        link5={
          <Fragment>
            <span className="home-text214 font-sans">Link 5</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text215 font-sans">Link 3</span>
          </Fragment>
        }
        link1={
          <Fragment>
            <span className="home-text216 font-sans">Link 1</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217 font-sans">Terms of Service</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text218 font-sans">Link 2</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text219 font-sans">Link 4</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 font-sans">Cookies Settings</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 font-sans">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>

      {/* Render the MessageModal if showMessage is true */}
      {showMessage && (
        <MessageModal
          message={statusMessage}
          type={messageType}
          onClose={handleCloseModal}
        />
      )}
    </main>
  );
};

export default Contact;
