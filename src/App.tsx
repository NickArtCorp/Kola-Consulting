import React from 'react';
import './App.css';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Alert from './Alert';
import About_us from './About_us';
import Realisation from './Realisation';
import Services from './Services';
import Regions from './Regions';
import Career from './Career';
import News from './News';
import The_group from './Components/About_us/The_group';
import History from './Components/About_us/History';
import Our_Team from './Components/About_us/Our_Team';
import Our_Code_of_Ethics from './Components/About_us/Our_Code_of_Ethics';
import Our_Mission from './Components/About_us/Insights';
import Performance from './Performance';
import Contact from './Components/About_us/Contact';
import DetailPage from './Components/Realisation/DetailPage';
import { ThemeProvider } from '@material-tailwind/react';
import { DropdownProvider } from './DropdownContext';
import Insights from './Components/About_us/Insights';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  return (
    <DropdownProvider>
    <ThemeProvider>
      <Router>
        <main className="flex min-h-screen items-center justify-center gap-2 dark:bg-gray-800 font-sans">
          
            <Routes>
            <Route path={t('/Kola-consulting')} element={<Home />} />
            <Route path={t('/Kola-consulting/Alert')} element={<Alert />} />
            <Route path={t('/Kola-consulting/About_us')} element={<About_us />} />
            <Route path={t('/Kola-consulting/Services')} element={<Services />} />
            <Route path={t('/Kola-consulting/Realisation')} element={<Realisation />} />
            <Route path={t('/Kola-consulting/Regions')} element={<Regions />} />
            <Route path={t('/Kola-consulting/Career')} element={<Career />} />
            <Route path={t('/Kola-consulting/News')} element={<News />} />
            <Route path={t('/Kola-consulting/The_group')} element={<The_group />} />
            <Route path={t('/Kola-consulting/History')} element={<History />} />
            <Route path={t('/Kola-consulting/Our_Team')} element={<Our_Team />} />
            <Route path={t('/Kola-consulting/Our_Code_of_Ethics')} element={<Our_Code_of_Ethics />} />
            <Route path={t('/Kola-consulting/Performance')} element={<Performance />} />
            <Route path={t('/Kola-consulting/Insights')} element={<Insights />} />
            <Route path={t('/Kola-consulting/Contact')} element={<Contact />} />
            <Route path={t('/DetailPage/:id')} element={<DetailPage />} />
            </Routes>
        </main>
      </Router>
    </ThemeProvider>
    </DropdownProvider>
  );
}

export default App;