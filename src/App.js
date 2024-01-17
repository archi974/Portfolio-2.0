import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect, useState } from 'react';
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

  const toggleColorMode = () => {
    setColorMode(colorMode === "lightMode" ? "darkMode" : "lightMode");
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
    localStorage.setItem('theme', colorMode)
    document.querySelector('html').lang = language;
  }, [language, colorMode]);
  
  const styleButton = language === 'fr' ? 'button-fr' : 'button-en';
  const languageButtonText = language === 'fr' ? 'en' : 'fr';

  const colorButton = colorMode === 'lightMode' ? 'red-color' : 'yellow-color';

  return (
    <Router>
      <Layout
        languageButtonText={languageButtonText}
        toggleLanguage={toggleLanguage}
        languageStyleButton={styleButton}
        toggleColor={toggleColorMode}
        colorStyleButton={colorButton}
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