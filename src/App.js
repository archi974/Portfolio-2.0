import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home';
import Projects from './pages/projects';
import Skills from './pages/skills';
import Contact from './pages/contact';
import AboutMe from './pages/aboutMe';
import NotFoundPage from './pages/notFoundPage';
import Layout from './components/layout';

function App() {
  const initialLanguage = localStorage.getItem('language') || 'en';
  const initialColor = localStorage.getItem('theme') || 'darkMode';
  const [language, setLanguage] = useState(initialLanguage);
  const [colorMode, setColorMode] = useState(initialColor);
  const [automaticMode, setAutomaticMode] = useState('lightMode');
  const [modeIndex, setModeIndex] = useState(0);
  const modes = ['lightMode', 'automatic', 'darkMode'];

  const styleButton = language === 'fr' ? 'button-fr' : 'button-en';
  const languageButtonText = language === 'fr' ? 'fr' : 'en';
  const colorButton = modes[modeIndex] === 'lightMode' ? 'light-mode' : modes[modeIndex] === 'darkMode' ? 'dark-mode' : 'automatic-mode';

  // Fonction pour obtenir le fuseau horaire actuel
  // const getTimezone = () => {
  //   const offset = new Date().getTimezoneOffset();
  //   return offset / 60;
  // };


  const toggleColorMode = () => {
    const nextIndex = (modeIndex + 1) % modes.length;
    setModeIndex(nextIndex);

    if (modes[nextIndex] === 'automatic') {
      const timezone = new Date().getHours();

      if (timezone >= 17 || timezone < 6) {
        setAutomaticMode('darkMode');
      } else {
        setAutomaticMode('lightMode');
      }

      setColorMode(automaticMode);
    } else {
      setColorMode(modes[nextIndex]);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color1', colorMode === 'lightMode' ? 'rgb(255, 255, 255)' : 'rgb(13, 20, 52)');
    root.style.setProperty('--color2', colorMode === 'lightMode' ? 'rgb(37, 48, 104)' : 'rgb(142, 202, 230)');
    root.style.setProperty('--color3', colorMode === 'lightMode' ? 'rgb(0, 216, 254)' : 'rgb(255, 222, 89)');
    root.style.setProperty('--gradientColor3', colorMode === 'lightMode' ? 'rgba(0, 216, 254, .5)' : 'rgba(255, 222, 89, .5)');

    localStorage.setItem('language', language);
    document.querySelector('html').lang = language;
    
    if (colorMode === "automaticMode") {
      const timezone = new Date().getHours();
      if (timezone >= 17 || timezone < 6) {
        return localStorage.setItem('theme', 'darkMode')
      }
      return localStorage.setItem('theme', 'lightMode')
    }
    localStorage.setItem('theme', colorMode)

    // const decideColorMode = () => {
    //   const timezone = new Date().getTimezoneOffset() / 60;

    //   if (colorMode === 'automaticMode') {
    //     // Utilisez le fuseau horaire pour décider du mode (par exemple, si c'est la nuit)
    //     if (timezone < 0 || timezone > 6) {
    //       setColorMode('darkMode'); // Mode sombre la nuit
    //     } else {
    //       setColorMode('lightMode'); // Mode clair le jour
    //     }
    //   }
    // };
    // // Vérifiez le fuseau horaire toutes les heures et mettez à jour le mode
    // const intervalId = setInterval(() => {
    //   decideColorMode();
    // }, 60 * 60 * 1000); // toutes les heures

    // Nettoyez l'intervalle lorsque le composant est démonté
    // return () => clearInterval(intervalId);

  }, [language, colorMode]);

  return (
    <Router>
      <Layout
        languageButtonText={languageButtonText}
        toggleLanguage={toggleLanguage}
        languageStyleButton={styleButton}
        toggleColor={toggleColorMode}
        colorStyleButton={colorButton}
        ColorIndex={modeIndex}
        toggleColorMode={modes}
      >
        <Routes>
          <Route path="/" exact element={<Home language={language} />} />
          <Route path="/project" exact element={<Projects language={language} />} />
          <Route path="/skills" exact element={<Skills language={language} />} />
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