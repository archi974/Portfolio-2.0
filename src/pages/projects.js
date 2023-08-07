import React, { useState } from 'react';
import Layout from '../components/layout';
import ProjectModal from '../components/projectModal';
import projects from '../fixture/projects.json';

export default function Projects() {
    const [hoveredProjects, setHoveredProjects] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleDescriptionMouseEnter = (project) => {
        setHoveredProjects((prevHoveredProjects) => ({
            ...prevHoveredProjects,
            [project.name]: true,
        }));
    };

    const handleDescriptionMouseLeave = (project) => {
        setHoveredProjects((prevHoveredProjects) => ({
            ...prevHoveredProjects,
            [project.name]: false,
        }));
    };

    const openModal = (project) => {
        setShowModal(true);
        setSelectedProject(project)
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <Layout>
            <article className="bloc-projects">
                <h1>Projects</h1>
                <div className="bloc-projects-container">
                    {projects.map((project, i) => (
                        <section
                            className={`projet ${i % 2 === 0 ? 'left' : 'right'} ${hoveredProjects[project.name] ? 'hovered' : ''
                                }`}
                            key={i}
                        >
                            {hoveredProjects[project.name] ? (
                                <article
                                    className="project-description"
                                    onMouseLeave={() => handleDescriptionMouseLeave(project)}
                                    onClick={() => openModal(project)}
                                >
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                </article>
                            ) : (
                                <article
                                    className="project-image"
                                    onMouseEnter={() => handleDescriptionMouseEnter(project)}
                                >
                                    <img src={project.medias.desktop.imgSrc} alt={project.medias.desktop.imgAlt} />
                                </article>
                            )}
                        </section>
                    ))}
                </div>
            </article>
            <ProjectModal
                showModal={showModal}
                closeModal={closeModal}
                project={selectedProject}
            />
        </Layout>
    )
}