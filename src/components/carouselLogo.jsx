import React, { useState } from 'react';
import logoData from '../fixture/logoData.json';

const LogoCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? logoData.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === logoData.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="logo-carousel">
            <button onClick={handlePrev}>Précédent</button>
            <div className="logo">
                <p>LOGO</p>
            </div>
            <button onClick={handleNext}>Suivant</button>
        </div>
    );
};

export default LogoCarousel;