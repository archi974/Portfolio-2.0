import React, { useState, useEffect } from 'react';
import skills from '../fixture/skills.json';

const LogoCarousel = () => {
    const logos = skills.logo.map((item) => ({ image: item.image, name: item.name, link: item.link }));
    const [leftOffset, setLeftOffset] = useState(0);
    const initialScrollSpeed = 2;
    const [leftScrollSpeed, setLeftScrollSpeed] = useState(initialScrollSpeed);
    const totalLogoWidth = logos.length * (100);

    const handleMouseEnter = () => {
        setLeftScrollSpeed(0.5);
    };

    const handleMouseLeave = () => {
        setLeftScrollSpeed(initialScrollSpeed);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLeftOffset((prevOffset) => prevOffset <= -totalLogoWidth ? 0 : prevOffset - leftScrollSpeed);
        }, 1000 / 40); // 60 FPS

        return () => clearInterval(interval);
    }, [leftScrollSpeed, totalLogoWidth]);


    return (
        <div
            className="logo-carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="all-logo">
                {[...Array(3)].map((_, blockIndex) => (
                    <div
                        key={blockIndex}
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
                ))}
            </div>
        </div>
    );
};

export default LogoCarousel;