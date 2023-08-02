import Layout from '../components/layout';
import LogoCarousel from '../components/carouselLogo'
import skills from '../fixture/skills.json'

export default function Skills() {

    return (
        <Layout>
            <article className="bloc-skill">
                <h1>Skills</h1>
                <LogoCarousel />
                <article>
                    <h2>Professional</h2>
                    {
                        skills.professional.map((professionalItem, i) => (
                            <section key={i}>
                                <p>{professionalItem.name}</p>
                                <p>{professionalItem.places}</p>
                                <p>{professionalItem.description}</p>
                                <p>{professionalItem.other}</p>
                            </section>
                        ))
                    }
                </article>
                <article>
                    <h2>Academic</h2>
                    {
                        skills.academic.map((academicItem, i) => (
                            <section key={i}>
                                <p>{academicItem.name}</p>
                                <p>{academicItem.description}</p>
                                <p>{academicItem.language}</p>
                                <p>{academicItem.other}</p>
                            </section>
                        ))
                    }
                </article>
            </article>
        </Layout>
    )
}