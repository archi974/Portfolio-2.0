import React, { useState, useEffect } from 'react';
import other from '../fixture/other.json';

const LogoCarousel = () => {
    const logos = other.logo.map((item) => ({ image: item.image, name: item.name, link: item.link }));
    const [leftOffset, setOffset] = useState(0);
    const initialScrollSpeed = 2;
    const [scrollSpeed, setScrollSpeed] = useState(initialScrollSpeed);
    const totalLogoWidth = logos.length * (100);

    const handleMouseEnter = () => {
        setScrollSpeed(0.5);
    };

    const handleMouseLeave = () => {
        setScrollSpeed(initialScrollSpeed);
    };

    // increases the number of tables per screen size
    const getNumberOfBlocks = () => {
        const width = window.innerWidth;
        if (width <= 1023) {
            return 2;
        } else if (width <= 1920) {
            return 3;
        } else if (width <= 2560) {
            return 4;
        } else {
            return 5;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setOffset((prevOffset) => prevOffset <= -totalLogoWidth ? 0 : prevOffset - scrollSpeed);
        }, 1000 / 40); // 60 FPS

        return () => clearInterval(interval);
    }, [scrollSpeed, totalLogoWidth]);


    return (
        <div
            className="logo-carousel"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="all-logo">
                {[...Array(getNumberOfBlocks())].map((_, blockIndex) => (
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