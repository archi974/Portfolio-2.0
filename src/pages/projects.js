import React, { useState, useEffect } from 'react'
import ProjectModal from '../components/projectModal';
import projectsFixture from '../fixture/projects.json';

export default function Projects({ language }) {
    const [hoveredProjects, setHoveredProjects] = useState({});
    const [showModal, setShowModal] = useState(false);
    // const [selectedProject, setSelectedProject] = useState(null);

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

    // const openModal = (project) => {
    //     setShowModal(true);
    //     setSelectedProject(project)
    // };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <article className="bloc-projects">
                <h1>{projectsFixture[language][0].title}</h1>
                <div className="bloc-projects-container">
                    {projectsFixture[language].map((project, i) => (
                        <section
                            className={`projet-card ${i % 2 === 0 ? 'left' : 'right'} ${hoveredProjects[project.name] ? 'hovered' : ''
                                }`}
                            key={i}
                        >
                            {hoveredProjects[project.name] ? (
                                <article
                                    className={`project-description ${hoveredProjects[project.name] ? 'hovered' : ''}`}
                                    onMouseLeave={() => handleDescriptionMouseLeave(project)}
                                    // onClick={() => openModal(project)}
                                >
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                    <div className="gitHub-bloc">
                                        <a href={project?.link} className="gitHub-link" target="_blank" rel="noreferrer">
                                            <p>GitHub</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
                                                <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                            </svg>
                                        </a>
                                    </div>
                                </article>
                            ) : (
                                <article
                                    className={`project-image ${hoveredProjects[project.name] ? 'hovered' : ''}`}
                                    onMouseEnter={() => handleDescriptionMouseEnter(project)}
                                >
                                    <img src={project.medias.desktop.imgSrc} alt={project.medias.desktop.imgAlt} srcSet={project.medias.mobile.imgSrc} width={500} height={286} />
                                </article>
                            )}
                        </section>
                    ))}
                </div>
            </article>
            <ProjectModal
                showModal={showModal}
                closeModal={closeModal}
                // project={selectedProject}
            />
        </>
    )
}