import React, { useEffect } from 'react';
import Layout from '../components/layout';
import other from "../fixture/other.json";

export default function AboutMe() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            {
                other.map((languageData, i) => (
                    languageData["en"].map((aboutMeItem, j) => (
                        <article className="bloc-about-me" key={j}>
                            <h1>{aboutMeItem.titleAboutMe}</h1>
                            <div className="about-me_img">
                                <img src={aboutMeItem.photoAboutMe[0].src} alt={aboutMeItem.photoAboutMe[0].alt} />
                            </div>
                            <div className="about-me_content">
                                <div className="about-me_description-left">
                                    {aboutMeItem.descriptionAboutMe.slice(0, 2).map((text, k) => (
                                        <p key={k}>{text}</p>
                                    ))}
                                </div>
                                <div className="about-me_description-right">
                                    {aboutMeItem.descriptionAboutMe.slice(2).map((text, k) => (
                                        <p key={k}>{text}</p>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))
                ))
            }
        </Layout>
    )
}