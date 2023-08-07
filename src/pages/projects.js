import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Modal from 'react-modal';
import projects from '../fixture/projects.json';

export default function Projects() {
    const [hoveredProjects, setHoveredProjects] = useState({});
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        Modal.setAppElement("#root");
    }, []);

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

    const openModal = () => {
        setShowModal(true);
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
                                    onClick={openModal}
                                >
                                    <h2>{project.name}</h2>
                                    <p>{project.description}</p>
                                </article>
                            ) : (
                                <article
                                    className="project-image"
                                    onMouseEnter={() => handleDescriptionMouseEnter(project)}
                                >
                                    <img src={project.medias.desktop.image} alt="home page" />
                                </article>
                            )}
                        </section>
                    ))}
                </div>
            </article>
            <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel="Project Modal"
            >
                <h2>{hoveredProjects?.name}</h2>
                <p>{hoveredProjects?.description}</p>
                <button onClick={closeModal}>Close Modal</button>
            </Modal>
        </Layout>
    )
}