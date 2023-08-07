import React, { useEffect, useState } from 'react';
import Layout from '../components/layout';
import aboutMe from "../fixture/aboutMe.json"

export default function AboutMe() {
    // eslint-disable-next-line no-unused-vars
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            {
                aboutMe.map((languageData, i) => (
                    languageData[language].map((aboutMeItem, j) => (
                        <article className="bloc-about-me" key={j}>
                            <h1>{aboutMeItem.title}</h1>
                            <div className="about-me_img">
                                <img src={aboutMeItem.photo[0].src} alt={aboutMeItem.photo[0].alt} />
                            </div>
                            <div className="about-me_content">
                                <div className="about-me_description-left">
                                    {aboutMeItem.description.slice(0, 2).map((text, k) => (
                                        <p key={k}>{text}</p>
                                    ))}
                                </div>
                                <div className="about-me_description-right">
                                    {aboutMeItem.description.slice(2).map((text, k) => (
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