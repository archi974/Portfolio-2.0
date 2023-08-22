import React, { useEffect } from 'react';
import Layout from '../components/layout';
import other from "../fixture/other.json";

export default function AboutMe() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <article className="bloc-about-me">
                <h1>{other.en.titleAboutMe}</h1>
                <div className="about-me_img">
                    <img src={other.en.photoAboutMe[0].src} alt={other.en.photoAboutMe[0].alt} />
                </div>
                <div className="about-me_content">
                    <div className="about-me_description-left">
                        {other.en.descriptionAboutMe.slice(0, 2).map((text, k) => (
                            <p key={k}>{text}</p>
                        ))}
                    </div>
                    <div className="about-me_description-right">
                        {other.en.descriptionAboutMe.slice(2).map((text, k) => (
                            <p key={k}>{text}</p>
                        ))}
                    </div>
                </div>
            </article>
        </Layout>
    )
}