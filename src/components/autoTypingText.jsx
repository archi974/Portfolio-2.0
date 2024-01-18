import React, { useState, useEffect } from 'react';

const AutoTypingText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const typingTimeout = setTimeout(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200); // Délai entre chaque ajout de caractère (en millisecondes)

      // Nettoyer le timeout lorsque le composant est démonté ou lorsque tout le texte a été affiché
      return () => clearTimeout(typingTimeout);
    } else {
      // Réinitialiser le texte après un certain délai
      const resetTimeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, 4000);

      return () => clearTimeout(resetTimeout);
    }
  }, [currentIndex, text]);

  return <h1>{displayedText}</h1>;
};

export default AutoTypingText;