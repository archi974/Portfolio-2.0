import React, { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { DateTime } from 'luxon';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import AboutMe from './pages/aboutMe';
import NotFoundPage from './pages/notFoundPage';
import Layout from './components/layout';

function App() {
  const initialLanguage = localStorage.getItem('language') || 'en';
  const initialColor = localStorage.getItem('theme') || 'darkMode';
  const [language, setLanguage] = useState(initialLanguage);
  const [colorMode, setColorMode] = useState(initialColor);
  const modes = useMemo(() => ['darkMode', 'automaticMode', 'lightMode'], []);
  const [modeIndex, setModeIndex] = useState(modes.indexOf(initialColor));

  const styleButton = language === 'fr' ? 'button-fr' : 'button-en';
  const languageButtonText = language === 'fr' ? 'fr' : 'en';

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
    window.location.reload();
  };

  const nextIndex = (modeIndex + 1) % modes.length;

  const toggleColorMode = () => {
    setModeIndex(nextIndex);

    if (modes[nextIndex] === 'automaticMode') {

      // Obtenez l'heure local avec Luxon
      const allTime = DateTime.local();
      const localTime = allTime.c.hour;

      if (localTime < 6 || localTime >= 17) {
        setColorMode('darkMode');
      } else {
        setColorMode('lightMode');
      }
    } else {
      setColorMode(modes[nextIndex]);
    }
    localStorage.setItem('value', modes[nextIndex]);
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color1', colorMode === 'lightMode' ? 'rgb(255, 255, 255)' : 'rgb(13, 20, 52)');
    root.style.setProperty('--color2', colorMode === 'lightMode' ? 'rgb(37, 48, 104)' : 'rgb(142, 202, 230)');
    root.style.setProperty('--color3', colorMode === 'lightMode' ? 'rgb(0, 216, 254)' : 'rgb(255, 222, 89)');
    root.style.setProperty('--gradientColor1', colorMode === 'lightMode' ? 'rgba(255, 255, 255, .5)' : 'rgba(13, 20, 52, .5)');
    root.style.setProperty('--gradientColor2', colorMode === 'lightMode' ? 'rgba(37, 48, 104, .5)' : 'rgba(142, 202, 230, .5)');
    root.style.setProperty('--gradientColor3', colorMode === 'lightMode' ? 'rgba(0, 216, 254, .5)' : 'rgba(255, 222, 89, .5)');

    localStorage.setItem('language', language);
    localStorage.setItem('theme', colorMode);
    document.querySelector('html').lang = language;

    // automatique vaut 1
    if (modeIndex === 1) {
      const timezone = new Date().getHours();

      if (timezone >= 17 || timezone < 6) {
        localStorage.setItem('theme', 'darkMode')
      } else {
        localStorage.setItem('theme', 'lightMode')
      }
    }

    const intervalId = setInterval(() => {
      // actualiser la page après une heure
      window.location.reload();
    }, 60 * 60 * 1000);

    return () => clearInterval(intervalId);

  }, [language, colorMode, modeIndex, nextIndex]);

  return (
    <Router>
      <Layout
        languageButtonText={languageButtonText}
        toggleLanguage={toggleLanguage}
        languageStyleButton={styleButton}
        toggleColor={toggleColorMode}
      >
        <Routes>
          <Route path="/" exact element={<Home language={language} />} />
          <Route path="/project" exact element={<Projects language={language} />} />
          <Route path="/contact" exact element={<Contact language={language} />} />
          <Route path="/about-me" exact element={<AboutMe language={language} />} />
          <Route path="/404" exact element={<NotFoundPage language={language} />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;