import Layout from '../components/layout';
import LogoCarousel from '../components/carouselLogo'
import skills from '../fixture/skills.json'

export default function Skills() {

    return (
        <Layout>
            <article className="bloc-skills">
                <h1>Skills</h1>
                <LogoCarousel />
                <div className="bloc-skills-section">
                    <section className="bloc-skills_section-professional">
                        <h2>Professional</h2>
                        {
                            skills.professional.map((professionalItem, i) => (
                                <section className="professional-bloc" key={i}>
                                    {professionalItem.name && <h3>{professionalItem.name}</h3>}
                                    <ul className="professional-item">
                                        {professionalItem.places && <li>{"- " + professionalItem.places}</li>}
                                        {professionalItem.description && <li>{"- " + professionalItem.description}</li>}
                                        {professionalItem.other && <li>{"- " + professionalItem.other}</li>}
                                    </ul>
                                </section>
                            ))
                        }
                    </section>
                    <section className="bloc-skills_section-academic">
                        <h2>Academic</h2>
                        {
                            skills.academic.map((academicItem, i) => (
                                <section className="professional-bloc" key={i}>
                                    {academicItem.name && <h3>{academicItem.name}</h3>}
                                    <ul className="academic-item">
                                        {academicItem.description && <li>{"- " + academicItem.description}</li>}
                                        {academicItem.languages && <li>{"- " + academicItem.languages}</li>}
                                        {academicItem.other && <li>{"- " + academicItem.other}</li>}
                                    </ul>
                                </section>
                            ))
                        }
                    </section>
                </div>
            </article>
        </Layout>
    )
}