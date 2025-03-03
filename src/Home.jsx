import React, { Fragment } from "react"
import "flowbite-react"
import { useState, useEffect } from "react"
import Spinner from "./Spinner"
import Navbar  from "./Components/Home/Navbar"
import CTA26 from './Components/Home/cta26';
import Hero17 from './Components/Home/Hero17';
import Features24 from './Components/Home/Features24';
import Footer4 from "./Components/Home/Footer4";
import Steps2 from "./Components/Home/Steps2";
import Realisation_mini from "./Components/Home/Realisation_mini"
import './style.css';
import './home.css';
import { useTranslation } from "react-i18next"



function Home() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  
  const handleGetStarted = () => {
    const element = document.getElementById('ready');
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const handleLearnMore = () => {
    const element = document.getElementById('discover');
    element.scrollIntoView({ behavior: 'smooth' });
  }

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
        <main className="font-sans">
            <Navbar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            
            <Hero17
        action2={
          <Fragment>
            <span className="home-text114 font-sans " onClick={handleLearnMore}>{t("learnMore")}</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text115 font-sans" onClick={handleGetStarted}>{t("getStarted")}</span>
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
      ></Hero17>

           

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
      ></CTA26>

      
      <Steps2
        step1Description={
          <Fragment>
            <span className="home-text186 font-sans">
             {t("researchText")}
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text187 font-sans">
            {t("creationText")}
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text188 font-sans">
              {t("ideation")}
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189 font-sans">
            {t("ideationText")}
            </span>
          </Fragment>
        }
        step1Title={
          <Fragment>
            <span className="home-text190 font-sans">{t("research")}</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text191 font-sans">{t("creation")}</span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text192 font-sans">
            {t("implementationText")}
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text193 font-sans">{t("implementation")}</span>
          </Fragment>
        }
      ></Steps2>

      <Realisation_mini className="font-sans "/>

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
      
      
        </main>
    )
}

export default Home