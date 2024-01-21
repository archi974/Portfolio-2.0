import React, { useState, useEffect } from 'react';
import skills from '../fixture/skills.json';

const LogoCarousel = () => {
    const logos = skills.logo.map((item) => ({ image: item.image, name: item.name, link: item.link }));
    const initialScrollSpeed = 2; // Décalage de défilement en pixels à chaque microseconde
    const interval = 15; // Intervalle en millisecondes entre chaque défilement (60 images par seconde)
    const widthOccurence = window.innerWidth / 2; // récupère la moitier de l'écran

    const [leftOffset, setLeftOffset] = useState(100 * logos.length);
    const [rightOffset, setRightOffset] = useState(0);
    const [scrollSpeed, setScrollSpeed] = useState(initialScrollSpeed);

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

    const handleMouseEnter = () => {
        setScrollSpeed(0);
    };

    const handleMouseLeave = () => {
        setScrollSpeed(initialScrollSpeed);
    };

    return (
        <div
            className="logo-carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="all-logo">
                <div
                    className="block-logo"
                    style={{
                        transform: `translateX(${leftOffset}px)`,
                    }}
                >
                    {logos.map((logo, index) => (
                        <a key={index} href={logo.link} target="_blank" rel="noreferrer">
                            <div className="logo">
                                <div dangerouslySetInnerHTML={{ __html: logo.image }} />
                                <button>{logo.name}</button>
                            </div>
                        </a>
                    ))}
                </div>
                <div
                    className="block-logo"
                    style={{
                        transform: `translateX(${rightOffset}px)`,
                    }}
                >
                    {logos.map((logo, index) => (
                        <a key={index} href={logo.link} target="_blank" rel="noreferrer">
                            <div className="logo" key={index}>
                                <div dangerouslySetInnerHTML={{ __html: logo.image }} />
                                <button>{logo.name}</button>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LogoCarousel;
