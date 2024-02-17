import React, { useState, useEffect } from 'react';
import skills from '../fixture/skills.json';

const LogoCarousel = () => {
    const logos = skills.logo.map((item) => ({ image: item.image, name: item.name, link: item.link }));
    const [leftOffset, setLeftOffset] = useState(0);
    const [middleOffset, setMiddleOffset] = useState(0);
    const [rightOffset, setRightOffset] = useState(0);
    const initialScrollSpeed = 2;
    const [leftScrollSpeed, setLeftScrollSpeed] = useState(initialScrollSpeed);
    const [middleScrollSpeed, setMiddleScrollSpeed] = useState(initialScrollSpeed);
    const [rightScrollSpeed, setRightScrollSpeed] = useState(initialScrollSpeed);
    const totalLogoWidth = logos.length * (100);

    const handleMouseEnter = () => {
        setLeftScrollSpeed(0.5);
        setMiddleScrollSpeed(0.5);
        setRightScrollSpeed(0.5);
    };

    const handleMouseLeave = () => {
        setLeftScrollSpeed(initialScrollSpeed);
        setMiddleScrollSpeed(initialScrollSpeed);
        setRightScrollSpeed(initialScrollSpeed);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setLeftOffset((prevOffset) => prevOffset <= -totalLogoWidth ? 0 : prevOffset - leftScrollSpeed);
            setMiddleOffset((prevOffset) => prevOffset <= -totalLogoWidth ? 0 : prevOffset - middleScrollSpeed);
            setRightOffset((prevOffset) => prevOffset <= -totalLogoWidth ? 0 : prevOffset - rightScrollSpeed);
        }, 1000 / 40); // 60 FPS

        return () => clearInterval(interval);
    }, [leftScrollSpeed, middleScrollSpeed, rightScrollSpeed, totalLogoWidth]);


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
                        transform: `translateX(${middleOffset}px)`,
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
                <div
                    className="block-logo"
                    style={{
                        transform: `translateX(${rightOffset}px)`,
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
            </div>
        </div>
    );
};

export default LogoCarousel;