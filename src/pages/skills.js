import React, { useEffect } from 'react';
import skills from '../fixture/skills.json';
import LogoCarousel from '../components/carouselLogo';

export default function Skills({ language }) {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <article className="bloc-skills">
            <h1>{skills[language].titlePage}</h1>
            <LogoCarousel />
            <div className="skills-section-content">
                <section className="bloc-skills_section">
                    <h2 className="skills-professional">Professional</h2>
                    {
                        skills[language].professional.map((professionalItem, i) => (
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
                </section>
                <section className="bloc-skills_section">
                    <h2 className="skills-academic">Academic</h2>
                    {
                        skills[language].academic.map((academicItem, i) => (
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
                </section>
            </div>
        </article>
    )
}