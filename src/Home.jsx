import { Fragment, useState, useEffect } from "react";
import "flowbite-react";
import Spinner from "./Spinner";
import Navbar from "./Components/Home/Navbar";
import CTA26 from './Components/Home/cta26';
import Hero17 from './Components/Home/Hero17';
import Features24 from './Components/Home/Features24';
import Footer4 from "./Components/Home/Footer4";
import Steps2 from "./Components/Home/Steps2";
import Realisation_mini from "./Components/Home/Realisation_mini";
import './style.css';
import './home.css';
import './Components/Home/cta26.css';
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);

  const handleGetStarted = () => {
    const element = document.getElementById('ready');
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const element = document.getElementById('discover');
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Quick, smooth initial reveal
    const timer = setTimeout(() => {
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <main className="font-sans pt-20 md:pt-24 min-h-screen bg-gray-50/50 dark:bg-gray-900 transition-colors">
      <Navbar />

      <Hero17
        action2={
          <Fragment>
            <span className="home-text114 font-sans">{t("learnMore")}</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115 font-sans">{t("getStarted")}</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text116 font-sans">{t("welcome")}</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text117 font-sans">
              {t("empower")}
            </span>
          </Fragment>
        }
      />

      <Steps2 />

      <Realisation_mini />

      <CTA26
        heading1={
          <Fragment>
            <span className="home-text124 font-sans" >
              {t("ready")}
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 font-sans">
              {t("readyText")}
            </span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text126 font-sans">{t("getInTouch")}</span>
          </Fragment>
        }
      />

      <Footer4 />
    </main>
  )
}

export default Home;