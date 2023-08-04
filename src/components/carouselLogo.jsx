import React, { useState } from 'react';
import skills from '../fixture/skills.json';

const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
    }
    return result;
};

const LogoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const logos = skills.logo.map((item) => item.image);
    const chunkedLogos = chunkArray(logos, 5);
    const currentLogos = chunkedLogos[currentIndex];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? chunkedLogos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === chunkedLogos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="logo-carousel">
            <button onClick={handlePrev}>Précédent</button>
            <div className="logo">
                {currentLogos.map((logo, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: logo }} />
                ))}
            </div>
            <button onClick={handleNext}>Suivant</button>
        </div>
    );
};

export default LogoCarousel;
