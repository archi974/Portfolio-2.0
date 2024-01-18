import React, { useEffect } from 'react';
import other from "../fixture/other.json";
import AutoTypingText from '../components/autoTypingText';

export default function AboutMe({ language }) {
    const frenchBloc = language === "fr" ? "french-bloc_aboutMe" : "";
    const textToDisplay = other[language].titleAboutMe;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <article className={`bloc-about-me ${frenchBloc}`}>
            <AutoTypingText text={textToDisplay} />
            <div className="about-me_img">
                <img src="../images/photo_profile_1470x1470.webp" alt={other.photoAboutMe.alt} />
            </div>
            <div className="about-me_content">
                <div className="about-me_description-left">
                    {other[language].descriptionAboutMe.slice(0, 2).map((text, k) => (
                        <p key={k}>{text}</p>
                    ))}
                </div>
                <div className="about-me_description-right">
                    {other[language].descriptionAboutMe.slice(2).map((text, k) => (
                        <p key={k}>{text}</p>
                    ))}
                </div>
            </div>
        </article>
    )
}