import React, { useEffect } from 'react';
import other from "../fixture/other.json";
import AutoTypingText from '../components/autoTypingText';
import LogoCarousel from '../components/carouselLogo';

export default function AboutMe({ language }) {
    const frenchBlocAboutMe = language === "fr" ? "french-bloc_aboutMe" : "";
    const textToDisplay = other[language].aboutMePage.title;

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <article className={`bloc-about-me ${frenchBlocAboutMe}`}>
                <AutoTypingText text={textToDisplay} />
                <div className="about-me_img">
                    <img src="../images/photo_profile_1470x1470.webp" alt={other[language].aboutMePage.altPicture} />
                </div>
                <div className="about-me_content">
                    <div className="about-me_description-left">
                        <div className="description-background">
                            {other[language].aboutMePage.description.slice(0, 2).map((text, k) => (
                                <p key={k}>{text}</p>
                            ))}
                        </div>
                    </div>
                    <div className="about-me_description-right">
                        <div className="description-background">
                            {other[language].aboutMePage.description.slice(2).map((text, k) => (
                                <p key={k}>{text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
            <LogoCarousel />
            <article className="bloc-skills">
                <section className="bloc-skills_section">
                    <div className="nail-top left"></div>
                    <div className="nail-top right"></div>
                    <h2 className="skills-professional">{other[language].aboutMePage.titleProfessional}</h2>
                    {
                        other[language].aboutMePage.professional.map((professionalItem, i) => (
                            <section className="professional-bloc" key={i}>
                                {professionalItem.name && <h3>{professionalItem.name}</h3>}
                                <ul>
                                    {professionalItem.places && <li>{"- " + professionalItem.places}</li>}
                                    {professionalItem.description && <li>{"- " + professionalItem.description + " "}</li>}
                                    {professionalItem.other && <li>{"- " + professionalItem.other}</li>}
                                </ul>
                            </section>
                        ))
                    }
                    <div className="nail-bottom left"></div>
                    <div className="nail-bottom right"></div>

                </section>
                <section className="bloc-skills_section">
                    <div className="nail-top left"></div>
                    <div className="nail-top right"></div>
                    <h2 className="skills-academic">{other[language].aboutMePage.titleAcademic}</h2>
                    {
                        other[language].aboutMePage.academic.map((academicItem, i) => (
                            <section className="academic-bloc" key={i}>
                                {academicItem.name && <h3>{academicItem.name}</h3>}
                                <ul>
                                    {academicItem.description && <li>{"- " + academicItem.description}</li>}
                                    {academicItem.languages && <li>{"- " + academicItem.languages.join(", ")}</li>}
                                    {academicItem.other && <li>{"- " + academicItem.other}</li>}
                                </ul>
                            </section>
                        ))
                    }
                    <div className="nail-bottom left"></div>
                    <div className="nail-bottom right"></div>
                </section>
            </article>
        </>
    )
}