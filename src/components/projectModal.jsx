import React, { useEffect } from 'react';
import Modal from 'react-modal';

const ProjectModal = ({ showModal, closeModal, project }) => {

    useEffect(() => {
        Modal.setAppElement("#root");
    }, []);

    return (
        <Modal
            isOpen={showModal}
            onRequestClose={closeModal}
            contentLabel="Project Modal"
            overlayClassName="project-modal_overlay"
            className="projet-modal_content"
        >
            <button onClick={closeModal} className="modal-close-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" /></svg>
            </button>
            <h2 className="modal-title">{project?.name}</h2>
            {
                project?.medias.desktop.video && (
                    <iframe width='560' height='320' src={project?.medias.desktop.video} title={project?.name} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;" allowfullscreen></iframe>
                )
            }
            <article className="modal-description">
                <p>{project?.year}</p>
                <p>{project?.description}</p>
                <p>Langages utilisés : {project?.language.join(', ')}</p>
                <h3>Contrainte rencontrée</h3>
                {
                    project?.constraints.map((issue, j) => (
                        <ul className="modal-contraints" key={j}>
                            <li>{issue.first && issue.first}</li>
                            <li>{issue.second && issue.second}</li>
                            <li>{issue.third && issue.third}</li>
                        </ul>
                    ))
                }
            </article>
            <div className="gitHub-bloc">
                <a href={project?.link} className="gitHub-link" target="_blank" rel="noreferrer">
                    <p>GitHub</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 512 512">
                        <path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112v320c0 44.2 35.8 80 80 80h320c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v112c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16h112c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" />
                    </svg>
                </a>
            </div>
        </Modal>
    );
};

export default ProjectModal;