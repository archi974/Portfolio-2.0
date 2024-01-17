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
  const [language, setLanguage] = useState(initialLanguage);
  const [colorMode, setColorMode] = useState("redMode");

  const toggleColorMode = () => {
    setColorMode(colorMode === "redMode" ? "yellowMode" : "redMode");
  };

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--color1', colorMode === 'redMode' ? 'rgb(255, 255, 255)' : 'rgb(13, 20, 52)');
    root.style.setProperty('--color2', colorMode === 'redMode' ? 'rgb(37, 48, 104)' : 'rgb(142, 202, 230)');
    root.style.setProperty('--color3', colorMode === 'redMode' ? 'rgb(0, 216, 254)' : 'rgb(255, 222, 89)');
    root.style.setProperty('--gradientColor3', colorMode === 'redMode' ? 'rgba(0, 216, 254, .5)' : 'rgba(255, 222, 89, .5)');

    localStorage.setItem('language', language);
    document.querySelector('html').lang = language;
  }, [language, colorMode]);

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };
  const styleButton = language === 'fr' ? 'button-fr' : 'button-en';
  const languageButtonText = language === 'fr' ? 'en' : 'fr';

  const colorButton = colorMode === 'redMode' ? 'red-color' : 'yellow-color';

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