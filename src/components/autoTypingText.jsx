import React, { useState, useEffect } from 'react';

const AutoTypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 100); // Délai entre chaque ajout de caractère (en millisecondes)

      // Nettoyer le timeout lorsque le composant est démonté ou lorsque tout le texte a été affiché
      return () => clearTimeout(typingTimeout);
    }
  }, [currentIndex, text]);

  return <h1>{displayedText}</h1>;
};

export default AutoTypingText;