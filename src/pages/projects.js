import React, { useState } from 'react';
import Layout from '../components/layout';
import projects from '../fixture/projects.json'

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <Layout>
            <article className="bloc-projects">
                <h1>Projects</h1>
                <div className="bloc-projects-container">
                    {projects.map((project, i) => (
                        <section
                            className={`projet ${i % 2 === 0 ? 'left' : 'right'}`}
                            key={i}
                        >
                            {hoveredProject === project ? (
                                <article className="project-description">
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                </article>
                            ) : (
                                <article
                                    className="project-image"
                                    onMouseEnter={() => setHoveredProject(project)}
                                    onMouseLeave={() => setHoveredProject(null)}
                                >
                                    <img src={project.medias.desktop.image} alt="home page" />
                                </article>
                            )}
                        </section>
                    ))}
                </div>
            </article>
        </Layout>
    )
}