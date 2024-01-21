import React, { useState, useEffect } from 'react';
import skills from '../fixture/skills.json';

const LogoCarousel = () => {
    const logos = skills.logo.map((item) => item.image);
    const scrollSpeed = 2; // Décalage de défilement en pixels à chaque microseconde
    const interval = 15; // Intervalle en millisecondes entre chaque défilement (60 images par seconde)
    const widthOccurence = window.innerWidth / 2; // récupère la moitier de l'écran

    const [leftOffset, setLeftOffset] = useState(100 * logos.length);
    const [rightOffset, setRightOffset] = useState(0);

    useEffect(() => {
        const animateScroll = () => {
            setLeftOffset((prevOffset) => {
                const newOffset = prevOffset - scrollSpeed;
                return newOffset < -widthOccurence ? widthOccurence : newOffset;
            });
            setRightOffset((prevOffset) => {
                const newOffset = prevOffset - scrollSpeed;
                return newOffset < -widthOccurence ? widthOccurence : newOffset;
            });
        };
        const intervalId = setInterval(animateScroll, interval);

        return () => {
            clearInterval(intervalId)
        };
    }, [logos.length, scrollSpeed, interval, widthOccurence]);

    return (
        <div className="logo-carousel">
            <div className="all-logo">
                <div
                    className="block-logo"
                    style={{
                        transform: `translateX(${leftOffset}px)`,
                    }}
                >
                    {logos.map((logo, index) => (
                        <div key={index} className="logo" dangerouslySetInnerHTML={{ __html: logo }} />
                    ))}
                </div>
                <div
                    className="block-logo"
                    style={{
                        transform: `translateX(${rightOffset}px)`,
                    }}
                >
                    {logos.map((logo, index) => (
                        <div key={index} className="logo" dangerouslySetInnerHTML={{ __html: logo }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
