import Layout from '../components/layout';
import projects from '../fixture/projects.json'

export default function Projects() {

    return (
        <Layout>
            <article className="bloc-projects">
                <h1>Projects</h1>
                {projects.map((project, i) => (
                    <div className={`projet ${i % 2 === 0 ? 'left' : 'right'}`} key={i}>
                        <img src={project.medias.desktop.image} alt="home page" />
                    </div>
                ))}
            </article>
        </Layout>
    )
}