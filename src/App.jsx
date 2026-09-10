import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home.jsx';
import About_us from './About_us.jsx';
import Realisation from './Realisation.jsx';
import WhoWeAre from './Components/About_us/whoWeAre.jsx';
import Services from './Services.jsx';
import History from './Components/About_us/History.jsx';
import Our_Team from './Components/About_us/Our_Team.jsx';
import Contact from './Components/About_us/Contact.jsx';
import Performance from './Performance.jsx';
import { ThemeProvider } from '@material-tailwind/react';
import DropdownProvider from './DropdownContext.jsx';
import Insights from './Components/About_us/Insights.jsx';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <DropdownProvider>
    <ThemeProvider>
      
      <Router>
        <main className="flex min-h-screen items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 font-sans">
          
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about_us" element={<About_us />} />
            <Route path="/whoWeAre" element={<WhoWeAre />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Realisation" element={<Realisation />} />
            <Route path="/History" element={<History />} />
            <Route path="/Our_Team" element={<Our_Team />} />
            <Route path="/Performance" element={<Performance />} />
            <Route path="/Insights" element={<Insights />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path={t('/Kola-consulting')} element={<Home />} />
            <Route path="/Kola-consulting/" element={<Home />} />
            <Route path={t('/Kola-consulting/About_us')} element={<About_us />} />
            <Route path={t('/Kola-consulting/whoWeAre')} element={<WhoWeAre />} />
            <Route path={t('/Kola-consulting/Services')} element={<Services />} />
            <Route path={t('/Kola-consulting/Realisation')} element={<Realisation />} />
            <Route path={t('/Kola-consulting/History')} element={<History />} />
            <Route path={t('/Kola-consulting/Our_Team')} element={<Our_Team />} />
            <Route path={t('/Kola-consulting/Performance')} element={<Performance />} />
            <Route path={t('/Kola-consulting/Insights')} element={<Insights />} />
            <Route path={t('/Kola-consulting/Contact')} element={<Contact />} />
            <Route path="*" element={<Home />} />
            </Routes>
        </main>
      </Router> 
    </ThemeProvider>
    </DropdownProvider>

  );
}

export default App;