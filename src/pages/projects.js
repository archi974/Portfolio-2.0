import React, { useState, useEffect } from 'react'
import ProjectModal from '../components/projectModal';
import projectsFixture from '../fixture/projects.json';

export default function Projects({ language }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    // const scrollPoints = projectsFixture[language].map((_, index) => index * 450);

    const openModal = (project) => {
        setShowModal(true);
        setSelectedProject(project)
    };

    const closeModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        window.scrollTo(0, 0)
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <>
            <article className="bloc-projects">
                <h1>{projectsFixture[language][0].title}</h1>
                <div className="bloc-projects-container">
                    {projectsFixture[language].map((project, i) => (
                        <section
                            className={`projet-card ${i === 0 && scrollPosition > 500 ? "project-card-hidden" : ""}`}
                            key={i}
                        >
                            <article
                                className={`project-description`}
                            >
                                <div>
                                    <p className='project-date'>{project.year}</p>
                                    <h2>{project.name}</h2>
                                    <h3>Description :</h3>
                                    <p className='project-description-text'>{project.description}</p>
                                    <h3>{projectsFixture[language][0].languageTitle} :</h3>
                                    <div className="project-logo">
                                        {project.language.map((logo, index) => (
                                            <div key={index} className="project-logo-svg" dangerouslySetInnerHTML={{ __html: logo }} />
                                        ))}
                                    </div>
                                </div>
                                <div className="gitHub-bloc">
                                    <a href={project?.link} className="gitHub-link" target="_blank" rel="noreferrer">
                                        <p>GitHub</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
                                            <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                                        </svg>
                                    </a>
                                </div>
                            </article>
                            <article
                                className={`project-image`}
                                onClick={() => openModal(project)}
                            >
                                <button className="btn-play-modal">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                        <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18a1 1 0 0 0 0-1.69L9.54 5.98A.998.998 0 0 0 8 6.82z" />
                                    </svg>
                                </button>
                                <img src={project.medias.desktop.imgSrc} alt={project.medias.desktop.imgAlt} srcSet={project.medias.mobile.imgSrc} width={500} height={286} />
                            </article>
                        </section>
                    ))}
                </div>
            </article >
            <ProjectModal
                showModal={showModal}
                closeModal={closeModal}
                project={selectedProject}
            />
        </>
    )
}