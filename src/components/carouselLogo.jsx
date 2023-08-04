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
    const slideTitles = ["Langages", "Outils"];

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? chunkedLogos.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === chunkedLogos.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="logo-carousel">
            <button className="logo-button left" onClick={handlePrev}><svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24"><path d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6L14 18Z" /></svg></button>
            <div className="all-logo-title">
                <div className="logo-title">
                    <h2>{slideTitles[currentIndex]}</h2>
                </div>
                <div className="all-logo">
                    {currentLogos.map((logo, index) => (
                        <div className="logo" key={index} dangerouslySetInnerHTML={{ __html: logo }} />
                    ))}
                </div>
            </div>
            <button className="logo-button right" onClick={handleNext}><svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 24 24"><path d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6l4.6-4.6Z" /></svg></button>
        </div>
    );
};

export default LogoCarousel;
