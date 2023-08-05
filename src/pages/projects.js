import React, { useState } from 'react';
import Layout from '../components/layout';
import projects from '../fixture/projects.json'

export default function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);
    const [showImage, setShowImage] = useState(true);

    const handleDescriptionMouseEnter = (project) => {
        setHoveredProject(project);
        setShowImage(false);
    };

    const handleDescriptionMouseLeave = () => {
        setHoveredProject(null);
        setShowImage(true);
    };

    return (
        <Layout>
            <article className="bloc-projects">
                <h1>Projects</h1>
                <div className="bloc-projects-container">
                    {projects.map((project, i) => (
                        <section
                            className={`projet ${i % 2 === 0 ? 'left' : 'right'} ${hoveredProject === project ? 'hovered' : ''
                                }`}
                            key={i}
                            onMouseEnter={() => setHoveredProject(project)}
                            onMouseLeave={() => setHoveredProject(null)}
                        >
                            {hoveredProject === project ? (
                                <article
                                    className="project-description"
                                    onMouseLeave={handleDescriptionMouseLeave}
                                >
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                </article>
                            ) : (
                                <article
                                    className="project-image"
                                    onMouseEnter={() => handleDescriptionMouseEnter(project)}
                                >
                                    {showImage && (
                                        <img src={project.medias.desktop.image} alt="home page" />
                                    )}
                                </article>
                            )}
                        </section>
                    ))}
                </div>
            </article>
        </Layout>
    )
}